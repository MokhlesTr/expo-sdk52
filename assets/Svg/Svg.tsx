import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const ArrowLeftIcon = ({ color = "#171717" }: { color?: string }) => (
  <Svg width={hp("1.171%")} height={hp("2 %")}>
    <Path
      data-name="Trac\xE9 32479"
      d="M6.464 11.635 1 6.171 6.464.707"
      fill="none"
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);
