import express from 'express';

const port = 3000;
const app = express();

const searchMovies = async (searchQuery) => {
 const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=fr-FR&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWI0YzU4ZjQ1ZGYyOWY2ZTNlZDhhZjQ5NjVjYWJlNCIsInN1YiI6IjY1YThlZDU3ZmM1ZjA2MDEyOGJhY2RiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h1UK1Kdbvxcte5-axUMaDKwrpXzd9Q32lTpblM9yBBM'
    },
  };

  const response = await fetch(url, options);
  const json = await response.json();
  
  return json.results;
}

const findMovieByTitle = (title) => (movie) => {
  return movie.title.toLowerCase() === title.toLowerCase();
};

app.get('/movies', async (request, response) => {
  const title = request.query.title;
  const foundMovies = await searchMovies(title);

  if (foundMovies.length === 0) {
    response
      .status(404)
      .json({
        status: 404, 
        message: `We could not found a movie with the title: ${title}`
      });
  }
  
  const movie = foundMovies.find(findMovieByTitle(title)) || foundMovies[0];

  response.json(movie);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
