export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        const responseData = { message: "Data from API" };
        resolve(responseData);
      } else {
        reject(new Error("Failed to fetch data from API"));
      }
    }, 1000);
  });
}
