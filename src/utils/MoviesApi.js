class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _makeRequest(method, path) {
        const reqeust = fetch(
            `${this._baseUrl}/${path}`, 
            {
                method: method,
                headers: { 'Content-Type': 'application/json' }
            }
        )
        return reqeust.then(this._parseResponse);
    }

    _parseResponse(result) {
        if (result.ok) {
            return result.json();
        } else {
            return Promise.reject(`Error: ${result.status}`);
        }
    }

    // Movies

    getMovies() {
        return this._makeRequest('GET', 'beatfilm-movies');
    }
}

export const moviesUrl = 'https://api.nomoreparties.co';

export const moviesApi = new MoviesApi({
    baseUrl: moviesUrl
});
