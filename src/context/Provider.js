// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
  const cars = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
  }

  const [ state, setState ] = useState(cars);

  const moveCar = (car, side) => {
    setState({
       ...state, [car]: side,
    });
  };

  const { children } = props;

  const context = { ...state, moveCar }

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
