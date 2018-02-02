import React from 'react';
import CountdownTimer from './CountdownTimer';
import TeamDetail from './TeamDetail';
import moment from 'moment';
import ReactRotatingText from "react-rotating-text";
import SkyLight from 'react-skylight';
import $ from "jquery";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scrollify from 'jquery-scrollify';
import * as Scroll from 'react-scroll';
import  SliderComp from './SliderComponent';
import "../css/notification.css"
import Notification from './Notification'
import Sale from './Sale'
import AudioPlayer from './AudioPlayer'



let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            currentTab: 9,
            hide: true,
            mounted: true,
            paused: false,
            muted: false,
            member: "",
            phrase: ['S','O','L','U','T','I','O','N',' ','T','O','K','E','N'],
        }
    }
    handleSlide(state) {

        $(".slide-track").css("transition", "-webkit-transform 500ms ease")
        var matrix = $('.slide-track').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
        var x = matrix[12] || matrix[4];
        x =  parseInt(x)
        if (state === "prev" && this.state.currentTab !== 1) {
            this.handleDialog(this.state.currentTab-1);
        }
        else if (state === "next" && this.state.currentTab !== 4) {
            this.handleDialog(this.state.currentTab+1);
        }
    }
    handleDialog(evt){
        if(evt === 1) {
            this.sliderDialog1.show();
        }
        else if (evt === 2) {
            this.sliderDialog2.show();
        }
        else if (evt === 3) {
            this.sliderDialog3.show();
        }
        else if (evt === 4) {
            this.sliderDialog4.show();
        }
    }

    handleDetails(name){
        this.setState({
            member: name
        })
        this.teamDialog.show();
    }
    onClickFooter () {
        // scrollify.next();
        // var x = scrollify.current();
        // console.log(x[0])
        // console.log(x[0].class)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        var el = document.getElementById('myVideo')
        el.play();
        el.muted = false;
    }
    mount = true;
    componentWillUnmount () {
        this.setState({
            mounted: false
        })
        this.mount = false;
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll() {
        if (this.mount) {
            var winHeight = $(window).height(),
                docHeight = $(document).height(),
                value = $(window).scrollTop(),
                max, percent;
            if(value > 4) {
                this.setState({
                    hide: false
                })
            }
            else {
                this.setState({
                    hide: true
                })
            }
        }
    }

    handleHamburger(){
        $("#nav-icon4").toggleClass('open');
        $("#overlay").toggleClass('open');
    }
    handleMobileMenuClick(){
        $("#nav-icon4").removeClass('open');
        $("#overlay").removeClass('open');
    }
    handleVideo(){
        var el = document.getElementById('myVideo')
        el.muted = false;
        var audioEl = document.getElementById('myAudio')

        if(el.paused) {
            el.play();
            // audioEl.pause();
            this.setState({
                paused: false,
                // muted: true
            })
        }
        else {
            el.pause();
            this.setState({
                paused: true
            })
        }
    }
    handleMusic(){
        var el = document.getElementById('myAudio')
        var videoEl = document.getElementById('myVideo')
        // videoEl.muted = true;
        if(el.paused) {
            // console.log(this.state.muted, "paused")
            el.play();
            this.setState({
                muted: false
            })
        }
        else {
            // console.log(this.state.muted, "play")
            el.pause();
            this.setState({
                muted: true
            })
        }
    }
    handleSetActive(){
        // $("#home-bar").removeClass('active');
    }
    render() {
        var settings = {
            // dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <div>
                <div className="header">
                    <div className={!this.state.hide ? "scrolled" : "row_51 "}>
                        <div className="top-bar-outer">
                            <div className="empty-column">
                            </div>
                            <div className="nav-bar">
                                <Link activeClass="active"  id="home-bar" to="home" spy={true} offset={50} smooth={true} duration={500}>
                                    Home
                                </Link>
                                <Link activeClass="active"  offset={30} to="platform" spy={true} smooth={true} duration={700}>
                                    Our Platforms
                                </Link>
                                <Link activeClass="active" offset={30} onSetActive= {this.handleSetActive.bind(this)}to="whitepaper" spy={true} smooth={true} duration={900}>
                                    Whitepaper
                                </Link>
                                <Link activeClass="active" to="sale" offset={30} spy={true} smooth={true} duration={1200}>
                                    Token Sale
                                </Link>
                                <Link activeClass="active" to="team" offset={30} spy={true} smooth={true} duration={1500}>
                                    Team Members
                                </Link>
                            </div>
                            <div onClick={this.handleMusic.bind(this)} className="music-btn">
                                {!this.state.muted && <div><img src={require("../images/new-music.png")}/></div>}
                                {this.state.muted && <div><img src={require("../images/no-music.png")}/></div>}
                            </div>
                            <div className="join-sale">

                                <Link to="sale" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={1200}>
                                    Join Token Sale
                                </Link>
                                {/*<a>Join Token Sale</a>*/}
                            </div>
                        </div>

                        <div className="hamburger-button mobile-menu">
                            <div onClick={this.handleMusic.bind(this)} className="music-btn">
                                {!this.state.muted && <div><img src={require("../images/music.png")}/></div>}
                                {this.state.muted && <div><img src={require("../images/no-music.png")}/></div>}
                            </div>
                            <div onClick={this.handleHamburger.bind(this)} id="nav-icon4">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="overlay" className=" mobile-menu overlay">
                            <nav className="overlay-menu">
                                <ul>
                                    <li>
                                        <Link onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={500}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="platform" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={700}>
                                            Our Platforms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="test6" to="whitepaper" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={900}>
                                            Whitepaper
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="sale" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={1200}>
                                            Token Sale
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="test6" to="team" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={1500}>
                                            Team Members
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="test6" to="team" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={1500}>
                                            Join Token Sale
                                        </Link>
                                        {/*<a className="button-white" onClick={this.handleMobileMenuClick.bind(this)} href="#">Join Token Sale</a>*/}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <Element name="video" className="element">

                    <video onClick={this.handleVideo.bind(this)} loop autoPlay id="myVideo">
                        <source src={require("../images/gifs/Solv web video.mp4")} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <AudioPlayer />
                    <div onClick={this.handleVideo.bind(this)} className="audio-icon">
                        {!this.state.paused && <img src={require("../images/paused-icon.png")}/>}
                        {this.state.paused && <img src={require("../images/play-icon.png")}/>}
                    </div>

                    <div className="content">
                        <div className="page-content DWFullScreenPage_container" id="DWFullScreenPage1">
                            <Element name="home" className="element">

                                <div className="section row_30" data-tooltip="Home" data-section-name="home" data-arrow="#FFFFFF" data-id="home" data-anchor="home">
                                    <div className="home-section container-hero">
                                        <div className="heading1">
                                            <h3>
                                                ARE YOU A PART OF THE SOLUTION?
                                                {/*<ReactRotatingText items={['SOLUTION TOKEN']} eraseMode="erase"/>*/}
                                            </h3>
                                            <p className="span13">
                                            Here at Solution Token, the benefit of our users - which we hope will span across all kinds of humanity - is our priority.
                                            This website outlines a summary of our goals for the four different platforms that we are building so that you can learn
                                            what Solution Token can do for you. We hope to earn your support by sharing our vision: what we are doing, why we are doing it,
                                            and how we will accomplish it. For more technical details and hard numbers to help you make the most well-informed
                                            decision possible, you can also explore our interactive whitepaper.<br/>
                                                {/*<ReactRotatingText items={['A TOKEN FOR HUMANITY']} />*/}
                                        </p>
                                            <h4 className="pre-sale-news">Pre Sale Coming Soon</h4>
                                        </div>

                                        {/*<div id="countdown_with_background_v1">*/}
                                        {/*<div className="myloader"></div>*/}
                                        {/*<ul className="fullscreen_background_list">*/}
                                        {/*<li>*/}
                                        {/*<img src="" alt="" width="1920" height="1200" />*/}
                                        {/*</li>*/}
                                        {/*</ul>*/}
                                        {/*</div>*/}
                                        <div className="countDown">
                                        <CountdownTimer endDate={moment('25/2/2018 6:00:00', 'DD/MM/YYYY hh:mm:ss')}/>
                                        </div>
                                    </div>
                                </div>
                            </Element>

                            <Element name="platform" className="element">

                                <div className="section row_58" data-section-name="platforms" data-tooltip="Our Platforms" data-arrow="#1d8f19" data-alternate-header="true" data-id="platforms" data-anchor="platforms" data-slider="true">
                                    <div className="slide slide1"  data-id="platform" data-tooltip="Platforms" data-anchor="platform">
                                        <div className="custom-post-content1"> <h3 className="client-name1">Platforms</h3>
                                            <p>
                                                <span>Solution Token prides itself on the platforms it provides, these are the pieces that make a Solution.</span>
                                                <br/>
                                                The goal of Solution is to aid causes to help solve humanitarian issues and disasters around the world. Solution&#8217;s platform
                                                will be widely based around real world uses, with three out of the four concepts directly applicable to the real world.
                                                These three are the humanitarian program, water solutions, and interactive gaming. The only concept that does
                                                not directly interact with the physical world will be the Solution wallet.</p>
                                            <div className="column_46 desktop-view">
                                                <button className="humanity" onClick={this.handleDialog.bind(this, 1)}>
                                                    <img title="Humanity" className="image-field1" src={require("../images/gifs/Heart-Logo-Render.gif")}/>
                                                    <p>Operation Humanity</p>
                                                </button>
                                                <button className="water" onClick={this.handleDialog.bind(this, 2)}>
                                                    <img title="Water Solution" className="image-field1" src={require("../images/gifs/Water-Logo-Render.gif")}/>
                                                    <p>Water Solutions</p>
                                                </button>

                                                <button className="game" onClick={this.handleDialog.bind(this, 3)}>
                                                    <img title="Gaming Platform" className="image-field1" src={require("../images/gifs/Gaming-logo-Render.gif")}/>
                                                    <p>Street QRed Game</p>
                                                </button>
                                                <button className="wallet" onClick={this.handleDialog.bind(this, 4)}>
                                                    <img title="Wallet & Reward" className="image-field1" src={require("../images/gifs/Reward-logo-Render.gif")}/>
                                                    <p>Solv Wallet</p>
                                                </button>
                                            </div>
                                            <div className="mobile-view">
                                                <div>
                                                    <button onClick={this.handleDialog.bind(this, 1)}>
                                                        <img className="image-field1" src={require("../images/gifs/Heart-Logo-Render.gif")}/>
                                                    </button>
                                                    <button onClick={this.handleDialog.bind(this, 2)}>
                                                        <img className="image-field1" src={require("../images/gifs/Water-Logo-Render.gif")}/>
                                                    </button>
                                                </div>
                                                <div>
                                                    <button onClick={this.handleDialog.bind(this, 3)}>
                                                        <img className="image-field1" src={require("../images/gifs/Gaming-logo-Render.gif")}/>
                                                    </button>
                                                    <button onClick={this.handleDialog.bind(this, 4)}>
                                                        <img className="image-field1" src={require("../images/gifs/Reward-logo-Render.gif")}/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="testimonials-content-inner1">
                                            <span>
                                                <div className="testimonials-content-inner"></div>
                                            </span>
                                            </div>
                                        </div>
                                    </div><SkyLight
                                    hideOnOverlayClicked={true}
                                    ref={ref => this.sliderDialog1 = ref}
                                >
                                    <div className="slider-type">
                                        <SliderComp sliderNumber="1"/>
                                    </div>
                                </SkyLight>
                                    <SkyLight
                                        hideOnOverlayClicked={true}
                                        ref={ref => this.sliderDialog2 = ref}
                                    >
                                        <div className="slider-type">
                                            <SliderComp sliderNumber="2"/>
                                        </div>
                                    </SkyLight>
                                    <SkyLight
                                        hideOnOverlayClicked={true}
                                        ref={ref => this.sliderDialog3 = ref}
                                    >
                                        <div className="slider-type">
                                            <SliderComp sliderNumber="3"/>
                                        </div>
                                    </SkyLight>
                                    <SkyLight
                                        hideOnOverlayClicked={true}
                                        ref={ref => this.sliderDialog4 = ref}
                                    >
                                        <div className="slider-type">
                                            <SliderComp sliderNumber="4"/>
                                        </div>
                                    </SkyLight>
                                </div>
                            </Element>

                            <Element name="whitepaper" className="element">
                                <div className="section row_31" data-tooltip="Whitepaper" data-section-name="whitepaper" data-alternate-header="true" data-arrow="#1d8f19" data-id="whitepaper" data-anchor="whitepaper">
                                    <div className="full_row_4 full_row_type_fs_t2 row_35">
                                        <div className="gridContainer row_36">
                                            <div className="row_37">
                                                <div className="column_28"><img className="image5" src={require("../images/gifs/gif-faster-smaller.gif" )}/></div>
                                                <div className="column_29">
                                                    <div id="editable-wrapping-node">
                                                        <h3><span >Interactive</span> <span className="span14">Whitepaper</span></h3>
                                                        <p>The simplicity of an interactive whitepaper draws the attention to the key aspects of Solution Token. <br/>
                                                            <span >This will allow users to both have visual and a virtual experience.&nbsp;</span></p>
                                                        <a className="button" href="#">Coming Soon</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Element>

                            <Element name="sale" className="element">
                                <Sale />
                            </Element>

                            <Element name="team" className="element">
                                <div className="section row_39" data-section-name="team" data-tooltip="Team Members" data-alternate-header="true" data-arrow="#1d8f19" data-id="team" data-anchor="team">
                                    <div className="full_row_8 full_row_type_fs_t4 row_44">
                                        <div className="gridContainer row_47">
                                            <div className="row_48">
                                                <div className="column_36">
                                                    <h3>Team Members</h3>
                                                    <p>"We are a team, we are a family. This is our whole crew. This was created not by big names Eli karadsheh
                                                        or powerful corporations, but bright and passionate individuals who want to change the world for the better."</p>
                                                    {/*<a className="button" href="#">Learn more</a>*/}
                                                </div>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-details">
                                        <div className="team-container desktop-view">
                                            <div className="members-row">
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/ingram.jpg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "andrew")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Andrew Ingram</p>
                                                            <p className="designation">CEO & Founder</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/sample.png")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "matthew")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Matthew Wolff</p>
                                                            <p className="designation">COO</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/David.jpeg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "david")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">David Casciato</p>
                                                            <p className="designation">Humanitarian Director</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/Micheal.png")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "mike")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Michael Gogarty</p>
                                                            <p className="designation">Communications Manager</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="members-row">
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/ali_Zain.jpg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "zain")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Ali Zain</p>
                                                            <p className="designation">Head Developer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/mahar_husnain.jpg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "mahar")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Mahar Husnain</p>
                                                            <p className="designation">Lead Developer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container member-hassan">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/has.png")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "hassan")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr className="hassan"/>
                                                        <div className="hassan info">
                                                            <p className="name">Hassan</p>
                                                            <p className="designation">FrontEnd Engineer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/Joshua L.jpg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "legaspi")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Joshua Legaspi</p>
                                                            <p className="designation">Lead Graphics</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="members-row">
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/Dean_James.jpg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "dean")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Dean James</p>
                                                            <p className="designation">Marketing Director</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/sample.png")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "sean")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Sean Gallagher</p>
                                                            <p className="designation">Chief Editor</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/eli-1.jpg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "eli")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Eli Karadsheh</p>
                                                            <p className="designation">Social Media Manager</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/SOLV PROFILES 005.jpg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "daniel")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Daniel Faraj</p>
                                                            <p className="designation">Digital Media Manager</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="members-row">
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/James fawk.jpg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "james")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">James Fawke</p>
                                                            <p className="designation">Public Relation Australia</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/Damian.png")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "damian")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Damian Godlewski</p>
                                                            <p className="designation">Public Relations Europe</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="member-container">
                                                    <div className="inner-member-container">
                                                        <img src={require("../images/team/Arik.jpg")}/>
                                                        <div className="links">
                                                            <a onClick={this.handleDetails.bind(this, "arik")}>BIO</a>
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                        <hr/>
                                                        <div className="info">
                                                            <p className="name">Arik Balolong</p>
                                                            <p className="designation">Web & Graphic Designer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="member-container">
                                                 <div className="inner-member-container">
                                                 <img src={require("../images/team/sample.png")}/>
                                                 <div className="links">
                                                 <a onClick={this.handleDetails.bind(this, "joshua")}>BIO</a>
                                                 <i className="fa fa-envelope" aria-hidden="true"></i>
                                                 </div>
                                                 <hr/>
                                                 <div className="info">
                                                 <p className="name">Joshua Julia</p>
                                                 <p className="designation">Public Relations America</p>
                                                 </div>
                                                 </div>
                                                 </div>*/}
                                            </div>

                                            {/*<div className="members-row">
                                             <div className="member-container">
                                             <div className="inner-member-container">
                                             <img src={require("../images/team/sample.png")}/>
                                             <div className="links">
                                             <a onClick={this.handleDetails.bind(this, "kamil")}>BIO</a>
                                             <i className="fa fa-envelope" aria-hidden="true"></i>
                                             </div>
                                             <hr/>
                                             <div className="info">
                                             <p className="name">Kamil Helou</p>
                                             <p className="designation">Finance Operator</p>
                                             </div>
                                             </div>
                                             </div>
                                             </div>*/}
                                        </div>

                                        <div className="mobile-menu">
                                            <Slider {...settings}>
                                                <div className="slider-continer">
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/ingram.jpg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "andrew")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Andrew Ingram</p>
                                                                <p className="designation">CEO & Founder</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "matthew")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Matthew Wolff</p>
                                                                <p className="designation">COO</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slider-continer">
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/David.jpeg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "david")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">David Casciato</p>
                                                                <p className="designation">Humanitarian Director</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/Micheal.png")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "mike")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Michael Gogarty</p>
                                                                <p className="designation">Communications Manager</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slider-continer">
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/ali_Zain.jpg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "zain")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Ali Zain</p>
                                                                <p className="designation">Head Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/mahar_husnain.jpg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "mahar")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Mahar Husnain</p>
                                                                <p className="designation">Lead Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="slider-continer">
                                                    <div className="member-container member-hassan">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/has.png")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "hassan")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr className="hassan"/>
                                                            <div className="hassan info">
                                                                <p className="name">Hassan</p>
                                                                <p className="designation">FrontEnd Engineer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/Joshua L.jpg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "legaspi")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Joshua Legaspi</p>
                                                                <p className="designation">Lead Graphics</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slider-continer">
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/Dean_James.jpg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "dean")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Dean James</p>
                                                                <p className="designation">Marketing Director</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/sample.png")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "sean")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Sean Gallagher</p>
                                                                <p className="designation">Chief Editor</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="slider-continer">
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/eli-1.jpg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "eli")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Eli Karadsheh</p>
                                                                <p className="designation">Social Media Manager</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/SOLV PROFILES 005.jpg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "daniel")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Daniel Faraj</p>
                                                                <p className="designation">Digital Media Manager</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="slider-continer">
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/James fawk.jpg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "james")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">James Fawke</p>
                                                                <p className="designation">Public Relation Australia</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/Damian.png")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "damian")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Damian Godlewski</p>
                                                                <p className="designation">Public Relations Europe</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="slider-continer">
                                                    <div className="member-container">
                                                        <div className="inner-member-container">
                                                            <img src={require("../images/team/Arik.jpg")}/>
                                                            <div className="links">
                                                                <a onClick={this.handleDetails.bind(this, "arik")}>BIO</a>
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                            </div>
                                                            <hr/>
                                                            <div className="info">
                                                                <p className="name">Arik Balolong</p>
                                                                <p className="designation">Web & Graphic Designer</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*<div className="member-container">
                                                     <div className="inner-member-container">
                                                     <img src={require("../images/team/sample.png")}/>
                                                     <div className="links">
                                                     <a onClick={this.handleDetails.bind(this, "joshua")}>BIO</a>
                                                     <i className="fa fa-envelope" aria-hidden="true"></i>
                                                     </div>
                                                     <hr/>
                                                     <div className="info">
                                                     <p className="name">Joshua Julia</p>
                                                     <p className="designation">Public Relations America</p>
                                                     </div>
                                                     </div>
                                                     </div>*/}
                                                </div>

                                                <div className="slider-continer">
                                                    {/*<div className="member-container">
                                                     <div className="inner-member-container">
                                                     <img src={require("../images/team/sample.png")}/>
                                                     <div className="links">
                                                     <a onClick={this.handleDetails.bind(this, "kamil")}>BIO</a>
                                                     <i className="fa fa-envelope" aria-hidden="true"></i>
                                                     </div>
                                                     <hr/>
                                                     <div className="info">
                                                     <p className="name">Kamil Helou</p>
                                                     <p className="designation">Finance Operator</p>
                                                     </div>
                                                     </div>
                                                     </div>*/}
                                                </div>
                                            </Slider>
                                        </div>
                                        <SkyLight
                                            hideOnOverlayClicked={true}
                                            ref={ref => this.teamDialog = ref}
                                        >
                                            <TeamDetail member={this.state.member}/>
                                        </SkyLight>
                                    </div>
                                </div>

                            </Element>

                        </div>
                    </div>
                    {/*<div className="footer"></div>*/}
                    {/*<div className="fp-arrow-c" onClick={this.onClickFooter.bind(this)}> <span className="fp-arrow"> <i className="fa fa-chevron-down arrow" aria-hidden="true"></i></span> </div>*/}
                    <div className="footer">
                        <div className="box">
                            <a href="#https://www.facebook.com/solutiontoken/" className="facebook2">
                                <img  className="white" src={require("../images/facebook_w.png")}/>
                                <img className="original" src={require("../images/facebook.png")}/>
                            </a>
                            <a href="#" className="twitter2">
                                <img className="white" src={require("../images/twitter_w.png")}/>
                                <img className="original" src={require("../images/twitter.png")}/>
                            </a>
                            <a href="#" className="slack2">
                                <img className="white" src={require("../images/slack_w.png")}/>
                                <img className="original" src={require("../images/slack.png")}/>
                            </a>
                            <a href="#" className="btc2 forcedState__hover">
                                <img className="white" src={require("../images/btc_w.png")}/>
                                <img className="original" src={require("../images/btc.png")}/>
                            </a>
                            <a href="#" className="steem2">

                            </a>
                        </div>
                        {/*<div className="box">
                         <a href="#" className="facebook2">
                         <i className="fa fa-facebook-square" aria-hidden="true"></i>
                         </a>
                         <a href="#" className="twitter2">
                         <i className="fa fa-twitter-square" aria-hidden="true"></i>
                         </a>
                         <a href="#" className="slack2">
                         <i className="fa fa-slack" aria-hidden="true"></i>
                         </a>
                         <a href="#" className="btc2 forcedState__hover">
                         <i className="fa fa-btc" aria-hidden="true"></i>
                         </a>
                         <a href="#" className="steem2"></a>
                         </div>*/}
                    </div>
                    {<Notification />}
                </Element>
            </div>
        )
        var settings = {
            // dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
    }
}


export default Home;