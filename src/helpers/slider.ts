import { useCallback, useEffect, useRef, useState } from 'react';

const isIOS = (/iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

const useSlider = (subpagesCount: number) => {

  const pageContainerRef = useRef<HTMLDivElement>(null);
  const [currentSubpage, setCurrentSubpage] = useState<HTMLDivElement>();
  const [subpageRefs, setSubpageRefs] = useState<HTMLDivElement[]>([]);

  let pageContainer = pageContainerRef.current;

  const addSubpageRef = useCallback(
    (ref: HTMLDivElement) => {
      setSubpageRefs(prevState => [...prevState.filter(item => item !== ref), ref]);
    }, []);


  const setContainerScrollSnapMandatory = (whenReachRef: HTMLDivElement) => {
    let counter = 0;

    const startInterval = setInterval(() => {
      counter++;
      if (pageContainer?.scrollLeft === window.innerWidth * subpageRefs.indexOf(whenReachRef)) {
        pageContainer!.style.scrollSnapType = 'x mandatory';
        clearInterval(startInterval);
      }
      if (counter > 100) {
        pageContainer!.style.scrollSnapType = 'x mandatory';
        clearInterval(startInterval);
      }
    }, 50);

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
        }, 500);
        setContainerScrollSnapMandatory(ref);
      } else {
        ref.scrollIntoView({ behavior: 'smooth' });
        setContainerScrollSnapMandatory(ref);
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
        pageContainer.addEventListener('scroll', () => { changeCurrentSubpage(pageContainer!); });
      }
    }
  }, [subpageRefs, pageContainer, subpagesCount]);

  return {
    setPageContainerRef: pageContainerRef,
    currentSubpage,
    subpageRefs,
    addSubpageRef,
    scrollIntoSubpage,
  };
};

export default useSlider;