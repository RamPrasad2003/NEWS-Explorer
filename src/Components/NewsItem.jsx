import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "200px" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-success ">By {author} on {new Date(date).toTimeString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-primary">Read More...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
