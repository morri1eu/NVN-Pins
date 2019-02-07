import React, { Component } from 'react'
import './SearchBar.css'
import Sources from '../sources/Sources'
import Sources2 from '../sources2/Sources2'
let y
let x = ''
let passedProps
let passedProps2
export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            passingProp: false
        }
        this.Submit = this.Submit.bind(this)
    }

    handleInputChange = event => {
        if (this.state.passingProp === true) {
            this.setState({ passingProp: false })
        }
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    async Submit(event) {
        event.preventDefault()
        await this.setState({ passingProp: true })
        x = this.state.searchTerm
        console.log('x= ' + x)
    }

    render() {
        if (this.state.passingProp === true) {
            passedProps = <Sources searchTerm={this.state.searchTerm} />
            passedProps2 = <Sources2 searchTerm={this.state.searchTerm} />
        }
        else if (this.state.passingProp === false && x !== '' && x !== y) {
            passedProps = <Sources searchTerm={x} />
            passedProps2 = <Sources2 searchTerm={x} />
            x = y
        }
        else {
            passedProps = <Sources searchTerm={x} />
            passedProps2 = <Sources2 searchTerm={x} />
        }
        return (
            <div>
                <div className='col-md-12' id='SearchBar'>
                    <form>
                        <input className='input' type='text' placeholder='Type Here' name='searchTerm' onChange={this.handleInputChange} value={this.state.searchTerm} />
                        <button className='searchImage' onClick={this.Submit} alt='Go' >'🔍'</button>
                    </form>
                </div>

                <div className='body'>
                    <div className='col-md-12'>
                        <div className='container'>
                            <h2 style={{textAlign:"center", width:'50%'}}>Left Leaning Sources</h2>
                            <h2 style={{textAlign:"center", width:'50%'}}>Right Leaning Sources</h2>

                        </div>
                        <div className='container'>
                            {passedProps}
                            {passedProps2}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}