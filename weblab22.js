function register() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let terms = document.getElementById("terms").checked;

    let gender = document.querySelector('input[name="gender"]:checked');

    let message = "";

    if (name == "") {
        message += "Please enter your name.<br>";
    }

    if (age < 18) {
        message += "Age must be 18 or above.<br>";
    }

    if (email == "") {
        message += "Please enter your email.<br>";
    }

    if (gender == null) {
        message += "Please select gender.<br>";
    }

    if (!terms) {
        message += "Please accept terms and conditions.<br>";
    }

    if (message == "") {

        message = "Registration Successful!<br><br>";
        message += "Student Name: " + name + "<br>";
        message += "Age: " + age + "<br>";
        message += "Email: " + email + "<br>";
        message += "Gender: " + gender.value + "<br>";
        message += "Course: " + course;

    }

    document.getElementById("output").innerHTML = message;
}