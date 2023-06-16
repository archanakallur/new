import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import{ useState,useEffect }from"react";


export default function App() {
    const [todos,setTodo] = useState([]);
    useEffect(() => {
        getData();
    },[]);
    const getData = async () => {
try {
    const incomingData = await fetch(
        "http://jsonplaceholder.typicode.com/todos"
    );
    const formatttedData = await incomingData.json();
    setTodo(formatttedData);
    
}catch(error) {
    console.log(error);
}
    };

  return (
    <div>
        <Container className="my-5">
            <h1 className="my-5 text-center display-2">todolist</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
               <th>#</th>
               <th>Title</th>
               <th>Complainted</th>
               </tr>
</thead>
  <tbody>
{todos.map((todo,i) => (
<tr key={todo.id}>
    <td>{i+i}</td>
    <td>{todo.title}</td>
    {/*<td{todo.completed}</td> */}
    </tr>
))}
</tbody>
</Table></Container> </div>
)
}
