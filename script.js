const addBtn = document.querySelector('.button__add'), 
    removeBtn = document.querySelector('.button__remove'), 
    input = document.querySelector('.queue__input'), 
    queue = document.querySelector('.queue__list'), 
    queueMsg = document.querySelector('.queue__message'), 
    listItems = JSON.parse(localStorage.getItem("listItems")) || []; 
    myAge = 23; 

function hideQueue(){
    if(!listItems.length){
        queueMsg.classList.remove('hidden') 
        queue.classList.add('hidden') 
    }
} 

function showQueue(){
    if(listItems.length){
        queueMsg.classList.add('hidden') 
        queue.classList.remove('hidden')
    }
} 

function renderQueue(){ 
    hideQueue()
    listItems.map(item => addItem(item)) 
    showQueue() 
} 

function addItem(item){ 
    const queueItem = document.createElement('li'); 
    queueItem.classList.add('queue__list--item'); 
    queueItem.textContent = item; 
    queue.appendChild(queueItem); 
} 

function handleAdding(){ 
    inputValue = input.value.trim();

    if (inputValue && listItems.length < myAge){ 
        listItems.push(inputValue); 
        addItem(inputValue)
        showQueue()
        input.value = ''; 
        localStorage.setItem('listItems', JSON.stringify(listItems)); 
    } 
    else if (listItems.length >= myAge) { 
        alert(`You can't add more than ${myAge} items to the queue :(`); 
    } 
    else{ 
        alert('You can`t add to the queue an empty item') 
    } 
} 

function handleRemoving(){ 
    if(listItems.length < 1){ 
        alert('You can`t remove anything from the empty queue') 
    } 
    else{ 
        queue.removeChild(queue.firstChild); 
        listItems.shift(); 
        localStorage.setItem('listItems', JSON.stringify(listItems)); 
        hideQueue() 
    } 
}

addBtn.addEventListener('click', handleAdding);
removeBtn.addEventListener('click', handleRemoving)
renderQueue();