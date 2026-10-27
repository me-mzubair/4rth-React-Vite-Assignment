import { Col, Row, Typography } from "antd"

const NotFound = () => {
    const { Title } = Typography
    return (
        <main>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Title className="text-center text-danger mt-4">404 Page Not Found</Title>
                    </Col>
                </Row>
            </div>
        </main>
    )
}

export default NotFound