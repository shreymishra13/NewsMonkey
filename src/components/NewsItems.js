import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let {title, description,picUrl , url}=this.props;
        return (
            <>

                <div className="card" >
                    <img className="card-img-top card-img" src={picUrl} alt="Card" />
                    <div className="card-body" >
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}..</p>
                        <a href={url} className="btn btn-dark">Read full News</a>
                    </div>
                </div>

            </>
        )
    }
}
