import {useParams} from 'react-router-dom'

const Message =(props) => {
    const {variable} = useParams();
    
    return(
        <div>
        {
            !isNaN(variable)?
            <h1>The number is: {variable}</h1>:
            <h1>The word is: {variable}</h1>
        }
        </div>
    )
}

export default Message;