import type { FC } from 'react';
import { Button, type ButtonProps } from '@mx/ui';

export interface ButtonShowcaseProps extends Pick<ButtonProps, 'variant' | 'size'> {
  label: string;
}

export const ButtonShowcase: FC<ButtonShowcaseProps> = ({ label, variant, size }) => {
  return (
    <Button variant={variant} size={size}>
      {label}
    </Button>
  );
};

export default ButtonShowcase;
