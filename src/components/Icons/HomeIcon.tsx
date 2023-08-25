import { SvgIconProps } from '../../utils/types/icons';

export const HomeIcon = ({ className, color }: SvgIconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M23.0377 8.64827L15.3577 2.67451C13.9715 1.59547 12.0297 1.59547 10.6422 2.67451L2.96222 8.64827C2.02654 9.37659 1.47998 10.4953 1.47998 11.6793V21.0656C1.47998 23.1865 3.19902 24.9056 5.31998 24.9056H20.68C22.8009 24.9056 24.52 23.1865 24.52 21.0656V11.6793C24.52 10.4953 23.9734 9.37659 23.0377 8.64827Z" stroke={color || 'currentColor'} strokeWidth="2"/>
  </svg>
);
