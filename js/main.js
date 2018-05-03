import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

console.log("Loaded react-dom");

const myWork = [
  {
    'title': 'Python',
    'href': 'https://example.com',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'image': {
      'desc': 'example screen shot of code',
      'src': 'images/ex_python1.png',
      'comment': ''
    }
  },
  {
    'title': 'Cloud Formation',
    'href': 'https://example.com',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'image': {
      'desc': 'example screen shot of json',
      'src': 'images/ex_cfn1.png',
      'comment': ''
    }
  },
  {
    'title': 'Next Word Prediction',
    'href': 'https://example.com',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'image': {
      'desc': 'example screen shot of tool',
      'src': 'images/ex_qknewt.png',
      'comment': ''
    }
  }

]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
