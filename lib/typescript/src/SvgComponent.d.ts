import React from 'react';
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
 * import SvgComponent from 'react-native-svg-rendo';
 *
 * const MyComponent = () => {
 *   return (
 *     <SvgComponent svgKey="alphabet-a" stroke="white" strokeWidth={3} width={32} height={32} fill="red" />
 *   );
 * };
 * ```
 */
declare const SvgComponent: React.FC<SvgComponentProps>;
export default SvgComponent;
//# sourceMappingURL=SvgComponent.d.ts.map