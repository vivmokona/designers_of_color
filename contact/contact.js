  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyAzv5qQN_SvsMKkgR9jB4ViDAcU4Qkj2Uo",
      authDomain: "designers-of-color-conta.firebaseapp.com",
      databaseURL: "https://designers-of-color-conta.firebaseio.com",
      projectId: "designers-of-color-conta",
      storageBucket: "designers-of-color-conta.appspot.com",
      messagingSenderId: "171393780113"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
  document.getElementById('contactForm');
  document.addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e) {
      e.preventDefault();

      // Get values
      var name = getInputVal('name');
      var email = getInputVal('email');
      var phone = getInputVal('phone');
      var note = getInputVal('note');

      // Save message
      saveMessage(name, email, phone, note);

      // Show alert
      document.querySelector('.alert').style.display = 'block';

      // Hide alert after 3 seconds
      setTimeout(function () {
          document.querySelector('.alert').style.display = 'none';
      }, 3000);

      // Clear form
      document.getElementById('contactForm').reset();
  }

  // Function to get form values
  function getInputVal(id) {
      return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, email, phone, note) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          email: email,
          phone: phone,
          note: note
      });
  }
