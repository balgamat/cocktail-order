export enum DebounceMode {
  LeadingEdge,
  TrailingEdge,
}

type DebounceParams<T extends Function> = {
  fn: T;
  ms: number;
  mode?: DebounceMode; // For BONUS - defaults to Trailing otherwise
};

export const debounce = <T extends Function>({
  fn,
  ms,
  mode = DebounceMode.TrailingEdge,
}: DebounceParams<T>) => {
  let timeoutHandle: number | null = null;
  return (...args: any) => {
    const trailing = () => {
      timeoutHandle = null;
      mode === DebounceMode.TrailingEdge && fn(...args);
    };

    clearTimeout(timeoutHandle as number);
    timeoutHandle = setTimeout(trailing, ms) as any;
    mode === DebounceMode.LeadingEdge && !timeoutHandle && fn(...args);
  };
};
