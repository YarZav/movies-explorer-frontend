class MoviesLocalStorage {
    constructor(options) {
        this._searchTextKey = options.searchTextKey;
        this._moviesKey = options.moviesKey;
        this._isShort = options.isShort;
    }

    // SearchText

    getSearchText() {
        return localStorage.getItem(this._searchTextKey);
    }

    setSearchText(searchText) {
        localStorage.setItem(this._searchTextKey, searchText);
    }

    removeSearchText() {
        localStorage.removeItem(this._searchTextKey);
    }

    // Is short movies

    getIsShort() {
        return localStorage.getItem(this._isShort) === 'true';
    }

    setIsShort(isShort) {
        localStorage.setItem(this._isShort, isShort);
    }

    removeIsShort() {
        localStorage.removeItem(this._isShort);
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

const searchTextKey = 'search-text';
const moviesKey = 'movies';
const isShortKey = 'isShort';

export const moviesLocalStorage = new MoviesLocalStorage({
    searchTextKey: searchTextKey,
    moviesKey: moviesKey,
    isShortKey: isShortKey
});