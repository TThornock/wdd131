const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('ul');

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
