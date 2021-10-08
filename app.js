class Expense {
    constructor(item, date, price){
        this.item = item;
        this.date = date;
        this.price = price;
    }
}

class UI {
    addExpenseToTable (expense){
        const tbody = document.querySelector('tbody');
        const trow = document.createElement('tr');

        trow.innerHTML = `
        <td>${expense.item}</td>
        <td>${expense.date}</td>
        <td>$ ${expense.price}</td>
        `;

        tbody.appendChild(trow);
    }
}

document.querySelector('button').addEventListener('click', function (e){
    console.log('test')
    const item = document.getElementById('purchased-item').value;
    const date = document.getElementById('purchase-date').value;
    const price = document.getElementById('purchase-price').value;

    console.log(item)

    const expense = new Expense(item, date, price);
    console.log(expense)

    const ui = new UI();

    ui.addExpenseToTable(expense)

    console.log(ui);

    e.preventDefault()
})


