import * as React from "react";
import Svg, {
  ClipPath,
  Defs,
  Image,
  Path,
  G,
  Pattern,
  Use,
} from "react-native-svg";
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
export const CheckIocn = ({ color = "#fff" }: { color?: string }) => (
  <Svg width={10} height={10} viewBox="0 0 12 10" fill="none">
    <Path d="M4 9.4l-4-4L1.4 4 4 6.6 10.6 0 12 1.4l-8 8z" fill={color} />
  </Svg>
);
export const GoogleIcon = ({ color = "#fff" }: { color?: string }) => (
  <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
    <Path fill="url(#pattern0_38_1930)" d="M0 0H22V22H0z" />
    <Defs>
      <Pattern
        id="pattern0_38_1930"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_38_1930" transform="scale(.00781)" />
      </Pattern>
      <Image
        id="image0_38_1930"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABJLSURBVHic7Z17dFTVvce/v33OzORBIAwkIQkgEh5RUBShoqKgEDDEgA+4vlpbb+3V1Vt1uW57sSo4BeqztRVtV7WoyNXV21JZJbwhvHxdKQ8pEkSTkICStwkhIclk5uzf/SMEQ0jIPM7ZZyLzWYu1SGbm9/1N9vfsc84+e/824TsIz8kYAr/jUhBnAkgHcyrAgwEaBMAFIPH0W/sXNvogCEwggwhSgP0EeAXRSY1wTIC+ICH2Okh+6N5cfNC+b2UNZHcC4cLZI5KgiclgvgGgiQDG4NsG7pEvG30BawkCOwl1Dk18phNv4Ni45Sl5BytDSDti6HUG4HnQ0Jx5PaRxK4iyAFyCML5HMAboDAFwCjTpQjvo1ORrSZuPLCdAhhzQBnqFAXgeNDSOmgGBOwHcAmCAWbHDMUBnNEH+GEGfOYDXkrcW/7k3mCGiDcC5oy+GlPcDdD+AwVZomGmAjuhE/lgd2/QY/Cx57ZFCS0RMICINwNmjrwNhPohzAAgrtawyQDsEIFajIqfQHk/JL3zPUrEQiBgDMECYNTIHRPMBTFala7UBOhIjUBurawuTtxT9QZloD0SEAXjWyKtB9CKA61VrqzRAOzEaamNJezB5a9HflYt3wlYD8C2XjATks2C+w64c7DAAAICAWKISpybvGZRf+ok9SdhkAJ43xokm/3yAnwAQY0cO7dhmgNMQAQm6yBvUv3gerUSrcn3VgpyTeS0gX0fbgI3t2G2AdlxCNMZrfFdS/pF1KnWVGYCvusqBlJNLQPRzWHxlHwyRYgCgrTH66GJDqrv4VlW9gRIDcM6o4QD+AuB7KvSCIZIM0I5LUEOcJqYk5xd9arWW5Uci54y8HcA+RGDjRypeyQknDWNPxfSMh63WsswADBDnjJ4P0EoA/azS+a5iSIiTPrm0bFrGeit1LDkF8LzBsWiKexPAXVbEN5NIPAV0Jk6jQq2+/xVpe/c2mR3b9B6Abx2WiKa4fPSCxu8tNBk8Uvar22VFbFMNwNkjkuB3bgNwrZlxowCnJI+tmTZqotlxTTMAzx6dBiF2gnGlWTGjdIABA8Y8s8PqZgTh7BFJMHgrgEwz4kXpBqJTZocMuwfg7BF9IcQGRBvfUgTATqex3IK4ocPzBseCtDwAV5mUT5Ru6KOJlf3Xlxw1O27IBmCA0BT3BoinmJlQlHNJ0MWO1G3Fd1oRO/QeIGfULwHcbV4qUboiQRc70rYW32hV/JAMwDmZMwEsMjmXKJ2wuvGBEEYC+ebMYdDkfvSO4d1mgPYDfBCgQ2CUALICRNWQsgEi1l/pa03UIZMNA31JM4ZIKcZK5kwJDPNLObRVIp5tSDzBIXam5RdPtVonKAPw1Kk64st2ALjOkmzChwHsBfNqsNiOPvpuWlkQ1mPV+pmD3S0cc5dh8Fyv5EmtkmNNyrVbVDU+EKwBZo16GgSPRbmEAReC6U2wfIc2FH1tpVLVjItv8Bvi8WbJ0/2SHWbHV9n4QBAGOD1x80OYNHhkElvB/DzWF+ZT29GvDJ4KvUof8WSL5IdbDGnKQhXVjQ8EaACeOlVHXNleEC63OqGAYNoJyPm0vtCSByTBUp01/KEmP55tkRzwmsTOqLjg64rADJAz6r8A/MbiXALhKJgepfVfrLY7ka6onDbiV42GfMLPHFQvaceR306PBuDc4UMh9QIAfRTk0x0S4KWIcy6glQWNNubRIxUzMpINgzc0+nl8IO+3s/GBQAywW3sbq5IvwoGESWhbW68WQhUk/ZDWf7FRuXYYVE3PeLjBkL/zS2jdvceubr8j5zUAF+AKAHsBCFS4jmJ5eg1qdZXj/u/DZ8yjzcVVCjVNo3ZGxtgGv9zZYsB91gsEJGiUn7b1SJZNqXVMpXu4AFsATD/rl/v77sfKlL7w0XArEwPwBuIcPw33Pt5uGBCV0zJe8jK+bzD3cRCqXZp4LlLWB3ZrAP4MMyCwqcsXJfmxccD72Om+HIyBFuT1PK378nEL4kbpRPcGKMAOAOd/0tekncCKtIM4EjsJZo0PMC+g9YVLTIkVpUe6NAAfxEQQ/hlwlArXESxLr8VJfUKY2TxHa7/8ZVgxogRF1wYowEoAc4OOtqffv7Aq2Q0/DQk+FX4T6wofUD2id6FzjgH4EC4Coxjo/vblvBjkRV7yh/ik30Qw+gb4qY8h5U20ocgbkmaUkDl3PgDjfoTa+ACgsQu3VU7DE0cMDG3ehZ4LJVVA890ebXx7OKsHYAbhEIoAmHeLVxJzGMvTW9GsdfUcgQHOpXWFSpdER/mWsw1wCNPB2GK6CgP4OHEf1iSnQiK1wyuv0LovHzFdL0rAnH0KYNxriQoBuO7EeCwp7IfxDfkAGgGUw+tfYIlelIA50wMwQ8MhVACWDOyczQm9DCtT/5N+/9U/LNeKcl6+NcAh3ADGTkW6/8SlmEQUveWzm29PAYxcZaqEX0QbPzLoeA2QrUjzA7oU7yvSitIDAgC4AG60Vd22HokXlOhECYj2HuB6qKncVYqxsLTkSZTg6GgAFbxFFPkl1C8k2g0wSYmahv9RohMlYNqf4auo2rmfMlGiQMcUUjwVyQDZORHWdBxoPfG1Z0htx9/p/AXS4Q98j50wyFOgETYpnuOzWdILLOVou3Mxm1ZoSF5YVkzMT1UuTv9fABDwYawSdYFtSnTCIGlh+TyW9A8A37nG70AGE/0lZWHZTwCAuACPAHjZYlEv4pBIF6PFYp3Q8bBIluXHAKTbnYoi6p0NRqqARXvxdGJ/RDc+gFR/+WhcOI0PAP1aEvSbBIA0y6UYn1muESZSF72h3oGpaOBRAjjr+bxVHFKgESVIGJyhxgAM06tbRTEDGiEAJFiuI2Bp0YYoIZMuoGLBp4ZqyzWihEK8AGB5zRv4YHqZ8yimEC+gYteuuMi+BbyAiY+YzZui2EKsABQcnU327g0YpVu8AkCz5TIOxFmuESVoCGgRAKxfkiWRYrlGlKBhULMA0GC5kqFguDlKCHCLAFBuuQ7hIss1ooRCtQBQZrkMRcY+wVHOoUyAFRgAuEyBRpRgIS4XIBxXIDWOv1Iw4hglOFhUCEgcViDlQmOE7x1sXHhL1Yi5WMCJAiVqjGlKdEJESFlhdw6qkZo8JGg0jgOos1yNMdtyjTAo/3XaUQL22J2HQox4+A63PwtQ0QuM4wMmlp6xAGb5AKk4GCKDI6Wei1vaF4bsAjDZckkNPwDwK8t1QqRq8eB/pTxVcRVr8gnBmMyA04Y0kqGgMjuD9gGnC0RwAeYAUFGtoxSXIiO6PrAbPKwnyfIjBIRQZzE4mPnh6sXpr7afAj5Az+XczGAYDuEWBTq9khSjbK6Kxj/NR8DpxaE0BrUAPlck/AtFOr0OJjyqSKqh+nDaAeDsmgAbFIlP5s97KEJ9AZK88HgWQEpWaTNoB1aSAZxtAHX78Ei8wBz8ppXfXZgAek6VmoBc/e3/27kU/weomb1rgAY/uPWyOSq0egMpC8rvBhDQHkMmIKVwnKnMesYARDAArLVYvGldU3L+RSXT+v69Oe2P/bdMv+CWY3Wm//zafkwq6ybRrmpP8plRz86TQt+1SvaYP3bfhK+ur7+v4srpzaz1AZCKFu3XVun1FhwxLUuhcFEqgf969s8dOF0suhBAhlmCp6R++IHKy1s3Nyd1WSyamWfXzd5sdc8TkQxcWJ4jwCq/e6vw0eCKZ1PPnOrP6gFOF280pY6PZKr9Y/2wXRcfvWlUN43fJkm0LGndrEFmaPYm0jxlQwV4uVJRxtqOjQ90XRruLQBGGDLe7U0Dtg4vvcmx4JvRVxtMPa09SDGksQrrs9XvSWgTwzwlMYbEKqioy9wBonMNd07j0BgcA/BeKAJfG7F7rvlqcuXcignTGlgPZtHpNW6DX8OFcGvoYdHErjcYULn/IgAUV36edk6Nxq6PTokXg4nsZXHkoarL9ow7esOEL33xQ0PLj3/oXjvj96F9tveQLMt/A8Y96pXpt+2DPx3p0gB0GfYA2N5TSAbqXj859MOhJdOHrmxMC2/HsDblR9xrZjwdfpzIJGVh2TMAHrNBukYX/HZXL3S/b+AhZIGxuZuX/btaEt//fsX4y2ulw/TzGDO9Upe78VF8VyqKe1ikcMXLzPwzW/SZnq5anLqoq5eC3jq2yu/cf3fVVX33t/S1dHIHAyvqNPEfmLWhV28mNeLhQld9/z5vE/hOm1Koli2OjJoXkrpcAHR+AxzEOBD2ARBeFkcX1o6uWVY/VN3FC9FHGom51Tnre+V8PfeTx4fomvgrwNfYlQODH6lelP5Kd6/3eNXd/JlYtupU2pCf11wyxctC+a0aAdUS9KO63I29qsp4kqd8FkleAWCAjWmUJIm6zALPmG434O7RAP3XTB9K0AqgYJrSeWBmelVj55M1c/KsX8sYBv0eP9rf6XS8SMC/I4C/r6UI3FHlSVt1/rf0QF1u/jGA7L4yJyJ+WApvwYC1N99ucy5dwxDuP7z0Y5fTUUDAj2F34zPl9dT4QKBJbp+quxtduwFcEW5epkD0ERvG/Lo5Wz6yOxUAcL9742OyhRcxc6yr7PUW+BPibU7plBA0tsKTWtrTGwN26YA1M7/HbfPIzNkm3gwY7zPR83V7J22Ex6N2oqlnqt5/pL6Evb6fso/PjHoKPbXUcfR3w5Tm0omeLvw6ElQ35V47cwEYXd5P2kwJgd40/HjnxG0bS60UGvBO1jRDGk9zq3EtDD53j2UCnHWecjqVqaICa1dsqlqUmg1QQGMowZ2n/jZPc8ee3AEVawhChIBPGbyaibb1i/fuLr1xR1g1kAYvm+luivHdJyXfwT45AX7usd4ROWK/cZa+ZcfVfxULfVzHCR89EfSFSuK6WRcJaewHlGwyES4tAA60/aPPiVDKjHKD/JUug095tZhW1PoSBRsJHKMPYMM7ShhaBjNnsuTRJDmdfRyPEAYkHd47i0TNbSNM/0bdwwCyqxalbQrmQyFdqbrXZM0AxHqEs818hGCUWVQjSxNe1/EVOgxd0d+IFlYtSl0c7KdCqhNYm7tlMwNPhPLZCwZDuvypLx5RpPZe1aJBS0L5YMiFIutyN72AtskjUbrBoAMZcFSdtFjmU13gvkAv+joTVqXQ2ua+DwHU3RPDKJKFL22RhQagIul35JR50kKuxRxeqdh/W9kqpHMumC6kdfVBIf01g2Wf3VaUyz9OkmbUPJMUVpW3sGsF18zJa/CRIxsU3RWkO/wDXzX7OUq1JpFVuWRQ2PswmlIsuiF3TY0wZFbUBF3DPm+iP2VFoUnhykmIm8qXpJmymNe0auE1c7aUGdAno63YRJROGK4Nw6B7fWGGKWFh3FDpGXTQlKRg8o7h9besq+MYYyba6g1E6YjBDl/qkmOhB6ADLPRrqz1DisxLyoIt4+uy8utrNZHFwAqzY/d2JAqHG67jodQg2tAqWqYEM8QbKJY+s3avmfkogJdggdHMwrKRwG4QzsRyR8mfAn5QRISllZT6GDxkydNOyyctDMibOYcJyxGhzw5UGwAAHA0PHRUnp/ZUQLuRmH/SvsmzVVh+ZH4ze9NqhjEOwIdWa/UW/O5lAyFktyN3DOxmaYy3uvEBRV1zXW7+sdo+3huZ8QzUFKOKaNjnjzeSX+vqtlASYWmyqJtcvWSIWbeN50X5vLWBa2aON4A/k7qKGOfFjlMAAEAThuv4az4YCafnF9ABEvRgpWfQJyrTUH5xVpO7aV9dH+/VTHgcKjasilQMqfnSF5cDaAb4V0midqLqxgdsnrmatHrmCEPQswDfYVcutvUAAMilH4spfXdKIJM3LcvBLuGODMi7eSJIvsgg5eXj7DAAOagBLv2pE/duXapcvHMudifQkf55M7IFYb5KIyg1gEPUk4N+e+IH24OeuWMVEWWAdtx52ZNAxn8DNAcWX6dYbwCCcFK5dGoL6u/d+obFYkETkQZop21ZmrgfRD8CY5gVGpYZQJCfXNoHwqE/VXv35o+tEQmfiDbAGTwe4b7y42nQcCcxzWYgyazQphpAkIRTFGk6/lR7z/aX0QuqovcOA3Tkb/O0xPj664SkOQBmABiDML5H2AZwUAvp4gALfqu+CMvg2eEPL6Baep8BOpGwatoAl9NxnWSeAsYEEMYCcAf6+aAMIIih0Umh0WHWaAvrWF5/17biENKOGHq9Abpi4OqsNAkaQxoywSJNgtMJSAMhFUwxAPdD28VlolHWTBCnV34I8gMkQXwKmqgTQDUL/ppI281kbD5x7479tn4xC/h/3EhQF7JiCx8AAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export const FacebookIcon = ({ color = "#fff" }: { color?: string }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path fill="url(#pattern0_38_1929)" d="M0 0H24V24H0z" />
    <Defs>
      <Pattern
        id="pattern0_38_1929"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_38_1929" transform="scale(.00781)" />
      </Pattern>
      <Image
        id="image0_38_1929"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export const EyeIcon = ({ color = "#757575" }: { color?: string }) => (
  <Svg width={16} height={14} viewBox="0 0 16 14" fill="none">
    <Path
      d="M.667 7S3.333 1.667 8 1.667C12.666 1.667 15.333 7 15.333 7S12.666 12.333 8 12.333C3.333 12.333.667 7 .667 7z"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 9a2 2 0 100-4 2 2 0 000 4z"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const EyeOffIcon = ({ color = "#757575" }: { color?: string }) => (
  <Svg width={18} height={16} viewBox="0 0 16 18" fill="none">
    <G clipPath="url(#clip0_36_1742)">
      <Path
        d="M11.96 11.96A6.713 6.713 0 018 13.333C3.333 13.333.667 8 .667 8A12.3 12.3 0 014.04 4.04M6.6 2.827a6.08 6.08 0 011.4-.16C12.666 2.667 15.333 8 15.333 8c-.405.757-.887 1.47-1.44 2.127m-4.48-.714a2 2 0 11-2.827-2.826M.667.667l14.667 14.666"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_36_1742">
        <Path fill={color} d="M0 0H16V16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
