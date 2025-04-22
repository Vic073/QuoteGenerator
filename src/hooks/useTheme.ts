import { useState } from 'react';

type Theme = {
  name: string;
  gradient: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  soundUrl?: string;
};

export const themes: Theme[] = [
  {
    name: 'Sunrise',
    gradient: 'from-orange-200 to-pink-200',
    textColor: 'text-gray-800',
    buttonColor: 'bg-orange-500',
    buttonTextColor: 'text-white',
    soundUrl: '/sounds/morning-birds.mp3'
  },
  {
    name: 'Ocean',
    gradient: 'from-blue-300 to-cyan-200',
    textColor: 'text-gray-800',
    buttonColor: 'bg-blue-600',
    buttonTextColor: 'text-white',
    soundUrl: '/sounds/ocean-waves.mp3'
  },
  {
    name: 'Forest',
    gradient: 'from-emerald-300 to-green-200',
    textColor: 'text-gray-800',
    buttonColor: 'bg-emerald-600',
    buttonTextColor: 'text-white',
    soundUrl: '/sounds/forest-ambience.mp3'
  },
  {
    name: 'Twilight',
    gradient: 'from-purple-400 to-indigo-300',
    textColor: 'text-gray-800',
    buttonColor: 'bg-purple-600',
    buttonTextColor: 'text-white',
    soundUrl: '/sounds/night-crickets.mp3'
  },
  {
    name: 'Midnight',
    gradient: 'from-gray-800 to-slate-900',
    textColor: 'text-gray-100',
    buttonColor: 'bg-gray-600',
    buttonTextColor: 'text-white',
    soundUrl: '/sounds/gentle-rain.mp3'
  }
];

export const useTheme = () => {
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  
    const changeTheme = () => {
      setCurrentThemeIndex((prev) => (prev + 1) % themes.length);
    };
  
    const randomTheme = () => {
      const newIndex = Math.floor(Math.random() * themes.length);
      setCurrentThemeIndex(newIndex);
    };
  
    return {
      currentTheme: themes[currentThemeIndex],
      changeTheme,
      randomTheme
    };
  };
