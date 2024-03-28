import React from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string
}
// test
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = React.useState(false);
  const onThrow = () => setError(true);
  React.useEffect(() => {
    if (error) { throw new Error(); }
  }, [error]);
  return (
  // eslint-disable-next-line i18next/no-literal-string, max-len
      <Button onClick={onThrow}>
        throw new Error
        </Button>
  );
};
