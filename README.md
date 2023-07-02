# Flatndago
Flatdango is a movie ticket booking application that allows users to purchase movie tickets from the Flatiron Movie Theater.

## Features

- Display movie details including poster, title, runtime, showtime, and available tickets.
- Show a menu of all movies available.
- Buy tickets for a movie.
- Optional: Click on a movie in the menu to view its details.
- Optional: Indicate sold-out movies and disable the "Buy Ticket" button.
- Extra: Persist ticket purchases by updating the server data.

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON DB Server

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd flatdango`
3. Install dependencies: None required
4. Start the application: Open the `index.html` file in your preferred web browser.

## Server API

The application fetches data from a local JSON DB server. The following endpoints are used:

- `GET /films`: Get the list of all movies.
- `GET /films/:id`: Get the details of a specific movie.

## Development

The application's main files are:

- `index.html`: The main HTML file that contains the structure of the application.
- `style.css`: The CSS file that handles the styling of the application.
- `script.js`: The JavaScript file that implements the functionality of the application.

Feel free to modify and enhance the application as needed for your specific requirements.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request. 

## License

This project is licensed under the [MIT License](LICENSE).
