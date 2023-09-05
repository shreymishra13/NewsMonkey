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
  newsUpdate = async (page, category) => {
    this.setState({ loading: true });

    let url = "https://newsapi.org/v2/top-headlines?country=" + this.props.country + "&category=" + category + "&apiKey=7d1be05007f347bbb7e01e726825a52e&page=" + page + "&pageSize=" + this.props.pages;;

    let articles = await fetch(url);
    let parsedArticles = await articles.json();



    this.setState({ articles: parsedArticles.articles, totalResults: parsedArticles.totalResults, loading: false });

  }

  async componentDidMount() {
    this.newsUpdate(this.state.page, this.props.category);




  }
  handleForPrev = async () => {
    this.setState({ page: this.state.page - 1 })
    this.newsUpdate(this.state.page, this.props.category);

  }
  handleForNext = async () => {

    this.setState({ page: this.state.page + 1 })
    this.newsUpdate(this.state.page, this.props.category);


  }


  render() {
    let category = this.props.category
    category = category.charAt(0).toUpperCase() + category.slice(1);
    return (

      <div className="container my-3">
        <div className="row my-3">
          <h1 className="text-center">
            NewsMonkey - Top Headlines for Today
          </h1>
          <h2 className="text-center">
            Category : {category}

          </h2>
          {this.state.loading && <Spinner />}

          {this.state.articles.map((element) => {
            if (!(element.title === null || element.url === null || element.description === null || element.title==="[Removed]")) {
              return (<div className="col-md-3 my-3" key={element.url}>
                {!this.state.loading && <NewsItems title={element.title.slice(0, 40)} description={ element.description.slice(0, 160)} picUrl={element.urlToImage} url={element.url} author={element.author===null?"Unknown":element.author} time = {element.publishedAt} />}
                
              </div>)
            }
            else{
              return null;
            }

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
