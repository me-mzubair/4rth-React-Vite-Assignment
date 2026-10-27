import { Button, Form, Input, Typography } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"

const initialState = { name: "", email: "", password: "", confirmPassword: "" }
const { Title, Paragraph } = Typography
const { Item } = Form

const Register = () => {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })

    const handleRegister = () => {
        let { name, email, password, confirmPassword } = state

        name = name.trim()
        if (name.length < 3) { return window.toastify("Please enter your full name", "error") }
        if (!window.isValidEmail(email)) { return window.toastify("Please enter valid email", "error") }
        if (password.length < 6) { return window.toastify("Password must be atleast 6 character", "error") }
        if (confirmPassword != password) { return window.toastify("Password not match", "error") }

        const user = { uid: window.getRandomId(), name, email, password, status: "active", role: "Student" }
        const users = JSON.parse(localStorage.getItem("users")) || []

        const isUserFound = users.find(user => user.email === email)
        if (isUserFound) { return window.toastify("User already exist", "error") }

        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))

        console.log("user", user)
        setIsProcessing(true)
        setTimeout(() => {
            window.toastify("A new user is registered successfully", "success")
            setIsProcessing(false)
        }, 700)
    }

    return (
        <main className="auth">
            <div className="container">
                <div className="card p-3 p-4 mx-auto">
                    <Title level={1} className="text-center">Register</Title>
                    <Paragraph className="text-center">Already have an account? <Link to="/auth/login">Login</Link></Paragraph>
                    <Form layout="vertical">
                        <Item label="Full Name" required>
                            <Input type="text" placeholder="Enter your name" size="large" name="name" onChange={handleChange} />
                        </Item>
                        <Item label="Email" required>
                            <Input type="email" placeholder="Enter your email" size="large" name="email" onChange={handleChange} />
                        </Item>
                        <Item label="Password" required>
                            <Input.Password placeholder="Enter your password" size="large" name="password" onChange={handleChange} />
                        </Item>
                        <Item label="Confirm Password" required>
                            <Input.Password placeholder="Enter your password again" size="large" name="confirmPassword" onChange={handleChange} />
                        </Item>
                        <Item >
                            <Button size="large" type="primary" block htmlType="submit" loading={isProcessing} onClick={handleRegister}>Create Account</Button>
                        </Item>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Register