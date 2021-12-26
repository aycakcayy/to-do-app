import { useState } from "react";
import ToDoItem from "./components/ToDoItem";



const todoItems = [
  { id: 1, title: "first item", isCompleted: true },
  { id: 2, title: "second item", isCompleted: true },
  { id: 3, title: "third item", isCompleted: false },
  { id: 4, title: "fourth item", isCompleted: false },
  { id: 5, title: "fifth item", isCompleted: false },

]


function App() {


  const [toDo, setToDo] = useState(todoItems)

  //item.isCompleted ? `text-decoration-line-through bg-success text-light` : null


  function formSubmitHandler(event) {
    console.log(event)
    event.preventDefault();  //default yenilenmeyi önle.


    console.log()
    if (!!event.target[0].value) {
      const item = { id: toDo.length + 1, title: event.target[0].value, isCompleted: false }
      setToDo([item, ...toDo])
      event.target[0].value = ""
    }


  }


  return (



    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-5">

          <form className="mb-3" onSubmit={formSubmitHandler} >
            <div className="mb-3" >
              <label htmlFor="todoItem" className="form-label"> <h3>Works:</h3> </label>
              <input name="todoItem" type="text" className="form-control" id="todoItem" placeholder="bir seyler ekle" />

            </div>

            <button type="submit" className="btn btn-primary">Add</button>
          </form>

          <h1>To Do List </h1>
          <ul className="list-group mt-2" >
            <ul className="list-group" >

            </ul>
            {
              toDo.map(
                item => <ToDoItem key={item.id} item={item} toDo={toDo} setToDo={setToDo}

                />

              )

            }

          </ul>

        </div>
      </div>
    </div>
  );
}

export default App;
