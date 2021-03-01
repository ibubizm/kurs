import React from 'react'
import {useState} from 'react'

function Test2(){
    const [count, setCount] = useState(0)
    const [comment, setComment] = useState([])

    let myRef = React.createRef()

    let addComment = () =>{
        let commentValue = myRef.current.value
        let comments = [...comment, commentValue]
        setComment(comments)
        myRef.current.value = ''
    }

    let pip = () =>{
        let carrentCount = count
        carrentCount++
        setCount(carrentCount)
    }

    return(
        <div className="">
            <button onClick={pip}>push</button>
            <div className="">
                <p>{count %2 === 0 ? 'chet': 'nechet' }</p>
                <p>{count}</p>
            </div>
            <div className="">
                <textarea ref={myRef}></textarea>
                <button onClick={addComment}>add</button>
                <div className="">
                    {comment}
                </div>
            </div>
        </div>

        
    )
}

export default Test2