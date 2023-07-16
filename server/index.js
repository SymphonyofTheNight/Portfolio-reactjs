import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const formFactor = req.headers['ch-ua-form-factor'];

  if (formFactor === 'mobile') {
    // Render mobile-specific content or layout
    res.render('mobile_template');
  } else {
    // Render desktop-specific content or layout
    res.render('desktop_template');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});