import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";
const CenterArrow = (props: SvgProps) => (
  <Svg width={375} height={353} viewBox="0 0 375 353" fill="none" {...props}>
    <Rect
      x={152.775}
      y={10.7057}
      width={242}
      height={242}
      transform="rotate(41.4099 152.775 10.7057)"
      stroke="#32E0C4"
      strokeOpacity={0.3}
      strokeDasharray="8 8"
    />
    <Rect
      x={199.775}
      y={0.705719}
      width={242}
      height={242}
      transform="rotate(41.4099 199.775 0.705719)"
      stroke="#32E0C4"
      strokeOpacity={0.3}
      strokeDasharray="8 8"
    />
  </Svg>
);
export default CenterArrow;
