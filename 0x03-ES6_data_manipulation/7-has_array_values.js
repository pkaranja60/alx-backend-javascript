export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set) || !Array.isArray(array)) {
    throw new Error("Invalid input types");
  }

  return array.every((element) => set.has(element));
}
