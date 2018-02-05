import React from 'react';

class RoadMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentEvent: "l1"
        }
    }
    mouseEnter(evt){
        this.setState({
            currentEvent: evt
        })
    }
    mouseLeave(){
        this.setState({
            currentEvent: "l1"
        })
    }
    render() {
        return (
            <div className="roadmap">
                <h3>ROADMAP</h3>
                <div className="outer-container">
                    <div className="inner-container">
                        <div className="inner-row one">
                            <div className="box">
                                <p>Q2</p>
                                <img onMouseEnter={this.mouseEnter.bind(this, "l2")}  onMouseLeave={this.mouseLeave.bind(this)} className="img-1" src={require("../images/solution-logo.png")}/>
                            </div>
                            <div className="box">
                                <p>Q1</p>
                                <img onMouseEnter={this.mouseEnter.bind(this, "l1")}  onMouseLeave={this.mouseLeave.bind(this)} className="img-2" src={require("../images/gifs/Heart-Logo-Render.gif")}/>
                            </div>
                        </div>
                        <div className="first-dot"></div>
                        <hr className="hr1"/>
                        <div className="inner-row two">
                            <div className="box">
                                <p>Q4</p>
                                <img onMouseEnter={this.mouseEnter.bind(this, "l4")}  onMouseLeave={this.mouseLeave.bind(this)} className="img-3" src={require("../images/gifs/Reward-logo-Render.gif")}/>
                            </div>
                            <div className="box">
                                <p>Q3</p>
                                <img onMouseEnter={this.mouseEnter.bind(this, "l3")} onMouseLeave={this.mouseLeave.bind(this)} className="img-4" src={require("../images/gifs/Gaming-logo-Render.gif")}/>
                            </div>
                        </div>
                        <hr className="hr2"/>
                        <div className="inner-row three">
                            <div className="box">
                                <p>Q7</p>
                                <img onMouseEnter={this.mouseEnter.bind(this, "l7")} onMouseLeave={this.mouseLeave.bind(this)}  className="img-5" src={require("../images/gifs/Water-Logo-Render.gif")}/>
                            </div>
                            <div className="box">
                                <p>Q6</p>
                                <img onMouseEnter={this.mouseEnter.bind(this, "l6")}  onMouseLeave={this.mouseLeave.bind(this)} className="img-6" src={require("../images/solution-logo.png")}/>
                            </div>
                            <div className="box">
                                <p>Q5</p>
                                <img onMouseEnter={this.mouseEnter.bind(this, "l5")} onMouseLeave={this.mouseLeave.bind(this)}  className="img-7" src={require("../images/solution-logo.png")}/>
                            </div>
                        </div>
                        <div className="last-dot"></div>
                        <hr className="hr3"/>
                        <div className="inner-row four">

                        </div>
                    </div>
                    <div className="des-container">
                        <div className="outer-container">
                                <ul className={this.state.currentEvent === "l1" ? "animated fadeInUp" : 'animated hide'}>
                                    <li><p className="date">Q1 - 2018</p></li>
                                    <li><p className="title">Whitepaper & Marketing</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                </ul>
                                    <ul className={this.state.currentEvent === "l2" ? "animated fadeInUp" : 'animated hide'}>
                                    <li><p className="date">Q2 - 2018</p></li>
                                    <li><p className="title">PRE-SALE Stage &#8544; &#8544;&#8544; &#8544;&#8544;&#8544;</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                </ul>
                                <ul className={this.state.currentEvent === "l3" ? "animated fadeInUp" : 'animated hide'}>
                                    <li><p className="date">Q3 - 2018</p></li>
                                    <li><p className="title">Stage &#8544;&#8544;&#8544; & Solution Key</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                </ul>
                                <ul className={this.state.currentEvent === "l4" ? "animated fadeInUp" : 'animated hide'}>
                                    <li><p className="date">Q4 - 2018</p></li>
                                    <li><p className="title">Solution Wallet</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                </ul>
                                <ul className={this.state.currentEvent === "l5" ? "animated fadeInUp" : 'animated hide'}>
                                    <li><p className="date">Q1 - 2019</p></li>
                                    <li><p className="title">Operation Humanity</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                </ul>
                                <ul className={this.state.currentEvent === "l6" ? "animated fadeInUp" : 'animated hide'}>
                                    <li><p className="date">Q3 - 2019</p></li>
                                    <li><p className="title">Water Solutions</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                </ul>
                                <ul className={this.state.currentEvent === "l7" ? "animated fadeInUp" : 'animated hide'}>
                                    <li><p className="date">Q4 - 2019</p></li>
                                    <li><p className="title">Gaming</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                    <li><p>Blah Blah blah</p></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoadMap;