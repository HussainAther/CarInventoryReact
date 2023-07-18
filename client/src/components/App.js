// client/src/components/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import CarForm from './CarForm';
import CarList from './CarList';
import CarDetails from './CarDetails';
import axios from 'axios';

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleAddCar = async (formData) => {
    try {
      const response = await axios.post('/api/cars', formData);
      setCars((prevCars) => [...prevCars, response.data]);
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  const handleDeleteCar = async (carId) => {
    try {
      await axios.delete(`/api/cars/${carId}`);
      setCars((prevCars) => prevCars.filter((car) => car._id !== carId));
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <Router>
      <Container maxWidth="md">
        <h1>Car Inventory</h1>
        <Switch>
          <Route path="/cars/:id">
            <CarDetails onDelete={handleDeleteCar} />
          </Route>
          <Route path="/" exact>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <CarForm onSubmit={handleAddCar} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CarList cars={cars} onEdit={(car) => console.log('Edit:', car)} onDelete={handleDeleteCar} />
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

