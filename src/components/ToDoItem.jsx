function ToDoItem (props) {
const {item}= props 
    return(
 
        <li 
        className={`list-group-item
        ${item.isCompleted && 'text-decoration-line-through bg-success text-light'}`}


        onClick={() => 
            props.setToDo(
              props.toDo.map(el =>
                el.id === item.id ? { ...el, isCompleted: !el.isCompleted } : el))
          }



        >
            {item.title}

         

       </li>
     



    );
}

export default ToDoItem