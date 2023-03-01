interface User {
    email : string;
    firstName? : string; //Optional in Interface
    lastName?: string;
}

function profile(user: User) : string {
    return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser = {
    email: 'test@test.com',
    firstName: 'Preston',
    lastName: 'Tran'
};

console.log(profile(realUser));
//console.log(realUser.email);
