import React from 'react'
import { DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from './ui/dropdown-menu'
import { SidebarMenuButton } from './ui/sidebar'
import { Avatar, AvatarFallback } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { ChevronUp, LogOut, Settings, User } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

export default function UserNav() {
    const isMobile = useIsMobile()

    const handleLogout = () => {
        // Aquí puedes implementar la lógica de cierre de sesión
        console.log("Cerrar sesión");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton size={"lg"} className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
                    <Avatar className='h-8 w-8 rounded-lg'>
                        <AvatarImage src="/images/avatar.png" alt="User Avatar" />
                        <AvatarFallback className='rounded-lg'>AD</AvatarFallback>
                    </Avatar>
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                        <span className='font-semibold'>Brayan</span>
                        <span className='text-xs text-muted-foreground'>brayan@gmail.com</span>
                    </div>
                    <ChevronUp className='ml-auto size-4' />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
                side={isMobile ? "bottom" : "right"}
                align={"end"}
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage src="/placeholder.svg" alt="Avatar" />
                            <AvatarFallback className="rounded-lg">AD</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">Admin</span>
                            <span className="truncate text-xs">admin@ejemplo.com</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Configuración
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
