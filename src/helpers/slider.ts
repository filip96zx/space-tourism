import { useCallback, useEffect, useState } from 'react';

const useSlider = (pageContainer: HTMLDivElement | null, subpagesCount: number) => {

  const [currentSubpage, setCurrentSubpage] = useState<HTMLDivElement>();
  const [subpageRefs, setSubpageRefs] = useState<HTMLDivElement[]>([]);

  const addSubpageRef = useCallback(
    (ref: HTMLDivElement) => {
      setSubpageRefs(prevState => [...prevState.filter(item => item !== ref), ref]);
    }, []);

  const scrollIntoSubpage = (ref: HTMLDivElement) => {
    ref.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (subpageRefs.length === subpagesCount) {
      setCurrentSubpage(subpageRefs[0]);
      let lastValue = 0;
      const innerWidth = window.innerWidth;

      const changeCurrentSubpage = (container: HTMLDivElement) => {

        const currentValue = Math.floor(((container.scrollLeft + innerWidth / 2) / innerWidth));

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