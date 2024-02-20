import Settings from '../index';

describe('class Settings', () => {
    test.each([
        ['music', 'pop',  1],
        ['difficulty', 'normal', 1],
        ['theme', 'light', 1],
        ['theme', 'easy', 0],
        ['music', 'dark', 0],
        ['fgffhf', 'normal', 0]
      ])('testing a function setSettingsUser with one call', (key, value, expected) => {
        const settings = new Settings();
        settings.setSettingsUser(key, value);
        expect(settings.settingsUser.size).toBe(expected);
      });

    test.each([
        ['music', 'pop', 'difficulty', 'normal', 2],
        ['difficulty', 'normal', 'music', 'dark', 1],
        ['normal', 'theme', 'dark', 'light', 0],
        ['music', 'pop', 'music', 'rock', 1]
      ])('testing a function setSettingsUser with two calls', (key1, value1, key2, value2, expected) => {
        const settings = new Settings();
        settings.setSettingsUser(key1, value1);
        settings.setSettingsUser(key2, value2);
        expect(settings.settingsUser.size).toBe(expected);
      });

      test('testing function getSettings with default parameters', () => {
        const settings = new Settings();
        const result = settings.getSettings();
        expect(result.get('theme')).toBe('dark');
        expect(result.get('music')).toBe('trance');
        expect(result.get('difficulty')).toBe('easy');
      })

      test('testing function getSettings with two calls to function setSettingsUser', () => {
        const settings = new Settings();
        settings.setSettingsUser('music', 'rock')
        settings.setSettingsUser('theme', 'gray')
        const result = settings.getSettings();
        expect(result.get('theme')).toBe('gray');
        expect(result.get('music')).toBe('rock');
        expect(result.get('difficulty')).toBe('easy');
      })

      test('testing function getSettings with three calls to function setSettingsUser', () => {
        const settings = new Settings();
        settings.setSettingsUser('difficulty', 'hard')
        settings.setSettingsUser('music', 'rock')
        settings.setSettingsUser('theme', 'gray')
        const result = settings.getSettings();
        expect(result.get('theme')).toBe('gray');
        expect(result.get('music')).toBe('rock');
        expect(result.get('difficulty')).toBe('hard');
      })
})