import React, { type PropsWithChildren } from 'react';
import Tooltip from './tooltip';

export default function Button({
  children,
}: PropsWithChildren & { className: string }) {
  return (
    <button className='bg-red-400 text-4xl font-medium'>
      <Tooltip />
      {children}
    </button>
  );
}
