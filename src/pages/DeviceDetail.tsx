import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { devicesApi } from '@/api/devices';
import { Device, DeviceOverview } from '@/types';

export default function DeviceDetail() {
  const { id } = useParams<{ id: string }>();
  const [device, setDevice] = useState<Device | null>(null);
  const [overview, setOverview] = useState<DeviceOverview | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      
      try {
        const [deviceData, overviewData] = await Promise.all([
          devicesApi.getById(parseInt(id)),
          devicesApi.getOverview(parseInt(id)),
        ]);
        
        setDevice(deviceData);
        setOverview(overviewData);
      } catch (error) {
        console.error('Failed to fetch device data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="text-muted-foreground">Loading...</div>
      </DashboardLayout>
    );
  }

  if (!device || !overview) {
    return (
      <DashboardLayout>
        <div className="text-muted-foreground">Device not found</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{device.name}</h1>
          <p className="text-muted-foreground">{device.hostname} ({device.ip})</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="graphs">Graphs</TabsTrigger>
            <TabsTrigger value="version">Version</TabsTrigger>
            <TabsTrigger value="interfaces">Interfaces</TabsTrigger>
            <TabsTrigger value="vlans">VLANs</TabsTrigger>
            <TabsTrigger value="firewall">Firewall</TabsTrigger>
            <TabsTrigger value="nat">NAT</TabsTrigger>
            <TabsTrigger value="openvpn">OpenVPN</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Hostname</p>
                    <p className="font-medium">{overview.general.hostname}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Version</p>
                    <p className="font-medium">{overview.general.version}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Uptime</p>
                    <p className="font-medium">{overview.general.uptime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Model</p>
                    <p className="font-medium">{overview.general.model || '-'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="graphs">
            <Card>
              <CardHeader>
                <CardTitle>Performance Graphs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Graphs will be implemented with real data</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="version">
            <Card>
              <CardHeader>
                <CardTitle>Version Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Installed Version</p>
                  <p className="font-medium">{overview.version.installed}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Available Version</p>
                  <p className="font-medium">{overview.version.available}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interfaces">
            <Card>
              <CardHeader>
                <CardTitle>Network Interfaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Interface data from pfSense API</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vlans">
            <Card>
              <CardHeader>
                <CardTitle>VLANs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">VLAN data from pfSense API</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="firewall">
            <Card>
              <CardHeader>
                <CardTitle>Firewall Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Firewall rules from pfSense API</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nat">
            <Card>
              <CardHeader>
                <CardTitle>NAT Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">NAT rules from pfSense API</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="openvpn">
            <Card>
              <CardHeader>
                <CardTitle>OpenVPN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">OpenVPN data from pfSense API</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
