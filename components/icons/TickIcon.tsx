import * as React from 'react';

const TickIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.fontSize || 22}
      height={props.fontSize || 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 12.1908C20.2 16.1947 17.1842 19.9648 12.9525 20.8072C10.8886 21.2187 8.7476 20.9678 6.83441 20.0903C4.92123 19.2129 3.33336 17.7536 2.2969 15.9202C1.26044 14.0868 0.82822 11.9728 1.06179 9.87916C1.29537 7.78556 2.18282 5.81909 3.59779 4.25976C6.50003 1.05982 11.4005 0.178954 15.4003 1.78053"
        stroke="#E63B7A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.40039 10.5892L11.4002 14.5931L20.9996 4.18289"
        stroke="#E63B7A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TickIcon;
