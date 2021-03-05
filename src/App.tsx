import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'
import ItemStatusFilter from './components/item-status-filter';


export default class MainApp extends Component {

  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('make Awesome App'),
      this.createTodoItem('Build React Ppp')
      
    ]
  }

  createTodoItem(label: string) {
    return {
      label,
      important: false,
      done: false,
      _id: this.maxId++
    }
  }

  deleteItem = ( _id: string ) => {
    this.setState(({ todoData }: any) => {
        const idx = todoData.findIndex((el: any) => el._id === _id)

        const newArray = [
          ...todoData.slice(0, idx), 
          ...todoData.slice(idx + 1)
        ]

        return {
          todoData: newArray
        }
    })
  }

  AddItem = (text: string): void => {
    const newItem = this.createTodoItem(text)
    this.setState(({todoData}:any) => {

      const newArr = [
        ...todoData,
        newItem
      ]

      return {
        todoData: newArr
      }

    })
  }

  toggleProperty(arr: any, _id: string, propName: string) {
      const idx = arr.findIndex((el: any) => el._id === _id)
      const oldItem = arr[idx]
      const newItem = {...oldItem, [propName]: !oldItem[propName]}

      return[
        ...arr.slice(0, idx), 
        newItem,
        ...arr.slice(idx + 1)
      ]
  }

  onToggleImportant = (_id: string) => {
    this.setState(({ todoData }: any) => {
      return {
        todoData: this.toggleProperty(todoData, _id, 'important')
      }
    })
  } 


  onToggleDone = (_id: string) => {
    this.setState(({ todoData }: any) => {
      return {
        todoData: this.toggleProperty(todoData, _id, 'done')
      }
    })
  }


  render(){
    const { todoData } = this.state

    const doneCount = todoData.filter((el) => el.done).length
                      
    const todoCount = todoData.length - doneCount
    return (
      <div className="todo-app">
          <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
              <SearchPanel />
            </div>
            <div className="top-panel d-flex">
              <ItemStatusFilter onItemAdded={this.AddItem}/> 
            </div>
              <TodoList todos={todoData} 
              onDeleted={ this.deleteItem }
              onToggleImportant={this.onToggleImportant}
              onToggleDone={this.onToggleDone}
              />
      </div>
    ) 
  }

  
}



