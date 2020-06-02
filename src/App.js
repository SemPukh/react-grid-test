import React, { useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import './App.css';
import Tabs from './components/Tabs'
import Diagram from './components/Diagram'
import Properties from './components/Properties'
import Alerts from './components/Alerts'
import Logs from './components/Logs'
import Events from './components/Events'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const components = [
    {
        id: 1,
        data: { x: 0, y: 0, w: 9, h: 4 },
        name: 'Diagram',
        isVisible: true,
        component: <Diagram/>
    },
    {
        id: 2,
        data: { x: 10, y: 0, w: 3, h: 5.3 },
        name: 'Properties',
        isVisible: true,
        component: <Properties/>
    },
    {
        id: 3,
        data: { x: 0, y: 0, w: 9, h: 1.3 },
        name: 'Alerts',
        isVisible: true,
        position: 'down',
        component: Alerts
    },
    {
        id: 4,
        data: { x: 0, y: 0, w: 9, h: 1.3 },
        name: 'Logs',
        isVisible: true,
        position: 'down',
        component: Logs
    },
    {
        id: 5,
        data: { x: 0, y: 0, w: 9, h: 1.3 },
        name: 'Events',
        isVisible: false,
        position: 'down',
        component: Events
    }
]

const App = () => {
    const [showSettings, setShowSettings] = useState(false)
    const [items, setItems] = useState(components)

    const handleChange = (e, id) => {
        const temp = items.map(i => {
            if (i.id === id) {
                return ({
                    ...i,
                    isVisible: e.target.checked
                })
            } else {
                return i
            }
        })
        setItems(temp)
    }

    const tabs = items
        .filter(item => item.isVisible && item.position === 'down')
        .map(i => i.name)

    const handleShowSettings = () => setShowSettings(true)
    const handleCloseSetting = () => setShowSettings(false)

    return (
        <div className="wrapper">
            <div className="menu">
                <button onMouseEnter={handleShowSettings} onMouseLeave={handleCloseSetting}>Components</button>
            </div>
            <ResponsiveReactGridLayout
                isDraggable
                isResizable={true}
            >
                {items.filter(i => i.isVisible && !i.position).map(({ id, data, component }) => (
                    <div className="component" key={id} data-grid={data}>{component}</div>
                ))}
                <div className="component" key={3} data-grid={{ x: 0, y: 0, w: 9, h: 1.3 }}><Tabs tabs={tabs}/></div>
            </ResponsiveReactGridLayout>

            {showSettings &&
            <div className="settings" onMouseEnter={handleShowSettings} onMouseLeave={handleCloseSetting}>
                {items.map(({ id, name, isVisible }) => (
                    <div className="menu-item" key={id}>
                        <input type="checkbox" value={isVisible} defaultChecked={isVisible}
                               onChange={(e) => handleChange(e, id)}/>
                        {name}
                    </div>
                ))}
            </div>}
        </div>
    );
}

export default App;
