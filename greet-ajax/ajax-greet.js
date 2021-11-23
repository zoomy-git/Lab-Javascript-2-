const button = document.querySelector('#greet');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
    const name = document.querySelector('#name').value;

    message.textContent = 'Please wait...';

    fetch('http://localhost:8080/greet-ajax/greet.php', {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${name}`
    })
    .then(res => res.text())
    .then(data => message.textContent = data);
});

