import { useState } from "react";
import { useStoreContext } from "store/storeContext";

type returnType = [boolean, () => void];

// eslint-disable-next-line
export const useWish = (id: string): returnType => {
  const { wishStore } = useStoreContext();
  const [isWished, setWished] = useState(() => wishStore.isWish(id));

  const wishHandler = (): void => {
    if (isWished) {
      setWished(false);
      wishStore.removeFromWishList(id);
    } else {
      setWished(true);
      wishStore.addToWishList(id);
    }
  };

  return [isWished, wishHandler];
};
