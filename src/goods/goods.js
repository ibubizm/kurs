
function Goods(props){
    return(
        <div className="goods__block">
            <Tovar items={props.ass} />
        </div>
    )
}

function Tovar(props) {
    let params = props.items
    console.log(params)
    let popa = params.map((item, index) => 
        <div key={index.toString()} className="tovar">
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <img width="300px" src={item.img} alt=""/>
        </div>
        )
    return(
        <div className="tovar">
            {popa}
        </div>
    )
}



export default Goods