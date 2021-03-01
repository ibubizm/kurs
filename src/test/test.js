import React from 'react'
import {useState} from 'react'
import './test.scss'

function Test() {
    return(
        <div className="">
            <h1>Yesssssssssssssssssss !!!!!</h1>
        </div>
        )
}

function Test2() {
    return (
        <div className=""> 
            <input type="text"/>
        </div>
    ) 
}

class DoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            status: false,
            value: '',
            oba: []
        }
        this.myRef = React.createRef()
        this.focus = this.focus.bind(this)
        this.delItem = this.delItem.bind(this)
        this.tru = this.tru.bind(this)
        this.fals = this.fals.bind(this)
    }

    
    delItem(index){
        let arr = this.state.oba
        arr.splice(index, 1)
        this.setState({oba: arr})
    }


    focus(event){
        event.preventDefault()
        let element = event.target.elements
        let value = element.smth.value

        let pusher = this.state.oba
        pusher.push({item: value})
        this.setState({oba: pusher})
        element.smth.value = ''
    }

    tru(){
        this.setState({status: true})
        console.log(this.state.status)
    }

    fals(){
        this.setState({status: false})
        console.log(this.state.status)
    }


    render(){
        

        return(
            <div className="container">
                <h1 className="page__title">To do list</h1>
                <form className="form" onSubmit={this.focus}>
                    <input placeholder="input your note" name="smth" type="text"/>
                    <button type="submit">Send</button>
                </form>
                <hr/>
                <div className="block2">
                    
                    <ul className="ul">
                        {this.state.oba.map((item, index) =>
                                
                            <li className="li" ref={this.myRef} key={item.item}>
                                <strong>{item.item}</strong>
                                <small>{new Date().toLocaleDateString()}</small>
                                <button className="btn" onClick={() => this.delItem(index)}>&#x2715;</button>
                            </li>
                            )
                        }
                    </ul>
                </div>

                {/* <div className="">
                    <p>{this.state.status ? (<Test onClick={this.fals} />) : ( <Test2 onClick={this.tru}/>)}</p>
                </div> */}
            </div>
        )
    }
}

export default DoList