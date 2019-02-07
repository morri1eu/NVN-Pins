import React, { Component } from 'react'
import './Sources2.css'
import Cards from '../cards/Cards';

let value
export default class Sources2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            source: 'the-huffington-post',
            articles:[],
            searchTerm: ''
        }
    }

    async componentWillMount(props) {
        await fetch(`https://newsapi.org/v2/everything?sources=${this.state.source}&pageSize=5&apiKey=5573b7a235654d248bf3d502bd3417e6`)
            .then((result) => result.json())
            .then(response =>{
                this.setState({ articles: response.articles })
                console.log(response)
            })
            .catch((err) => {
                //alert('No articles found. Please refine your search.')
            })
         
            console.log(document.getElementsByClassName('select-selected')[0].innerHTML)
            document.getElementsByClassName('select-selected')[1].addEventListener('click',()=>{
                value= document.getElementsByClassName('select-selected')[1].innerHTML
                let check= this.state.source.toLowerCase().replace(/ /g,'-')
                this.setState({source:value.toLowerCase().replace(/ /g,'-')})
                console.log(check + this.state.source)
                
                if(check === this.state.source){
                }
                else{
                    console.log(this.props)
                    this.getArticles(this.props)}
            })
       
    }

    handleChange = event => {
       // event.preventDefault()
       console.log(event.target)
     
        this.setState({source:'value'})
    }

    async getArticles(props){
        console.log(props)
        if(props && props.searchTerm !==undefined){
            await fetch(`https://newsapi.org/v2/everything?sources=${this.state.source}&q=${props.searchTerm}&pageSize=5&apiKey=5573b7a235654d248bf3d502bd3417e6`)
                .then((result) => result.json())
                .then(response =>{
                    this.setState({ articles: response.articles })
                    console.log(response)
                })
                .catch((err) => {
                    alert('No articles found. Please refine your search.')
                })
            }
            else{
                await fetch(`https://newsapi.org/v2/top-headlines?sources=${this.state.source}&pageSize=5&apiKey=5573b7a235654d248bf3d502bd3417e6`)
                .then((result) => result.json())
                .then(response =>{
                    this.setState({ articles: response.articles })
                    console.log(response)
                })
                .catch((err) => {
                    alert('No articles found. Please refine your search.')
                })
            }
            }
        
    
    async componentWillReceiveProps(props){
        console.log(props)
        if(props.searchTerm){
        await fetch(`https://newsapi.org/v2/everything?sources=${this.state.source}&q=${props.searchTerm}&pageSize=5&apiKey=5573b7a235654d248bf3d502bd3417e6`)
            .then((result) => result.json())
            .then(response =>{
                this.setState({ articles: response.articles })
                console.log(response)
            })
            .catch((err) => {
                //alert('No articles found. Please refine your search.')
            })
        }
        else{
    }}
    render() {        
        return (
            <div className='container-sources' style={{ width: '25%', marginRight: 20, }}>
                <div className='custom-select' style={{ width: '100%' }}>
                    <select name='Left Source One' onChange={this.handleChange} value={this.state.source}>
                        <option value='0'>Left Leaning Source One</option>
                        <option value='cnn' >CNN</option>
                        <option value="the-new-york-times" >The New York Times</option>
                        <option value="the-huffington-post">The Huffington Post</option>
                        <option value="msnbc" >MSNBC</option>
                        <option value='mashable' >Mashable</option>
                    </select>
                </div>
                <Cards articles={this.state.articles}/>
            </div>
        )
    }
}