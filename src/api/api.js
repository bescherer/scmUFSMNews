import axios from 'axios';

export function getNews(data) {

    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q:data, lang: 'pt', page:1, page_size:15},
        headers: {
          'x-rapidapi-host': 'free-news.p.rapidapi.com',
          'x-rapidapi-key': 'ac579a97b2msh4dac675fde48180p1d38d7jsn471262e0b6ff'
        }
      };
      
      return axios.request(options).then(function (response) {
          console.log(response.data.articles);
          return response.data.articles
      }).catch(function (error) {
          console.error(error);
      });
}
