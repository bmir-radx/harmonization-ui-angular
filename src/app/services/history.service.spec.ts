import { TestBed } from '@angular/core/testing';
import { HistoryService } from './history.service';

describe('HistoryService', () => {
  let service: HistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should bootstrap placeholder history entries', () => {
    const history = service.projectHistory();
    expect(history.length).toBeGreaterThan(0);
  });

  it('should enforce label injection computationally', () => {
    const history = service.projectHistory();
    // Computed property should map name to label dynamically for the Primeng menubar
    expect(history[0].label).toBe(history[0].name);
    expect(history[0].label).toBeDefined();
  });
});
