import "./message.css"
export default function Message(props){
    return (
        <div className="message fixed w-fit-content p-2 bg-[#985665]" style={{bottom : "2%", left : "2%", zIndex : "999", borderRadius : "10px"}}>
            {props.message}
        </div>
    )
}