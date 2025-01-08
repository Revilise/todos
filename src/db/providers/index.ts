import { FirebaseAdapter } from "@/db/providers/firebase/adapter";

export function initProvider() {
  const dbType = process.env["DATABASE_PROVIDER"] || "firebase";

  switch (dbType) {
    case "firebase": return new FirebaseAdapter();
  }
}
