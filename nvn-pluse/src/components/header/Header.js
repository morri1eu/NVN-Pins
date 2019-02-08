import React, {Component} from 'react'
import './Header.css'
export default class Header extends Component{

    render(){
        return(
            <div>
            <div className= 'col-md-12' id='banner'>
                <h1 className='Title row'>News Views Plus</h1>
                </div>
                {/* <div className='col-md-12' id='banner'>
                <h4 style={{width:'90%'}} className='Title row'>How to Use: News Views Plus is a single page application made to clarify the media in this age of "fake news". Built to be utilized by "news junkies" and those new to politics, News Views Plus offers articles from left leaning (Democrat) and right leaning (Republican) news sources side by side so You can decide what to believe.<br></br>
                Use the textbox below to search using your own term and click on the dropdown to choose from a list of sources.
                </h4>
            </div> */}
            </div>
        )
    }
}