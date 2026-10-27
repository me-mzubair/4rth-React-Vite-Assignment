import { Col, Row, Space, Typography } from "antd"
import { Link } from "react-router-dom"

const Hero = () => {
    const { Title } = Typography
    return (
        <>
            <div className="container">
                <Row>
                    <Col span={24} className="text-center mt-5">
                        <Title>Hero Section Of Dashboard Page.</Title>
                        <Space>
                            <Link to="/" className="btn btn-info">Frontend</Link>
                            <Link to="/dashboard/todos" className="btn btn-info">Todo</Link>
                        </Space>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero