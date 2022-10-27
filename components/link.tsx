import { Col, Row } from 'antd'

const Link = () => {

    return(
        <div className="link_container">
            <span className='heading'>Quick links</span>
            <Row gutter={[16, 16]}>
                <Col className="gutter-row" xs={24} sm={24} md={12} xl={6} style={{padding: '8px 8px'}}>
                    <div className='card'>
                            <div className="card_text">
                                <p>124,936 ads in Electronics</p>
                                <span>
                                    <a href="#">
                                    Mobile Phones | Cameras & Camcorders | Computers & Tablets | TVs | Air Conditions & Electrical fittings
                                    </a>
                                </span>
                            </div>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} xl={6} style={{padding: '8px 8px'}}>
                    <div className='card'>
                            <div className="card_text">
                                <p>53,944 ads in Property</p>
                                <span>
                                    <a href="#">
                                    LandHouses For Sale | House Rentals | Apartments For Sale | Apartment Rentals
                                    </a>
                                </span>
                            </div>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} xl={6} style={{padding: '8px 8px'}}>
                    <div className='card'>
                            <div className="card_text">
                                <p>7,590 ads in Jobs</p>
                                <span>
                                    <a href="#">
                                    Data Entry Operator | Driver | Packing Officer | Clerk | Sales Executive
                                    </a>
                                </span>
                            </div>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} xl={6} style={{padding: '8px 8px'}} >
                    <div className='card'>
                            <div className="card_text">
                                <p>69,114 ads in Vehicles</p>
                                <span>
                                    <a href="#">
                                    Cars | Motorbikes | Three Wheelers | Auto Parts & Accessories | Auto Services
                                    </a>
                                </span>
                            </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Link