import React from "react";
import RatesTableHeader from "./RatesTableHeader";
import RatesTableRow from "./RatesTableRow";
import backendService from '../../services/backendService'

const data = [
    {"from":{"symbol":"EUR","description":"Euro"},"to":{"symbol":"USD","description":"United States Dollar"},"originalRate":1.123993,"feePercentage":10,"feeAmount":0.1123993,"totalRate":1.2363923},
    {"from":{"symbol":"EUR","description":"Euro"},"to":{"symbol":"ARS","description":"Argentine Peso"},"originalRate":115.297815,"feePercentage":25,"feeAmount":28.82445375,"totalRate":144.12226875}
]

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