const button = (props)=>{
    return(
        <button onClick={(e)=> {props.event(e)}}>{props.name}</button>
    );
}
export default button;