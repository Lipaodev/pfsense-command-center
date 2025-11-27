import { apiGet, apiPost, apiPut, apiDelete } from './httpClient';
import { Location } from '@/types';

export const locationsApi = {
  getAll: (clientId?: number): Promise<Location[]> => {
    const query = clientId ? `?client_id=${clientId}` : '';
    return apiGet<Location[]>(`/locations${query}`);
  },

  getById: (id: number): Promise<Location> => {
    return apiGet<Location>(`/locations/${id}`);
  },

  create: (data: Omit<Location, 'id' | 'createdAt'>): Promise<Location> => {
    return apiPost<Location>('/locations', data);
  },

  update: (id: number, data: Partial<Location>): Promise<Location> => {
    return apiPut<Location>(`/locations/${id}`, data);
  },

  delete: (id: number): Promise<void> => {
    return apiDelete<void>(`/locations/${id}`);
  },
};
