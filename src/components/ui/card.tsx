import * as React from "react";

export function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`pixel-border bg-black/80 p-6 flex flex-col gap-4 ${className}`.trim()} {...props} />
  );
}

export function CardHeader({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`mb-4 ${className}`.trim()} {...props} />
  );
}

export function CardTitle({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <h3 className={`text-lg font-bold text-white ${className}`.trim()} {...props} />
  );
}

export function CardDescription({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`text-gray-300 text-sm ${className}`.trim()} {...props} />
  );
}

export function CardFooter({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`flex items-center justify-center mt-4 ${className}`.trim()} {...props} />
  );
}
