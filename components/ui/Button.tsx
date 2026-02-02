import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        const variants = {
            primary: 'bg-[#25D366] text-black hover:bg-[#1ebc57] shadow-[0_0_20px_rgba(37,211,102,0.3)] border border-transparent', // High visibility green
            secondary: 'bg-white text-black hover:bg-neutral-200 border border-transparent', // Stark white
            outline: 'border border-white/20 text-white hover:bg-white/10',
            ghost: 'text-white/70 hover:text-white hover:bg-white/5',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-12 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
        };

        return (
            <Comp
                className={cn(
                    'inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };
