import React, {useState, useEffect} from "react";
import "./NewsApi.css";

export default function NewsApi() {
  const [news, setNews] = useState([]);
  const NewsapiKey = "571d954539a24684b8e1e1ee4f23bb87";

  useEffect(() => {
    async function newsFetch() {
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NewsapiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);
        console.log("jhhhhhh", data);
      } catch (error) {
        // console.log("error", error);
      }
    }
    newsFetch();
  }, []);

  return (
    <div className="homeContainer">
      <div className="sidebarRight flexc">
        <div className="sideBarNews">
          <h4 className="pl20 pt10 lnews">Linkedin News</h4>
          <ul>
            {news &&
              news.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                  <p className="fnt12 txt2">{item.publishedAt}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
