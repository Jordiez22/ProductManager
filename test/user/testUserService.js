require("../../db")
const userService = require("../../service/user");

function testRegister() {
    userService.userRegister({
        username: "121212",
        password: "678",
        age: 22
    })
}

async function testLogin() {
    let result = await userService.userLogin({
        username: "abc",
        password: "2121"
    })
    console.log(result);
}

function testDelete() {
    userService.deleteUser({
        username: ""
    })
}

async function testIsexist() {
    let result = await userService.getUser({
        username: "abc"
    })
    console.log(result);
}

// testRegister()
// testIsexist()
testLogin()