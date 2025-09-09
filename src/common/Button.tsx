"use client";

import classNames from "classnames";
import Image from "next/image";
import React from "react";

interface ButtonProps extends React.AllHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "text" | "tertiaryDark";
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  isVisible?: boolean;
  leftIcon?: string | null; // New prop for icon position;
  rightIcon?: string | null; // New prop for icon position;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isVisible = true,
  className = "",
  loading = false,
  children,
  onClick,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  type = "button",
}) => {
  const baseClasses =
    "button relative transition-all overflow-hidden duration-200 ease-in-out select-none flex items-center justify-center rounded-[56px] py-3 px-3 md:px-5 transition-all duration-500 font-medium text-base active:scale-95";

  const responsiveClasses = "text-base sm:text-base";

  const variantClasses = {
    primary: "bg-primary-700 text-white hover:bg-secondary-700 !disabled:text-tertiary-400 disabled:bg-tertiary-500",
    secondary: "bg-secondary-700 text-white hover:bg-primary-700 !disabled:text-tertiary-400 disabled:bg-tertiary-500",
    tertiary:
      "!bg-transparent border border-blue-400 text-secondary-700 hover:text-primary-700 hover:border-primary-700 disabled:border-tertiary-800 disabled:text-tertiary-700",
    tertiaryDark: "!bg-transparent border border-tertiary-800 text-tertiary-800 disabled:border-tertiary-800 disabled:text-tertiary-700",
    text: "text-status-info hover:underline !p-0",
  };

  const color = {
    primary: "#ffffff",
    secondary: "#ffffff",
    tertiary: "#007BFF",
    tertiaryDark: "#474747",
    text: "#007BFF",
  };

  const loadingIcon = (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke={color[variant]} strokeWidth="4"></circle>
      <path className="opacity-75" fill={color[variant]} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  );

  return (
    <>
      {isVisible && (
        <button
          type={type}
          className={classNames(
            className,
            baseClasses,
            responsiveClasses,
            variantClasses[variant],
            { "opacity-50 cursor-not-allowed": disabled },
            ""
          )}
          onClick={() => {
            if (!disabled && onClick) onClick();
          }}
          disabled={disabled}
        >
          <div className="flex items-center gap-x-2">
            {loading ? loadingIcon : null}
            {leftIcon && <Image src={leftIcon} alt={"left-icon"} />}
            <span className="button-content flex"> {children}</span>
            {rightIcon && <Image src={rightIcon} alt={"right"} />}
          </div>
        </button>
      )}
    </>
  );
};

export default React.memo(Button);
