function sendToWhatsApp() {
    var name = document.getElementById("name").value;
    var msg = document.getElementById("message").value;
    var mail = document.getElementById("email").value;
    var phone = "917368906091"; // Replace with your WhatsApp number
    var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent("Name: " + name + "\nMessage: " + msg+"\nemail: "+ mail);
    window.open(url, '_blank');
  }