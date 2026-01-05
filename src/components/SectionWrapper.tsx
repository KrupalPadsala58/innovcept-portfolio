import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
