class MoviesLocalStorage {
    constructor(options) {
        this._moviesSearchTextKey = options.moviesSearchTextKey;
        this._moviesKey = options.moviesKey;
        this._moviesIsShortKey = options.moviesIsShortKey;
        this._savedMoviesSearchTextKey = options.savedMoviesSearchTextKey;
        this._savedMoviesIsShortKey = options.savedMoviesIsShortKey;
    }

    // Movies SearchText

    getSearchText(type) {
        if (type === 'movies') {
            return localStorage.getItem(this._moviesSearchTextKey);
        }
        if (type === 'saved-movies') {
            return localStorage.getItem(this._savedMoviesSearchTextKey);
        }
    }

    setSearchText(searchText, type) {
        if (type === 'movies') {
            localStorage.setItem(this._moviesSearchTextKey, searchText);
        }
        if (type === 'saved-movies') {
            localStorage.setItem(this._savedMoviesSearchTextKey, searchText);
        }
    }

    removeSearchText() {
        localStorage.removeItem(this._moviesSearchTextKey);
        localStorage.removeItem(this._savedMoviesSearchTextKey);
    }

    // Is short movies

    getIsShort(type) {
        if (type === 'movies') {
            return localStorage.getItem(this._moviesIsShortKey) === 'true';
        }
        if (type === 'saved-movies') {
            return localStorage.getItem(this._savedMoviesIsShortKey) === 'true';
        }
    }

    setIsShort(isShort, type) {
        if (type === 'movies') {
            localStorage.setItem(this._moviesIsShortKey, isShort);
        }
        if (type === 'saved-movies') {
            localStorage.setItem(this._savedMoviesIsShortKey, isShort);
        }
    }

    removeIsShort() {
        localStorage.removeItem(this._moviesIsShortKey);
        localStorage.removeItem(this._savedMoviesIsShortKey);
    }

    // Movies

    getMovies() {
        return JSON.parse(localStorage.getItem(this._moviesKey));
    }

    setMovies(movies) {
        localStorage.setItem(this._moviesKey, JSON.stringify(movies));
    }

    removeMovies() {
        localStorage.removeItem(this._moviesKey);
    }
}

const moviesKey = 'movies';
const moviesSearchTextKey = 'movies-search-text';
const moviesIsShortKey = 'movies-is-short';
const savedMoviesSearchTextKey = 'saved-movies-search-text';
const savedMoviesIsShortKey = 'saved-movies-is-short';

export const moviesLocalStorage = new MoviesLocalStorage({
    moviesKey: moviesKey,
    moviesSearchTextKey: moviesSearchTextKey,
    moviesIsShortKey: moviesIsShortKey,
    savedMoviesSearchTextKey: savedMoviesSearchTextKey,
    savedMoviesIsShortKey: savedMoviesIsShortKey
});