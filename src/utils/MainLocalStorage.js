class MainLocalStorage {
    constructor(options) {
        this._jwtKey = options.jwtKey;
    }

    // Auth

    getJwt() {
        return localStorage.getItem(this._jwtKey);
    }

    setJwt(jwt) {
        localStorage.setItem(this._jwtKey, jwt);
    }

    removeJwt() {
        localStorage.removeItem(this._jwtKey);
    }
}

const jwtKey = 'movies-explorer-jwt';

export const mainLocalStorage = new MainLocalStorage({
    jwtKey: jwtKey
});