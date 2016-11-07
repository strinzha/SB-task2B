import express from 'express';

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/task2B', (req, res) => {
  const fullName = req.query.fullname;
  const re = /([^\x00-\x7F]|\w)+/g;
  const matches = fullName ? fullName.match(re) : null;
  let formattedName = '';
  if (matches && matches.length < 4) {
    formattedName += `${matches[matches.length - 1]} `;
    formattedName += matches
      .filter((name, index) => index !== matches.length - 1)
      .map(name => `${name.charAt(0)}. `).join('');

    res.send(formattedName.slice(0, -1));
  } else {
    res.send('Invalid fullname');
  }
});

app.listen(3000, () => {});
