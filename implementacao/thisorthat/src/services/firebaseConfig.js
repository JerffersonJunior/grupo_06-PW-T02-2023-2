import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-uxMoj35kkOz6EeRYROE1FEoto-DaYhw",
  authDomain: "thisorthat-290bf.firebaseapp.com",
  projectId: "thisorthat-290bf",
  storageBucket: "thisorthat-290bf.appspot.com",
  messagingSenderId: "762785606561",
  appId: "1:762785606561:web:3e58089c69e1defa3779e0"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage()

export const auth = getAuth(app)

export const db = getFirestore(app)

export async function upload(file, currentUser, setLoading){
  const fileRef = ref(storage, currentUser.uid + '.png')

  setLoading(true)
  await uploadBytes(fileRef, file)
  const photoURL = await getDownloadURL(fileRef)
  updateProfile(currentUser, {photoURL: photoURL})
  setLoading(false)
  alert("Uploaded file!")
}