import { useLayoutEffect } from "react";
import { useHistory, useLocation } from "react-router";

// eslint-disable-next-line
export const useCameFromProtect = (stateKey: string, redirectLink: string) => {
  const { state } = useLocation<{ [stateKey: string]: boolean }>();
  const history = useHistory();

  useLayoutEffect(() => {
    if (!state?.fromCart) {
      history.push(redirectLink);
    }
  }, [state, history]);
};
