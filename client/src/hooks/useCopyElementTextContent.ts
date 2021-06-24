import { RefObject, useEffect, useState } from "react";

const useCopyElementTextContent = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
) => {
  const [handleCopy, setCopyHandler] = useState<() => void>(() => undefined);

  useEffect(() => {
    const copyToClipboard = (): void => {
      const element = ref.current;
      if (!element) return;

      const range = document.createRange();
      range.selectNodeContents(element);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      document.execCommand("copy");
    };

    setCopyHandler(() => {
      return copyToClipboard;
    });
  }, [ref]);

  return { handleCopy };
};

export default useCopyElementTextContent;
