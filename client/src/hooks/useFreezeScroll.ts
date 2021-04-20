import { useEffect } from "react";

// eslint-disable-next-line
export const useFreezeScroll = () => {
  useEffect(() => {
    const screenWidthBefore = document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    const screenWidthAfter = document.documentElement.clientWidth;

    if (screenWidthAfter > screenWidthBefore) {
      document.body.style.paddingRight = `${
        screenWidthAfter - screenWidthBefore
      }px`;
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);
};
