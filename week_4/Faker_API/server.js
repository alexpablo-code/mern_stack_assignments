const express = require("express");
const {faker} = require('@faker-js/faker');
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//in order to be able to access POST data


// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

const createUser = () => {
    const newUser = {
        password: faker.name.firstName(),
    };
    return newUser;
}


// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users", (req, res) => {
    res.json( users[1] );
});

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
