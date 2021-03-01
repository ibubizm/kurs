import {useState} from 'react'
import React from 'react'

function Footer(props){
    let [out, setOut] = useState('')

    function Nav(props){
        let data = props.div
    
        let listItem = data.map((item) =>
        <div key={item.name} className="">
                <div>{item.name}</div>
                <div>{item.surename}</div>
            </div>
        )
        
        return(
            <div>
                <ul>
                    {listItem}
                </ul>
            </div>
        )
    }

    function getInput(event){
        let inp = event.target.value
        setOut(inp)
    }


    return(
        <div className="footer">
            <input onChange={getInput} type="text"/>
            <Nav div={props.comp.person}/>
            <p>{out}</p>
        </div>
    )
}



export default Footer