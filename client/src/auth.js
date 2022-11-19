import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
const provider = new GoogleAuthProvider();
const { users } = require("./roles");
// const auth = getAuth(app);
export async function getUser() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(users);
        const userRole = users.filter(
          (userSave) => user.email === userSave.email
        );
        if (
          userRole.length > 0 &&
          (userRole[0].role === "admin" || userRole[0].role === "department")
        ) {
          console.log("userRole", userRole);
          user.role = userRole[0].role;
          resolve(user);
        } else {
          console.log("user not found");
          signOutUser();
          reject("User not found");
        }
      } else {
        resolve(null);
      }
    });
  });
}

export async function login() {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await signInWithPopup(auth, provider);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      resolve(result.user);
      // ...
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      reject(error);
      // ...
    }
  });
}

export const signOutUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await signOut(auth);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
