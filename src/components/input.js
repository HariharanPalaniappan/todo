const inputComponent = (props)=>{
    return(
        <input type="text" onChange={(e)=>props.event((e.target.value))} value={props.value}/>
    );
}
export default inputComponent;