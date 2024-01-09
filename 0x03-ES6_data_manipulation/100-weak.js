export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (
    !endpoint ||
    typeof endpoint !== "object" ||
    typeof endpoint.protocol !== "string" ||
    typeof endpoint.name !== "string"
  ) {
    throw new Error("Invalid endpoint");
  }

  let queryCount = weakMap.get(endpoint) || 0;

  queryCount += 1;

  weakMap.set(endpoint, queryCount);

  if (queryCount >= 5) {
    throw new Error("Endpoint load is high");
  }

  console.log(`Querying API: ${endpoint.protocol} - ${endpoint.name}`);

  return `Data for ${endpoint.protocol} - ${endpoint.name}`;
}
