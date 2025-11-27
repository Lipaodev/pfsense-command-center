import { apiGet } from './httpClient';
import { Alert } from '@/types';

export const alertsApi = {
  getAll: (deviceId?: number): Promise<Alert[]> => {
    const query = deviceId ? `?device_id=${deviceId}` : '';
    return apiGet<Alert[]>(`/alerts${query}`);
  },
};
