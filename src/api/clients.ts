import { apiGet, apiPost, apiPut, apiDelete } from './httpClient';
import { Client } from '@/types';

export const clientsApi = {
  getAll: (): Promise<Client[]> => {
    return apiGet<Client[]>('/clients');
  },

  getById: (id: number): Promise<Client> => {
    return apiGet<Client>(`/clients/${id}`);
  },

  create: (data: Omit<Client, 'id' | 'createdAt'>): Promise<Client> => {
    return apiPost<Client>('/clients', data);
  },

  update: (id: number, data: Partial<Client>): Promise<Client> => {
    return apiPut<Client>(`/clients/${id}`, data);
  },

  delete: (id: number): Promise<void> => {
    return apiDelete<void>(`/clients/${id}`);
  },
};
