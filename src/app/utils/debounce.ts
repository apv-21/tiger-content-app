export default function debounce(
    func: { apply: (arg0: any, arg1: any[]) => void },
    wait: number | undefined
  ) {
    let timeout: string | number | NodeJS.Timeout | null | undefined;
    return (...args: any[]) => {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  }