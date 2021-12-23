import React from "react";

class RatesTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props};
    }

    render() {
        return (
            <tr>
                <td>{ this.state.from }</td>
                <td>{ this.state.to }</td>
                <td>{ this.state.feePercentage }</td>
                <td>{ this.state.feeAmount }</td>
                <td>{ this.state.totalRate }</td>
            </tr>
        )
    }
}

export default RatesTableRow;