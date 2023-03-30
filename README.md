# Rick and Morty Characters App
This is a React app that displays characters from the Rick and Morty TV show. It uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch character data and displays the results using Tailwind CSS for styling.

## Pages
### Home
The first page displays a list of characters with their name, status, and origin. The list loads more characters as the user scrolls down. The app uses the useEffect hook to fetch data from the API and the useState hook to keep track of the current page and loading state. It also uses the IntersectionObserver API to detect when the user reaches the bottom of the page and load more data. The Navbar component is used to display a header with the app's name.

### Character Details
Clicking on a character from the home page will take the user to the character details page. This view displays the character's name, status, origin, gender, and location. The app uses the useParams hook from react-router-dom to get the character's id from the URL and fetches the character data using the useEffect and useState hooks. The Navbar component is used to display a header with a link to go back to the home page.

## Components
### Navbar
The Navbar component is used in both pages to display a header with the app's name and a link to go back to the home page.

### Cards
The Cards component is used in the home page to display a list of characters. It takes an array of character objects as a prop and maps over them to create a div for each character. Each div displays the character's name, status, origin, and an image. The image is wrapped in a Link component from react-router-dom to navigate to the character details page when clicked. The Cards component uses the uuidv4 library to generate a unique key prop for each character div.

### CardDetails
The CardDetails component is used to display an individual character's details. It uses the useParams hook from react-router-dom to get the character's id from the URL and fetches the character data using the useEffect and useState hooks. It displays the character's name, status, origin, gender, and location.

## Installation
To run the app locally, follow these steps:

- Clone the repository: **git clone https://github.com/example/rick-and-morty-app.git**
- Install the dependencies: **npm install**
- Start the app: **npm start**
- Open the app in your browser: **http://localhost:3000**

## Future Improvements
- Add search and filtering functionality to allow users to find specific characters based on different criteria.
- Improve the UI/UX design of the app to make it more visually appealing and user-friendly.

## Credits
This app was created by Graeme Byrne and is based on the [Rick and Morty API](https://rickandmortyapi.com/). It uses the following libraries and frameworks:

- React
- Tailwind CSS
- react-router-dom
- uuidv4