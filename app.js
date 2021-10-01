document.getElementById('add-expense').addEventListener('click', runEvent);

function runEvent(e){
    
    const nameInput = document.getElementById('name-input').value
    const addName = document.createTextNode(nameInput);
    const addTdata1 = document.createElement('td');
    addTdata1.appendChild(addName);
  
    const dateInput = document.getElementById('date-input').value
    const addDate = document.createTextNode(dateInput);
    const addTdata2 = document.createElement('td');
    addTdata2.appendChild(addDate);

    const amtInput = document.getElementById('number-input').value
    const addAmt = document.createTextNode(amtInput);
    const addTdata3 = document.createElement('td');
    addTdata3.className = 'val';
    addTdata3.innerHTML = '$';
    addTdata3.appendChild(addAmt);
 
    const addTrow = document.createElement('tr');
    addTrow.appendChild(addTdata1);
    addTrow.appendChild(addTdata2);
    addTrow.appendChild(addTdata3);

    document.querySelector('tbody').appendChild(addTrow);
};



