import React from 'react'

import { InputForm } from './InputForm'
import { TodoList } from './Todolist'

// 何するとこ
export class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
    }

    handleTodoSubmit(todo){
        todo.id = new Date();
        const newMessages = this.state.todos.concat(todo)
        this.setState({todos: newMessages})
    }

    handleTodoDelete(id){
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.id !== id
            })
        })
    }

    render() {
        const todoItems = this.state.todos.map((todo) => {
            return (
                <TodoList key={todo.id} todo={todo} onTodoDelete={this.handleTodoDelete.bind(this)} />
            )
        })
        return (
            <div className="todoBox">
                <InputForm onTodoSubmit={this.handleTodoSubmit.bind(this)} />
                {todoItems}
            </div>
        )
    }
}