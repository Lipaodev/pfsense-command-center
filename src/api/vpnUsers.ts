import { apiGet, apiPost, apiPut, apiDelete } from './httpClient';
import { VpnUser } from '@/types';

export const vpnUsersApi = {
  getAll: (deviceId?: number): Promise<VpnUser[]> => {
    const query = deviceId ? `?device_id=${deviceId}` : '';
    return apiGet<VpnUser[]>(`/vpn-users${query}`);
  },

  getById: (id: number): Promise<VpnUser> => {
    return apiGet<VpnUser>(`/vpn-users/${id}`);
  },

  create: (data: Omit<VpnUser, 'id' | 'createdAt'>): Promise<VpnUser> => {
    return apiPost<VpnUser>('/vpn-users', data);
  },

  update: (id: number, data: Partial<VpnUser>): Promise<VpnUser> => {
    return apiPut<VpnUser>(`/vpn-users/${id}`, data);
  },

  delete: (id: number): Promise<void> => {
    return apiDelete<void>(`/vpn-users/${id}`);
  },
};
