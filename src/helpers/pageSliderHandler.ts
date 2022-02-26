import { useEffect, useRef } from 'react';

export interface Props<T> {
  data: T;
  addRef: (ref: HTMLDivElement) => void;
};

export const usePageSliderHandler = (addRef: ((ref: HTMLDivElement) => void)) => {

  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef.current) {
      addRef(componentRef.current);
    }
  }, [componentRef, addRef]);

  return componentRef;
};
