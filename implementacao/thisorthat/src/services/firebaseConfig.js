import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDmGs0H_QPZRgfpfea56fsJt_SJfJKLv2w",
  authDomain: "thisorthat-e3b9c.firebaseapp.com",
  projectId: "thisorthat-e3b9c",
  storageBucket: "thisorthat-e3b9c.appspot.com",
  messagingSenderId: "651975346038",
  appId: "1:651975346038:web:3093099411dbc360a6dc57",
  measurementId: "G-6SMMX76T00"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage()

export const auth = getAuth(app)

export async function upload(file, currentUser, setLoading){
  const fileRef = ref(storage, currentUser.uid + '.png')

  setLoading(true)
  await uploadBytes(fileRef, file)
  const photoURL = await getDownloadURL(fileRef)
  updateProfile(currentUser, {photoURL: photoURL})
  setLoading(false)
  alert("Uploaded file!")
}