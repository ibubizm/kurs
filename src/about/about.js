import React from 'react'
import './about.scss'

class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
        this.tru = this.tru.bind(this)
        this.fals = this.fals.bind(this)
        this.getChange = this.getChange.bind(this)
        this.delItem = this.delItem.bind(this)
        
    }

    getDate = (event) =>{
        event.preventDefault()
        let form = event.target.elements
        let ls = this.state.list
        let value = form.input.value
        if(value != ''){
        ls.push({elem: value,
                 status: false})
        this.setState({list: ls})
        form.input.value = ''
        }
        else{
            alert('input smth')
        }
    }

    getChange(item, inputValue){
        if(inputValue.ino.value != ''){
            item.elem = inputValue.ino.value
            this.setState({elem: item.elem})
        }
        else{
            this.setState({elem: item.elem = 'empty sring'})
        }
    }

    delItem(item, index){
        let arr = this.state.list
        console.log(item)
        console.log(index)
        arr.splice(index, 1)
        this.setState({list: arr})
    }

    tru(i){
        i.status = true
        this.setState({status: i})

    }

    fals(i){
        i.status = false
        this.setState({status: i})

    }



    render(){
        return(
            <div className="">
                <h1 className="page__title">About block</h1>
                <form className="form" onSubmit={this.getDate}>
                    <input name="input" placeholder="input note"/>
                    <button type="sumbit">push</button>
                </form>

                <ul className="ul">
                    {this.state.list.map((item, index) => 
                        <li className="li" onClick={() => this.tru(item)} key={item.elem}>
                            {item.status ?
                            <form className="form__change" onSubmit={(event) => {
                                let inputValue = event.target
                                this.fals(item)
                                this.getChange(item, inputValue)
                            }}>  
                                <input className="input__change" name="ino" defaultValue={item.elem} type="text"/>
                                <small>{new Date().toLocaleDateString()}</small>
                                <div className="btns">
                                    <button className="btn btn--change" type="submit">change</button>
                                    <button className="btn btn--del" onClick={() =>this.delItem(item, index)}>del</button>
                                </div>
                            </form> :
                            <>
                                <div className="input__value">{item.elem}</div>
                                <small>{new Date().toLocaleDateString()}</small>
                            </>
                            }
                        </li>
                    )}
                </ul>
            </div>
            
        )
    }
}

export default About