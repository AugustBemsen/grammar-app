import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";

const Arrows = (props: SvgProps) => (
  <Svg width={200} height={302} viewBox="0 0 200 302" fill="none" {...props}>
    <Rect
      x={160.775}
      y={-40.2943}
      width={242}
      height={242}
      transform="rotate(41.4099 160.775 -40.2943)"
      stroke="#32E0C4"
      strokeOpacity={0.3}
      strokeDasharray="8 8"
    />
    <Rect
      x={207.775}
      y={-50.2943}
      width={242}
      height={242}
      transform="rotate(41.4099 207.775 -50.2943)"
      stroke="#32E0C4"
      strokeOpacity={0.3}
      strokeDasharray="8 8"
    />
  </Svg>
);
export default Arrows;
