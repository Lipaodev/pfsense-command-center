import { apiGet, apiPost, apiPut, apiDelete } from './httpClient';
import { Device, DeviceOverview } from '@/types';

export const devicesApi = {
  getAll: (): Promise<Device[]> => {
    return apiGet<Device[]>('/devices');
  },

  getById: (id: number): Promise<Device> => {
    return apiGet<Device>(`/devices/${id}`);
  },

  getOverview: (id: number): Promise<DeviceOverview> => {
    return apiGet<DeviceOverview>(`/devices/${id}/overview`);
  },

  create: (data: Omit<Device, 'id'>): Promise<Device> => {
    return apiPost<Device>('/devices', data);
  },

  update: (id: number, data: Partial<Device>): Promise<Device> => {
    return apiPut<Device>(`/devices/${id}`, data);
  },

  delete: (id: number): Promise<void> => {
    return apiDelete<void>(`/devices/${id}`);
  },

  refetch: (id: number): Promise<void> => {
    return apiPost<void>(`/devices/${id}/refetch`);
  },
};
