import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render() {
    let{title,urlToImage,publishedAt,url} = this.props
    return (
        <div className="card" style={{"width": "18rem"}}>
        <img src={urlToImage?urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJoml15ueu6kAWL_a43nyevpzWwnX8fKlxg&s"} className="card-img-top" id='mn' alt="..."/>
        <div className="card-body">
          <h5 className="card-title textj">{title.split(" ").slice(0,10).join(" ")}...</h5>
          <p className="card-text">{publishedAt}</p>
         
          <a href={url} id='v' className="btn btn-primary">Read More </a>
        </div>
      </div>
    )
  }
}
