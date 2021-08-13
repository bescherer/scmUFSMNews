/* react*/
import React, { useState, useEffect } from 'react';

/*react-navigation*/
import { useIsFocused } from "@react-navigation/native";

/*api*/
import { getNews } from '../../api/api';

/* components */
import CardsToPosts from '../../components/cards-to-post.component';

const theme = {
    colors: {
        placeholder: '#004AAD', 
        text: '#000', 
        primary: '#004AAD',
        underlineColor:'transparent', 
        background : '#fff'
    },
}

const Home = (props) => {
    const [data, setData] = useState("");
    const [news, setNews] = useState([]);
    const [allNews, setAllNews] = useState([]);
    const [page, setPage] = useState(0);
    const [newsPerPage, setNewsPerPage] = useState(3);

    const isFocused = useIsFocused();
    console.log(isFocused);


    useEffect(() => {
        console.log("AAAAAAAA")
        const callNewsFromApi = async (data) => {
            const body = await getNews(data);

            return body.value;
        };
    
        callNewsFromApi(data).
            then(res => {
                setNews(res.slice(page, newsPerPage));
                setAllNews(res);
            })
            console.log(news)
    }, []);


    const loadMorePosts = () => { 
        const nextPage = page + newsPerPage;
        const nextPosts = allNews.slice(nextPage, nextPage + newsPerPage);
        news.push(...nextPosts);
    
        setNews(news);
        setPage(nextPage);
      };
      console.log(news)


    return (
        <>
            <CardsToPosts posts={news} style={{flex:1}} loadMorePosts={loadMorePosts}/> 
        </>
    );
    
}

export default Home;