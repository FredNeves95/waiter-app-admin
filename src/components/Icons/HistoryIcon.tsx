import { SvgIconProps } from '../../utils/types/icons';

export const HistoryIcon = ({ className, color }: SvgIconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M13 7.5H5M13 10.4999H5M10 13.5H5M16.449 18.896L15.459 19.3935C15.1785 19.5345 14.8481 19.5355 14.5667 19.3964L12.9942 18.6188L11.4533 19.3929C11.172 19.5342 10.8406 19.5348 10.5588 19.3945L9 18.6185L7.44124 19.3945C7.15942 19.5348 6.82799 19.5342 6.54668 19.3929L5.00578 18.6188L3.4333 19.3964C3.15191 19.5355 2.82151 19.5345 2.54102 19.3935L1.55102 18.896C1.21321 18.7263 1.00001 18.3805 1 18.0025V2.99752C1 2.61947 1.2132 2.27374 1.551 2.104L2.541 1.60648C2.82149 1.46552 3.15189 1.46446 3.43328 1.60361L5.00576 2.3812L6.54666 1.60713C6.82797 1.46581 7.1594 1.46521 7.44122 1.60551L9 2.38151L10.5588 1.60551C10.8406 1.46521 11.172 1.46581 11.4533 1.60713L12.9942 2.3812L14.5667 1.60361C14.8481 1.46446 15.1785 1.46552 15.459 1.60648L16.449 2.104C16.7868 2.27374 17 2.61946 17 2.99752V18.0025C17 18.3806 16.7868 18.7263 16.449 18.896Z" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
