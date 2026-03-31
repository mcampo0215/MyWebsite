import * as React from "react";

export function Button({ className = "", ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={`retro-btn pixel-border ${className}`.trim()}
      {...props}
    />
  );
}
