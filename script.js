function validateLoginForm(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "" || password === "") {
        alert("All fields are required");
        return false;
    }

    if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))) {
        alert("Invalid email format");
        return false;
    }
    alert("Form submitted successfully");
    window.location.href = "home.html";

    return false;
}

function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var country = document.getElementById("country").value;
    var faculty = document.getElementById("faculty").value;
    var department = document.getElementById("department").value;

    if (fname === "" || lname === "" || email === "" || password === "" || cpassword === "" || phone === "" || age === "" || country === "" || faculty === "" || department === "") {
        alert("All fields are required");
        return false;
    }

    if (password !== cpassword) {
        alert("Passwords do not match");
        return false;
    }

    if (!(/^\d+$/.test(age))) {
        alert("Age must be a number");
        return false;
    }

    if (!(/^\d+$/.test(phone))) {
        alert("Phone number must be a number");
        return false;
    }

    if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))) {
        alert("Invalid email format");
        return false;
    }

    alert("Form submitted successfully");
    window.location.href = "login.html";

    return false;
}
