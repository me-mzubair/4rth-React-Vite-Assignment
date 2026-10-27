import { Col, Row, Typography } from "antd"

const Services = () => {
   const { Title } = Typography
    return (
        <>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Title className="text-center mt-5">Services Section.</Title>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Services