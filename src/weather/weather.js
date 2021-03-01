import React from 'react'
import './weather.scss'
import close from './close.svg'

class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            myKey: 'dc6be4480cc118d8e566b7b73780141c',
            count: 0,
            block: [],
        }
    }


    getWeather = (event) =>{
        event.preventDefault()
        let element = event.target.elements
        let city = element.city.value

        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.state.myKey}`)
        
        .then(data =>{
            return data.json()
        })

        .then(data =>{
            console.log(data.cod)
            if(data.cod === 200){
            let comp = this.state.block
            comp.push({city: data.name,
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                temp: (data.main.temp -273).toFixed(0),
                decription: data.weather[0].main,
                min_temp: (data.main.temp_min -273).toFixed(0),
                max_temp: (data.main.temp_max -273).toFixed(0)
            })
            
            this.setState({block: comp})}

            else{
                return(
                    console.log('no')
                )
            }
        })
    }
    
    
    delWeather = (index) =>{
        let arr = this.state.block
        arr.splice(index, 1)
        this.setState({block: arr})
    }


    render(){
        return(
            <div className="weather">
                <h1 className="page__title">Weather</h1>
                <div className="content">
                    <form className="form" onSubmit={this.getWeather} >
                        <input defaultValue="minsk" name="city" type="text"/>
                        <button type="submit">push</button>
                    </form>
                </div>
                <div className="weather__block">
                    {this.state.block.map((item, index) =>
                        <div key={index.toString()} className="weather__item">
                            <div className="item__title">
                                {item.city}
                            </div>
                                <button className="btn__weather " onClick={() => this.delWeather(index)}><img className="close__svg" src={close} alt=""/></button>
                            <div className="temp">
                                {item.temp}
                            </div>
                            <img src={item.icon} alt=""/>
                            <div className="max_min_temp">
                                <div className="min_temp">
                                &darr; {item.min_temp}
                                </div>
                                <div className="desc">
                                    {item.decription}
                                </div>
                                <div className="max_temp">
                                    &uarr; {item.max_temp}
                                </div>
                            </div>
                        </div>
                    )}
                    
                    
                </div>
            </div>

        )
    }
}

export default Weather