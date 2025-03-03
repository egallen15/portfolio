'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const MIN_LOADING_TIME = 1000; // 1 second minimum loading time

const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
});

export function LoadingProvider({ children, initialLoadingState = true }) {
  const [isLoading, setIsLoading] = useState(initialLoadingState);
  const [loadingStartTime, setLoadingStartTime] = useState(
    initialLoadingState ? Date.now() : null
  );

  useEffect(() => {
    if (!isLoading || !loadingStartTime) return;

    const timeElapsed = Date.now() - loadingStartTime;
    const remainingTime = Math.max(0, MIN_LOADING_TIME - timeElapsed);

    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [isLoading, loadingStartTime]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
