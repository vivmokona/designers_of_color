// Initialize Firebase
var config = {
    apiKey: "AIzaSyDrcKhaMzIKIEobYapKz7xnJvLgVig18-g",
    authDomain: "designers-of-color.firebaseapp.com",
    databaseURL: "https://designers-of-color.firebaseio.com",
    projectId: "designers-of-color",
    storageBucket: "designers-of-color.appspot.com",
    messagingSenderId: "552611002310"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm')
document.addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var location = getInputVal('location');
    var designfield = getInputVal('designfield');
    var portfolio = getInputVal('portfolio');
    var handle = getInputVal('handle');
    var photo = getInputVal('photo');
    var q1 = getInputVal('q1');
    var q2 = getInputVal('q2');
    var q3 = getInputVal('q3');
    var q4 = getInputVal('q4');
    var q5 = getInputVal('q5');

    // Save message
    saveMessage(name, email, location, designfield, portfolio, handle, photo, q1, q2, q3, q4, q5);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, location, designfield, portfolio, handle, photo, q1, q2, q3, q4, q5) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        location: location,
        designfield: designfield,
        portfolio: portfolio,
        handle: handle,
        photo: photo,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5
    });
}
