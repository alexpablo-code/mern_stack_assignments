import {useState} from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [name, setName] = useState("mario");
    const [blogs, setBlogs] = useState ([
        {title: 'My new website', body: 'Lorem ipsum...', author: 'Mario', id: 1},
        {title: 'Welcome Party!', body: 'Lorem ipsum...', author: 'Yoshi', id: 2},
        {title: 'Web Dev top tips', body: 'Lorem ipsum...', author: 'Mario', id: 3}
    ])

    const handleClick = () => {
        setName('luigi');
        console.log('Hello, Ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('Hello', name); 
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>

            <button onClick={handleClick} >Click me</button>
            
            <button onclick={handleClickAgain('Mario')} >Click with Parameter</button>
            {/* this will fire the function immediately without clicking because it has the parenthesis ^^ */}
            
            <button onClick={() => {
                handleClickAgain("Steve")
            }} >Click with Arrow</button>
            {/* ^^ this will only fire the function when the button is clicked, we have to put it in an ananomous arrow function to accomplish this */}

            <button onClick={() => handleClickAgain("Steve ONELINE")} >Click with Arrow</button>
            {/* ^^ this is the same as function above but since its in one line we do not need {} around the handle clicke function */}


            <BlogList blogs ={blogs} title="All Blogs!" handleDelete= {handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author ==="Mario")} title= "Mario's Blogs" handleDelete= {handleDelete}/>
        </div>
    );
}

export default Home;