import {useParams} from 'react-router-dom'


const MessageColors =(props) => {
    const {message, color, backgroundColor} = useParams();
    
    return(
        <div>
            <h1 style={{backgroundColor: backgroundColor, color:color}}>{message}</h1>
        </div>
    )
}

export default MessageColors;
