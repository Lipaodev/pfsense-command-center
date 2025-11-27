import { apiGet } from './httpClient';
import { AuditLog } from '@/types';

export const auditLogsApi = {
  getAll: (deviceId?: number): Promise<AuditLog[]> => {
    const query = deviceId ? `?device_id=${deviceId}` : '';
    return apiGet<AuditLog[]>(`/audit-logs${query}`);
  },
};
