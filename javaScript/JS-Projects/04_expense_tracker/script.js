// const { json } = require("express");

document.addEventListener("DOMContentLoaded", () => {
  const formId = document.getElementById('expense-form')
  let expenseName = document.getElementById('expense-name');
  let expensePrice = document.getElementById('expense-amount')
  const expenseList = document.getElementById('expense-list')
  const totalamount = document.getElementById('total-amount')


  let Expenses = [];

  formId.addEventListener('submit', (e) => {
    e.preventDefault();
    addExpense(expenseName.value, parseFloat(expensePrice.value))
    expenseName.value = '';
    expensePrice.value = '';
  })

  function addExpense(Name, Price) {

    Expenses.push({ Name, Price });
    saveToLocalStorage();
    renderexpense();


  }

  function renderexpense() {
    expenseList.innerHTML = '';
    let totalprice = 0;




    Expenses.forEach((expense, index) => {
      totalprice += expense.Price;
      const item = document.createElement('li');
      item.innerHTML = `
     ${expense.Name}-$${expense.Price.toFixed(2)}
     <button class='remove-btn'>Remove</button>
     `
      item.querySelector('.remove-btn').addEventListener('click', () => {
        Expenses.splice(index, 1);
        saveToLocalStorage()
        renderexpense();
      });
      expenseList.appendChild(item);


    })
    totalamount.textContent = `${totalprice.toFixed(2)}`;

  }


  function saveToLocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(Expenses));
  }

  function loadFromLocalStorage() {
    const data = localStorage.getItem('expenses');
    if (data) {
      Expenses = JSON.parse(data);
      renderexpense();
    }
  }

  loadFromLocalStorage();



});
