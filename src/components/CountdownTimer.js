import React from "react";
import moment from "moment";
import mojs from "mo-js";

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: {
                months: '',
                days: '',
                h: '',
                m: '',
                s: '',
                interval: function () {

                }
            },
            startDate: new moment(),
            min: new Date(),
            startTimer: false
        }
        this.startCircle = this.startCircle.bind(this);
        this.tick = this.tick.bind(this);
    }

    startCircle(_duration) {
        new mojs.Shape({
            shape: 'circle',
            //scale:        { 0 : 1 },//size {starting :end}
            top: '100px',//move from top
            left: '100px',//move from left
            radius: 40,//radius of circle
            fill: 'none',//color
            stroke: {'white': '#57DF2B'},//stroke color
            strokeWidth: {10: 10},//strokeWidth {starting width :end width}
            strokeDasharray: '100%',//joints
            strokeDashoffset: {'100%': '0%'},//fill angles
            angle: {270: 270},//angles of rotation
            duration: _duration * 1000,//time/sec
            repeat: 999,
        }).play();
    }

    componentDidMount() {
        this.state.interval = setInterval(this.tick, 1000)
        // this.startCircle(3);
    }

    componentWillUnmount() {
        this.state.interval && clearInterval(this.state.interval);
    }

    tick() {
        if (typeof this.props.endDate === typeof new Date()) {
            this.afterEachSecond(this.props.endDate);
        } else {
        }
    }

    afterEachSecond(endDate) {
        var temp = {months: '', days: '', h: '', m: '', s: ''};
        var now = moment(); // today's date
        var end = moment(endDate); // end date
        var duration = moment.duration(end.diff(now));
        if (duration.asSeconds() >= 0) {
            if (Math.floor(duration.asMonths()) > 0) {
                if (Math.floor(duration.asMonths()) < 10) {
                    temp.months = '0' + Math.floor(duration.asMonths())
                } else {
                    temp.months = Math.floor(duration.asMonths())
                }
            }
            if (Math.floor(duration.asDays()) > 0) {
                if (Math.floor(duration.days()) < 10) {
                    temp.days = '0' + Math.floor(duration.days())
                } else {
                    temp.days = Math.floor(duration.days())
                }
            }
            if (Math.floor(duration.asHours()) > 0) {
                if (Math.floor(duration.hours()) < 10) {
                    temp.h = '0' + Math.floor(duration.hours())
                } else {
                    temp.h = Math.floor(duration.hours())
                }
            }
            if (Math.floor(duration.asMinutes()) > 0) {
                if (Math.floor(duration.minutes()) < 10) {
                    temp.m = '0' + Math.floor(duration.minutes())
                } else {
                    temp.m = Math.floor(duration.minutes())
                }
            }
            if (Math.floor(duration.asSeconds()) > 0) {
                if (Math.floor(duration.seconds()) < 10) {
                    temp.s = '0' + Math.floor(duration.seconds())
                } else {
                    temp.s = Math.floor(duration.seconds())
                }
            }
        }
        this.setState({
            timeRemaining: temp
        })
    }

    render() {
        const timer = {
            display: 'flex',
            justifyContent: 'space-around'
        };
        const time = {
            color: '#fff',
            fontSize: '70px',
            fontWeight: '500',
            marginTop: '43px'
        }
        const label = {
            fontSize: '17px',
            display: 'flex',
            justifyContent: 'center',
            minWidth: 'inherit',
            color: '#51d64b',
            fontWeight: '500',
            marginTop: '41px'
        }
        const section = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '100px',
            minHeight: '100px',
            backgroundColor: '#156112',
            borderRadius: '100%',
            width: '120px',
            height: '120px'
        }
        return (
            <div className="timer" style={timer}>
                {
                    this.state.timeRemaining.months &&
                    <div className="section months">
                        <div className="time">{this.state.timeRemaining.months}</div>
                        <div className="label">Months</div>
                    </div>
                }
                {
                    this.state.timeRemaining.days &&
                    <div className="section days">
                        <div className="time">{this.state.timeRemaining.days}</div>
                        <div className="label">Days</div>
                    </div>
                }
                {
                    this.state.timeRemaining.h &&
                    <div className="section hours">
                        <div className="time">{this.state.timeRemaining.h}</div>
                        <div className="label">Hours</div>
                    </div>
                }
                {
                    this.state.timeRemaining.m &&

                    <div className="section minutes">
                        <div className="time">{this.state.timeRemaining.m}</div>
                        <div className="label">Minutes</div>
                        <svg >
                            <ellipse rx="40" ry="40" cx="45" cy="45" fillOpacity="1" strokeLinecap=""
                                     strokeDashoffset="5" fill="none" strokeDasharray="251"
                                     strokeOpacity="1" strokeWidth="10" stroke="rgba(90,223,47,1)">
                            </ellipse>
                        </svg>
                    </div>
                    // <div className="section minutes">
                    //     <div className="label">Minutes</div>
                    // </div>
                }
                {
                    this.state.timeRemaining.s &&
                    <div className="section seconds">
                        <div className="time">{this.state.timeRemaining.s}</div>
                        <div className="label">Seconds</div>
                    </div>
                }
                {/*<svg>*/}
                {/*<ellipse rx="40" ry="40" cx="45" cy="45" fillOpacity="1" strokeLinecap=""*/}
                {/*fill="none" strokeDasharray="251.32741228718345 "*/}
                {/*strokeOpacity="1" strokeWidth="10" stroke="rgba(206,245,193,1)"></ellipse>*/}
                {/*</svg>*/}
                </div>
                )
                }
                }

                export default CountdownTimer;