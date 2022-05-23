import { useState, useEffect } from "react";

export const useCounter = (num: number) => {
  const [value, setValue] = useState(num);

  const inc = (num: number) => {
    return setValue((p: number) => p + num);
  };

  const dec = (num: number) => {
    return setValue((p: number) => p - num);
  };

  const set = (num: number) => {
    return setValue(num);
  };

  return { value, inc, dec, set };
};
