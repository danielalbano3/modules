export const obj1 = {
  name: 'Daniel',
  age: 35,
  gender: 'male',
  member: 'father'
}

export const obj2 = {
  name: 'Sheila May',
  age: 31,
  gender: 'female',
  member: 'mother'
}

export default function printUser(userObject){
  const text = `Name: ${userObject.name}, age: ${userObject.age}, gender: ${userObject.gender}, member: ${userObject.member}`
  console.log(text)
}

