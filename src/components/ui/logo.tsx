import React from 'react';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'white' | 'color';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'white', className, alt = "KANAA Logo", ...props }) => {
  const src = variant === 'white' ? '/logo-full-white.png' : '/logo-full-color.png';

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
};
