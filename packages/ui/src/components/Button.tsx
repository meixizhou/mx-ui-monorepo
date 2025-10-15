import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Button as RadixButton, type ButtonProps as RadixButtonProps } from '@radix-ui/themes';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 rounded-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: '',
        outline: 'border border-border bg-surface hover:bg-surfaceMuted text-accent'
      },
      size: {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-sm px-4 py-2',
        lg: 'text-base px-5 py-3'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

type VisualVariant = 'primary' | 'outline';
type VisualSize = NonNullable<VariantProps<typeof buttonStyles>['size']>;

const variantToRadix: Record<VisualVariant, Pick<RadixButtonProps, 'variant' | 'highContrast'>> = {
  primary: {
    variant: 'solid',
    highContrast: true
  },
  outline: {
    variant: 'surface',
    highContrast: true
  }
};

const mapSizeToRadix = (size: VisualSize): RadixButtonProps['size'] => {
  switch (size) {
    case 'sm':
      return '1';
    case 'lg':
      return '3';
    default:
      return '2';
  }
};

export type ButtonProps = ComponentPropsWithoutRef<typeof RadixButton> &
  VariantProps<typeof buttonStyles> & {
    className?: string;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    const visualVariant = (variant ?? 'primary') as VisualVariant;
    const visualSize = (size ?? 'md') as VisualSize;
    const { variant: radixVariant, highContrast } = variantToRadix[visualVariant] ??
      variantToRadix.primary;
    const radixSize = mapSizeToRadix(visualSize);

    return (
      <RadixButton
        ref={ref}
        variant={radixVariant}
        highContrast={highContrast}
        color="indigo"
        size={radixSize}
        className={clsx(buttonStyles({ variant: visualVariant, size: visualSize }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
