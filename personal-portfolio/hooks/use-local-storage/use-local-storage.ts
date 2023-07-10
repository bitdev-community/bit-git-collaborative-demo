import { isNullOrUndefined } from 'util';

/**
 * the key used to store the settings in local storage
 */
const SETTINGS_KEY = 'site-settings';

export function useLocalStorage() {
  const initializeSettings = () => {
    const settings = localStorage.getItem(SETTINGS_KEY);
    return isNullOrUndefined(settings) ? {} : JSON.parse(settings);
  };

  const saveSettings = (settings: {}) => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  };

  return {
    initializeSettings,
    saveSettings,
  };
}
