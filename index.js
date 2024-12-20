require('dotenv').config();

const express = require('express');
const axios = require('axios');
const pug = require('pug');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3002; 

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));


const PRIVATE_APP_ACCESS = process.env.APIKEY;

// Route 1

app.get('/', async (req, res) => {

    const technologies = 'https://api.hubspot.com/crm/v3/objects/2-38101974?properties=id,name,vendor';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }

    try {
        const resp = await axios.get(technologies, { headers });
        const data = resp.data.results;
        res.render('homepage', { title: 'Custom Object Records | Integrating With HubSpot I Practicum', records: data });        
    } catch (error) {
        console.error(error);
    }

});


// Route 2

app.get('/update-cobj', (req, res) => {
    res.render('updates', {
      title: 'Update Custom Object Form | Integrating With HubSpot I Practicum',
    });
  });


// Route 3

app.post('/update-cobj', async (req, res) => {
    try {
        console.log(req.body);

        const createTechnologyMessage = {
            properties: {
                id:  req.body.id,
                name:  req.body.name,
                vendor:  req.body.vendor
            }
        }
         
        const headers = {
            Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
            'Content-Type': 'application/json'
        }

        const resp = await axios.post('https://api.hubspot.com/crm/v3/objects/2-38101974', createTechnologyMessage, { headers } ); // Replace with your API endpoint
      
       

        // repopulate homepage
        const technologies = 'https://api.hubspot.com/crm/v3/objects/2-38101974?properties=id,name,vendor';

        try {
            const resp = await axios.get(technologies, { headers });
            const data = resp.data.results;
            res.render('homepage', { title: 'Custom Object Records | Integrating With HubSpot I Practicum', records: data });        
        } catch (error) {
            console.error(error);
        }

    }
    catch (error)
    {
        console.error("Error creating technology:", error);
    }
}); 