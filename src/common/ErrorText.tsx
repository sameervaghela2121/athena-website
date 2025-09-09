"use client";

import { upperFirst } from "lodash-es";
import React from "react";
import { get } from "react-hook-form";

// @typescript-eslint/no-explicit-any
const ErrorText = ({ errors, name }: { errors: unknown; name: string | undefined }) => {
  return (
    <>
      {get(errors, `${name}.message`) && <span className="text-sm text-red-600 select-none">{upperFirst(get(errors, `${name}.message`, ""))}</span>}
    </>
  );
};

export default React.memo(ErrorText);
