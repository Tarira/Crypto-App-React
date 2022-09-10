import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleNews from './SingleNews';
import ReactPaginate from 'react-paginate';
import './Crypto.css'

function CryptoNews() {
    const [allNews, setAllNews] = useState([]);
    const [pageNumber, setPageNumber] = useState (0);
    
    
    const changePage= ({selected}) => {
    setPageNumber(selected);

    }
    const newsPerPage = 10; 
    const pagesVisited = pageNumber * newsPerPage;
    const pageCount = Math.ceil(allNews.length / newsPerPage)
    const timeConverter = (time) => { 
    const newTime = time.toString();
    const year = newTime.slice(0,4);
    const month = newTime.slice(4,6);
    const day = newTime.slice(6,8);
    return (`${day} ${month} ${year}`)
    }
    useEffect(()=> 
    async function getNews (){
    const response = await axios({
        method: "get",
        url: "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=GH4WLOK7N2MFZZ34",
      })
      
    const news = await response.data.feed
    
      setAllNews(news.map((item) => { return{
        image: item.banner_image, title:item.title, summary:item.summary, source:item.source, url:item.url, time:timeConverter(item.time_published)}
    }))},[allNews]);
     

  return (
    <>
    <div>{allNews.slice(pagesVisited, pagesVisited + newsPerPage).map((item) => { 
        return (
        <SingleNews image={item.image} title= {item.title} summary={item.summary} source={item.source} url= {item.url}  time = {item.time}/>
    )})}</div>
    
    <ReactPaginate 
    nextLabel={'next'}
    onPageChange = {changePage}
    pageCount={pageCount}
    previousLabel ={'previous'}
    containerClassName={'paginationBttns'}
    previousLinkClassName={'previousBttn'}
    nextLinkClassName={'nextBttn'}
    disabledClassName={'paginationDisabled'}
    activeClassName={'paginationActive'}
    />
    </>
  )
    
}

export default CryptoNews