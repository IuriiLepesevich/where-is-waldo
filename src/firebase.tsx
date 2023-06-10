import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  serverTimestamp,
} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiLyqScfX-2EVVaMVD2S3sS42VFgpviIw",
  authDomain: "where-is-valdo.firebaseapp.com",
  projectId: "where-is-valdo",
  storageBucket: "where-is-valdo.appspot.com",
  messagingSenderId: "859934226997",
  appId: "1:859934226997:web:c51116d794463aebe84f7c",
  measurementId: "G-1TVSZKGLCV",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export interface bounds {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export interface leaderData {
  name: string;
  time: number;
}

function saveResult(levelNumber: number, username: string, time: number) {
  addDoc(collection(firestore, `leaderboard${levelNumber}`), {
    name: username,
    time: time,
    date: serverTimestamp(),
  });
}

async function getCharCoordinates(charId: string) {
  const charCoordinates = await getDoc(
    doc(firestore, "characterCoordinates", charId)
  );

  return charCoordinates.data() as bounds;
}

async function getLeaderboardData(levelId: number) {
  const leaderDataQuery = query(
    collection(firestore, `leaderboard${levelId}`),
    orderBy("time", "asc")
  );
  const leaderDocs = await getDocs(leaderDataQuery);
  const leaderData = leaderDocs.docs.map((doc) => doc.data());

  return leaderData as leaderData[];
}

export { saveResult, getCharCoordinates, getLeaderboardData };
