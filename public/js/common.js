function validateForm() {
    let inputTitle = document.getElementById('inputTitle').value;
    var isValid = true;
    if (inputTitle === '') {
        document.getElementById('inputError').textContent = "cannot be empty";
        isValid = false;
    } else if (inputTitle.length < 3) {
        document.getElementById('inputError').textContent = "todo should not be less than 3 characters";
        isValid = false;
    } else {
        document.getElementById('inputError').textContent = "";
    }

    return isValid;
}


