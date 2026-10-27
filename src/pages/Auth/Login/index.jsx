import { Button, Form, Input, Typography } from "antd"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/Auth"

const initialState = { email: "", password: "" }
const { Title, Paragraph } = Typography
const { Item } = Form

const Login = () => {
    const { dispatch } = useAuth()
    const navigate = useNavigate()

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }

    const handleLogin = () => {
        let { email, password } = state

        const users = JSON.parse(localStorage.getItem("users")) || []

        const user = users.find(user => user.email === email && user.password === password)
        if (!user) { return window.toastify("Invalid email or password", "error") }


        setIsProcessing(true)
        setTimeout(() => {
            localStorage.setItem("user", JSON.stringify(user))
            dispatch({ isAuth: true, user })
            navigate("/")
            setIsProcessing(false)
            window.toastify("Login successfully", "success")
        }, 500)
    }

    return (
        <main className="auth">
            <div className="container">
                <div className="card p-3 p-4 mx-auto">
                    <Title level={1} className="text-center">Login</Title>
                    <Paragraph className="text-center">Don't have an account? <Link to="/auth/register">Create account</Link></Paragraph>
                    <Form layout="vertical">
                        <Item label="Email" required>
                            <Input type="email" placeholder="Enter your email" size="large" name="email" onChange={handleChange} />
                        </Item>
                        <Item label="Password" required>
                            <Input.Password placeholder="Enter your password" size="large" name="password" onChange={handleChange} />
                            <Paragraph className="text-center mt-3 mb-0">Forgot-Password? <Link to="/auth/forgotPassword">Reset-Password</Link> </Paragraph>
                        </Item>
                        <Button size="large" type="primary" block htmlType="submit" loading={isProcessing} onClick={handleLogin}>Login</Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Login