// Fetch movie data and display the first movie details
fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(data => {
        const firstMovie = data[0];
        displayMovieDetails(firstMovie);
    })
    .catch(error => console.error('Error:', error));

function displayMovieDetails(movie) {
    const movieInfo = document.getElementById('movie-info');
    const filmList = document.getElementById('film-list');

    const posterImg = document.createElement('img');
    posterImg.src = movie.poster;
    posterImg.alt = movie.title;

    const titleHeading = document.createElement('h3');
    titleHeading.textContent = movie.title;

    const runtimeParagraph = document.createElement('p');
    runtimeParagraph.textContent = `Runtime: ${movie.runtime} minutes`;

    const showtimeParagraph = document.createElement('p');
    showtimeParagraph.textContent = `Showtime: ${movie.showtime}`;

    const availableTickets = movie.capacity - movie.tickets_sold;
    const ticketsParagraph = document.createElement('p');
    ticketsParagraph.textContent = `Tickets Available: ${availableTickets}`;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy Ticket';

    // Disable the buy button if no tickets available
    if (availableTickets === 0) {
        buyButton.disabled = true;
        buyButton.textContent = 'Sold Out';
        filmList.querySelector(`li[data-id="${movie.id}"]`).classList.add('sold-out');
    }

    buyButton.addEventListener('click', () => {
        if (availableTickets > 0) {
            ticketsParagraph.textContent = `Tickets Available: ${availableTickets - 1}`;
            buyButton.disabled = true;
            availableTickets--;
            filmList.querySelector(`li[data-id="${movie.id}"]`).classList.add('sold-out');
        }
    });

    movieInfo.innerHTML = '';
    movieInfo.appendChild(posterImg);
    movieInfo.appendChild(titleHeading);
    movieInfo.appendChild(runtimeParagraph);
    movieInfo.appendChild(showtimeParagraph);
    movieInfo.appendChild(ticketsParagraph);
    movieInfo.appendChild(buyButton);
}

// Fetch movie list and populate the film menu
fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(data => {
        const filmList = document.getElementById('film-list');
        data.forEach(movie => {
            const filmItem = document.createElement('li');
            filmItem.classList.add('film-item');
            filmItem.textContent = movie.title;
            filmItem.setAttribute('data-id', movie.id);

            filmItem.addEventListener('click', () => {
                displayMovieDetails(movie);
            });

            filmList.appendChild(filmItem);
        });
    })
    .catch(error => console.error('Error:', error));
