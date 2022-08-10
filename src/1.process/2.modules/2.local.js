var user = {
    name: "Scott",
    email: "Scotte@email.com",
    city : "Boston"
}

// user.getName = function(){
//     return this.name
// }



// module.exports = user
// // module.exports = 1
 // // module.exports = 1
//  module.exports

// console.log(module)

export let student = {
    id:1,
    name:"Scott",
    email:"Scott@eg.com",
    isActive:true
}

export function getStudentName () {
    return student.name
}


export const getStudentemail = () => {
    return student.email
}

export const API_URL = "https://github.com/MatserMERN"