import React, { Component } from "react";
import "../App.css";
import NewsItem from "./NewsItem";
import Spinner from "../Spinner";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      flag1: false,
      flag:false,
      currentPage: 1,
      totalPage: 0,
    };
  }
  componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=a1bee5cd4c25467a908e856b1606769a&pageSize=11&page=${1}`;
    let a = async () => {
      this.setState({
        flag: true,
      });
      let data = await fetch(url);
      let data1 = await data.json();
      this.setState({
        flag: false,
      });
      this.setState({
        articles: data1.articles,
        totalPage: Math.ceil(data1.totalResults / 11),
      });
    };
    a();
    window.addEventListener("scroll",this.fun1 )
  }
  fun1 = () => {
    if (  window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      if(this.state.currentPage <= this.state.totalPage){
       
      this.setState({
        
        flag:true
      })}
      if (!this.state.flag1 && this.state.currentPage <= this.state.totalPage) {
        this.common(false, this.props.category);
        this.setState({
        
          flag:false
        })
      }
    }
  };
  common = async (el,ele2) => {
    this.setState({
      flag1: true,
     
    })
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${ele2}&apiKey=a1bee5cd4c25467a908e856b1606769a&pageSize=11&page=${this.state.currentPage+1}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${ele2}&apiKey=d8f7e0861a6d4894bab8fd4105bf87f4&pageSize=11&page=${el?this.state.currentPage+1:this.state.currentPage-1}`;
    // this.setState({
    //   flag: true,
    // });
    let data1 = await fetch(url);
    let data2 = await data1.json();
    let arr = data2.articles;

    this.setState({
      articles: [...this.state.articles,...arr],
      currentPage: (this.state.currentPage)+1
    });
    
    // this.setState({
    //   flag: false,
    // });
    this.setState({
      flag1: false,
    
    })
  };
 
  
  
  // previous = ()=>{
    
     
    
  //     this.common(false,this.props.category);
  //     this.setState({
  //       currentPage: (this.state.currentPage)-1,
        
  //     });
  //   }
    
  // next = () => {
    
     
      
  //     this.common("+",this.props.category );
      
  //     this.setState({
  //       currentPage: (this.state.currentPage)+1,
        
  //     });
      
      

   
  // };
  render() {
    return (
      <>
       

        <div className="gridpar">
          {this.state.articles.map(
            ({ title, urlToImage, publishedAt, url }) => {
              return (
                <NewsItem
                  title={title}
                  urlToImage={urlToImage}
                  publishedAt={publishedAt}
                  url={url}
                />
              );
            }
          )}
        </div>
        {/* <div className="btn13">
          <button type="button" disabled={this.state.currentPage<=1?"disabled":""} onClick={this.previous} className="btn btn-secondary btn-lg btn3">
            previous
          </button>
          <button
            type="button"
            onClick={this.next}
            className="btn btn-secondary btn-lg btn3"
            disabled={this.state.currentPage===this.state.totalPage?"disabled":""}
          >
            Next
          </button>
        </div> */}
         {this.state.flag && (
          <div className="sp1">
            <Spinner />
          </div>
        )}
      </>
    );
  }
}
