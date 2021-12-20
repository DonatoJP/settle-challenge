import React from "react";

class RatesTableHeader extends React.Component {
    render() {
        return (
            <tr>
                <th>From Currency</th>
                <th>To Currency</th>
                <th>Fee %</th>
                <th>Fee Amount</th>
                <th>Total</th>
            </tr>
        )
    }
}

export default RatesTableHeader;