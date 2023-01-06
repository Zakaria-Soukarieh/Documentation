// step 2:
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Step 3:
app.get('/test', (req, res) => {
  res.json({ status: 200, message: 'ok' });
});

app.get('/time', (req, res) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  res.json({ status: 200, message: `${hours}:${minutes}` });
});

// step 4:
app.get('/hello/:id', (req, res) => {
  const { id } = req.params;
  res.json({ status: 200, message: `Hello, ${id}` });
});

app.get('/search', (req, res) => {
  const { s } = req.query;
  if (s) {
    res.json({ status: 200, message: 'ok', data: s });
  } else {
    res.status(500).json({ status: 500, error: true, message: 'you have to provide a search' });
  }
});

// step 5:
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'wth', year: 1992, rating: 6.2 }
];

// Create a movie
app.get('/movies/create/:id', (req, res) => {
  const movieId = req.params.id;
    res.send(`Movie ${movieId} created!`);
  });

  // Read a movie
  app.get('/movies/read/', (req, res) => {
    res.json({ status: 200, data: movies});
  });
  
  // Update a movie
  app.get('/movies/update/:id', (req, res) => {
    const movieId = req.params.id;
    res.send(`Movie ${movieId} updated!`);
  });
  
  // Delete a movie
  app.get('/movies/delete/:id', (req, res) => {
    const movieId = req.params.id;
    res.send(`Movie ${movieId} deleted!`);
  });

// step 6:
app.get('/movies/read/by-date', (req, res) => {
  const moviesSortedByDate = movies.sort((a, b) => b.year - a.year);
  res.status(200).json({ status: 200, data: moviesSortedByDate });
});

app.get('/movies/read/by-rating', (req, res) => {
  const moviesSortedByRating = movies.sort((a, b) => b.rating - a.rating);
  res.status(200).json({ status: 200, data: moviesSortedByRating });
});

//! i need to understand this part more later. what is -1 1 0...
app.get('/movies/read/by-title', (req, res) => {
  const moviesSortedByTitle = movies.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  res.status(200).json({ status: 200, data: moviesSortedByTitle });
});


