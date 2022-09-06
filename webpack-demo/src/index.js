import _ from 'lodash';
import printMe from './print.js';

function component() {
    const element = document.createElement('div'); //AHH this makes the DIV!!!
    const btn = document.createElement('button'); //This is making a button!!
    
    //is inner html text? see button below
    //Now they are adding stuff to the div!
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //the html for the button, so the text? 
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    //appened the button to the div? 
    element.appendChild(btn);
  
    return element;
  }
  //appending div to body?
  document.body.appendChild(component());