import { Col, Row, Typography } from "antd"
import { useAuth } from "../../../context/Auth"

const Hero = () => {
    const { Title } = Typography
    const { user } = useAuth()
    return (
        <div className="container">
            <Row>
                <Col span={24}>
                    <Title level={1} className="text-center mt-5">Hero Section Of Home Page.</Title>
                    <Title level={3} className="text-center mt-5">UID:- {user.uid}.</Title>
                    <Title level={3} className="text-center mt-5">Full Name:- {user.name}.</Title>
                    <Title level={3} className="text-center mt-5">Email:- {user.email}.</Title>
                    <Title level={3} className="text-center mt-5">Role:- {user.role}.</Title>
                </Col>
            </Row>
        </div>
    )
}

export default Hero