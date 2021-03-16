import React, { useEffect, useReducer } from 'react';
import {todoReducer} from './todoReducer';


import './styles.css'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {
    // const initialState =[{
    //     id:new Date().getTime(),
    //     desc:'Aprender React',
    //     done:false
    // }];

    const init = () => {
        //localstorage hacer informacion persistente en el navegador
        return JSON.parse(localStorage.getItem('todos')) || [];
        // return [{
        //         id:new Date().getTime(),
        //         desc:'Aprender React',
        //         done:false
        // }]
    } 
    


    //todos --> Se guarda el estado inicial
    //dispatch --> Funcion disparadora que modifica el estado(todos)
    const [todos,dispatch] = 
            useReducer(todoReducer,[],init);

    
    
    useEffect(() => {
       
        localStorage.setItem('todos',JSON.stringify(todos));

    }, [todos])
    
    const handleDelete = (todoId) => {
    
        const action = {
            type:'delete',
            payload:todoId
        }
        
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload:todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type:'add',
            payload:newTodo
        });
    }
    //console.log(todos);
    //console.log(description);
    

    // const handleSubmit = (e) => {
      
    //     //console.log("Nueva tarea");
    //     const newTodo = {
    //         id:new Date().getTime(),
    //         desc:description,
    //         done:false
    //     }

    //     const action = {
    //         type:'add',
    //         payload:newTodo
    //     }

    //     dispatch(action);
    //     reset();
    // }

    
    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr/>
            
            <div className="row">
                <div className="col-7">
                    {/* TodoList, todos,handleDelete,handleToggle */}
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
