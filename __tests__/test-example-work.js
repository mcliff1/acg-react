import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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
  }
]


describe("ExampleWork component", () => {
  // only renders one compoennt, not the nested ones
  let component = shallow(<ExampleWork work={myWork} />);


  it("should be a section element", () => {
    expect(component.type()).toEqual('section');
  });


  it("should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });

});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]} />);
  let images = component.find("img");

  it("should contain a single 'img'element", () => {
    expect(images.length).toEqual(1);
  });


  it("should have the image src set correctly", () => {
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  })

});
