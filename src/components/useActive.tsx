import React from 'react';
import { useRouter } from 'next/router';

export default function useActive(pathRegExp) {
  const router = useRouter();
  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {
    setIsActive(Boolean(router.pathname.match(pathRegExp)));
  }, [router.pathname, pathRegExp]);
  return isActive;
}