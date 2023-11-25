import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDU9j058B186vxjBZNXkNrkWyB31FxA8uM",
  authDomain: "aula-db2cf.firebaseapp.com",
  projectId: "aula-db2cf",
  storageBucket: "aula-db2cf.appspot.com",
  messagingSenderId: "988945466089",
  appId: "1:988945466089:web:89cbd33b327c36fc966678"
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