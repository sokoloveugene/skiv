import { useRef, useEffect } from "react";

const useOutsideAction = (
  action: () => void
): [React.RefObject<HTMLDivElement>] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const handler = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target)) {
        action();
      }
    };

    window.addEventListener("mouseup", handler);

    return () => {
      window.removeEventListener("mouseup", handler);
    };
  }, [action]);

  return [ref];
};

export default useOutsideAction;
