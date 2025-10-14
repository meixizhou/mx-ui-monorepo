import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Button as RadixButton } from '@radix-ui/themes';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 rounded-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-accentFg hover:bg-accent/90',
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

export type ButtonProps = ComponentPropsWithoutRef<typeof RadixButton> &
  VariantProps<typeof buttonStyles> & {
    className?: string;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <RadixButton
        ref={ref}
        className={clsx(buttonStyles({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
