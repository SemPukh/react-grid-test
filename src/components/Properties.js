import React from 'react'
import { connect } from 'react-redux'

const Properties = ({ diagram }) => {
    const { selectedDn } = diagram

    return (
        <div>
            Properties
            {selectedDn && <div>
                {selectedDn}
            </div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    diagram: state.diagram
})

export default connect(mapStateToProps, null)(Properties)
