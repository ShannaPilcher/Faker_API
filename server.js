const express = require("express");
const faker = require("faker");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User());

class Company {
    constructor() {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = ([
            this.street = faker.address.streetAddress(),
            this.city = faker.address.city(),
            this.state = faker.address.state(),
            this.zipCode = faker.address.zipCode(),
            this.country = faker.address.country()
        ])
    }
}
console.log(new Company());

app.get("/api/users/new", (request, response) => {
    console.log(request.url);

    response.json(new User());
})

app.get("/api/companies/new", (request, response) => {
    console.log(request.url);

    response.json(new Company());
})

app.get("/api/user/company", (request, response) =>{
    console.log(request.url);

    response.json({
        user: new User(),
        company: new Company ()
    });
})

app.listen(8000, () => {
    console.log("You have successfully connected")
})