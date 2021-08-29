export const format = (sjc: string): string => {
  let date = new Date(+sjc);
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const min = date.getMinutes();
  const s = date.getSeconds();
  return (`${y}-${m}-${d} ${h}:${min}:${s}`)
}