const size = {
  mini: '376px',
  xs: '430px',
  sm: '576px',
  md: '768px',
  slg: '900px',
  lg: '1199px',
  xl: '1200px',
  xxl: `1630px`
}

const theme = {
  cityBold: '#286da3',
  city: '#6CABDD',
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  white: '#fff',
  gray: '#6c757d',
  graydark: '#343a40',
  lightgray: '#cdcdcd',
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  slg: `(max-width: ${size.slg})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`
}

export default theme
