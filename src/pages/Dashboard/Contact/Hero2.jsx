import { Col, Row, Typography } from "antd"

const Hero2 = () => {
    const { Title } = Typography
    return (
        <>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Title className="text-center mt-4">Contact-Page</Title>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero2