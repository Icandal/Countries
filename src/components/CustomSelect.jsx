import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs(() => ({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)', 
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      zIndex: 999,
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected 
        ? 'var(--colors-bg)'  
        : 'var(--colors-ui-base)',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--colors-text)',
    }),
  },
}))`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > div {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
    color: var(--colors-text) !important;
    background-color: var(--colors-ui-base) !important;
  }
`;