import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons"
import { Button, Table, Typography, Dropdown } from "antd"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const { Title, Text } = Typography

const All = () => {
    const [todos, setTodos] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
        if (todos) { setTodos(todos.map(todo => ({ ...todo, key: todo.id }))) }
    }, [])
    console.log(todos)

    const handleDelete = todo => {

        const filterTodos = todos.filter(item => item.id !== todo.id)

        setTodos(filterTodos)

        localStorage.setItem("todos", JSON.stringify(filterTodos))

        window.toastify("Todo deleted successfullly", "success")
    }

    const columns = [
        { title: 'Title', dataIndex: 'title', },
        { title: 'Due Date', dataIndex: 'dueDate', },
        { title: 'Description', dataIndex: 'description', },
        { title: 'Priority', dataIndex: 'priority', render: text => <Text className="text-capitalize">{text}</Text> },
        { title: 'Date Created', dataIndex: 'createdAt', render: text => <Text className="text-capitalize">{dayjs(text).format("dd DD-MM-YY, hh:mm:ss A")}</Text> },
        {
            title: 'Action',
            render: (_, record) => (
                <Dropdown menu={{
                    items: [
                        // { label: "Edit", key: "edit", icon: <EditOutlined />, onClick: () => { navigate(`/dashboard/todos/edit/${record.id}`) } },
                        { label: "Edit", key: "edit", icon: <EditOutlined />, onClick: () => { navigate("/dashboard/todos/edit/" + record.id) } },
                        { label: "Delete", key: "delete", icon: <DeleteOutlined />, onClick: () => { handleDelete(record) } }
                    ]
                }} trigger={['click']}  >
                    <Button className="border-0" icon={<MoreOutlined />} />
                </Dropdown>
            ),
        },
    ];

    return (
        <main className="py-5">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <Title level={2}>Todos</Title>
                    <Button type="primary" onClick={() => { navigate("/dashboard/todos/add") }}>Add Todos</Button>
                </div>
                <Table columns={columns} dataSource={todos} />;
            </div>
        </main>

    )
}
export default All