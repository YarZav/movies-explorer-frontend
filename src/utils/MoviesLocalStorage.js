class MoviesLocalStorage {
    constructor(options) {
        this._moviesSearchTextKey = options.moviesSearchTextKey;
        this._moviesKey = options.moviesKey;
        this._moviesIsShortKey = options.moviesIsShortKey;
    }

    // Movies SearchText

    getSearchText() {
        return localStorage.getItem(this._moviesSearchTextKey);
    }

    setSearchText(searchText) {
        localStorage.setItem(this._moviesSearchTextKey, searchText);
    }

    // Is short movies

    getIsShort() {
        return localStorage.getItem(this._moviesIsShortKey) === 'true';
    }

    setIsShort(isShort) {
        localStorage.setItem(this._moviesIsShortKey, isShort);
    }

    // Movies

    getMovies() {
        return JSON.parse(localStorage.getItem(this._moviesKey));
    }

    setMovies(movies) {
        localStorage.setItem(this._moviesKey, JSON.stringify(movies));
    }

    // Remove data

    removeData() {
        localStorage.removeItem(this._moviesSearchTextKey);
        localStorage.removeItem(this._moviesIsShortKey);

        localStorage.removeItem(this._moviesKey);
    }
}

const moviesKey = 'movies';
const moviesSearchTextKey = 'movies-search-text';
const moviesIsShortKey = 'movies-is-short';

export const moviesLocalStorage = new MoviesLocalStorage({
    moviesKey: moviesKey,
    moviesSearchTextKey: moviesSearchTextKey,
    moviesIsShortKey: moviesIsShortKey
});