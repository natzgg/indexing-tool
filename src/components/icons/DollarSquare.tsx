const DollarSquare = ({ fill = 'none', stroke = 'currentColor', strokeWidth = 1.5, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" />
    <path d="M15.333 7.722H12m0 0h-1.667C9.045 7.722 8 8.68 8 9.862 8 11.041 9.045 12 10.333 12H12m0-4.278V6.5m0 1.222V12m0 0h1.667c1.288 0 2.333.958 2.333 2.139 0 1.181-1.045 2.139-2.333 2.139H12M12 12v4.278m0 0H8m4 0V17.5" />
  </svg>
);

export default DollarSquare;
