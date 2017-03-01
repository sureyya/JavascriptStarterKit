import './index.css';

import numeral from 'numeral';

//disable eslint in this file
/* eslint-disable no-console */

//disable eslint in this line
debugger; //eslint-disable-line no-debugger

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue}  for this awesome course !`);
