const fs = require('fs')
const readlineSync = require('readline-sync');

const filePath = 'user.json';

function readUsers() {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(JSON.parse(data));
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
}

function writeUsersToFile(users) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing users file:', error);
    }
}

function getUsers(pageIndex,pageSize) {
    const users = readUsers();
    const totalDocs = users.length;
    const totalPage = Math.ceil(totalDocs / pageSize);
    const startIndex = pageIndex * pageSize;
    const paginatedUsers = users.slice(startIndex, startIndex + pageSize);
    
    return {
        data: {
            users: paginatedUsers,
            totalPage: totalPage,
            totalDocs: totalDocs
        }
    };
}

function setUsers() {
    const id = readlineSync.question('Enter user ID: ');
    const name = readlineSync.question('Enter user name: ');
    const role = readlineSync.question('Enter user role: ');
    const gender = readlineSync.question('Enter user gender: ');
    const nationality = readlineSync.question('Enter user nationality: ');
    const userData = {
        id: id,
        name: name,
        role: role,
        gender: gender,
        nationality: nationality
    }
    const users = readUsers();
    users.push(userData);
    console.log(users);
    writeUsersToFile(users);
}

function updateUser() {
    const users = readUsers();
    const id = readlineSync.question('Enter user ID: ');
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1){
        console.log(`Have user with ID = ${id}`);
        const name = readlineSync.question('Enter user name: ');
        const role = readlineSync.question('Enter user role: ');
        const gender = readlineSync.question('Enter user gender: ');
        const nationality = readlineSync.question('Enter user nationality: ');
        
        const userData = {
            id: id,
            name: name,
            role: role,
            gender: gender,
            nationality: nationality
        }
        users[userIndex] = { ...users[userIndex], ...userData};
        writeUsersToFile(users);
    }else{
        console.log(`Dont have any user with ID = ${id}`);
    }

}

function deleteUser(userId){
    const users = readUsers();
    const id = readlineSync.question('Enter user ID: ');
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1){
        console.log(`Have user with ID = ${id}`);
        users.pop(userIndex);
        writeUsersToFile(users);
    }else{
        console.log(`Dont have any user with ID = ${id}`);
    }
}


//setUsers();
//updateUser()
 deleteUser();
console.log(getUsers(1, 1));