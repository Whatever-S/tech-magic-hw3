const addBtn = document.querySelector('.button__add'),
    removeBtn = document.querySelector('.button__remove'),
    input = document.querySelector('.queue__input'),
    queue = document.querySelector('.queue__list'),
    queueMsg = document.querySelector('.queue__message')

function isEmptyQueue(){
    if (queue.childElementCount < 1){
        queueMsg.classList.remove('hidden')
        queue.classList.add('hidden')
        return true
    } else{
        queueMsg.classList.add('hidden')
        queue.classList.remove('hidden')
        return false
    }
}

function handleAdding(){
    addBtn.addEventListener('click', () => {
        if (input.value){
            const queueItem = document.createElement('li');
            queueItem.classList.add('queue__list--item');
            queueItem.textContent = input.value;
            queue.appendChild(queueItem);
            input.value = '';
            isEmptyQueue();
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
            isEmptyQueue()
        }
    })
}

isEmptyQueue();
handleAdding();
handleRemoving();

