import { getFirebaseDb } from "./firebase.js";
import { set, ref ,get} from "firebase/database";

const db = getFirebaseDb();

export function writeCases(caseID, patientID, doctorID, date, time, nameImage) {
    set(ref(db, 'cases/' + caseID), {
        caseID: caseID,
        patientID: patientID,
        doctorID: doctorID,
        date: date,
        time: time,
        nameImage: nameImage
    });
}

export async function readCases(caseID) {
    const snapshot = await get(ref(db, 'cases/' + caseID));
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return null;
    }
}

