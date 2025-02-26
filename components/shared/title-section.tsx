import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  text: string;
  className?: string;
}

export const TitleSection: React.FC<Props> = ({text, className}) => {
  return (
    <h2 className={cn("text-5xl font-medium", className)}>{text}</h2>
  );
}