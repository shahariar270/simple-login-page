//all variable handle
const input = document.querySelector('input');
const btn = document.querySelector('#btn');
const changeElement = document.querySelector('#changeElement');
const password = document.querySelector('#password');
const aleartMe = document.querySelector('h3');
 const watchElement = document.getElementById('watch');

//massage button click event
btn.addEventListener("click", () => {
    if (input.value === "") {

        setTimeout(() => {


            input.classList.add('new-border');
            password.classList.add('new-border');
            aleartMe.innerHTML = `please enter correct email/password`;
            aleartMe.classList.add('aleartMe');
        }, 1000);


    } else {
        input.classList.remove('new-border');
        password.classList.remove('new-border');
        aleartMe.classList.remove('aleartMe');
        aleartMe.innerHTML = ``; 
    }
});

//changeElement
changeElement.addEventListener("click", () => {
    
        if (password.type === 'password') {
            password.setAttribute('type', 'text');
            changeElement.innerHTML = '<i class="fas fa-eye"></i>';
        } else {
            password.setAttribute('type', 'password');
            changeElement.innerHTML = '<i class="fas fa-eye-slash"></i>';
        }


});

function updateWatch() {
   
    let date = new Date();
    let hours = date.getHours() % 12 || 12; // Convert to 12-hour format
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    // Format the time to ensure two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    watchElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update the watch every second
setInterval(updateWatch, 1000);

// Initial call to display the time immediately
updateWatch();