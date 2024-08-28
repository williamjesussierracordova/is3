import { getFirebaseStorage } from "./firebase.js";
import { ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

const storage = getFirebaseStorage();

export function uploadImage(file, user, code) {
    const storageRef = ref(storage, 'images/accounts/' + user + '/' + code );
    const uploadTask = uploadBytes(storageRef, file);
}

export async function downloadImage(user, code) {
    const storageRef = ref(storage, 'images/accounts/' + user + '/' + code );
    const url = await getDownloadURL(storageRef);
    return url;
}