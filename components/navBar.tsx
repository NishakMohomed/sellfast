import { MenuOutlined, HeartFilled, SettingFilled } from '@ant-design/icons'


function click(){
    let c = document.querySelector('.hiddenNavBar')
    
    if(c?.className.includes('view')){
        c.classList.remove('view')
    }else{
        c?.classList.add('view')
    }
}

const Nav = () => {
    return (
        <nav>
            <div className="navItem">
                <ul className="navItemLeft">

                    <li className='navMenuIcon' onClick={click}>
                        < MenuOutlined style={{ fontSize: '22px', color: '#fff' }} />
                    </li>

                    <li>
                        <div className="logo">
                            <a href="#">
                                sell<span>fast</span>
                            </a>
                        </div>
                    </li>

                    <li>
                        <a href="#" className="langBtn sin">සිංහල</a>
                    </li>

                    <li>
                        <a href="#" className="langBtn tam">தமிழ்</a>
                    </li>
                </ul>

                <ul className="navItemRight">
                    <li>
                        <div className="chatBtn">
                            <a href="#">
                                <HeartFilled style={{fontSize: '22px', marginRight: '10px'}}/>

                                <span>Saved</span>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div className="loginBtn">
                            <a href="#">
                                <SettingFilled style={{fontSize: '22px', marginRight: '10px'}}/>
                                
                                <span>Account</span>
                            </a>
                        </div>
                    </li>

                    <li>
                        <button className="postBtn">
                            POST YOUR AD
                        </button>
                    </li>
                </ul>
            </div>


            <div className="hiddenNavBar">

                <div className="hiddenNavHeader">
                    <a href="#" className='logo'>

                        <div className="hiddenNavLogo">
                            <a href="#">
                                sell<span>fast</span>
                            </a>

                            <span className='closeBtn' onClick={click}>X</span>
                        </div>
                        
                    </a>
                </div>


                <div className="hiddemNavBarLinks">
                    <a href="#" className='linkHr'>All ads in sellfast</a>
                    <a href="#" className='linkHr'>Login</a>

                    <a href="#">Stay safe</a>
                    <a href="#">FAQ</a>
                    <a href="#">How to sell fast?</a>
                    <a href="#">Download sellfast</a>
                    <a href="#" className='linkHr'>... More</a>
                </div>

            </div>
        </nav>
    )
}

export default Nav