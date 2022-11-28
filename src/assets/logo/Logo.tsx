import React from 'react';
import { QrCodeIcon } from '@heroicons/react/24/outline';

type Props = {
  className: string;
};

function Logo({ className }: Props) {
  return <QrCodeIcon className={className} />;
}

export default Logo;
