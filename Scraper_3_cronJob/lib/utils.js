/* export function uniqueCount(scrapes) {
  return scrapes.reduce((acc, scrape) => {
    // Check if this is already in the accumulator
    // if there one in doc
    if (!acc.find(el => el.count === scrape.count)) {
      return [...acc, scrape];
    }
    return acc;
  }, []);
}
 */

export function uniqueCount(scrapes) {
  return scrapes.filter((item, i, arr) => {
    if (i === 0) return true; //keep it, it's the first value
    const lastItem = arr[i - 1];
    return !(item.count === lastItem.count);
  });
}
