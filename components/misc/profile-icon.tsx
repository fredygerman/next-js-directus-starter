"use client"

import {
  logoutUser,
  storedAuth,
  storedToken,
  storedUser,
} from "@/store/slices/auth"

import { useStoreDispatch, useStoreSelector } from "@/hooks/useStore"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

export function ProfileIcon() {
  const dispatch = useStoreDispatch()
  const user = useStoreSelector(storedUser)
  const auth = useStoreSelector(storedAuth)
  const token = useStoreSelector(storedToken)

  // we can not get the user or auth from the store, so we will log them out and we return null
  if (!user || !auth || !token) {
    dispatch(logoutUser())
    return null
  }

  const logout = () => {
    dispatch(logoutUser())
    // wait 1 second to show the toast
    setTimeout(() => {}, 1000)
    toast({
      title: "Logged Out 👋 ",
      variant: "default",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-4">
          <code className="text-primary">
            You have been successfully logged out.
          </code>
        </pre>
      ),
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={user?.avatar ? user.avatar : "/avatars/03.png"}
              alt={user?.first_name}
            />
            <AvatarFallback>
              {user?.first_name?.charAt(0) ??
                user?.last_name?.charAt(0) ??
                "FM"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {" "}
              {user?.first_name} {user?.last_name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email ?? " "}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => logout()}
          className="bg-danger text-primary "
        >
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
