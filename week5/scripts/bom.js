const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', function () { 
    const li = document.createElement('li');

    const deleteButton = document.createElement('button');

    li.textContent = input.value; 

    deleteButton.textContent = '❌';

    if (input.value.trim() !== '') {
        li.append(deleteButton);

        list.append(li);
        
        input.value = '';
        input.focus();
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.value = '';
            input.focus();
        })
    }
})

        
button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}