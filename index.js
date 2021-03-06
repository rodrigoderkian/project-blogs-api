const express = require('express');
const { userRoutes } = require('./routes');
const { categoriesRoutes } = require('./routes');
const { postRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(userRoutes);
app.use(categoriesRoutes);
app.use(postRoutes);
