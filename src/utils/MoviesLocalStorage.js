class MoviesLocalStorage {
    constructor(options) {
        this._searchTextKey = options.searchTextKey;
        this._moviesKey = options.moviesKey;
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

export const moviesLocalStorage = new MoviesLocalStorage({
    searchTextKey: searchTextKey,
    moviesKey: moviesKey
});