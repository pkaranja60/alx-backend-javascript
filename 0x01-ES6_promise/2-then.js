export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        const responseData = { status: 200, body: "Success" };
        resolve(responseData);
      } else {
        reject(new Error("The fake API is not working currently"));
      }
    }, 1000);
  });
}
