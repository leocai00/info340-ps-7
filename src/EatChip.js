import React, { Component } from 'react';
import eat from './eat.gif';

export class EatChip extends Component {
    render() {
        return (
            <div className="append">
                <img src={eat} className="img" alt="eat" />
            </div>
        )
    }
}
