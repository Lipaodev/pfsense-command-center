export type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'engineer' | 'read_only';
};

export type Client = {
  id: number;
  name: string;
  document?: string;
  contactEmail?: string;
  active: boolean;
  createdAt: string;
};

export type Location = {
  id: number;
  clientId: number;
  name: string;
  description?: string;
  createdAt: string;
};

export type Device = {
  id: number;
  clientId: number;
  locationId: number;
  name: string;
  hostname: string;
  ip: string;
  port: number;
  version?: string;
  cpuUsage?: number;
  ramUsage?: number;
  diskUsage?: number;
  temperature?: number;
  lastFetchedAt?: string;
};

export type DeviceOverview = {
  general: {
    hostname: string;
    version: string;
    uptime: string;
    serial?: string;
    model?: string;
  };
  graphs: {
    cpuHistory: { timestamp: string; value: number }[];
    ramHistory: { timestamp: string; value: number }[];
    diskHistory: { timestamp: string; value: number }[];
  };
  version: {
    installed: string;
    available: string;
    lastChecked: string;
  };
  interfaces: any[];
  vlans: any[];
  firewallRules: any[];
  nat: any[];
  routes: any[];
  dhcp: any[];
  dns: any[];
  openvpn: any[];
  services: any[];
  logs: any[];
  backups: any[];
  localUsers: any[];
};

export type VpnUser = {
  id: number;
  deviceId: number;
  clientId: number;
  username: string;
  type: 'openvpn' | 'wireguard' | 'ipsec';
  allowedNetworks: string[];
  status: 'active' | 'disabled';
  createdAt: string;
  createdBy?: string;
};

export type Alert = {
  id: number;
  deviceId: number;
  clientName: string;
  deviceName: string;
  type: string;
  message: string;
  severity: 'info' | 'warning' | 'critical';
  isRead: boolean;
  createdAt: string;
};

export type AuditLog = {
  id: number;
  userName: string;
  action: string;
  deviceName?: string;
  clientName?: string;
  payloadSummary?: string;
  createdAt: string;
};
