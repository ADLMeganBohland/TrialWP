import _ from 'lodash';


function component() {
    const element = document.createElement('div'); //AHH this makes the DIV!!!
  
    //Now they are adding stuff to the div!

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  //appending div to body?
  document.body.appendChild(component());