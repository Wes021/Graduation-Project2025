import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

export const PaypalIcon: LucideIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function PaypalIcon(props, ref) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 11.5l1.5-9h5c3.5 0 5 2 4.3 4.3-1 3.2-3.5 4.7-6.8 4.7H9.3" />
      <path d="M3.5 21.5L5 12.5h5c3.5 0 5 2 4.3 4.3-.7 2.3-2.4 3.7-4.8 4.2" />
    </svg>
  );
});
