export const obj1 = {
  name: 'Philomena Clemens',
  age: 3,
  gender: 'female',
  member: 'daughter'
}

export const obj2 = {
  name: 'Eliakim Cephas',
  age: 0.58,
  gender: 'male',
  member: 'son'
}

export default function objectPrinter(obj){
  const text = `Name: ${obj.name}, age: ${obj.age}, gender: ${obj.gender}, member: ${obj.member}`
  console.log(text)
}