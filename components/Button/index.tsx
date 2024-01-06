import React from "react";

const shapes = { round: "rounded-[12px]", circle: "rounded-[50%]" } as const;
const variants = {
  outline: {
    amber_A700_6c: "border border-amber-A700_6c border-solid shadow-bs1",
    amber_A700: "border border-amber-A700 border-solid shadow-bs",
    yellow_50: "border border-solid border-yellow-50",
    black_900: "border border-black-900 border-solid",
  },
  fill: {
    cyan_600: "bg-cyan-600 shadow-bs text-black-900",
    cyan_50: "bg-cyan-50",
    yellow_50: "bg-yellow-50",
    amber_A700: "bg-amber-A700",
    gray_50: "bg-gray-50",
  },
} as const;
const sizes = {
  xs: "pl-1 pr-[5px] py-[5px]",
  sm: "p-2",
  md: "p-3",
  lg: "p-4",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
