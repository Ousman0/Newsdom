import React, { useEffect, useState } from "react";
import Articles from "./Articles";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // document.title = `${props.category}-Newsdom`;
  // ousman

  const upDateNews = async () => {
    console.log("update hitted");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fcf982af31414162b12d3c1b410ec369&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    setloading(false);
  };
  useEffect(() => {
    upDateNews();
  }, []);

  const fetchMoreData = async () => {
    console.log("update hitted");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fcf982af31414162b12d3c1b410ec369&page=${page + 1}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setarticles(articles.concat(parseData.articles));
    settotalResults(parseData.totalResults);
    setloading(false);
    setpage(page + 1);
  };

  return (
    <div>
      <h2 className="d-flex justify-content-md-center my-2">
        Newsdom- Top {props.category} Headlines
      </h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {
              // !loading&&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Articles
                      title={
                        element.title.length >= 45
                          ? element.title.slice(0, 45)
                          : element.title
                      }
                      description={element.description?.slice(0, 88)}
                      imageurl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      time={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })
            }
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  pageSize: 12,
  country: "in",
  category: "Technology",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
