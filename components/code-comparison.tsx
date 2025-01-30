import { CodeComparison } from "@/components/ui/code-comparison";

const beforeCode = `import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { useTheme } from '@/context/ThemeContext';
import { Icon } from '@/components/ui/Icon';
import styles from './Button.module.css';

export const Button = ({ children, variant = 'primary', size = 'md', onClick }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    console.log('Button mounted');
  }, []);

  return (
    <button
      className={cn(styles.button, styles[variant], styles[size], theme === 'dark' ? styles.dark : '')}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <Icon name="hover-effect" />}
      {children}
    </button>
  );
};`;

const afterCode = `import { Button } from '@lumi-work/lumi-ui';

export const App = () => {
  return <Button variant="primary" size="md">Click Me</Button>;
};`;

export function CodeComparisonDemo() {
  return (
    <CodeComparison
      beforeCode={beforeCode}
      afterCode={afterCode}
      language="typescript"
      filename="Button.tsx"
      lightTheme="github-light"
      darkTheme="github-dark"
    />
  );
}
