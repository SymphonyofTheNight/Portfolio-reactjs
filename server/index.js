import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

// routes 
import routes from './router/routes.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

// port
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('App is running');
})

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})

