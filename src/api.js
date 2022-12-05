import axios from 'axios';

export const fetchPopularRepos = async (language) => {
    return await axios.get("https://api.github.com/search/repositories?q=stars:>1+language:" + language + "&sort=stars&order=desc&type=Repositories")           
        .then(r => r.data.items) 
    } 

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = '?client_id' + id + '?client_secret' + sec;

const handleError = (error) => console.error(error);

export const getProfile = async (username) => {
    return await axios.get('https://api.github.com/users/' + username + params)
        .then(user => user.data)
        .catch(handleError)
};

export const getRepos = async (username) => {    
    return await axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
        .then(repos => repos.data)
        .catch(handleError)
};

