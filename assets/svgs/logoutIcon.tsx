import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import colors from "../../lib/colors";

const LogoutIcon = (props: SvgProps) => (
  <Svg width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
      stroke={colors.white}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 12H14.88"
      stroke={colors.white}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.65 8.6499L16 11.9999L12.65 15.3499"
      stroke={colors.white}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LogoutIcon;
