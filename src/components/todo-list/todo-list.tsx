import TodoListItem from '../todolist-item'
import  './todo-list.css'


const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }: any ) => {
    
    const elements = todos.map((item: any) => {

        const { _id, ...itemProps } = item

        return (
            <li key={_id} className="list-group-item">
                <TodoListItem 
                  {...itemProps} 
                  onDeleted={() => onDeleted(_id)}
                  onToggleImportant={() => onToggleImportant(_id)}
                  onToggleDone={() => onToggleDone(_id)}
                />
            </li>
        )
    })

      return (
        <ul className="list-group todo-list">
          { elements }
        </ul>
      )

    }

export default TodoList 