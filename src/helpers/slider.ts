import { useCallback, useEffect, useRef, useState } from 'react';

const isIOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

const useSlider = (subpagesCount: number) => {

  const pageContainerRef = useRef<HTMLDivElement>(null);
  const [currentSubpage, setCurrentSubpage] = useState<HTMLDivElement>();
  const [subpageRefs, setSubpageRefs] = useState<HTMLDivElement[]>([]);

  const pageContainer = pageContainerRef.current;

  const addSubpageRef = useCallback(
    (ref: HTMLDivElement) => {
      setSubpageRefs(prevState => [...prevState.filter(item => item !== ref), ref]);
    }, []);


  const setContainerScrollSnapMandatory = (milliseconds: number) => {
    setTimeout(() => {
      pageContainer!.style.scrollSnapType = 'x mandatory';
    }, milliseconds);
  };

  const scrollIntoSubpage = (ref: HTMLDivElement) => {
    if (isIOS) {
      pageContainer!.style.scrollSnapType = 'none';
      if (window.scrollY !== 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setTimeout(() => {
          ref.scrollIntoView({ behavior: 'smooth' });
        }, 550);
        setContainerScrollSnapMandatory(1600);
      } else {
        ref.scrollIntoView({ behavior: 'smooth' });
        setContainerScrollSnapMandatory(600);
      }
    } else {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (subpageRefs.length === subpagesCount) {
      setCurrentSubpage(subpageRefs[0]);
      let lastValue = 0;

      const changeCurrentSubpage = (container: HTMLDivElement) => {

        const currentValue = Math.floor(((container.scrollLeft + window.innerWidth / 2) / window.innerWidth));

        if (lastValue !== currentValue) {
          lastValue = currentValue;
          setCurrentSubpage(subpageRefs[currentValue]);
        }
      };

      if (pageContainer) {
        pageContainer.addEventListener('scroll', () => { changeCurrentSubpage(pageContainer); });
      }
    }
  }, [subpageRefs, pageContainer, subpagesCount]);

  return {
    setPageContainerRef: () => pageContainerRef,
    currentSubpage,
    subpageRefs,
    addSubpageRef,
    scrollIntoSubpage,
  };
};

export default useSlider;