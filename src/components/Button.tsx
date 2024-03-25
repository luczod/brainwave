import { ReactNode } from 'react';
import ButtonSvg from '../assets/svg/ButtonSvg';

type TButton = {
  children: ReactNode;
  className: string;
  href: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  px: string;
  light: boolean;
};

function Button({ className, href, onClick, children, px, light }: Partial<TButton>) {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${light ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

  const spanClasses = 'relative z-10';

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(light)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(light)}
    </a>
  );

  return href ? renderLink() : renderButton();
}

export default Button;
