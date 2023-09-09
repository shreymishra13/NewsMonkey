import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let {title, description,picUrl , url, author, time}=this.props;
     

        return (
            <>

                <div className="card" >
                    <img className="card-img-top card-img" src={picUrl} alt="Card" />
                    <div className="card-body" >
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}..</p>
                        <p className="card-text"><small className="text-muted">By <strong>{author}</strong> on {new Date(time).toGMTString()}</small></p>
                        <a href={url} className="btn btn-dark">Read full News</a>

                        {/* Need to work here */}
                        {/* <span className="badge badge-dark" style={{color:"white" , background:"red"}}>this is dark page</span> */}
                    </div>
                </div>

            </>
        )
    }
}
