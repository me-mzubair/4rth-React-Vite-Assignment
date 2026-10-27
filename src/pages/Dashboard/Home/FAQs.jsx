
import { Col, Row, Typography } from "antd"


const FAQs = () => {
    const { Title } = Typography
    return (
        <>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Title className="text-center mt-5">FAQs Section</Title>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default FAQs