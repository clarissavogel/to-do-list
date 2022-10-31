import { Posts } from "../../components/Posts";
import { taskArray } from "../../utils/posts"
import { Container, Content } from "./styled"


export function Home(){
    return (
        <Container>
            <h1>To do list</h1>
            <Content>
                {taskArray.map(task =>{
                    return(
                        <Posts key={task.id} info={task}/>
                    )
                })}
            </Content>
        </Container>
    )
}