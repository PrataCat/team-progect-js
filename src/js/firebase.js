import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  setDoc,
} from 'firebase/firestore';

// тестова база даних
// const firebaseConfig = {
//   apiKey: "AIzaSyCwEYih_Hk3RCLLRFF0EVcOYgueOpRYZr8",
//   authDomain: "test-firebase-a96e1.firebaseapp.com",
//   projectId: "test-firebase-a96e1",
//   storageBucket: "test-firebase-a96e1.appspot.com",
//   messagingSenderId: "304118951588",
//   appId: "1:304118951588:web:0178afc094e4eb801b8031",
//   measurementId: "G-1HTVPVDZR3"
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAJ9sYF6zyqecXJQtvm1O0fMvbLQXgTNkI',
  authDomain: 'commandprogectdb.firebaseapp.com',
  projectId: 'commandprogectdb',
  storageBucket: 'commandprogectdb.appspot.com',
  messagingSenderId: '70907964230',
  appId: '1:70907964230:web:1e0412f1260d53bf831347',
  measurementId: 'G-X3684P431F',
};

initializeApp(firebaseConfig);
const db = getFirestore();

//---------автентифікація користувача email/password
// --------  зараз (07.08.2023) не потрібна на 30 діб
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// const auth = getAuth();
// signInWithEmailAndPassword(auth, 'zhouravlevav@gmail.com', 'goodNews')
//   .then(userCredential => {
//     // Signed in
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
//--------кінець автентифікації

export async function setToFirebase(DATA_KEY, data) {
  // console.log('set');

  const colRef = doc(db, DATA_KEY, 'Document');

  await setDoc(colRef, { DATA: data });
}

export async function getFromFirebase(DATA_KEY) {
  let result = false;
  try {
    const colRef = collection(db, DATA_KEY);
    const docSnap = await getDocs(colRef);
    //.then(snap => {
    let savedData = '';
    docSnap.docs.map(doc => {
      savedData = doc.data();
      result = savedData;
    });

    //console.log('fffffffff');
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return result;
  }
}

const FAVORITE_STORAGE_KEY = 'favorite';
const READ_STORAGE_KEY = 'read';
const THEME_STORAGE_KEY = 'theme';

export async function registerNewUser(email, password) {
  let result = false;

  data = {
    password: password,
    favorite: '',
    read: '',
    theme: 'light',
  };

  setToFirebase(email, data);

  setCurrentUser(email);

  //скидуємо поточне сховище для новенького
  localStorage.setItem(FAVORITE_STORAGE_KEY, '');
  localStorage.setItem(READ_STORAGE_KEY, '');
  localStorage.setItem(THEME_STORAGE_KEY, 'light');
  return result;
}

export function setCurrentUser(email) {
  setToFirebase('currentUser', { currentUser: email });
}

export function getCurrentUser() {
  curUser = getFromFirebase('currentUser');
  if (curUser) {
    return curUser.currentUser;
  } else {
    return false;
  }
}

export async function findUser(email) {
  //curUser = getFromFirebase('currentUser');
  let curUser = false;
  const colRef = collection(db, email);
  const docSnap = await getDocs(colRef);
  //.then(snap => {
  let savedData = '';
  docSnap.docs.map(doc => {
    savedData = doc.data();
    result = savedData;
  });

  //console.log('Current user:  ' + curUser);
  if (curUser) {
    return true;
  } else {
    return false;
  }
}

//------використовуються тільки для наладки

// const add = document.querySelector('.js-add');
// const get = document.querySelector('.js-get');

// let value = 1;
// const curDATA_KEY = 'Favorite';
// const myJSON =
//   '++[11{"title":"Pennsylvania Woman Who Disappeared in 1992 Is Found Alive in Puerto Rico","abstract":"The family of Patricia Kopta, now 83, thought she had died years ago. They were stunned to learn that she had been on the island since at least 1999.","published_date":"3/4/2023, ","url":"https://www.nytimes.com/2023/03/04/us/pennsylvania-woman-found-puerto-rico.html","section":"U.S.","image_url":"https://static01.nyt.com/images/2023/03/06/multimedia/06-XP-WOMANFOUND-PRINT/04Kopta-penn-mediumThreeByTwo440.jpg","id":"be2530ec-d272-57e2-b97c-fc56784ea644"},{"title":"Once the World’s Largest, a Hotel Goes ‘Poof!’ Before Our Eyes","abstract":"The Hotel Pennsylvania in Manhattan was a virtual city within a city. But in the end, nothing could save it.","published_date":"3/2/2023, ","url":"https://www.nytimes.com/2023/03/02/nyregion/hotel-pennsylvania-nyc.html","section":"New York","image_url":"https://static01.nyt.com/images/2023/03/03/multimedia/03hotel-pennsylvania-barry-promo-lgjb/03hotel-pennsylvania-barry-promo-lgjb-mediumThreeByTwo440-v2.jpg","id":"ee87e65a-745e-57c1-9d49-80a7de991c54"},{"title":"Tom Sizemore, Intense Actor With a Troubled Life, Dies at 61","abstract":"He earned praise for his work in films like “Saving Private Ryan” and “Black Hawk Down.” He also served prison time for drug possession and domestic abuse.","published_date":"3/3/2023, ","url":"https://www.nytimes.com/2023/03/03/movies/tom-sizemore-dead.html","section":"Movies","image_url":"https://static01.nyt.com/images/2023/03/03/multimedia/00sizemore-01-khtm-print1/00sizemore-01-khtm-mediumThreeByTwo440.jpg","id":"36d7e96b-9dcf-55a1-8b1c-5819a6b89287","add":false}]';

// add.addEventListener('click', () => {
//   console.log('set');
//   setToFirebase(curDATA_KEY, myJSON);
//   // addDoc(colRef, {
//   //   name: value + 1,
//   //   FAVORIT:
//   //     ,
//   // });
// });

// get.addEventListener('click', () => {
//   getFromFirebase(curDATA_KEY);
// });
