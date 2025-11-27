import { 
  LayoutDashboard, 
  Users, 
  MapPin, 
  Server, 
  Shield, 
  BarChart3, 
  AlertTriangle, 
  FileText, 
  Settings 
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Clients', url: '/clients', icon: Users },
  { title: 'Locations', url: '/locations', icon: MapPin },
  { title: 'Devices', url: '/devices', icon: Server },
  { title: 'VPN Users', url: '/vpn-users', icon: Shield },
  { title: 'Graphs', url: '/graphs', icon: BarChart3 },
  { title: 'Alerts', url: '/alerts', icon: AlertTriangle },
  { title: 'Logs', url: '/logs', icon: FileText },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="px-6 py-4 border-b border-border">
          <h1 className="text-xl font-bold text-foreground">pfMSP Console</h1>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="hover:bg-muted/50"
                      activeClassName="bg-muted text-primary font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
