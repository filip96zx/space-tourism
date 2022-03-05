import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const isIOS = (/iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel'));

const useSlider = (subpagesCount: number) => {

  const pageContainerRef = useRef<HTMLDivElement>(null);
  const [currentSubpage, setCurrentSubpage] = useState<HTMLDivElement>();
  const [subpageRefs, setSubpageRefs] = useState<HTMLDivElement[]>([]);

  let pageContainer = pageContainerRef.current;

  const containerStyle = useMemo(() => {
    if (pageContainer) {
      return getComputedStyle(pageContainer);
    }
  }, [pageContainer]);

  const addSubpageRef = useCallback(
    (ref: HTMLDivElement) => {
      setSubpageRefs(prevState => [...prevState.filter(item => item !== ref), ref]);
    }, []);


  const setContainerScrollSnapMandatory = (whenReachRef: HTMLDivElement) => {
    let counter = 0;

    const startInterval = setInterval(() => {
      counter++;
      if (pageContainer?.scrollLeft === window.innerWidth * subpageRefs.indexOf(whenReachRef) && containerStyle?.flexDirection !== 'column') {
        pageContainer!.style.scrollSnapType = 'x mandatory';
        clearInterval(startInterval);
      }
      if (counter > 100 && containerStyle?.flexDirection !== 'column') {
        pageContainer!.style.scrollSnapType = 'x mandatory';
        clearInterval(startInterval);
      }
    }, 50);

  };


  const scrollIntoSubpage = (ref: HTMLDivElement) => {

    if (isIOS) {
      pageContainer!.style.scrollSnapType = 'none';
      if (window.scrollY !== 0 && containerStyle?.flexDirection !== 'column') {
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
      if (currentSubpage === undefined) setCurrentSubpage(subpageRefs[0]);
      let lastValue = 0;

      const changeCurrentSubpage = () => {
        let currentValue;
        //console.log(containerStyle.flexDirection);
        if (containerStyle?.flexDirection === 'row') {
          currentValue = Math.floor(((pageContainer!.scrollLeft + window.innerWidth / 2) / window.innerWidth));
        } else {
          currentValue = Math.floor(((window.scrollY + + window.innerHeight / 2) / window.innerHeight));
        }
        if (lastValue !== currentValue) {
          lastValue = currentValue;
          setCurrentSubpage(subpageRefs[currentValue]);
        }
      };

      pageContainer!.addEventListener('scroll', changeCurrentSubpage);

      window.addEventListener('scroll', changeCurrentSubpage);

      return () => { window.removeEventListener('scroll', changeCurrentSubpage); };

    }
  }, [subpageRefs, pageContainer, subpagesCount, containerStyle]);

  return {
    setPageContainerRef: pageContainerRef,
    currentSubpage,
    subpageRefs,
    addSubpageRef,
    scrollIntoSubpage,
  };
};

export default useSlider;