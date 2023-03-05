export function loadReadStorage() {
  try {
    const storageRead = localStorage.getItem('read');

    return storageRead === null ? {} : JSON.parse(storageRead);
  } catch (error) {
    console.log(error);
  }
}

export function writeReadStorage(object) {
  removeFromReadStorage(object);
  const readObj = loadReadStorage();
  const curDate = getCurrentDate();
  if (!readObj[curDate]) {
    readObj[curDate] = [];
  }
  readObj[curDate].push(object);

  localStorage.setItem('read', JSON.stringify(readObj));
}

export function removeFromReadStorage(obj) {
  const readObj = loadReadStorage();

  for (key of Object.keys(readObj)) {
    const indexInArray = readObj[key].findIndex(item => item.id === obj.id);
    if (indexInArray > -1) {
      console.log(readObj[key]);
      readObj[key].splice(indexInArray, 1);
    }
  }
  localStorage.setItem('read', JSON.stringify(readObj));
}

export function getCurrentDate() {
  return new Date().toLocaleString().slice(0, 10).split('.').join('/');
}