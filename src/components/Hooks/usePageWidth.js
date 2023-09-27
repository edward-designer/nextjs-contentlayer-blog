import React, { useSyncExternalStore } from "react";
export const usePageWidth = () => {
  const subscribe = (cb) => {
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  };
  const getSnapShot = () => {
    return window.innerWidth;
  };
  const getServerSnapShot = () => {
    return 0;
  };

  return useSyncExternalStore(subscribe, getSnapShot, getServerSnapShot);
};
