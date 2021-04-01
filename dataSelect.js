const users = [
  {
    "id":1,
    "email":"george.bluth@reqres.in",
    "first_name":"George",
    "last_name":"Bluth",
    "tag":"new_user"
  },
  {
    "id":2,
    "email":"janet.weaver@reqres.in",
    "first_name":"Janet",
    "last_name":"Weaver",
    "tag":"old_user"
  },
  {
    "id":3,
    "email":"emma.wong@reqres.in",
    "first_name":"Emma",
    "last_name":"Wong",
    "tag":"new_user"
  },
  {
    "id":4,
    "email":"eve.holt@reqres.in",
    "first_name":"Eve",
    "last_name":"Holt",
    "tag":"old_user"
  },
  {
    "id":5,
    "email":"charles.morris@reqres.in",
    "first_name":"Charles",
    "last_name":"Morris",
    "tag":"new_user"
  }
]

console.log(users[0].tag)

// select by tag
function tagSelect(selector) {
  let length = users.length
  let array = []
 for (let i = 0; i < length; i++) {
   const element = users[i];
   if (element.tag === selector) {
     array.push(element)
   }
 } 
 return array
}

console.log(tagSelect('new_user'))
// select tag

// get all email only
function emailUsers() {
  let email= []
  for (let i = 0; i < users.length; i++) {
    const element = users[i];
    email.push(element.email)
  }
  return email
}

console.log(emailUsers())
//email

//olduser email
function emailOldUser(selector){
  let array=[]
  for (let i = 0; i < users.length; i++) {
    const element = users[i];
    if (element.tag === selector) {
      array.push(element.email)
    }
  }
  return array
}
//old user email

console.log(emailOldUser('old_user'));
