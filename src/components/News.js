import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'

export default class News extends Component {




  constructor() {
    super();


    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }



  }
  newsUpdate = async (page) => {
    this.setState({ loading: true });
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-08-03&sortBy=publishedAt&apiKey=7d1be05007f347bbb7e01e726825a52e&page=" + page + "&pageSize=20";

    let articles = await fetch(url);
    let parsedArticles = await articles.json();

    // this.parsedArticles.articles.map((element)=>{
    //   if(element.title===null || element.description===null || element.url===null || element.urlToImage
    //     ==null){
    //       element.pop();
    //     }

    // })

    this.setState({ articles: parsedArticles.articles, totalResults: parsedArticles.totalResults, loading: false });

  }

  async componentDidMount() {
    this.newsUpdate(this.state.page);




  }
  handleForPrev = async () => {
    this.setState({ page: this.state.page - 1 })
    this.newsUpdate(this.state.page);

  }
  handleForNext = async () => {

    this.setState({ page: this.state.page + 1 })
    this.newsUpdate(this.state.page);


  }


  render() {
    return (
      <div className="container my-3">
        <div className="row my-3">
          <h1 className="text-center">
            NewsMonkey - Top Headlines for Today
          </h1>
          {this.state.loading && <Spinner />}

          {this.state.articles.map((element) => {
            return <div className="col-md-3 my-3" key={element.url}>
           { !this.state.loading &&  <NewsItems title={element.title.slice(0, 40)} description={element.description.slice(0, 260)} picUrl={element.urlToImage} url={element.url} />}
            </div>

          })}

        </div>
        <div className="container d-flex justify-content-center my-3">
          <button disabled={this.state.page <= 1} className="btn btn-dark mx-3" onClick={this.handleForPrev}>
            &larr; Prev

          </button>
          <button disabled={this.state.page > (this.state.totalResults / 20)} className="btn btn-dark mx-3" onClick={this.handleForNext}>
            Next &rarr;

          </button>
        </div>



      </div>



    )
  }
}
