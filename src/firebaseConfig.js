import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Đúng thư viện Firebase Storage

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKXBHRN0HPXkqg9r1bB0zU43K9onc3J9Y",
  authDomain: "fir-85de1.firebaseapp.com",
  databaseURL: "https://fir-85de1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-85de1",
  storageBucket: "fir-85de1.appspot.com", // ⚠️ Sửa lại storageBucket đúng định dạng
  messagingSenderId: "74324478160",
  appId: "1:74324478160:web:9fda7ea8b3401ef9e876d5",
  measurementId: "G-G5B6CTVZ1Q"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Đúng cách import Storage

export { storage };
