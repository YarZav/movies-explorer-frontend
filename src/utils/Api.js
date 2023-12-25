import { jwtKey } from "./Constants";
import { url } from "./Constants";

class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._authorised = options.authorised;
    }

    _makeHeaders() {
        if (this._authorised) {
            return {
                'Authorization' : `Bearer ${localStorage.getItem(jwtKey)}`,
                'Content-Type': 'application/json'
            }
        } else {
            return { 'Content-Type': 'application/json' }
        }
    }

    _makeRequest(method, path, data = { }) {
        const reqeust = (Object.keys(data).length === 0)
            ? this._makeRequestWithoutBody(method, path)
            : this._makeRequestWithBody(method, path, data);
        return reqeust.then(this._parseResponse);
    }

    _makeRequestWithBody(method, path, data) {
        return fetch(
            `${this._baseUrl}/${path}`, 
            {
                method: method,
                headers: this._makeHeaders(),
                body: JSON.stringify(data)
            }
        )
    }

    _makeRequestWithoutBody(method, path, data) {
        return fetch(
            `${this._baseUrl}/${path}`, 
            {
                method: method,
                headers: this._makeHeaders()
            }
        )
    }

    _parseResponse(result) {
        if (result.ok) {
            return result.json();
        } else {
            return Promise.reject(`Error: ${result.status}`);
        }
    }

    // Auth

    signup(name, email, password) {
        return this._makeRequest('POST', 'signup', { name: name, email: email, password: password });
    }

    signin(email, password) {
        return this._makeRequest('POST', 'signin', { email: email, password: password });
    }

    // Mesto

    getUsersMe() {
        return this._makeRequest('GET', 'users/me');
    }

    patchUsersMe(name, email) {
        return this._makeRequest('PATCH', 'users/me', { name: name, email: email });
    }

    getMovies(avatar) {
        return this._makeRequest('GET', 'movies');
    }

    postMovies(description, image, thumbnail, trailerLink, movieId, nameRU, nameEN) {
        return this._makeRequest(
            'POST', 
            'movies', 
            { 
                description: description, 
                image: image,
                thumbnail: thumbnail,
                trailerLink: trailerLink,
                movieId: movieId,
                nameRU: nameRU,
                nameEN: nameEN
            }
        );
    }

    deleteMovies(id) {
        return this._makeRequest('DELETE', `movies/${id}`);
    }
}

export const authorisedApi = new Api({
    baseUrl: url,
    authorised: true
});


export const unauthorisedApi = new Api({
    baseUrl: url,
    authorised: false
});
