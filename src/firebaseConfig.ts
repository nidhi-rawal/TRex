import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAScpfqv3tHHYNu2HaSUsOBYfVtd1dZoyI",
  authDomain: "trex-ae1416.firebaseapp.com",
  projectId: "trex-ae1416",
  storageBucket: "trex-ae1416.appspot.com",
  messagingSenderId: "926523352203",
  appId: "1:926523352203:web:3c489d66cc54e22ec0a08e",
  measurementId: "G-36DMWFE4H2",
};

firebase.default.initializeApp(firebaseConfig);

export async function loginUser(username: string, password: string) {
  try {
    const res = await firebase.default
      .auth()
      .signInWithEmailAndPassword(username, password);
    return res;
  } catch (error) {
    return error;
  }
}

export async function register(username: string, password: string) {
  try {
    const res = await firebase.default
      .auth()
      .createUserWithEmailAndPassword(username, password);
    return res;
  } catch (error) {
    return error;
  }
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.default
      .auth()
      .onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
        unsubscribe();
      });
  });
}

export function logout() {
  firebase.default.auth().signOut();
}
