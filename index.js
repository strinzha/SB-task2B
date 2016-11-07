import express from 'express';

const app = express();

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

    res.send(formattedName);
  } else {
    res.send('Invalid fullname');
  }
});

app.listen(3000, () => {});
