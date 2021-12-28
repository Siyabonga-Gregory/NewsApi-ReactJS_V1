import "./Container.css";
import Card from "../../Card/NewsCard/Card";
import CountryFilter from "./CountryFilter/CountryFilter";
import axios from "axios";
import React, { useState ,useEffect} from 'react';

export default function Container(props) {

    const [news,setNews]=useState([]);
    const [selectedCountry,setSelectedCountry]=useState('za');
    
    const LoadNews = () => {
        
        const request = axios.get('https://newsapi.org/v2/top-headlines?' +
         'country='+selectedCountry['selectedCountry']+'&' +
        'apiKey=20eb164bcd4a4396b5ff9bed15223397')
        .then((response) => {
            console.log(response.data.articles);
            setNews(response.data.articles);
        })
        .catch(console.log)
    }

    useEffect(() => {
        LoadNews();
          console.log(selectedCountry['selectedCountry']);
      }, [selectedCountry]);

        return (
            <>
            <Card>
                <CountryFilter  reloadNews={(selectedCountry) => setSelectedCountry({selectedCountry})} />
            </Card>

            <div> 
                {
                news.map((news,index) => {
                    return (
                        <table key={index}>
                            <tbody>
                                <tr>
                                    <td className='urlToImage'> <img src={news.urlToImage} alt="news" /></td>
                                    <td>    
                                            <table className='newsTable'>
                                            <tbody>
                                                <tr className='newsRow'>
                                                        <td>
                                                            <pre className='pre'> 
                                                                <br/><span className="heading">Source : </span><span className="content">{news['source'].name}</span>
                                                                <br/><span className="heading">Author : </span><span className="content">{news.author} </span>
                                                                <br/><span className="title">Title : </span><span className="content">{news.title} </span>
                                                                <br/><span className="heading">Content : </span><span className="content">{news.content} </span> 
                                                                <br/><span className="heading">PublishedAt :</span><span className="content">{news.publishedAt}</span>
                                                                <br/><span className='heading'>Description : </span><span className="content">{news.description}</span>
                                                                <br/><span className="heading">Url : </span><span className="content"><a href={news.url}>Url</a></span>
                                                            </pre>
                                                        </td>
                                                    </tr>
                                            </tbody>
                                        </table> 
                                  </td>
                            </tr>
                        </tbody>
                    </table>
                )
                })}
          </div>
       </>
    )
}
































