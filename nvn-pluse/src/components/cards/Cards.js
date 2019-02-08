import React, { Component } from 'react'
import './Cards.css'

export default class Cards extends Component {
    

    render(props) {
        console.log(this.props)
        let x
        if (this.props) {
            x = this.props.articles.map(article =>
                <div className="card center" style={{ width: '100%'}} key={article.title}>
                    <a style={{ textDecoration: 'none', color: 'white' }} href={article.url}>
                        <img className="card-img-top" src={article.urlToImage} style={{ width: '100%' }} alt="Article" />
                        <div className="card-body">
                            <h4 className="card-title">{article.title}</h4>
                            <p className="card-text">{article.description || article.content}</p>
                        </div>
                </a>
                </div>
            )
        }
        else { }
        return <div> {x} </div>
    }
}