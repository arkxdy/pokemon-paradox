const dotenv = require('dotenv');
dotenv.config({
  path: 'D:/Projects/Pokemon Paradox/api/src/.env'
});

const app = require('./app')

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT || 3000}`);
});