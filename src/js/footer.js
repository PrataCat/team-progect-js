import { exit } from 'process';
import { loadAllFavorites } from './library';
import { loadReadStorage } from './read-library';

//------------------
import { setCurrentUser, setToFirebase, registerNewUser } from './firebase';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  setDoc,
} from 'firebase/firestore';
import { async } from '@firebase/util';
import { loadAllFavorites } from './library';

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
//------------------
const FAVORITE_STORAGE_KEY = 'favorite';
const READ_STORAGE_KEY = 'read';
const THEME_STORAGE_KEY = 'theme';

const form = document.querySelector('.footer__login-form');
// console.log(form);
const btnLogOff = document.querySelector('#logoff');
//console.log(btnLogOff);

btnLogOff.addEventListener('click', onLogOff);

async function onLogOff(evt) {
  //ищем текущего  currentUser
  const colRef = collection(db, 'currentUser');
  const docSnap = await getDocs(colRef);

  let savedData = '';
  docSnap.docs.map(doc => {
    savedData = doc.data();
  });
  console.log(savedData.DATA);
  console.log(savedData.DATA.currentUser);
  curUserEmail = savedData.DATA.currentUser.trim();
  if (curUserEmail !== '') {
    //ищем профиль
    let curUser = false;
    const colRef = collection(db, email);
    const docSnap = await getDocs(colRef);
    //.then(snap => {
    //let savedData = '';
    docSnap.docs.map(doc => {
      curUser = doc.data();
      // curUser = savedData;
    });
    console.log('ANS: ' + curUser);
    console.log(curUser);
    if (typeof curUser === 'object') {
      answer = true;
    } else {
      //какято ошибка в данных
      alert('Something went wrong... Ask our administrator for help.');
    }
    //сохраняем текущие данные в базу данных
    data = {
      favorit: loadAllFavorites(),
      read: loadReadStorage(),
      theme: localStorage.getItem(THEME_STORAGE_KEY),
    };
    setToFirebase(curUserEmail, data);
    //чистим текущего
    setCurrentUser('');
    //прощаемся
    alert('Good bye user ( ' + email + ' )! And Welcome back!');
  } else {
    //не нашли, значит ничего не сохраняем и не чистим
    alert('Good bye! And Welcome back!');
    return;
  }
}

async function onSubmit(evt) {
  evt.preventDefault();

  const elms = evt.currentTarget.elements;
  const email = elms.email.value;
  const password = elms.password.value;

  //console.log('Email = ' + email + '  Password = ' + password);

  let answer = false;

  //--------------------
  //1 ищем в базе
  //answer = findUser(email);
  let curUser = false;
  const colRef = collection(db, email);
  const docSnap = await getDocs(colRef);
  //.then(snap => {
  //let savedData = '';
  docSnap.docs.map(doc => {
    curUser = doc.data();
    // curUser = savedData;
  });
  console.log('ANS: ' + curUser);
  console.log(curUser);
  if (typeof curUser === 'object') {
    answer = true;
  } else {
    //какято ошибка в данных
    alert('Something went wrong... Ask our administrator for help.');
  }
  //--------------------
  if (answer === false) {
    //2 не нашли
    //2а зарегистрируемся?
    answer = confirm('We haven`t found you. Would you like to register?');
    if (answer) {
      //2в регистрация
      let newPass = prompt('Enter your password:');
      let confPass = prompt('Confirm your password:');
      if (newPass.trim() === confPass.trim()) {
        //--------------------
        //регистриуем юзера в базе
        //answer = registerNewUser(email, newPass);
        data = {
          password: newPass,
          favorite: '',
          read: '',
          theme: 'light',
        };
        await setToFirebase(email, data);
        setCurrentUser(email);

        //скидуємо поточне сховище для новенького

        localStorage.setItem(FAVORITE_STORAGE_KEY, '');
        localStorage.setItem(READ_STORAGE_KEY, '');
        localStorage.setItem(THEME_STORAGE_KEY, 'light');
        //--------------------
        if (answer) {
          alert('You are registered! Welcome!');
        } else {
          alert(
            'Something went wrong... Try later or ask our administrator for help.'
          );
        }
      }
    } else {
      //2б ну нет так нет
    }
  } else {
    //3 нашли

    let savedData = curUser.DATA;
    let savedPass = savedData.password;
    //console.log(savedData.password);
    //let savedPass = curUser.data.passvord;
    console.log(savedPass);

    if (savedPass.trim() === password.trim()) {
      // 3б здраствуй юзер - все поднять из базы и установить в хранилище
      localStorage.setItem(FAVORITE_STORAGE_KEY, savedData.favorite);
      localStorage.setItem(READ_STORAGE_KEY, savedData.read);
      localStorage.setItem(THEME_STORAGE_KEY, savedData.theme);
      alert('Welcome to our site, user! ( ' + email + ' )');
    } else {
      //3а пароль не правильный
      alert(
        'The password you have just entered is incorrect. Try again or ask our administrator for help.'
      );
    }
  }

  //form.reset();
}

form.addEventListener('submit', onSubmit);
//console.log(form);
