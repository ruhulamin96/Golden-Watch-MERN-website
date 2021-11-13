///create .env.local file in root directory

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
export default firebaseConfig;

// const firebaseConfig = {
//   apiKey: "AIzaSyAmfltr3laiFaF6eLla-aAjL8iiDaSBtFQ",
//   authDomain: "golden-watch.firebaseapp.com",
//   projectId: "golden-watch",
//   storageBucket: "golden-watch.appspot.com",
//   messagingSenderId: "252659023451",
//   appId: "1:252659023451:web:19d61383cc7929dd9ac97e",
// };
// export default firebaseConfig;
