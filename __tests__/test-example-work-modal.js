import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const myExample = {
    'title': 'Python',
    'href': 'https://example.com',
    'desc': 'lorem ipsi',
    'image': {
      'desc': 'example screen shot of code',
      'src': 'images/ex_python1.png',
      'comment': ''
    }
  }

describe("ExampleWorkModal component", () => {

  let component = shallow(<ExampleWorkModal example={myExample} open={false} />);
  let openComponent = shallow(<ExampleWorkModal example={myExample} open={true} />);

  let anchors = component.find("a");
  it("should have a single anchor tag", () => {
    expect(anchors.length).toEqual(1);
  });

  it("should link to our project", () => {
    expect(anchors.prop('href')).toEqual(myExample.href);
  });

  it("should have the closed class in the closed component", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
  });

  it("should have the open class in the open component", () => {
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  });

});
