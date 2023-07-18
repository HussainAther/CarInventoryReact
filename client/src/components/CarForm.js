// client/src/components/CarForm.js
import React, { useState } from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';

const CarForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      make: '',
      model: '',
      year: '',
      price: '',
    });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Add New Car
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Make"
            name="make"
            value={formData.make}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Year"
            name="year"
            type="number"
            value={formData.year}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CarForm;

