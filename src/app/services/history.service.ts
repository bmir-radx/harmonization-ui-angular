import { Injectable, signal, computed } from '@angular/core';

export interface HistoryItem {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  lastModified: Date;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  placeholderData = [
    {
      id: '1',
      name: 'Healthcare Data Integration',
      description: 'Harmonizing patient data from multiple hospital systems across different EMR platforms',
      createdAt: new Date(2024, 11, 1),
      lastModified: new Date(2024, 11, 5)
    },
    {
      id: '2',
      name: 'Financial Reports Standardization',
      description: 'Standardizing quarterly financial reports across regional offices and subsidiaries',
      createdAt: new Date(2024, 10, 15),
      lastModified: new Date(2024, 11, 2)
    },
    {
      id: '3',
      name: 'Survey Data Consolidation',
      description: 'Combining survey responses from different platforms and standardizing response formats',
      createdAt: new Date(2024, 9, 20),
      lastModified: new Date(2024, 10, 28)
    },
    {
      id: '4',
      name: 'Customer Data Unification',
      description: 'Merging customer data from CRM, marketing platforms, and support systems',
      createdAt: new Date(2024, 8, 10),
      lastModified: new Date(2024, 9, 15)
    },
    {
      id: '5',
      name: 'Research Dataset Harmonization',
      description: 'Harmonizing research datasets from multiple institutions for meta-analysis',
      createdAt: new Date(2024, 7, 25),
      lastModified: new Date(2024, 8, 30)
    },
    {
      id: '6',
      name: 'IoT Sensor Data Integration',
      description: 'Integrating sensor data from different IoT devices and normalizing timestamps',
      createdAt: new Date(2024, 6, 12),
      lastModified: new Date(2024, 7, 18)
    },
    {
      id: '7',
      name: 'Marketing Analytics Consolidation',
      description: 'Consolidating marketing metrics from various platforms and standardizing KPIs',
      createdAt: new Date(2024, 5, 8),
      lastModified: new Date(2024, 6, 22)
    },
    {
      id: '8',
      name: 'Supply Chain Data Harmonization',
      description: 'Harmonizing supplier data and inventory systems across multiple warehouses',
      createdAt: new Date(2024, 4, 15),
      lastModified: new Date(2024, 5, 10)
    }
  ];

  private readonly _projectHistory = signal<HistoryItem[]>(this.placeholderData);

  readonly projectHistory = computed(() =>
    this._projectHistory().map(item => ({
      ...item,
      label: item.name
    }))
  );
}
