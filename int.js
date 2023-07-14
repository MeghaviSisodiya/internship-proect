document.addEventListener('DOMContentLoaded', function() {
    const serviceForm = document.getElementById('service-form');
    const servicesList = document.getElementById('services');
  
    serviceForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const serviceNameInput = document.getElementById('service-name');
      const servicePriceInput = document.getElementById('service-price');
  
      const serviceName = serviceNameInput.value;
      const servicePrice = servicePriceInput.value;
  
      if (serviceName && servicePrice) {
        const listItem = document.createElement('li');
        const serviceDetails = document.createElement('span');
        serviceDetails.textContent = `${serviceName} - $${servicePrice}`;
        listItem.appendChild(serviceDetails);
        servicesList.appendChild(listItem);
  
        serviceNameInput.value = '';
        servicePriceInput.value = '';
      } else {
        alert('Please fill in all the fields.');
      }
    });
  });
  

  const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Array to store the services
let services = [];

// Get all services
app.get('/services', (req, res) => {
  res.json(services);
});

// Add a new service
app.post('/services', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newService = {
    id: services.length + 1,
    name,
    price
  };

  services.push(newService);
  res.status(201).json(newService);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
