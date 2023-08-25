import { SvgIconProps } from '../../utils/types/icons';

export const UsersIcon = ({ className, color }: SvgIconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="8.99835" cy="9.00854" r="3.49145" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18.0021" cy="9.99897" r="2.50104" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.99585 20.5033V19.4859C2.99585 17.285 4.77959 15.5012 6.98051 15.5012H11.0162C13.2171 15.5012 15.0008 17.285 15.0008 19.4859V20.5033" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.0021 15.5012H19.1045C21.3055 15.5012 23.0892 17.285 23.0892 19.4859V20.5033" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
