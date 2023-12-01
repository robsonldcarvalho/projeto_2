function clearForm() {

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('assunto').value = '';

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    document.getElementById('comentario').value = '';
}

function saveFormData(formData) {
    var storedData = JSON.parse(localStorage.getItem('formDataList')) || [];
    storedData.push(formData);
    localStorage.setItem('formDataList', JSON.stringify(storedData));
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSubmit(event) {
    event.preventDefault();
    var formData = {
        dataEnvio: new Date().toLocaleString(),
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
    };
    saveFormData(formData);
    clearForm();
    scrollToTop();
    alert('Formulário enviado com sucesso!');
}