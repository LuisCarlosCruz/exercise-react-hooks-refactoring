// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
    const estado = {
        redCar: false,
        blueCar: false,
        yellowCar: false,
        color: 'red',
      }

  const [state, setState] = useState(estado);

  const moveCar = (car, side) => {
    setState({ ...state, [car]: side });
  };

  const changeSignal = (signalColor) => {
    setState({ ...state, color: signalColor });
  };

  const context = { ...state,
    moveCar,
    changeSignal,
  };

    const { children } = props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};

export default Provider;
