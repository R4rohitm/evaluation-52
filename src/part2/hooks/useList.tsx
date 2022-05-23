import { useState } from "react";

let init = [1, 2, 3];
let clear: any = [];
export const useList = () => {
  const [list, setList] = useState<any>(init);

  const push = () => {
    return setList([...list, list.length + 1]);
  };

  const pop = () => {
    return setList([...list, list.pop()]);
  };

  const clear = () => {
    return setList(clear);
  };

  const reset = () => {
    return setList(init);
  };

  const map = () => {
    let temp: any = [];
    list.map((e: any) => {
      temp.push(e * 2);
    });

    setList(temp);
  };

  return [list, { push, pop, clear, reset, map }];
};
