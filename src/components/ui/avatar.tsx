"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"


function Avatar({ className = "", ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={`relative flex size-8 shrink-0 overflow-hidden pixel-border ${className}`.trim()}
      {...props}
    />
  );
}

function AvatarImage({ className = "", ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={`aspect-square size-full ${className}`.trim()}
      {...props}
    />
  );
}

function AvatarFallback({ className = "", ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={`bg-[#e63946]/80 flex size-full items-center justify-center pixel-border ${className}`.trim()}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback }
