import { debounce } from "./MoviesDebounse";

class MoviesPaging {
    constructor() {
        this.moviesOffset = 0;
        this._moviesDebounse = debounce(() => this._func());
    }
    
    _isLargeWindowWidth() {
        return window.innerWidth >= 768;
    }

    increaseMoviesOffset() {
        this.moviesOffset = this.moviesOffset + (this._isLargeWindowWidth() ? 4 : 2);
    }

    resetMoviesOffset() {
        this.moviesOffset = this._isLargeWindowWidth() ? 4 : 5;
    }

    startDebounce(func) {
        this._func = func;
        this._moviesDebounse();
    }
}

export const moviesPaging = new MoviesPaging();