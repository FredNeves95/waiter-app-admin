import { SvgIconProps } from '../../utils/types/icons';

export const MenuIcon = ({ className, color }: SvgIconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M13 12.5H8M12 15.5H9M4 1.5V19.5M3 19.5H15C16.1046 19.5 17 18.6046 17 17.5V3.5C17 2.39543 16.1046 1.5 15 1.5H3C1.89543 1.5 1 2.39543 1 3.5V17.5C1 18.6046 1.89543 19.5 3 19.5ZM12.5 7.5C12.5 8.60457 11.6046 9.5 10.5 9.5C9.39543 9.5 8.5 8.60457 8.5 7.5C8.5 6.39543 9.39543 5.5 10.5 5.5C11.6046 5.5 12.5 6.39543 12.5 7.5Z" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
