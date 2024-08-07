// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KkrLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KkrLogoIcon(props: KkrLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 126 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#oWOnMoMWacUva)"} fill={"currentColor"}>
        <path
          d={
            "M28.112 30L13.854 14.213l-8.933 6.67V30H0V0h4.921v15.534L25.695 0h7.092L17.623 11.352 34.426 30h-6.314zm46.045 0L59.9 14.213l-8.936 6.67V30h-4.922V0h4.922v15.534L71.741 0h7.091L63.667 11.352 80.474 30h-6.317zm45.367 0l-8.028-11.438H96.493V30h-4.912V0h23.397c6.231 0 9.995 3.646 9.995 9.447 0 5.3-3.276 8.122-7.702 8.865l7.955 11.689-5.702-.001zm.414-20.554c0-3.318-2.014-4.933-6.143-4.933H96.493v9.53h17.744c3.687 0 5.701-1.657 5.701-4.597z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"oWOnMoMWacUva"}>
          <path fill={"currentColor"} d={"M0 0h125.226v30H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default KkrLogoIcon;
/* prettier-ignore-end */
