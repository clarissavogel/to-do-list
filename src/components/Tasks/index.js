import { useState } from 'react'
import { Trash } from 'phosphor-react'
import { Content, Container } from "./styled";

export function Tasks({ task, onDeleteTask}){

    function handleDeleteTask(){
        onDeleteTask(task.id)
    }

    function handleCheckTask(){
        this.state = {even:true}
    }

    return(
        <Container>
            <Content>
            <input onClick={handleCheckTask} type="checkbox"/>
            <p>{task.content}</p>
            </Content>
            <button onClick={handleDeleteTask} title= "Deletar tarefa">
            <Trash size={24} />
            </button>   

        </Container>
    )
}