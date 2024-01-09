import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      return results.map((result) => ({
        status: result.status,
        value: result.status === "fulfilled" ? result.value : result.reason,
      }));
    })
    .catch((error) => {
      console.error("Error during profile signup:", error.message);
    });
}
