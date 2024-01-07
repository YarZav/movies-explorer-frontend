class MoviesPaging {
    constructor() {
        this.moviesOffset = 0;
        this.mavies = [];
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
}

export const moviesPaging = new MoviesPaging();