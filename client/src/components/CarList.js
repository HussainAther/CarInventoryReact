// client/src/components/CarList.js
import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';

const CarList = ({ cars, onEdit, onDelete }) => {
  return (
    <Grid container spacing={2}>
      {cars.map((car) => (
        <Grid item key={car._id} xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {car.make}
              </Typography>
              <Typography variant="body1">Model: {car.model}</Typography>
              <Typography variant="body1">Year: {car.year}</Typography>
              <Typography variant="body1">Price: ${car.price}</Typography>
              <Button color="primary" onClick={() => onEdit(car)}>
                Edit
              </Button>
              <Button color="error" onClick={() => onDelete(car._id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CarList;

