import { Button, Form, Input, Typography } from "antd"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/Auth"

const initialState = { email: "" }
const { Title, Paragraph } = Typography
const { Item } = Form

const ForgotPassword = () => {
    const { dispatch } = useAuth()
    const navigate = useNavigate()

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }

    const handleForgotPasssword = () => {
        let { email } = state
        console.log("email", email)
        navigate("/")
    }

    return (
        <main className="auth">
            <div className="container">
                <div className="card p-3 p-4 mx-auto">
                    <Title level={1} className="text-center">Reset-Password</Title>
                    <Paragraph className="text-center">Remember Password? <Link to="/auth/login">Login</Link></Paragraph>
                    <Form layout="vertical">
                        <Item label="Email" required>
                            <Input type="email" placeholder="Enter your email" size="large" name="email" onChange={handleChange} />
                        </Item>
                        <Button size="large" type="primary" block htmlType="submit" loading={isProcessing} onClick={handleForgotPasssword}>Send Email</Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default ForgotPassword