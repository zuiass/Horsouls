function checkUserExists(email, password) {
  const user = User.findOne({ email, password });
  return !!user;
}

document.getElementById('button-login').addEventListener('click', function() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  const userExists = checkUserExists(email, password);

  if (userExists) {
    console.log('User exists');
    openHomePage();
  } else {
    console.log('User does not exist');
  }

});

function openHomePage() {
  window.location.href = './Home/index.html';
}