function sendEmail(){
    let message = document.querySelector('#emailInput').value;
    let emailAddress = 'panav.shah@gmail.com';
    let subject = document.querySelector('#subjectInput').value

    let mailtoMe = 'mailto:' + encodeURIComponent(emailAddress) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);

    window.location.href = mailtoMe;
}