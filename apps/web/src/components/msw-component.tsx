"use client";
import { useEffect } from "react";

export function MSWComponent() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NODE_ENV === "development") {
        const initMsw = async () => {
          const { worker } = await import("@/mocks/browser");
          // Clear cache before starting
          const clearCache = () => {
            return new Promise<void>((resolve, reject) => {
              const req = indexedDB.deleteDatabase("msw-db");
              req.onsuccess = () => resolve();
              req.onerror = (err) => reject(err);
            });
          };
          await clearCache();
          worker.start();
        };
        initMsw();
      }
    }
  }, []);

  return null;
}
