"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function NumberTicker({
  value,
  suffix = "",
  duration = 1.6,
  className,
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValueRef = useRef(0);

  useEffect(() => {
    const controls = animate(previousValueRef.current, value, {
      duration,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplayValue(latest);
      },
    });

    previousValueRef.current = value;

    return () => {
      controls.stop();
    };
  }, [value, duration]);

  return (
    <span className={cn("tabular-nums tracking-tight", className)}>
      {Math.round(displayValue).toLocaleString()}
      {suffix}
    </span>
  );
}
