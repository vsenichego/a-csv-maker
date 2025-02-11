export const selectStyles = {
  menu: (base: React.CSSProperties) => ({
    ...base,
    borderRadius: '16px',
    marginTop: '0.4rem',
    zIndex: '11'
  }),

  menuList: (base: React.CSSProperties) => ({
    ...base,
    borderRadius: '16px',
    paddingTop: '0px',
    paddingBottom: '0px',
    '::-webkit-scrollbar': {
      width: '12px',
      height: '12px',
      zIndex: '-100',
    },
    '::-webkit-scrollbar-track': {
      background: 'tranparent',
      margin: '7.5px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(0, 0, 0, 0.08)',
      borderRadius: '16px',
      cursor: 'pointer',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: 'rgba(0, 0, 0, 0.08)',
    },
  }),

  option: (defaultStyles: React.CSSProperties, state: { isSelected: boolean }) => ({
    ...defaultStyles,
    color: state.isSelected ? 'rgb(14, 13, 71)' : 'rgb(14, 13, 71)',
    backgroundColor: state.isSelected ? '#eef4ff' : 'white',
    ':hover': {
      backgroundColor: '#eef4ff',
    },
    padding: '10px',
    fontFamily: 'ApercuPro, sans-serif',
    fontSize: '15px',
    fontWeight: 300,
    cursor: 'pointer',
  }),

  control: (defaultStyles: React.CSSProperties) => ({
    ...defaultStyles,
    // backgroundColor: 'white',
    borderRadius: '12px',
    ':hover': {
      borderColor: '#3b82f6',
    },
    padding: '2px',
    minHeight: '40px',
  }),

  singleValue: (defaultStyles: React.CSSProperties) => ({
    ...defaultStyles,
    color: '#1f2937',
  }),

  placeholder: (defaultStyles: React.CSSProperties) => ({
    ...defaultStyles,
    color: '#9ca3af',
    fontFamily: 'ApercuPro, sans-serif',
    fontWeight: 300,
  }),

  dropdownIndicator: (defaultStyles: React.CSSProperties, state: { isDisabled: boolean }) => ({
    ...defaultStyles,
    color: state.isDisabled ? '#9ca3af' : '#3b82f6',
    ':hover': {
      color: '#3b82f6',
      cursor: 'pointer',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  clearIndicator: (defaultStyles: React.CSSProperties) => ({
    ...defaultStyles,
    color: '#cccccc',
    ':hover': {
      color: '#0e0d47'
    },
  }),
};
