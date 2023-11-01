import * as React from "react";
import Svg, { SvgProps, G, Circle } from "react-native-svg";

const Circles = (props: SvgProps) => (
  <Svg width={375} height={146} viewBox="0 0 375 146" fill="none" {...props}>
    <G opacity={0.6}>
      <Circle
        cx={187}
        cy={286}
        r={284}
        stroke="#32E0C4"
        strokeOpacity={0.3}
        strokeWidth={4}
        strokeDasharray="10 10"
      />
      <Circle
        cx={187}
        cy={286}
        r={260}
        stroke="#32E0C4"
        strokeOpacity={0.4}
        strokeWidth={4}
        strokeDasharray="10 10"
      />
      <Circle
        cx={187}
        cy={286}
        r={234}
        stroke="#32E0C4"
        strokeOpacity={0.5}
        strokeWidth={4}
        strokeDasharray="10 10"
      />
      <Circle
        cx={187}
        cy={286}
        r={206}
        stroke="#32E0C4"
        strokeOpacity={0.6}
        strokeWidth={4}
        strokeDasharray="10 10"
      />
    </G>
  </Svg>
);
export default Circles;
