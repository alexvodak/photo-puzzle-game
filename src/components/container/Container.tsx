import React from 'react';
import './styles.css'

interface ContainerProps {
  fluid?: boolean;
  children: React.ReactNode;
  idValue?: string;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ fluid = false, children = '', idValue = '', className = '' }) => {
  const containerClass = fluid ? 'container-fluid' : 'container';
  return <div id = {idValue} className={`${containerClass} ${className}`}>{children}</div>;
};

interface ColProps {
    size?: number;
    children: React.ReactNode;
    idValue?: string;
    className?: string;
  }
  
const Col: React.FC<ColProps> = ({ size = 12, children = '', idValue = '', className = '' }) => {
    const colClass = `col-${size}`;
    return <div id = {idValue} className={`${colClass} ${className}`}>{children}</div>;
};

interface RowProps {
   children: React.ReactNode;
   idValue?: string;
   className?: string;
}

const Row: React.FC<RowProps> = ({ children = '', idValue = '', className = '' }) => {
   return <div id = {idValue} className={`row ${className}`}>{children}</div>;
};
export default Container;
