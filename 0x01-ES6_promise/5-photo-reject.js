export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errorMessage = `${fileName} cannot be processed`;
      reject(new Error(errorMessage));
    }, 1000);
  });
}
