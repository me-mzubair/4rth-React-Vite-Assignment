import { Button, DatePicker, Form, Input, Select, Typography } from "antd"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/Auth"

const initialState = { title: "", dueDate: "", description: "", priority: "" }
const { Title } = Typography
const { Item } = Form
const { Option } = Select

const Add = () => {
    const { user } = useAuth()
    const navigate = useNavigate()

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }

    const handleSubmit = () => {
        let { title, dueDate, description, priority } = state

        title = title.trim()
        if (title.length < 3) { return window.toastify("Please enter a title", "error") }

        const todo = { title, dueDate, description, priority }

        todo.uid = user.uid
        todo.id = window.getRandomId()
        todo.status = "active"
        todo.isCompleted = false
        todo.createdAt = new Date().getTime()

        // console.log("todo", todo)
        // console.log("state", state)
        // return


        setIsProcessing(true)
        const todos = JSON.parse(localStorage.getItem("todos")) || []
        todos.push(todo)
        setTimeout(() => {
            localStorage.setItem("todos", JSON.stringify(todos))
            setIsProcessing(false)
            window.toastify("A new todo has been successfully created", "success")
        }, 500)
    }

    return (
        <main className="auth">
            <div className="container">
                <div className="card p-3 p-4 mx-auto">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <Title level={2}>Add Todo</Title>
                        <Button type="primary" onClick={() => { navigate("/dashboard/todos") }}>All Todos</Button>
                    </div>
                    <Form layout="vertical">
                        <Item label="Title" required>
                            <Input type="text" placeholder="Enter title" size="large" name="title" onChange={handleChange} />
                        </Item>
                        <Item label="Due-Date">
                            <DatePicker placeholder="Enter due-Date" size="large" className="w-100" onChange={(obj, dueDate) => { setState(s => ({ ...s, dueDate })) }} />
                        </Item>
                        <Item label="Description">
                            <Input.TextArea placeholder="Enter description" name="description" onChange={handleChange} style={{ height: 100, resize: "none" }} />
                        </Item>
                        <Item label="Priority">
                            <Select size="large" placeholder="Please select a priority" onChange={priority => { setState(s => ({ ...s, priority })) }}>
                                <Option value="low">Low</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="high">High</Option>
                            </Select>
                        </Item>
                        <Button size="large" type="primary" block htmlType="submit" loading={isProcessing} onClick={handleSubmit}>Add Todo</Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Add