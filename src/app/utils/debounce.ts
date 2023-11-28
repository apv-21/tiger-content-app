type FunctionToDebounce = (...args: any[]) => void

export default function debounce(
  func: FunctionToDebounce,
  wait: number | undefined
): (this: any, ...args: any[]) => void {
  let timeout: NodeJS.Timeout | null | undefined

  return function (this: any, ...args: any[]) {
    const context = this

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = null
      func.apply(context, args)
    }, wait)
  }
}