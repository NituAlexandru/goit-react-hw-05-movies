React Homework 5 - Routing

To run use:

1. git clone
   [[goit-react-hw-05-movies](https://github.com/NituAlexandru/goit-react-hw-05-movies)]
2. cd [goit-react-hw-05-movies]
3. npm install
4. npm start

- React Technologies and Features Used This project is built using React.js, a
  JavaScript library for building user interfaces, and leverages several
  associated technologies and features to provide a fluid and modern navigation
  experience within the application.

1. React (Create React App) Create React App: The project was initiated using
   Create React App, which offers a robust development environment and
   simplifies the configuration of webpack, Babel, and other tools. Functional
   Components and Hooks: All components are implemented as functions and use
   hooks (useState, useEffect, useContext, etc.) for state management and side
   effects handling. TASKs:
2. React Router Declarative Navigation: We use React Router to manage navigation
   within the application, allowing for asynchronous page loading and navigation
   without reloading the page. Dynamic Routes: Dynamic routes are used to
   display specific movie details based on IDs from URLs. Acceptance Criteria
   Folosește acest model pentru un proiect React ca punct de plecare pentru
   aplicația ta.
3. Lazy Loading and Suspense Lazy Loading: To improve the initial performance of
   the application, page components are lazily loaded using React.lazy.
   Suspense: Along with lazy loading, we use <Suspense> to handle the display of
   a loading indicator while components are being loaded asynchronously.
4. Axios for HTTP Requests Axios: Axios is used to perform HTTP requests to the
   TMDB API, facilitating the handling of asynchronous requests and responses.
5. Styling CSS Modules: Component styling is achieved using CSS Modules, which
   allows for component-level style definition, avoiding name conflicts and
   enhancing style modularity.

[![Preview](https://raw.githubusercontent.com/NituAlexandru/goit-react-hw-05-movies/main/assets/react-hw-04-preview.mp4)](https://github.com/NituAlexandru/goit-react-hw-05-movies/blob/main/assets/react-hw-04-preview.mp4)

- TASKs: Este creat repository-ul goit-react-hw-05-movies. La trimiterea temelor
  există două link-uri: către fișierele sursă și către pagina de lucru din
  GitHub Pages. În starea componentelor se păstrează doar un set minim de date
  necesare, iar restul sunt calculate. La rularea codului, nu există erori și
  avertismente în consolă. Pentru fiecare componentă există un folder separat cu
  un fișier React și unul de stiluri. Pentru toate componentele este descris
  propTypes. În timpul apelului, componentei i se transmit toate datele pe care
  le așteaptă sub formă de props. Numele componentelor sunt clare și
  descriptive. Codul JS este curat și ușor de înțeles, se folosește Prettier.
  Stilizarea este efectuată cu ajutorul CSS modules sau Styled Components. Movie
  search Creează un routing de bază pentru o aplicație de căutare și stocare a
  filmelor. Poți vedea o previzualizare a aplicației aici.

API themoviedb.org Pentru backend, utilizează themoviedb.org API. Trebuie să te
înregistrezi și să obții o cheie pentru API. În această sarcină, vei utiliza
următoarele endpoint-uri.

/trending/get-trending - lista cu cele mai populare filme de astăzi, pentru a
crea o colecție pe pagina principală. /search/search-movies - căutarea unui film
după cuvinte cheie pe pagina de filme. /movies/get-movie-details - solicitarea
informațiilor complete despre un film pentru pagina filmului.
/movies/get-movie-credits - solicitarea informațiilor despre distribuția de
actori pentru pagina filmului. /movies/get-movie-reviews - solicitarea
recenziilor pentru pagina filmului. Link către documentație

Routes Aplicația trebuie să aibă următoarele rute. Dacă utilizatorul accesează o
rută inexistentă, acesta ar trebui să fie redirecționat către pagina de
principală.

'/' - componenta Home, pagina principală cu lista de filme populare. '/movies' -
componenta Movies, pagina de căutare a unui film după cuvântul cheie.
'/movies/:movieId' - componenta MovieDetails, pagina cu informații detaliate
despre film. /movies/:movieId/cast - componenta Cast, informații despre
distribuția de actori. Afișată pe pagina MovieDetails.
/movies/:movieId/reviews - componenta Reviews, informații despre recenzii.
Afișată pe pagina MovieDetails. Code Splitting (separarea codului) Adaugă
încărcarea asincronă a codului JS pentru rutele aplicației folosind React.lazy()
și <Suspense>.
