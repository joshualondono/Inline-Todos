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
