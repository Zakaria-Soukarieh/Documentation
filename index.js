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

/* app.get('/test1', (req, res) => {
  res.json({ status: 200, message: 'okk' });
}); 
app.get('/bye', (req, res) =>{
  res.status(404).json({ status: 404, message: '404 hmmm' });
});*/

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


// for invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

//test
// note: if i write the code from step 3 here it doesn't work, whyyyyy!!!?
/* app.get('/test', (req, res) => {
  res.json({ status: 200, message: 'ok' });
});*/

//note: vice versa too!!!!
/*app.get('/test1', (req, res) => {
  res.json({ status: 200, message: 'okk' });
});

app.get('/bye', (req, res) =>{
  res.json({ status: 404, message: '404 hmmm' });
});*/

// step 6:
