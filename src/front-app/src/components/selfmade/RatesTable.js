import React from "react";
import RatesTableHeader from "./RatesTableHeader";
import RatesTableRow from "./RatesTableRow";
import backendService from '../../services/backendService'


class RatesTable extends React.Component {
    constructor (props) {
        super(props)
        this.state = {data: []}
    }

    async componentDidMount() {
        const dataFromApi = await backendService.getRates();

        this.setState({data: dataFromApi})
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <table>
                    <RatesTableHeader />
                    {
                        this.state.data.map(d => {
                           return (<RatesTableRow 
                            from={d.from.symbol}
                            to={d.to.symbol}
                            feePercentage={d.feePercentage}
                            feeAmount={d.feeAmount}
                            totalRate={d.totalRate}
                           />)
                        })
                    }
                </table>
            </div>
        )
    }
}

export default RatesTable;