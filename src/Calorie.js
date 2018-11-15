import React, { Component } from 'react';
// import { CsvToHtmlTable } from 'react-csv-to-table';
import * as d3 from 'd3';
// import csv from './projects.csv';

export class Calorie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/calorie.csv', (err, data) => {
            this.setState({
                data: data
            })
        })
        // console.log(data)
    }
    render() {
        console.log(this.state.data)
        return (
            <div className="append container">
                <table>
                    <tbody>
                        <tr>
                            <th>Nutrient</th>
                            <th>Unit</th>
                            <th>Value_per_100_g</th>
                        </tr>
                        {this.state.data.map((th, i) => {
                            return (
                                <tr key={i}>
                                    <td>{th.Nutrient}</td>
                                    <td>{th.Unit}</td>
                                    <td>{th.Value_per_100_g}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
