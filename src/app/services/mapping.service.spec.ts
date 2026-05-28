import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MappingService } from './mapping.service';
import { DatasetService } from './dataset.service';
import { HarmonizationApiService } from './harmonization-api.service';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';

describe('MappingService', () => {
  let service: MappingService;
  let datasetServiceSpy: jasmine.SpyObj<DatasetService>;
  let apiServiceSpy: jasmine.SpyObj<HarmonizationApiService>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    // We mock the signals we need to read from dataset service
    const dsSpy = jasmine.createSpyObj('DatasetService', [], {
      uploadedFiles: jasmine.createSpy('uploadedFiles').and.returnValue([]),
      targetFiles: jasmine.createSpy('targetFiles').and.returnValue([])
    });

    const apiSpy = jasmine.createSpyObj('HarmonizationApiService', ['harmonize', 'getJob']);
    const msgSpy = jasmine.createSpyObj('MessageService', ['add']);

    TestBed.configureTestingModule({
      providers: [
        MappingService,
        { provide: DatasetService, useValue: dsSpy },
        { provide: HarmonizationApiService, useValue: apiSpy },
        { provide: MessageService, useValue: msgSpy }
      ]
    });

    service = TestBed.inject(MappingService);
    datasetServiceSpy = TestBed.inject(DatasetService) as jasmine.SpyObj<DatasetService>;
    apiServiceSpy = TestBed.inject(HarmonizationApiService) as jasmine.SpyObj<HarmonizationApiService>;
    messageServiceSpy = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with empty mapping state', () => {
    expect(service.mappingRows().length).toBe(0);
    expect(service.selectedRowId()).toBeNull();
    expect(service.isReady()).toBeFalse();
    expect(service.completedRulesCount()).toBe(0);
  });

  describe('Row Management', () => {
    beforeEach(() => {
      // Stub internal state with dummy rows for testing
      service.mappingRows.set([
        { id: 1, dataset: 'DS1', sourceElement: 'a', targetElement: null, status: 'attention', steps: [], selectedStepId: null },
        { id: 2, dataset: 'DS1', sourceElement: 'b', targetElement: null, status: 'attention', steps: [], selectedStepId: null }
      ]);
    });

    it('should select mapping row by ID', () => {
      service.selectMappingRow(service.mappingRows()[1]);
      expect(service.selectedRowId()).toBe(2);
      expect(service.selectedMappingRow()?.sourceElement).toBe('b');
    });

    it('should update mapping status and target element', () => {
      service.updateMappingStatus(1, 'target_A');
      
      const row = service.mappingRows().find(r => r.id === 1);
      expect(row?.targetElement).toBe('target_A');
      // Status shouldn't automatically complete until saved, so it's 'attention'
      expect(row?.status).toBe('attention'); 
    });

    it('should save current rule and mark as complete', () => {
      service.selectMappingRow(service.mappingRows()[0]);
      service.updateMappingStatus(1, 'target_Final');
      
      service.saveCurrentRule();

      const row = service.mappingRows().find(r => r.id === 1);
      expect(row?.targetElement).toBe('target_Final');
      expect(row?.status).toBe('complete');
      expect(service.isReady()).toBeTrue();
      expect(service.completedRulesCount()).toBe(1);
    });
  });

  describe('Transformation Steps', () => {
    beforeEach(() => {
      service.mappingRows.set([
        { id: 1, dataset: 'DS1', sourceElement: 'a', targetElement: 'target_a', status: 'attention', steps: [], selectedStepId: null }
      ]);
      service.selectMappingRow(service.mappingRows()[0]);
    });

    it('should add transformation step to selected row', () => {
      service.addTransformationStep();
      const st = service.selectedMappingRow();
      expect(st?.steps.length).toBe(1);
      expect(st?.selectedStepId).toBe(st?.steps[0].id);
    });

    it('should update transformation properties', () => {
      service.addTransformationStep();
      service.updateTransformation('math_multiply');
      
      const st = service.selectedMappingRow();
      expect(st?.steps[0].transformation).toBe('math_multiply');
      
      service.updateParam('factor', 10);
      const updated = service.selectedMappingRow();
      expect(updated?.steps[0].params['factor']).toBe(10);
    });

    it('should cleanly remove steps', () => {
      service.addTransformationStep();
      service.addTransformationStep();
      
      expect(service.selectedMappingRow()?.steps.length).toBe(2);
      
      service.removeTransformationStep(0);
      expect(service.selectedMappingRow()?.steps.length).toBe(1);
    });
  });

  describe('Parse Array Primitive', () => {
    beforeEach(() => {
      service.mappingRows.set([
        { id: 1, dataset: 'DS1', sourceElement: 'a', targetElement: 'target_a', status: 'attention', steps: [], selectedStepId: null }
      ]);
      service.selectMappingRow(service.mappingRows()[0]);
    });

    it('should initialize parse_array defaults correctly', () => {
      service.addTransformationStep();
      service.updateTransformation('parse_array');
      
      const st = service.selectedMappingRow();
      expect(st?.steps[0].transformation).toBe('parse_array');
      expect(st?.steps[0].params['format']).toBe('json');
      expect(st?.steps[0].params['item_type']).toBe('auto');
      expect(st?.steps[0].params['strict']).toBeTrue();
    });

    it('should coerce and type check parse_array parameters upon serialization', fakeAsync(() => {
      // Mock electron environment
      const mockElectron = {
        saveFile: jasmine.createSpy('saveFile').and.returnValue(Promise.resolve())
      };
      (window as any).electron = mockElectron;

      // Mock DatasetService uploadedFiles getter to return a function that returns the files
      const uploadedSpy = Object.getOwnPropertyDescriptor(datasetServiceSpy, 'uploadedFiles')?.get as jasmine.Spy;
      uploadedSpy.and.returnValue(() => [
        { name: 'data.csv', type: 'data', data: [], text: '', folder: 'DS1' }
      ]);

      service.mappingRows.set([
        {
          id: 1,
          dataset: 'DS1',
          sourceElement: 'week_hours',
          targetElement: 'total_hours',
          status: 'complete',
          steps: [
            {
              id: 101,
              transformation: 'parse_array',
              params: {
                format: 'json',
                item_type: 'integer',
                strict: 'true',
                default: '123',
                allow_singleton: 1
              }
            }
          ],
          selectedStepId: 101
        }
      ]);

      apiServiceSpy.harmonize.and.returnValue(of({ status: 'success', job_id: 'job_123' }));
      apiServiceSpy.getJob.and.returnValue(of({ status: 'completed' }));

      service.runHarmonization();
      tick();

      expect(mockElectron.saveFile).toHaveBeenCalled();
      const savedContent = JSON.parse(mockElectron.saveFile.calls.mostRecent().args[1]);
      
      const operation = savedContent['week_hours']['total_hours']['operations'][0];
      expect(operation.operation).toBe('parse_array');
      expect(operation.strict).toBeTrue(); // Coerced to boolean
      expect(operation.allow_singleton).toBeTrue(); // Coerced to boolean
      expect(operation.default).toBe(123); // Coerced to integer

      // Clean up global window mock
      delete (window as any).electron;
    }));
  });

  describe('Data Class Helpers', () => {
    it('should return appropriate icon styling attributes for primitive types', () => {
      expect(service.getDataClass('string')).toBe('text-[#4ec9b0]');
      expect(service.getDataClass('integer')).toBe('text-[#007fd4]');
      expect(service.getDataClass('float')).toBe('text-[#ff9500]');
      expect(service.getDataClass('date')).toBe('text-[#c586c0]');
      expect(service.getDataClass('boolean')).toBe('text-[#ff6b6b]');
      expect(service.getDataClass('unknown')).toBe('text-[#606060]');
    });

    it('should properly slice datatype to initial representation', () => {
      expect(service.getDataChar('string')).toBe('s');
      expect(service.getDataChar('integer')).toBe('i');
      expect(service.getDataChar('datetime')).toBe('t');
      expect(service.getDataChar('float')).toBe('f');
    });
  });
});
