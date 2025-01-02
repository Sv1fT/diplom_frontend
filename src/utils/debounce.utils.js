export function debounce(fn, ms) {
  let timeout;
  return function (...args) {
    timeout && clearTimeout(timeout);
    // @ts-expect-error: ignore
    timeout = setTimeout(() => fn.apply(this, args), ms);
  };
}
