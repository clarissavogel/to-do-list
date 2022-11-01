import { useState } from "react";
import{ Tasks } from "../Tasks"
import { TaskList, Container, Content, Form } from "./styled";
export function Posts({ info }) {
    const [task, setTask] = useState([
        {
            id: Math.random(),
            content: "Tarefa Padrao" // -> newCommentTxt
        }
    ])

const [newTaskTxt, setNewTaskTxt] = useState('');

function handleNewTask(event){
    setNewTaskTxt(event.target.value)
}

function handleCreateNewTask(event){
    event.preventDefault();

    const NewTask = {
        id:Math.random(),
        content: newTaskTxt,
    }

    setTask([...task, NewTask]);
    setNewTaskTxt('')

}

function deleteTask(id){
    const taskWithoutDeletedOne = task.filter((task)=> task.id !== id)
    setTask(taskWithoutDeletedOne);

}

return(
    <Container>
        <Form onSubmit={handleCreateNewTask}>
            <strong>Crie uma nova tarefa</strong>
            <textarea
                placeholder="Escreva o nome da tarefa"
                required
                value={newTaskTxt}
                onChange={handleNewTask}
            />

            <footer>
                <button type="submit">Adicionar Tarefa</button>
            </footer>
        </Form>

        <TaskList>
            {task.map(task =>{
                return(
                    <Tasks
                        key={task.id}
                        task={task}
                        onDeleteTask={deleteTask}
                    />
                )
            })}
        </TaskList>

    </Container>


 
)

}