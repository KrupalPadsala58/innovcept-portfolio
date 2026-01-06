import React, { ReactNode } from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MotionButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
}

const MotionButton: React.FC<MotionButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  type = 'button',
  icon
}) => {
  
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span className={icon ? "mr-2" : ""}>{children}</span>
      {icon && <span className="inline-flex">{icon}</span>}
    </>
  );

  // Motion interaction props
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 } as any
  };

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a 
          className={classes}
          {...motionProps}
        >
          {content}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button 
      type={type}
      onClick={onClick} 
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default MotionButton;
