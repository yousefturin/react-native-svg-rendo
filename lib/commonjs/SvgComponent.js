"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = require("react-native-svg");
var _svgData = require("./svgData");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /* eslint-disable prettier/prettier */
const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const DEFAULT_FILL_COLOR = 'none';
const DEFAULT_STROKE_COLOR = 'black';
const DEFAULT_STROKE_WIDTH = 1.5;
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
const SvgComponent = ({
  svgKey,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  fill = DEFAULT_FILL_COLOR,
  stroke = DEFAULT_STROKE_COLOR,
  strokeWidth = DEFAULT_STROKE_WIDTH
}) => {
  // Check if svgKey exists in svgData
  if (!_svgData.svgData[svgKey]) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(`SVG with key "${svgKey}" not found.`);
    } else {
      return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.SvgXml, {
        xml: "<svg></svg>",
        width: width,
        height: height,
        testID: "default-svg"
      });
    }
  }
  const svgMarkup = _svgData.svgData[svgKey];
  const svgProps = {
    width,
    height,
    fill,
    stroke,
    strokeWidth
  };
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.SvgXml, _extends({
    xml: svgMarkup ?? null
  }, svgProps, {
    testID: `svg-component-${svgKey}`
  }));
};
var _default = exports.default = SvgComponent;
//# sourceMappingURL=SvgComponent.js.map