import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

console.log("Loaded react-dom");

const myWork = [
  {
    'title': 'Python',
    'image': {
      'desc': 'example screen shot of code',
      'src': 'images/ex_python1.png',
      'comment': ''
    }
  },
  {
    'title': 'Cloud Formation',
    'image': {
      'desc': 'example screen shot of json',
      'src': 'images/ex_cfn1.png',
      'comment': ''
    }
  },
  {
    'title': 'Next Word Prediction',
    'image': {
      'desc': 'example screen shot of tool',
      'src': 'images/ex_qknewt.png',
      'comment': ''
    }
  }

]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
