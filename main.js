const firstRunStorage = function(){

const todoObject = {
  mon: 'Monday',
  tues: 'Tuesday',
  wed: 'Wednesday',
  thurs: 'Thursday',
  friday: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday'

};

if (localStorage.getItem("todosObject") === null) {
localStorage.setItem('todosObject', JSON.stringify(todoObject));
}
}

firstRunStorage()

const storedArray = function(){
const retrievedObject = localStorage.getItem('todosObject')
const json = JSON.parse(retrievedObject)
return Object.values(json)
}

function save() {
  const x = document.querySelectorAll("p");

  const todoObject = {
  mon: x[0].textContent,
  tues: x[1].textContent,
  wed: x[2].textContent,
  thurs: x[3].textContent,
  friday: x[4].textContent,
  sat: x[5].textContent,
  sun: x[6].textContent

};

localStorage.setItem('todosObject', JSON.stringify(todoObject));

}
