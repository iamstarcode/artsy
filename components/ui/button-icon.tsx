import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

export function ButtonIcon({ children }: { children: ReactNode }) {
  return (
    <Button variant="ghost" size="icon">
      {children}
    </Button>
  );
}
