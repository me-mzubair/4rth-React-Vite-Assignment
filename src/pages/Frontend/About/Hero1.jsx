import { Col, Row, Typography } from "antd"

const Hero1 = () => {
    const { Title } = Typography
    return (
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Title className="text-center mt-4">About-Page</Title>
                    </Col>
                </Row>
            </div>
    )
}

export default Hero1