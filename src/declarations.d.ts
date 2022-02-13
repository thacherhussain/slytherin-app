//This file fixes typescript errors when using the react-native-svg-transformer package
//with out it, TS will complain about valid props being passed to auto transformed svg files into react components.
declare module '*.svg' {
  import React from 'react'
  import {SvgProps} from 'react-native-svg'
  const declarations: React.FC<SvgProps>
  export default declarations
}
