import{useState} from 'react';

const BoxGenerator = ({boxList, setBoxList}) => {
    const [box, setBox] = useState({})

    
    const onChangeHandler = (e) => {
        console.log(e)
        setBox({...box, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e);

        setBoxList([...boxList, box]);

        setBox(
            {color:''}
        )
    }

    return (
        <div>
            <form className="form-container" onSubmit = {handleSubmit}>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" id="Color" onChange={onChangeHandler} />
                <button type="submit">Add</button>
            </form>
            <div className="box-container">
            {boxList.map((box) => (
                
                <div className="box" style = {{backgroundColor: box.color}}>
                    <p>{box.color}</p>
                </div>
            ))}

            </div>
        </div>
    );
}

export default BoxGenerator;