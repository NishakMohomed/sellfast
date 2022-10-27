import { Input } from 'antd';
import { SearchOutlined, EnvironmentFilled } from '@ant-design/icons'

const search = () => {
    return(
        <div className="container">

            <div className="location">
                <a href="#">
                    <EnvironmentFilled style={{marginRight: '5px'}} />
                    All of Sri Lanka
                </a>
            </div>

            <div className="search_container">

                <div className="searchBox">
                    <div className="searchInput">
                        <Input placeholder="What are you looking for ?" className='inputBox' size='large'/>
                    </div>

                    <button>
                        <SearchOutlined style={{fontSize: '100%', fontWeight: 'bolder', color: '#fff'}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default search