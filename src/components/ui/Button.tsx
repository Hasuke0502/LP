import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef, ReactElement, cloneElement, Ref } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseClassName = cn(
      'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      {
        'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl': variant === 'primary',
        'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700': variant === 'secondary',
        'border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800': variant === 'outline',
        'hover:bg-gray-100 dark:hover:bg-gray-800': variant === 'ghost',
      },
      {
        'h-8 px-3 text-sm': size === 'sm',
        'h-10 px-6 text-base': size === 'md',
        'h-12 px-8 text-lg': size === 'lg',
      },
      className
    );

    if (asChild && children) {
      const childElement = children as ReactElement<{ className?: string; ref?: Ref<HTMLElement> }>;
      return cloneElement(childElement, {
        className: cn(baseClassName, childElement.props.className),
        ref,
      });
    }

    return (
      <button
        className={baseClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 