import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto("profile.jpg");
  const userPromise = createUser({ firstName: "John", lastName: "Doe" });

  return Promise.all([photoPromise, userPromise])
    .then(([photoResult, userResult]) => {
      console.log(`Body: ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch((error) => {
      console.error("Signup system offline", error);
    });
}
