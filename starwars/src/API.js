import axios from 'axios';

class get {
    // API CALL FOR PEOPLE
    static people () {
        return axios.get('https://swapi.co/api/people/')
    }
}

export default class API {
    // Return people method.
    static getPeople() {
        return get.people()
    }
}