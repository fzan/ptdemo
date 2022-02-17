import React from "react";
import HalfHour from "./halfhour";
import HourHeader from "./hourheader";
import "./timerange.css";

function stripeShade(col, sel) {
    if (sel == true) {
        return {
          backgroundColor: '#f86c6b' //color
        };
    }
    if (col % 2 === 0) {
        return {
            backgroundColor: '#ffffff' //color
        };
    }
    return {
        backgroundColor: '#f0f0f0' // Color(color).lighten(0.09)
    };


}

export default class TimeRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHours: this.props.data ? this.props.data : []
        }
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onHoursChange = this.onHoursChange.bind(this);
    }

    componentWillReceiveProps(next){
      this.setState({selectedHours: next.data})
    }

    onMouseDown(e) {
        e.preventDefault();
        const rowHour = e.target.getAttribute('data-hour');

        const { selectedHours } = this.state;
        const index = selectedHours.indexOf(parseInt(rowHour, 10))
        if (index > -1) {
            selectedHours.splice(index, 1);
        }
        else {
            selectedHours.push(parseInt(rowHour, 10));
        }

        this.setState({
            selectedHours: selectedHours
        });

        this.weekTable.addEventListener('mouseover', this.onMouseOver);
        window.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseOver(e) {
        const rowHour = e.target.getAttribute('data-hour');

        const { selectedHours } = this.state;
        const index = selectedHours.indexOf(parseInt(rowHour, 10))
        if (index > -1) {
            selectedHours.splice(index, 1);
        }
        else
        {
            selectedHours.push(parseInt(rowHour, 10));
        }

        this.setState({
            selectedHours: selectedHours
        });
    }

    onMouseUp() {
        this.weekTable.removeEventListener('mouseover', this.onMouseOver);
        window.removeEventListener('mouseup', this.onMouseUp);
        this.onHoursChange();
    }

    setupTimeRow() {
        const rows = [];
        for (let i = 0; i < 48; i += 1) {
            rows.push(i);
        }

        return rows.map((tRow, index) => (
            <HalfHour key={index} ora={tRow} bgColor={stripeShade(index, this.state.selectedHours.indexOf(tRow)>-1)}/>
        ));
    }

    onHoursChange() {
        this.props.onHoursChange(this.state.selectedHours);
    }

    render() {
        return (
           <div id="DailySchedulerTable">
                <table>
                    <HourHeader />
                    <tbody onMouseDown={this.onMouseDown}
                        ref={(tbody) => { this.weekTable = tbody; }}>
                        <tr>
                            {this.setupTimeRow()}
                        </tr>
                    </tbody>
                </table>
           </div>
        )
    }
}
