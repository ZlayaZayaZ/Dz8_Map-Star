export default class Settings {
    constructor () {
        this.default = new Map ([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);
        this.settingsUser = new Map ();
    }

    setSettingsUser (key, value) {
        const thereParam = ['dark', 'light', 'gray'];
        const musicParam = ['trance', 'pop', 'rock', 'chillout', 'off'];
        const difficultyParam = ['easy', 'normal', 'hard', 'nightmare'];
        if ((key === 'theme' && thereParam.includes(value)) || 
        (key === 'music' && musicParam.includes(value)) || 
        (key === 'difficulty' && difficultyParam.includes(value))) {
            this.settingsUser.set(key, value)
        }
        return this.settingsUser
    }

    getSettings () {
        const mapResult = new Map ();
        if (this.settingsUser.has('theme')) {
            mapResult.set('theme', this.settingsUser.get('theme'))
        } else {
            mapResult.set('theme', this.default.get('theme')) 
        }
        if (this.settingsUser.has('music')) {
            mapResult.set('music', this.settingsUser.get('music'))
        } else {
            mapResult.set('music', this.default.get('music')) 
        }
        if (this.settingsUser.has('difficulty')) {
            mapResult.set('difficulty', this.settingsUser.get('difficulty'))
        } else {
            mapResult.set('difficulty', this.default.get('difficulty')) 
        }
        return mapResult
    }
}
