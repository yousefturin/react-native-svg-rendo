# react-native-svg-rendo

A package for rendering SVG images in React Native based on [basicons](https://basicons.xyz/)

## Installation

```sh
npm install react-native-svg-rendo
```

## Usage

```js
import SvgComponent from 'react-native-svg-rendo';

const MyComponent = () => {
  return (
    <SvgComponent
      svgKey="alphabet-a"
      stroke="white"
      strokeWidth={3}
      width={32}
      height={32}
      fill="red"
    />
  );
};
```

## Note

Styling for the SvgComponent itself cannot be done directly. Instead, you need to pass styling properties like **stroke**, **strokeWidth**, **width**, **height**, and **fill** as props. Native styling support is under development and will allow the component to receive style props in future updates.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## SVG Gallery

[Reference](https://yousefturin.github.io/react-native-svg-rendo/)

## More SVG Icons Coming Soon

Stay tuned for additional SVG icons that will be added to the package in future updates.

## For more information

* You can take a look at the change log [here](https://github.com/yousefturin/react-native-svg-rendo/blob/main/CHANGELOG.md)

---
