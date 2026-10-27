import { Col, Row, Typography } from "antd"

const Copyright = () => {
    const { Paragraph } = Typography
    const year = new Date().getFullYear()
    return (
        <>
            <div className="container-fluid">
                <Row>
                    <Col span={24}>
                        <Paragraph className="bg-primary text-white text-center mb-0 fs-4">&copy;Copyright {year} All Rights Reserved By Zee-Dev.</Paragraph>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Copyright