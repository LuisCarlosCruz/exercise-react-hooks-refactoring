// src/context/CarsContext.js

import { createContext } from 'react';

const cars = {
    red: false,
    blue: false,
    yellow: false,
}

const CarsContext = createContext(cars);

export default CarsContext;