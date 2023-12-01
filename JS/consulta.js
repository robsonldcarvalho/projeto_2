
window.onload = function () {
    displayList();
};

function saveFormData(formData) {
    var storedData = JSON.parse(localStorage.getItem('formDataList')) || [];
    storedData.push(formData);
    localStorage.setItem('formDataList', JSON.stringify(storedData));
}

function handleSubmit(event) {
    event.preventDefault();
    var formData = {
        dataEnvio: new Date().toLocaleString(),
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
    };

    saveFormData(formData);
    displayList();
    clearForm();
}

function displayList() {
    var myList = document.getElementById('listaCorpo');
    myList.innerHTML = ''; 
    var storedData = JSON.parse(localStorage.getItem('formDataList')) || [];
    storedData.forEach(function (item) {
        var listItem = document.createElement('tr');
        listItem.innerHTML = `<td>${item.dataEnvio}</td><td>${item.nome}</td><td>${item.email}</td><td><button onclick="deleteItem(${storedData.indexOf(item)})">Excluir</button></td>`;
        myList.appendChild(listItem);
    });
}

function deleteItem(index) {
    var storedData = JSON.parse(localStorage.getItem('formDataList')) || [];
    storedData.splice(index, 1);
    localStorage.setItem('formDataList', JSON.stringify(storedData));

    displayList();
}

function deleteAllItems() {
    localStorage.removeItem('formDataList');

    displayList();
}

function searchList() {
    var searchTerm = document.getElementById('pesquisa').value.toLowerCase();
    var storedData = JSON.parse(localStorage.getItem('formDataList')) || [];
    var filteredData = storedData.filter(function (item) {
        return Object.values(item).some(function (value) {
            return value.toLowerCase().includes(searchTerm);
        });
    });

    displayFilteredData(filteredData);
}

function displayFilteredData(filteredData) {
    var myList = document.getElementById('listaCorpo');
    myList.innerHTML = '';
    filteredData.forEach(function (item) {
        var listItem = document.createElement('tr');
        listItem.innerHTML = `<td>${item.dataEnvio}</td><td>${item.nome}</td><td>${item.email}</td><td><button onclick="deleteItem(${filteredData.indexOf(item)})">Excluir</button></td>`;
        myList.appendChild(listItem);
    });
}

function returnToMain() {
    window.location.href = "inicial.html";
}

function returnToForm() {

    window.location.href = "formulario.html";
}

