const button = document.querySelector('.btn');
const joke = document.querySelector('.joke');

  function getJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      joke.textContent = data.joke;
    });
  }

button.addEventListener('click', getJoke);