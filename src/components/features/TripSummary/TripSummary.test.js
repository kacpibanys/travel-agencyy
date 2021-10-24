import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary.js'

describe('Component TripSummary',() => {
    it('should render correct link', () => {
        const expectedLink = '/trip/abc';
        const component = shallow(<TripSummary id='abc' tags={['a', 'b', 'c']}/>);
        const renderedLink = component.find('.link').prop('to');
        expect(renderedLink).toEqual(expectedLink);
    });
    it('should throw error without required props', () => {
        expect(() => shallow(<TripSummary />)).toThrow();
      });
    it('should render correct image', () => {
        const expectedImage = 'image.jpg';
        const expectedAltImage = 'opis';
        const component = shallow(<TripSummary image={expectedImage} name={expectedAltImage} tags={['a', 'b', 'c']}/>)
        const renderedImageSrc = component.find('img').prop('src');
        const renderedImageAlt = component.find('img').prop('alt');

        expect(renderedImageSrc).toEqual(expectedImage);
        expect(renderedImageAlt).toEqual(expectedAltImage);
    });
    it('should render correct name cost and days', () => {
        const expectedName = 'tripName';
        const expectedCost = '$ 15000';
        const expectedDays = 1;
        const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={['a', 'b', 'c']}/>)
        expect(component.find('.title').text()).toEqual(expectedName);
        expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);
        expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);
    });
    it('should render correct tags', () => {
        const expectedTags = ['tag1', 'tag2', 'tag3'];
        const component = shallow(<TripSummary tags={expectedTags}/>
        );
        expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
        expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
        expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
      });
      it('should not render div with class tags if the property tags is a empty array or is false', () => {
        const tagsProp = [];
        const component = shallow(<TripSummary tags={tagsProp} />);
        console.log(component.debug());
      });

});