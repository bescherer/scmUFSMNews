import axios from 'axios';

export function getNews(data) {
    
    const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {q:data + ' site:ufsm.br',  safeSearch: 'Off', textFormat: 'Raw', freshness: 'Month'},
    headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-key': '8f952393cemsh07aacfdccc51777p11f2c1jsn5d13a6226856',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
    }
    };

    return axios.request(options).then(function (response) {
        return(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}