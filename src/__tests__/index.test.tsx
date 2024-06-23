/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from '@testing-library/react-native';
import SvgComponent from '../SvgComponent';

describe('SvgComponent', () => {

    it('renders correctly with valid svgKey', () => {
        const { getByTestId } = render(
            <SvgComponent
                svgKey="alphabet-a"
                width={100}
                height={100}
                fill="red"
                stroke="#ffffff"
                strokeWidth={1.5}
            />
        );

        const svgElement = getByTestId('svg-component-alphabet-a');

        // Assert that SvgComponent renders the correct SVG with props
        expect(svgElement.props.xml).toBeDefined();
        expect(svgElement.props.width).toBe(100);
        expect(svgElement.props.height).toBe(100);
        expect(svgElement.props.fill).toBe('red');
        expect(svgElement.props.stroke).toBe('#ffffff');
        expect(svgElement.props.strokeWidth).toBe(1.5);
    });




    it('throws error when svgKey is missing in development', () => {
        const env = process.env.NODE_ENV;
        process.env.NODE_ENV = 'development';

        // Mock console.error to prevent it from being logged during the test
        const originalConsoleError = console.error;
        console.error = jest.fn();

        // Assert that SvgComponent throws an error when svgKey is missing
        expect(() => {
            render(
                <SvgComponent
                    svgKey="non-existing-key"
                    width={100}
                    height={100}
                    fill="red"
                    stroke="black"
                    strokeWidth={1.5}
                />
            );
        }).toThrow('SVG with key "non-existing-key" not found.');

        // Restore NODE_ENV and console.error after test
        process.env.NODE_ENV = env;
        console.error = originalConsoleError;
    });



    it('renders default SVG when svgKey is missing in production', () => {
        const env = process.env.NODE_ENV;
        process.env.NODE_ENV = 'production';

        // Render SvgComponent with non-existing svgKey
        const { getByTestId } = render(
            <SvgComponent
                svgKey="non-existing-key"
                width={100}
                height={100}
                fill="red"
                stroke="black"
                strokeWidth={1.5}
            />
        );

        // Find default SVG element by testID
        const svgElement = getByTestId('default-svg');

        // Assert that SvgComponent renders the default SVG with default props
        expect(svgElement.props.xml).toBe('<svg></svg>'); // Check for default SVG markup
        expect(svgElement.props.width).toBe(100);
        expect(svgElement.props.height).toBe(100);
        expect(svgElement.props.fill).toBeUndefined();
        expect(svgElement.props.stroke).toBeUndefined();
        expect(svgElement.props.strokeWidth).toBeUndefined();

        process.env.NODE_ENV = env; // Restore NODE_ENV after test
    });





    it('merges custom props correctly', () => {
        const { getByTestId } = render(
            <SvgComponent
                svgKey="alphabet-a"
                width={100}
                height={100}
                fill="green"
                stroke="blue"
                strokeWidth={6}
            />
        );

        const svgElement = getByTestId('svg-component-alphabet-a');
        expect(svgElement).toBeTruthy();
        expect(svgElement.props.fill).toBe('green');
        expect(svgElement.props.stroke).toBe('blue');
        expect(svgElement.props.strokeWidth).toBe(6);
    });





    it('renders correctly with valid svgKey and default props', () => {
        const { getByTestId } = render(
            <SvgComponent
                svgKey="alphabet-a"
            />
        );

        const svgElement = getByTestId('svg-component-alphabet-a');
        expect(svgElement).toBeTruthy();
        expect(svgElement.props.fill).toBe('none');
        expect(svgElement.props.stroke).toBe('black');
        expect(svgElement.props.width).toBe(24);
        expect(svgElement.props.height).toBe(24);
        expect(svgElement.props.strokeWidth).toBe(1.5);
    });

});
