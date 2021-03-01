import React from 'react'
import './converse.scss'

class Converse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            result : 0,
        }
    }

    // static get

    calcRate = (e) =>{
        e.preventDefault()
        let elements = e.target.elements
        let current_value = elements.inp.value
        let valute = elements.sel.value
        let a = this.props.rate[valute]
        this.setState({result: (current_value / a).toFixed(2)})

    }
    
    render(){
        return(
            <div className="container">
                <div className="change">
                    <h1 className="block__title">Calc rates </h1>
                    <div className="block__items">
                        <form onSubmit={this.calcRate} className="culc">
                            <input defaultValue="100" name="inp" placeholder="value" type="number"/>
                            <select name="sel" id="">
                                {Object.keys(this.props.rate).map((keyName) =>(
                                    <option  key={keyName} value={keyName}>{keyName}</option>
                                ))}
                            </select>
                            <button className="btn" type="submit">Result</button>
                        </form>
                        <div className="result">
                            <div className="">Result: {this.state.result}&euro;</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Converse