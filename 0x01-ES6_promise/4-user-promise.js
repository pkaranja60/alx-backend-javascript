export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userObject = { firstName, lastName };
      resolve(userObject);
    }, 1000);
  });
}
