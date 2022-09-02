import _ from 'lodash';
import './style.css';
import Icon from './smile.png';

function component() {
    const element = document.createElement('div'); //AHH this makes the DIV!!!
  
    //Now they are adding stuff to the div!

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  

      // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
  }
  //appending div to body?
  document.body.appendChild(component());