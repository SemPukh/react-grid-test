import React from 'react'
import { changeSelected } from '../reducers/diagram/actions'
import { connect } from 'react-redux'

const Diagram = ({ changeSelected }) => {
    const nodes = [
        {
            id: 1,
            dn: 'first dn'
        },
        {
            id: 2,
            dn: 'second dn'
        },
        {
            id: 3,
            dn: 'third dn'
        },
        {
            id: 4,
            dn: 'fourth dn'
        }

    ]
    return (
        <div className="nodes">
            Click on rect and you see changes in Property window
            {nodes.map(({ id, dn }) => (
                <div className="node" key={id} onClick={() => changeSelected(dn)}>{dn}</div>
            ))}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    changeSelected: (params) => dispatch(changeSelected(params))
})

export default connect(null, mapDispatchToProps)(Diagram)
