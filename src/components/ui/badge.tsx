import * as React from "react";

export function Badge({ className = "", ...props }: React.ComponentProps<"span">) {
  return (
    <span className={`pixel-border bg-[#e63946]/80 text-white px-2 py-1 text-xs font-medium ${className}`.trim()} {...props} />
  );
}
