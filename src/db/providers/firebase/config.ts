import { FirebaseApp, initializeApp } from "firebase/app";
import {Firestore, getFirestore} from "@firebase/firestore";

export class Firebase {
  static cfg = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  db?: Firestore;
  app?: FirebaseApp;

  constructor(cfg = Firebase.cfg) {
    this.init(cfg);
  }

  init(cfg: object) {
    this.app = initializeApp(cfg);
    this.db = getFirestore(this.app);
    return this;
  }
}
