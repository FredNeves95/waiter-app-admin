import { SvgIconProps } from '../../utils/types/icons';

export const HomeIcon = ({ className, color }: SvgIconProps) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.5283 6.48621L11.7683 2.00589C10.7286 1.19661 9.27231 1.19661 8.23167 2.00589L2.47167 6.48621C1.76991 7.03245 1.35999 7.87149 1.35999 8.75949V15.7992C1.35999 17.3899 2.64927 18.6792 4.23999 18.6792H15.76C17.3507 18.6792 18.64 17.3899 18.64 15.7992V8.75949C18.64 7.87149 18.2301 7.03245 17.5283 6.48621Z" stroke={color || 'currentColor'} strokeWidth="1.5"/>
  </svg>
);
