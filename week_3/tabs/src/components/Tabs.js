
import {useState} from 'react';



const Tabs = ({tabList, setTabList}) => {
    const [tabContent, setTabContent] = useState("");

    return (

        <div>
            <div className="container m-5">
                <div className='nav nav-tabs'>
                    {
                        tabList.map((tab) => (
                            <button className='nav-link' onClick={() => setTabContent(tab.tabContent)}>{tab.tabName}</button>
                        ))                          
                    }
                </div>
                <div className="tab-content">
                    <p className="m-3">{tabContent}</p>
                    
                </div>
            </div>

        </div>
    );
}

export default Tabs;