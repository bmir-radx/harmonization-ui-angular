import { TestBed } from '@angular/core/testing';
import { DatasetService } from './dataset.service';
import { MessageService } from 'primeng/api';
import { UploadedFile } from '../models/mapping.model';

describe('DatasetService', () => {
  let service: DatasetService;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MessageService', ['add']);
    
    TestBed.configureTestingModule({
      providers: [
        DatasetService,
        { provide: MessageService, useValue: spy }
      ]
    });
    
    service = TestBed.inject(DatasetService);
    messageServiceSpy = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with empty state', () => {
    expect(service.uploadedFiles().length).toBe(0);
    expect(service.targetFiles().length).toBe(0);
    expect(service.openedFiles().length).toBe(0);
    expect(service.activeFile()).toBeNull();
    expect(service.hasFiles()).toBeFalse();
    expect(service.hasValidMappingState()).toBeFalse();
  });

  it('should properly track uploaded files', () => {
    const mockFile: UploadedFile = {
      name: 'test_data.csv',
      type: 'data',
      data: [{ id: 1, val: 'A' }],
      text: 'id,val\n1,A',
      folder: 'Dataset 1'
    };

    service.addFile(mockFile);

    expect(service.uploadedFiles().length).toBe(1);
    expect(service.uploadedFiles()[0].name).toBe('test_data.csv');
    expect(service.hasFiles()).toBeTrue();
  });

  it('should track target dictionary files appropriately', () => {
    const mockTarget: UploadedFile = {
      name: 'target_dict.csv',
      type: 'dictionary',
      data: [{ Var: 'age' }],
      text: 'Var\nage',
      folder: 'Target System'
    };

    service.addTargetFile(mockTarget);

    expect(service.targetFiles().length).toBe(1);
    expect(service.targetFiles()[0].name).toBe('target_dict.csv');
  });

  it('should correctly open and close active workspace files', () => {
    const mockFile1: UploadedFile = { name: 'file1.csv', type: 'data', data: [], text: '', folder: 'A' };
    const mockFile2: UploadedFile = { name: 'file2.csv', type: 'data', data: [], text: '', folder: 'A' };

    service.openFile(mockFile1);
    expect(service.openedFiles().length).toBe(1);
    expect(service.activeFile()?.name).toBe('file1.csv');

    service.openFile(mockFile2);
    expect(service.openedFiles().length).toBe(2);
    expect(service.activeFile()?.name).toBe('file2.csv');

    service.closeFile(mockFile2);
    expect(service.openedFiles().length).toBe(1);
    expect(service.activeFile()?.name).toBe('file1.csv'); // Fallbacks to previous
  });

  it('should generate properly incrementing dataset names', () => {
    expect(service.getNextDatasetName()).toBe('Dataset 1');

    service.addFile({ name: 'f1', type: 'data', data: [], text: '', folder: 'Dataset 1' });
    expect(service.getNextDatasetName()).toBe('Dataset 2');

    service.addFile({ name: 'f2', type: 'data', data: [], text: '', folder: 'Dataset 14' });
    expect(service.getNextDatasetName()).toBe('Dataset 15');
  });

  it('should validate mapping structural state', () => {
    // Requires both a target, and a source group that contains identically named folder for matched code/dictionary
    expect(service.hasValidMappingState()).toBeFalse();

    service.addTargetFile({ name: 'target', type: 'dictionary', data: [], text: '', folder: 'sys' });
    expect(service.hasValidMappingState()).toBeFalse(); // Still missing source data + dict combo

    // Add source dictionary
    service.addFile({ name: 'source_dict', type: 'dictionary', data: [], text: '', folder: 'Dataset Custom' });
    expect(service.hasValidMappingState()).toBeFalse(); // Missing actual data file

    // Add matching source data
    service.addFile({ name: 'source_data', type: 'data', data: [], text: '', folder: 'Dataset Custom' });
    expect(service.hasValidMappingState()).toBeTrue(); // Now it has Target + SourceDictionary + SourceData within the same folder space!
  });
});
