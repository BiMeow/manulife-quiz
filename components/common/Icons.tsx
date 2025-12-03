"use client";
import Icon from "@ant-design/icons";

const Arrow = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 20"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.625 10H17.375"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M11.75 4.375L17.375 10L11.75 15.625"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
export const IconArrow = (props: any) => <Icon component={Arrow} {...props} />;
