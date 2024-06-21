/* eslint-disable prettier/prettier */
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { svgData } from './svgData';

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const DEFAULT_FILL_COLOR = 'black';
const DEFAULT_STROKE_COLOR = 'none';
const DEFAULT_STROKE_WIDTH = 1.5;

interface SvgComponentProps {
    svgKey: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}

/**
 * Renders an SVG component based on the provided `svgKey`.
 *
 * @remarks
 * This component renders SVGs based on a key provided in `svgData`.
 *
 * @param props - The props for the SvgComponent.
 * @param props.svgKey - The key to identify the SVG component.
 * @param [props.width=24] - The width of the SVG component. Defaults to `24`.
 * @param [props.height=24] - The height of the SVG component. Defaults to `24`.
 * @param [props.fill='black'] - The fill color of the SVG component. Defaults to `black`.
 * @param [props.stroke='none'] - The stroke color of the SVG component. Defaults to `none`.
 * @param [props.strokeWidth=1.5] - The stroke width of the SVG component. Defaults to `1.5`.
 * @returns The rendered SVG component or `null` if the `svgKey` is not found.
 *
 * @example
 * ```tsx
 * import SvgComponent from 'Rendo/SvgComponent';
 *
 * const MyComponent = () => {
 *   return (
 *     <SvgComponent svgKey="alphabet-a" stroke="white" strokeWidth={3} width={32} height={32} fill="red" />
 *   );
 * };
 * ```
 */
const SvgComponent: React.FC<SvgComponentProps> = ({
    svgKey,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    fill = DEFAULT_FILL_COLOR,
    stroke = DEFAULT_STROKE_COLOR,
    strokeWidth = DEFAULT_STROKE_WIDTH,
}) => {
    // Check if svgKey exists in svgData
    if (!svgData[svgKey]) {
        if (process.env.NODE_ENV !== 'production') {
            throw new Error(`SVG with key "${svgKey}" not found.`);
        } else {
            return <SvgXml xml="<svg></svg>" width={width} height={height} testID="default-svg" />;
        }
    }

    const svgMarkup = svgData[svgKey];
    const svgProps = { width, height, fill, stroke, strokeWidth };

    return (
        <SvgXml xml={svgMarkup ?? null} {...svgProps} testID={`svg-component-${svgKey}`} />
    );
};

export default SvgComponent;
