"use client";

import { Badge } from "@/components/ui/badge";
import { useSocket } from "./socket-provider";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="border-none bg-red-600 text-white">
        Fallback: Polling every 1s
      </Badge>
    );
  }

  return (
    <>
      <Badge
        variant="outline"
        className="border-none bg-emerald-600 text-white"
      >
        Live:Real-ime updates
      </Badge>
    </>
  );
};
