import axios from 'axios';

export function getNews(data) {

    /*fetch(`https://gnews.io/api/v4/search?q=ufsm&in=ufsm.br&token=f14d901789836e80678d79e027257e65`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });*/
    
    const options = {
    method: 'GET',
    url: `https://newsapi.org/v2/everything?q=${data}&domains=ufsm.brsortBy=popularity&apiKey=40f7d6b5627a4018b4d0491cbae913fa`,
    headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'ac579a97b2msh4dac675fde48180p1d38d7jsn471262e0b6ff'
      }
    };

    return axios.request(options).then(function (response) {
        return response
    }).catch(function (error) {
        console.error(error);
    });
}