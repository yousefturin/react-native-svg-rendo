import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import SvgComponent from 'react-native-svg-rendo';

export default function App() {
  return (
    <View style={styles.container}>
      <SvgComponent
        svgKey="alphabet-a"
        width={100}
        height={100}
        fill="red"
        stroke="black"
        strokeWidth={1.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
