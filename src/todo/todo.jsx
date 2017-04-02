import React, { Component } from 'react'
import pageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
       this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

    }
    handleChange(e) {
        this.setState({state, description: e.target.value })
    }
    handleAdd() {

    }
    render() {
        return (
            <div>
                <header><h2>Tarefas<small> Cadastro</small></h2></header>
               
                <TodoForm
                    description={this.state.description}
                    handleChange = {this.handleChange}
                    handleAdd={this.handleAdd}></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }


} 