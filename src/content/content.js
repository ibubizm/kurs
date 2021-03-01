import React from 'react'
import './content.scss'
import Converse from '../converse/converse'


class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: '',
            currencyRate: {}
        };
        
        this.current = ['USD', 'RUB', 'PHP']
        this.getRate()
    }

    getRate = () =>{
        fetch('https://api.exchangeratesapi.io/latest')
        .then(data =>{
            return data.json()
        })
        
        .then(data =>{
            this.setState({date: data.date})
            let result = {}

            for(let i = 0; i< this.current.length; i++){
                result[this.current[i]] = data.rates[this.current[i]]
                
            }
            console.log(result)
            this.setState({currencyRate: result})
        })
    }
    render(){
        return(
            <div className="content">
                <div className="container">
                    <h1 className="block__title">Exchange rates {this.state.date}</h1>
                    <div className="content__items">
                        {Object.keys(this.state.currencyRate).map((keyName) =>(

                        <div className="item" key={keyName}>
                            <div className="item__content">

                                    <div className="valuta">
                                        <p>{keyName} </p>
                                    </div>
                                    <div className="kurs">
                                        <p>{this.state.currencyRate[keyName].toFixed(2)}</p>
                                    </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <Converse rate={this.state.currencyRate}/>
            </div>
        )
    }
}

export default Content