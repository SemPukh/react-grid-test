import React, { useState } from 'react'
import Alerts from './Alerts'
import Logs from './Logs'
import Events from './Events'

const Tabs = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState('Alerts')

    const renderTab = () => {
        switch (selectedTab) {
            case 'Alerts':
                return <Alerts/>
            case 'Logs':
                return <Logs/>
            case 'Events':
                return <Events/>
            default:
                return <Alerts/>
        }
    }
    return (
        <div>
            <div className="tabs">
                {tabs.map(i => (
                    <button key={i} onClick={() => setSelectedTab(i)}>{i}</button>
                ))}
            </div>
            <div className="content">
                {renderTab()}
            </div>
        </div>
    )
}

export default Tabs