import { useCallback, useEffect, useState } from 'react';

const isIOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

const useSlider = (pageContainer: HTMLDivElement | null, subpagesCount: number) => {

  const [currentSubpage, setCurrentSubpage] = useState<HTMLDivElement>();
  const [subpageRefs, setSubpageRefs] = useState<HTMLDivElement[]>([]);

  const addSubpageRef = useCallback(
    (ref: HTMLDivElement) => {
      setSubpageRefs(prevState => [...prevState.filter(item => item !== ref), ref]);
    }, []);

  const scrollIntoSubpage = (ref: HTMLDivElement) => {
    if (isIOS) pageContainer!.style.scrollSnapType = 'none';

    ref.scrollIntoView({ behavior: 'smooth' });

    if (isIOS) setTimeout(() => {
      pageContainer!.style.scrollSnapType = 'x mandatory';
    }, 700);
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
    currentSubpage,
    subpageRefs,
    addSubpageRef,
    scrollIntoSubpage,
  };
};

export default useSlider;