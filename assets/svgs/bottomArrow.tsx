import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";

const BottomArrow = (props: SvgProps) => (
  <Svg width={195} height={245} viewBox="0 0 195 245" fill="none" {...props}>
    <Rect
      x={-34.2253}
      y={10.7057}
      width={242}
      height={242}
      transform="rotate(41.4099 -34.2253 10.7057)"
      stroke="#32E0C4"
      strokeOpacity={0.3}
      strokeDasharray="8 8"
    />
    <Rect
      x={12.7747}
      y={0.705719}
      width={242}
      height={242}
      transform="rotate(41.4099 12.7747 0.705719)"
      stroke="#32E0C4"
      strokeOpacity={0.3}
      strokeDasharray="8 8"
    />
  </Svg>
);
export default BottomArrow;
