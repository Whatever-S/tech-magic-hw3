const addBtn = document.querySelector('.button__add'),
    removeBtn = document.querySelector('.button__remove'),
    input = document.querySelector('.queue__input'),
    queue = document.querySelector('.queue__list'),
    queueMsg = document.querySelector('.queue__message'),
    myAge = 23;
    listItems = [];

let count = listItems.length;
    
function isEmptyQueue(){
    if (listItems.length < 1){
        queueMsg.classList.remove('hidden')
        queue.classList.add('hidden')
        return true
    } else{
        queueMsg.classList.add('hidden')
        queue.classList.remove('hidden')
        return false
    }
}

function addItem(item){
    listItems.push(item);
    const queueItem = document.createElement('li');
    queueItem.classList.add('queue__list--item');
    queueItem.textContent = item;
    queue.appendChild(queueItem);
}

function handleAdding(){
    
    addBtn.addEventListener('click', () => {
        inputValue = input.value.trim();
        if (inputValue && count < myAge){
            addItem(inputValue)
            input.value = '';
            count++;
            isEmptyQueue();
            localStorage.setItem('listItems', JSON.stringify(listItems));
        }
        else if (count >= myAge) {
            alert(`You can't add more than ${myAge} items to the queue :(`);
          }
        else{
            alert('You can`t add to the queue an empty item')
        }
    } )
}

function handleRemoving(){
    removeBtn.addEventListener('click', () => {
        if(isEmptyQueue()){
            alert('You can`t remove anything from the empty queue')
        }
        else{
            queue.removeChild(queue.firstChild);
            listItems.shift();
            count--;
            isEmptyQueue();
            localStorage.setItem('listItems', JSON.stringify(listItems));
        }
    })
}

if (localStorage.getItem('listItems')) {
    const storedItems = JSON.parse(localStorage.getItem('listItems'));
    for (let item of storedItems) {
        addItem(item)
    }
    count = listItems.length;
    isEmptyQueue();
}

isEmptyQueue();
handleAdding();
handleRemoving();

