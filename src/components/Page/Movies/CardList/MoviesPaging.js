import { debounce } from "./MoviesDebounse";

class MoviesPaging {
    constructor() {
        this.moviesOffset = 0;
        this._moviesDebounse = debounce(() => this._func());
    }
    
    increaseMoviesOffset() {
        const isLargeWindowWidth = window.innerWidth >= 768;
        this.moviesOffset = this.moviesOffset + (isLargeWindowWidth ? 4 : 2);
    }

    resetMoviesOffset() {
        if (window.innerWidth >= 1280) {
            this.moviesOffset = 16;
        } else if (window.innerWidth >= 768) {
            this.moviesOffset = 8;
        } else {
            this.moviesOffset = 5;
        }
        
    }

    startDebounce(func) {
        this._func = func;
        this._moviesDebounse();
    }
}

export const moviesPaging = new MoviesPaging();