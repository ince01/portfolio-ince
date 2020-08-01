import React, { useContext, useCallback } from 'react';
import Toggle from 'react-toggle';
import useSound from 'use-sound';
import soundOnUrl from '../sounds/light-on.wav';
import soundOffUrl from '../sounds/light-off.wav';

import { ThemeContext } from '../contexts/themeContext';
import NavLink from './NavLink';
import sun from '../images/sun.png';
import moon from '../images/moon.png';

const Header = () => {
  const { preferDark, toggleThemeHandler } = useContext(ThemeContext);

  const [turnOn] = useSound(soundOnUrl, {
    volume: 1,
  });

  const [turnOff] = useSound(soundOffUrl, {
    volume: 1,
  });

  const onToggle = useCallback(() => {
    preferDark ? turnOff() : turnOn();
    toggleThemeHandler();
  }, [preferDark, toggleThemeHandler, turnOff, turnOn]);

  return (
    <header className="flex flex-row justify-end items-center py-6">
      <ul className="flex flex-row text-secondary-text text-xl font-medium">
        <li className="mx-4">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <Toggle
        className="ml-4 lg:ml-32"
        icons={{
          checked: (
            <img alt="moon" src={moon} width="16" height="16" role="presentation" style={{ pointerEvents: 'none' }} />
          ),
          unchecked: (
            <img alt="sun" src={sun} width="16" height="16" role="presentation" style={{ pointerEvents: 'none' }} />
          ),
        }}
        checked={preferDark}
        onChange={onToggle}
      />
    </header>
  );
};

export default Header;
