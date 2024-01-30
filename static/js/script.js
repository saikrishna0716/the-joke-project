document.addEventListener('DOMContentLoaded', function () {
    // Fetch joke of the day
    fetchJokeOfTheDay();

    // Fetch all jokes
    fetchAllJokes();
});

function fetchJokeOfTheDay() {
    // You can implement logic to fetch a random joke from your CSV file
    // For now, let's display a placeholder joke
    const placeholderJoke = "Why don't scientists trust atoms? Because they make up everything!";
    document.getElementById('joke-of-the-day').innerText = placeholderJoke;
}

function fetchAllJokes() {
    // You can implement logic to fetch all jokes from your CSV file
    // For now, let's add some placeholder jokes to the list
    const placeholderJokes = ["Joke 1", "Joke 2", "Joke 3"];
    const allJokesList = document.getElementById('all-jokes');

    placeholderJokes.forEach(joke => {
        const listItem = document.createElement('li');
        listItem.innerText = joke;
        allJokesList.appendChild(listItem);
    });
}

function searchJokes() {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    const allJokes = document.getElementById('all-jokes').getElementsByTagName('li');

    for (let i = 0; i < allJokes.length; i++) {
        const jokeText = allJokes[i].innerText.toLowerCase();
        if (jokeText.includes(keyword)) {
            allJokes[i].style.display = 'block';
        } else {
            allJokes[i].style.display = 'none';
        }
    }
}
