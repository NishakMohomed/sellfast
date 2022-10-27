import { Col, Row } from 'antd'
import Image from 'next/image'

import electronicsImg from '../public/electronics.png'
import vehicleImg from '../public/vehicles.png'
import propertyImg from '../public/property.png'
import gardenImg from '../public/garden.png'
import industryImg from '../public/industry.png'
import servicesImg from '../public/services.png'
import animalsImg from '../public/animals.png'
import hobbyImg from '../public/hobby.png'
import jobsImg from '../public/jobs.png'
import fashionImg from '../public/fashion.png'
import educationImg from '../public/education.png'
import essentialImg from '../public/essential.png'
import otherImg from '../public/other.png'
import agriImg from '../public/agri.png'
import workImg from '../public/work.png'


function adjustheight(){
    let width = window.innerWidth;

    if(width < 768){
        let container = document.querySelector('.hidden_container')


       if(container?.className.includes('show')){
        container.classList.remove('show')
        }else {
            container?.classList.add('show')

    }
    }
}


const Items = () => {

    return(
        <div className='category_container'>
            <div className="heading_container">
                <span className='heading'>Browse items by category</span>
                <span className="expand_item" onClick={adjustheight}>See all</span>
            </div>


            <Row gutter={[8, 32]} className='row'>
                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={electronicsImg} height={'40px'} width={'45px'} alt={'electronics'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Electronics</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={vehicleImg} height={'40px'} width={'40px'}  alt={'vehicles'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Vehicles</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={propertyImg} height={'40px'} width={'40px'} alt={'property'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Property</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={gardenImg} height={'40px'} width={'40px'} alt={'home & garden'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Home & Garden</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>

            </Row>

            <Row gutter={[8, 32]} className='row'>
                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={industryImg} height={'40px'} width={'40px'} alt={'business & industry'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Business & Indutry</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={servicesImg} height={'40px'} width={'40px'} alt={'services'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Services</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={animalsImg} height={'40px'} width={'40px'} alt={'animals'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Animals</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={hobbyImg} height={'40px'} width={'40px'} alt={'hobby'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Hobby, Sport & Kids</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>

            </Row>


            <Row gutter={[8, 32]} className='row'>
                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={jobsImg} height={'40px'} width={'40px'} alt={'jobs'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Jobs</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={fashionImg} height={'40px'} width={'40px'} alt={'fashion & beauty'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Fashion & Beauty</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={educationImg} height={'40px'} width={'40px'} alt={'education'}/>
                        </div> 

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Education</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={essentialImg} height={'40px'} width={'40px'} alt={'essential'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Essentials</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>

            </Row>

            <Row gutter={[8, 32]} className='row'>
                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={otherImg} height={'40px'} width={'40px'} alt={'other'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Other</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={agriImg} height={'40px'} width={'40px'} alt={'agriculture'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Agriculture</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>


                <Col xl={6} className= 'column'>

                    <div className="item_content">
                        <div style={{display: 'inline-block'}}>
                            <Image src={workImg} height={'40px'} width={'40px'} alt={'work overseas'}/>
                        </div>

                        <div className='item_heading' style={{display: 'inline-block', padding: '0 0 0 15px'}}>
                            <p>Work Overseas</p>
                            <span>124,775 ads</span>
                        </div>
                    </div>
                
                </Col>

            </Row>

            
            <div className="hidden_container">
                <div className="heading_container">
                    <span className='heading'>Select a category</span>
                    <span className='closeBtn' onClick={adjustheight}>X</span>
                </div>

                <div className="hidden_item_content">

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={electronicsImg} height={'25px'} width={'25px'} alt={'electronics'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Electronics</p>
                            </div>
                        </a>

                        <hr /> 

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={vehicleImg} height={'25px'} width={'25px'}  alt={'vehicles'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Vehicles</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={propertyImg} height={'25px'} width={'25px'} alt={'property'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Property</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={gardenImg} height={'25px'} width={'25px'} alt={'home & garden'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Home & Garden</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={industryImg} height={'25px'} width={'25px'} alt={'business & industry'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Business & Indutry</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={servicesImg} height={'25px'} width={'25px'} alt={'services'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Services</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={animalsImg} height={'25px'} width={'25px'} alt={'animals'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Animals</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={hobbyImg} height={'25px'} width={'25px'} alt={'hobby'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Hobby, Sport & Kids</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={jobsImg} height={'25px'} width={'25px'} alt={'jobs'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Jobs</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={fashionImg} height={'25px'} width={'25px'} alt={'fashion & beauty'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Fashion & Beauty</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={educationImg} height={'25px'} width={'25px'} alt={'education'}/>
                            </div> 

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Education</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={essentialImg} height={'25px'} width={'25px'} alt={'essential'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Essentials</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={otherImg} height={'25px'} width={'25px'} alt={'other'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Other</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={agriImg} height={'25px'} width={'25px'} alt={'agriculture'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Agriculture</p>
                            </div>
                        </a>

                        <hr />

                        <a href="#">
                            <div style={{display: 'inline-block'}}>
                                <Image src={workImg} height={'25px'} width={'25px'} alt={'work overseas'}/>
                            </div>

                            <div className='hidden_item_heading' style={{display: 'inline-block', padding: '0 0 0 15px', verticalAlign: 'middle'}}>
                                <p>Work Overseas</p>
                            </div>
                        </a>


                </div>


            </div>

      </div>
    )

}

export default Items