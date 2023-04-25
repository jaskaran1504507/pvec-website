import React from 'react';

interface IconsProps {
  className?: string;
  size?: string;
  fill?: string;
}

export const MenuListIcon: React.FC<IconsProps> = ({
  className,
  size,
  fill,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size || '30'}
    height={size || '22'}
    viewBox='0 0 30 22'
    className={className}
    fill={fill || 'none'}
  >
    <line
      x1='1'
      y1='1'
      x2='29'
      y2='1'
      stroke='#fff'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <line
      x1='1'
      y1='11'
      x2='29'
      y2='11'
      stroke='#fff'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <line
      x1='1'
      y1='21'
      x2='29'
      y2='21'
      stroke='#fff'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
);

export const CloseIcon: React.FC<IconsProps> = ({ className, size, fill }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size || '30'}
    height={size || '22'}
    viewBox='0 0 25 25'
    fill={fill || 'none'}
    className={className}
  >
    <path
      d='M1.31371 1.31373L12.6274 12.6274M23.9411 23.9411L12.6274 12.6274M12.6274 12.6274L1.31371 23.9411L23.9411 1.31373'
      stroke='white'
      strokeWidth='2'
    />
  </svg>
);
export const NavigatMenueArrow: React.FC<IconsProps> = ({
  className,
  size,
  fill,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size || '24'}
    height={size || '24'}
    viewBox='0 0 24 24'
    fill={fill || 'none'}
    className={className}
  >
    <g clip-path='url(#clip0_725_3599)'>
      <path
        d='M7.09082 22.3636L17.4545 12L7.09082 1.63638'
        stroke='#1A351B'
        strokeWidth='3'
        strokeLinecap='round'
        stroke-linejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_725_3599'>
        <rect
          width='24'
          height='24'
          fill='white'
          transform='translate(0 24) rotate(-90)'
        />
      </clipPath>
    </defs>
  </svg>
);
