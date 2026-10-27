import { Button, DatePicker, Form, Input, Select, Typography } from "antd"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import dayjs from "dayjs"

const initialState = { title: "", dueDate: "", description: "", priority: "" }
const { Title } = Typography
const { Item } = Form
const { Option } = Select

const Edit = () => {

    const navigate = useNavigate()
    const params = useParams()

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }

    useEffect(() => {
        const { id } = params

        const todos = JSON.parse(localStorage.getItem("todos")) || []

        const todo = todos.find(todo => todo.id === id)
        setState(todo)

    }, [params])
    console.log("state", state)

    const handleSubmit = () => {
        let { title, dueDate, description, priority, status, isCompleted } = state

        title = title.trim()
        if (title.length < 3) { return window.toastify("Please enter a title", "error") }

        const todo = { title, dueDate, description, priority, status, isCompleted }

        todo.upDatedAt = new Date().getTime()

        setIsProcessing(true)
        const todos = JSON.parse(localStorage.getItem("todos")) || []

        const updatedTodos = todos.map(item => {
            if (item.id === state.id)
                return { ...item, ...todo }
            return item
        })

        setTimeout(() => {
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            setIsProcessing(false)
            window.toastify("A todo has been  updated successfully", "success")
            navigate("/dashboard/todos")
        }, 500)
    }

    return (
        <main className="auth">
            <div className="container">
                <div className="card p-3 p-4 mx-auto">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <Title level={2}>Update Todo</Title>
                        <Button type="primary" onClick={() => { navigate("/dashboard/todos") }}>Todos</Button>
                    </div>
                    <Form layout="vertical">
                        <Item label="Title" required>
                            <Input type="text" placeholder="Enter title" value={state.title} size="large" name="title" onChange={handleChange} />
                        </Item>
                        <Item label="Due-Date">
                            <DatePicker placeholder="Enter due-Date" size="large" value={state.dueDate ? dayjs(state.dueDate) : null} className="w-100" onChange={(obj, dueDate) => { setState(s => ({ ...s, dueDate })) }} />
                        </Item>
                        <Item label="Description">
                            <Input.TextArea placeholder="Enter description" value={state.description} name="description" onChange={handleChange} style={{ height: 100, resize: "none" }} />
                        </Item>
                        <Item label="Priority">
                            <Select size="large" placeholder="Please select a priority" value={state.priority} onChange={priority => { setState(s => ({ ...s, priority })) }}>
                                <Option value="low">Low</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="high">High</Option>
                            </Select>
                        </Item>
                        <Button size="large" type="primary" block htmlType="submit" loading={isProcessing} onClick={handleSubmit}>Update Todo</Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Edit