const firstRunStorage = function(){

const todoObject = {
  mon: 'Workout twice today',
  tues: 'Spend time with mom',
  wed: 'Call someone about resume',
  thurs: 'Workout today',
  friday: 'Fast today',
  sat: 'Rest Today',
  sun: 'Take the week off next week'

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

//make list function
const makeList = function(array){

const items = array
const make = function(){ items.forEach(function (item) {

      const node = document.createElement("p")
      node.setAttribute("contenteditable", true)
      node.setAttribute("id", "todo")
      const textnode = document.createTextNode(item)
      node.appendChild(textnode)
      document.getElementById('myTodos').appendChild(node)

    });
    }

;

return make()
}

//const makeTitle = function(){

//   const todoObject = {
//     mon: 'Monday',
//     tues: 'Tuesday',
//     wed: 'Wednesday',
//     thurs: 'Thursday',
//     friday: 'Friday',
//     sat: 'Saturday',
//     sun: 'Sunday'
//
//   };
//
//   const array = Object.values(todoObject)
//
// const items = array
// const make = function(){ items.forEach(function (item) {
//
//       const node = document.createElement("p1")
//       node.setAttribute("id", "title")
//       const textnode = document.createTextNode(item)
//       node.appendChild(textnode)
//       document.getElementById('myTodosTitle').appendChild(node)
//
//     });
//     }
//
// ;
//
// return make()
// }


function style() {
  let x, i;
  x = document.querySelectorAll("p");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = '#f7f7f5';
    x[i].style

  }
}




//onstart run
makeList(storedArray())
// makeTitle()
style()
