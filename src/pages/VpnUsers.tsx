import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { vpnUsersApi } from '@/api/vpnUsers';
import { VpnUser } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function VpnUsers() {
  const [vpnUsers, setVpnUsers] = useState<VpnUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVpnUsers = async () => {
      try {
        const data = await vpnUsersApi.getAll();
        setVpnUsers(data);
      } catch (error) {
        console.error('Failed to fetch VPN users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVpnUsers();
  }, []);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="text-muted-foreground">Loading...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">VPN Users</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add VPN User
          </Button>
        </div>

        <div className="border border-border rounded-lg bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Allowed Networks</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vpnUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground">
                    No VPN users found
                  </TableCell>
                </TableRow>
              ) : (
                vpnUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.username}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded text-xs bg-primary/10 text-primary">
                        {user.type}
                      </span>
                    </TableCell>
                    <TableCell>{user.allowedNetworks.join(', ')}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          user.status === 'active'
                            ? 'bg-green-500/10 text-green-600'
                            : 'bg-red-500/10 text-red-600'
                        }`}
                      >
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
}
