import { useState, useEffect, useCallback } from 'react';
import { normalize } from './utils';

export function useIsAllowed() {
  const [isAllowed, _setIsAllowed] = useState(null);

  useEffect(() => {
    const allowed = window.localStorage.getItem('allowed') ? window.localStorage.getItem('allowed') : false;
    const boolean_allowed = normalize(allowed) === 'true' ? true : false;

    _setIsAllowed(boolean_allowed);
  });

  const setIsAllowed = useCallback((value) => {
    window.localStorage.setItem('allowed', true);
    _setIsAllowed(value);
  });

  return [isAllowed, setIsAllowed];
}
