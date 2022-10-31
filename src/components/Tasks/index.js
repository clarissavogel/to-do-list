import { useState } from 'react'
import { Trash } from 'phosphor-react'
import { Container } from "./styled";

export function Tasks({ task, onDeleteTask, props, toggle}){

    function handleDeleteTask(){
        onDeleteTask(task.id)
    }

    function handleCheckTask(){
        this.state = {even:true}
    }

    return(
        <Container>
            <p>{task.content}
            </p>
            <button onClick={handleDeleteTask} title= "Deletar tarefa">
            <Trash size={24} />
            </button>   
            <input onClick={handleCheckTask} type="checkbox"></input>
        </Container>

    )


}