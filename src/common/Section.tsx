import { ReactNode } from "react";

const Section = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`select-none container relative mx-auto px-4 sm:px-6 lg:px-8 mt-20 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
