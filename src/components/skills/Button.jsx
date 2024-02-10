// import { cva } from 'class-variance-authority';
// import { ButtonHTMLAttributes } from 'react';
// import { cn } from '../sidebar/Utils';

// const buttonVariants = cva(
//     [
//         'h-max',
//         'w-max',
//         'flex',
//         'gap-2',
//         'justify-center',
//         'items-center',
//         'rounded-md',
//         'outline-0',
//         'active:scale-95',
//         'active:shadow-inner',
//         'disabled:opacity-50',
//         'disabled:pointer-events-none',
//         'disbaled:cursor-not-allowed', // Typo: should be 'disabled:cursor-not-allowed'
//     ],
//     {
//         variants: {
//             variant: {
//                 highlight: ['bg-btnHighlight', 'text-highlight'],
//                 primary: ['bg-cardPrimary', 'text-primary', 'font-semibold'],
//             },
//             sizes: {
//                 iconOnly: ['text-xs', 'p-2'],
//                 small: ['text-xs', 'py-2', 'px-4'],
//                 medium: ['text-sm', 'font-bold', 'py-3', 'px-4'],
//             },
//         },
//         defaultVariants: {
//             variant: 'highlight',
//             sizes: 'small',
//         },
//     }
// );

// const Button = ({
//     variant,
//     sizes,
//     className,
//     children,
//     ...props
// }) => {
//     return (
//         <button
//             {...props}
//             className={cn(buttonVariants({ variant, sizes, className }))}
//         >
//             {children}
//         </button>
//     );
// };

// export default Button;
