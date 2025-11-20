"use client";

import React from 'react';
import Select, {
  GroupBase,
  Props as ReactSelectProps,
  StylesConfig,
  components,
} from 'react-select';

// Simple clear indicator component
const ClearIndicator = (props: any) => {
  const {
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props)}
      className="cursor-pointer"
    >
      <div className="px-1 py-0 text-tertiary-700">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>
  );
};

// Custom multi-value remove component
const CustomMultiValueRemove = (props: any) => (
  <components.MultiValueRemove {...props}>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="12" 
      height="12" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </components.MultiValueRemove>
);

interface CustomSelectProps<OptionType>
  extends ReactSelectProps<OptionType, true, GroupBase<OptionType>> {
  value?: any;
  isAsync?: boolean;
  chipColor?: string;
  errors?: any;
}

/**
 * SelectComponent - A customized React Select component
 * @param props - Component props extending ReactSelectProps
 * @returns React component
 */
const SelectComponent = <OptionType extends {}>({
  value,
  defaultValue,
  isAsync = false,
  errors,
  chipColor = "#f0f0f0",
  classNamePrefix = "athena-select",
  maxMenuHeight = 320,
  menuPlacement = "auto",
  closeMenuOnSelect = true,
  ...props
}: CustomSelectProps<OptionType>) => {
  const styles:
    | StylesConfig<OptionType, true, GroupBase<OptionType>>
    | undefined = {
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      padding: "10px",
    }),
    menuList: () => ({
      maxHeight: maxMenuHeight,
      overflowY: "auto",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled ? "#EBEBEB" : "white",
      borderColor: state.isFocused ? "#EBEBEB" : "",
      borderRadius: "8px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#EBEBEB",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: chipColor,
      borderRadius: "8px",
      padding: "2px",
      display: "flex",
      columnGap: "8px",
      margin: 0,
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#333",
      textTransform: "capitalize",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "" : "#555",
      cursor: "pointer",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "8px",
      gap: "2px",
    }),
    singleValue: (provided) => ({
      ...provided,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      alignItems: "center",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    menu: (base) => ({ ...base, zIndex: 9999 }),
  };

  // Custom Option component
  const Options = ({ children, ...props }: any) => {
    const data: any = props.data;

    return (
      <div
        {...props.innerProps}
        className={`hover:border-l-primary-900 border-l-2 border-l-transparent flex flex-col custom-option gap-x-1 cursor-pointer hover:bg-tertiary-50 duration-300 p-2 ${props.isSelected ? "bg-secondary-200" : "bg-transparent"}`}
      >
        <div className="flex items-center">
          <span className="ml-2 text-gray-900">{data.label}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <Select
        isMulti={props.isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
        menuPortalTarget={document.body}
        menuPlacement={menuPlacement}
        className="basic-single"
        classNamePrefix={classNamePrefix}
        isClearable={true}
        isSearchable={true}
        components={{
          Option: Options,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          MultiValueRemove: CustomMultiValueRemove,
          ClearIndicator: ClearIndicator,
          ...props.components,
        }}
        styles={styles}
        value={value}
        {...props}
      />
      
      {errors && errors[props.name as string] && (
        <span className="text-sm text-red-600 select-none">
          {errors[props.name as string].message}
        </span>
      )}
    </>
  );
};

export default SelectComponent;
