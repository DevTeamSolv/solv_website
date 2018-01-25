import React from 'react';
import CountdownTimer from './CountdownTimer';
import moment from 'moment';
import ReactRotatingText from "react-rotating-text";
import SkyLight from 'react-skylight';
import $ from "jquery";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scrollify from 'jquery-scrollify';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            currentTab: 9
        }
    }
    componentDidMount() {
        scrollify({
            section : ".section",
            sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            // setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll:true
        });
        // this.handleScroll()
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
        var self = this;

        if(evt === 1) {
            $(".slide-track").css({
                transform: 'translateX(0%)',
                MozTransform: 'translateX(-0%)',
                WebkitTransform: 'translateX(-0%)',
                msTransform: 'translateX(-0%)'
            })
        }
        else if(evt === 2) {
            $(".slide-track").css({
                transform: 'translateX(-100%)',
                MozTransform: 'translateX(-100%)',
                WebkitTransform: 'translateX(-100%)',
                msTransform: 'translateX(-100%)'
            })
        }
        else if(evt === 3) {
            $(".slide-track").css({
                transform: 'translateX(-200%)',
                MozTransform: 'translateX(-200%)',
                WebkitTransform: 'translateX(-200%)',
                msTransform: 'translateX(-200%)'
            })
        }
        else if(evt === 4) {
            $(".slide-track").css({
                transform: 'translateX(-300%)',
                MozTransform: 'translateX(-300%)',
                WebkitTransform: 'translateX(-300%)',
                msTransform: 'translateX(-300%)'
            })
        }
        self.setState({
            currentTab: evt
        })
        self.simpleDialog.show();
        // setTimeout(
        //     $(".slide-track").css("transition", "")
        // , 500)
    }

    handleDetails(name){
        switch(name){
            case "andrew":

        }
    }
    onClickFooter(){
        scrollify.next();
        var x = scrollify.current();
        console.log(x[0])
        console.log(x[0].class)

    }
    handleScroll(id){
        $(function(){
            $('#DWFullScreenPage1menu a').click(function () {
                $('#DWFullScreenPage1menu a').css('font-weight', 'normal');
                $(this).css('font-weight', 'bold');
            });
        });
        scrollify.move(id)
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <div>
                <div className="header">
                    <div className="row_51">
                        <div className="column_25">
                            <img src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/solutioniconwhite.png")} className="image11" />
                        </div>
                        <div className="column_26">
                            <div className="navigation">
                                <div id="DWFullScreenPage1menu_container" className="FM2_DWFullScreenPage1menu_container">
                                    <ul id="DWFullScreenPage1menu" className="FM2_DWFullScreenPage1menu">
                                        {/*<!-- version=2.0.217;name=DWFullScreenPage1menu;baseskin=skin06;colorscheme=dark_blue;type=horizontal; -->*/}
                                        <li><a onClick={this.handleScroll.bind(this, "#home")} data-menuanchor="home" data-classname="home-nav" >Home</a> </li>
                                        <li><a onClick={this.handleScroll.bind(this, "#platforms")} data-menuanchor="platforms" className="platforms-nav" >Our Platforms</a> </li>
                                        <li><a onClick={this.handleScroll.bind(this, "#whitepaper")} data-menuanchor="whitepaper" className="whitepaper-nav" >Whitepaper</a> </li>
                                        <li><a onClick={this.handleScroll.bind(this, "#sale")} data-menuanchor="ico" className="sale-nav" >Token Sale</a> </li>
                                        <li><a onClick={this.handleScroll.bind(this, "#team")} data-menuanchor="team" className="team-nav" >Team Members</a> </li>
                                    </ul>
                                </div>
                                <a className="FM2_mobile_button" id="FM2_DWFullScreenPage1menu_mobile_button"><span className="caption">Menu</span></a>
                            </div>
                        </div>
                        <div className="column_27"><a className="button-white" href="#">Join Token Sale</a> </div>
                    </div>
                </div>

                <div className="content">
                    <div className="page-content DWFullScreenPage_container" id="DWFullScreenPage1">
                        <div className="section row_30" data-tooltip="Home" data-section-name="home" data-arrow="#FFFFFF" data-id="home" data-anchor="home">
                            <div className="home-section container-hero">
                                <div className="sidebar_social2">
                                    <div className="sidebar_social_links2"><a href="#" className="facebook2"></a> <br/>
                                        <a href="#" className="twitter2"></a> <br/>
                                        <a href="#" className="slack2"></a> <br/>
                                        <a href="#" className="btc2 forcedState__hover"></a> <br/>
                                        <a href="#" className="steem2"></a>
                                    </div>
                                </div>
                                <h1 className="heading1">
                                    <span className="span12">
                                        <span>
                                            <ReactRotatingText items={['SOLUTION TOKEN']} />
                                        </span>
                                    </span>
                                    <br/>
                                    <br/>
                                    <span className="span13">
                                        <ReactRotatingText items={['A TOKEN FOR HUMANITY']} />
                                    </span>
                                </h1>

                                <div id="countdown_with_background_v1">
                                    <div className="myloader"></div>
                                    <ul className="fullscreen_background_list">
                                        <li>
                                            <img src="" alt="" width="1920" height="1200" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="countDown">
                                    <CountdownTimer endDate={moment('06/12/2018 12:00:00', 'DD/MM/YYYY hh:mm:ss')}/>
                                </div>
                            </div>
                        </div>

                        <div className="section row_58" data-section-name="platforms" data-tooltip="Our Platforms" data-arrow="#1d8f19" data-alternate-header="true" data-id="platforms" data-anchor="platforms" data-slider="true">
                            <div className="slide slide1"  data-id="platform" data-tooltip="Platforms" data-anchor="platform">
                                <div className="custom-post-content1"> <span className="client-name1">Platforms</span>
                                    <p>
                                        <span>Solution Token prides itself on the platforms it provides, these are the pieces that make a Solution.</span>
                                        <br/>
                                        The goal of Solution is to aid causes to help solve humanitarian issues and disasters around the world. Solution&#8217;s platform
                                        will be widely based around real world uses, with three out of the four concepts directly applicable to the real world.
                                        These three are the humanitarian program, water solutions, and interactive gaming. The only concept that does
                                        not directly interact with the physical world will be the Solution wallet.</p>
                                    <div className="column_46">
                                        <button onClick={this.handleDialog.bind(this, 1)}>
                                            <img className="image-field1" src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/Icon_Heart.png")}/>
                                        </button>
                                        <button onClick={this.handleDialog.bind(this, 2)}>
                                            <img className="image-field1" src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/Icon_Water.png")}/>
                                        </button>
                                        <button onClick={this.handleDialog.bind(this, 3)}>
                                            <img className="image-field1" src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/Icon_Gaming.png")}/>
                                        </button>
                                        <button onClick={this.handleDialog.bind(this, 4)}>
                                            <img className="image-field1" src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/Icon_Rewards.png")}/>
                                        </button>
                                    </div>
                                    <div className="testimonials-content-inner1">
                                        <span>
                                            <div className="testimonials-content-inner"></div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <SkyLight
                                hideOnOverlayClicked={true}
                                ref={ref => this.simpleDialog = ref}
                                title="My cool custon title"
                                // beforeOpen={this._executeBeforeModalOpen}
                            >
                                <div className="slide-div">
                                    {this.state.currentTab >1 && this.state.currentTab <=4 && <button onClick={this.handleSlide.bind(this, "prev")} className="slide-prev">
                                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    </button>}
                                    <div className="slide-track">
                                        <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian" data-anchor="humanitarian" id="human">
                                            <div className="custom-post-content1"><img className="image-field2" src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/Icon_Heart.png")} /><span className="client-name1"><span>Humanitity</span> Platform</span>
                                                <div className="testimonials-content-inner1">
                                            <span>
                                                <div className="testimonials-content-inner">
                                                    <p>
                                                        The solution humanitarian program is what solution believes will be the set standard for donations of
                                                        any sort in the future, which is for 100% of the donations to be going to theexact place of intention.
                                                        By building a donational module on a blockchain, it will allow people to make decentralised donations
                                                        without having to worry about cuts and admin fees from middle parties.
                                                    </p>
                                                </div>
                                            </span>
                                                </div>
                                            </div>
                                        </div><div className="slide slide3" data-id="water" data-tooltip="Water Solutions" data-anchor="water" id="water">
                                            <div className="custom-post-content1"><img className="image-field2" src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/Icon_Water.png")} /><span className="client-name1"><span>Water</span> Solutions</span>
                                                <div className="testimonials-content-inner1">
                                            <span>
                                                <div className="testimonials-content-inner">
                                                  <p>
                                                      Bringing Crypto to the real world for productivity. Breaking this barrier will help solutiongo to
                                                      new heights as well as bringing the world closer to mass adoption. Solution decided to create and
                                                      market solution bottles of water to stores world wide, why Solution believes this will be a success
                                                      is because of the benefits the consumer gets from purchasing a solution water bottle.
                                                  </p>
                                                </div>
                                            </span>
                                                </div>
                                            </div>
                                        </div><div className="slide slide4"  data-id="gaming" data-tooltip="Gaming Platform" data-anchor="gaming" id="game">
                                            <div className="custom-post-content1"><img className="image-field2" src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/Icon_Gaming.png")} /><span className="client-name1"><span>Gaming</span> Platform</span>
                                                <div className="testimonials-content-inner1">
                                            <span>
                                                <div className="testimonials-content-inner">
                                                  <p>
                                                      This peer to peer platform will allow users to have a fun and interactive way to enjoy a game within the crypto
                                                      realm. This game will allow you to level up and constantly grow and edit your character while putting them into
                                                      events and competitions which willresult in a prize. Since it is a skilled game it will allow users to make an
                                                      active incomeform work rate and use of the game.
                                                  </p>
                                                </div>
                                            </span>
                                                </div>
                                            </div>
                                        </div><div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards" data-anchor="rewards" id="wallet">
                                            <div className="custom-post-content1"><img className="image-field2" src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/Icon_Rewards.png")} /><span className="client-name1"><span>Solution Wallet</span> &amp; Rewards</span>
                                                <div className="testimonials-content-inner1">
                                            <span>
                                                <div className="testimonials-content-inner">
                                                  <p>
                                                      The Rewards Wallet will allow the user to hold Solution Tokens and gain KEY tokens (KEY Tokens are a secondary
                                                      token with a decreasing supply that is capped) The user will be rewarded the tokens for holding solution tokens
                                                      which helps the value stability.
                                                  </p>
                                                </div>
                                            </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.currentTab >=1 && this.state.currentTab <4 && <button onClick={this.handleSlide.bind(this, "next")} className="slide-next">
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </button>}
                                </div>
                            </SkyLight>
                        </div>

                        <div className="section row_31" data-tooltip="Whitepaper" data-section-name="whitepaper" data-alternate-header="true" data-arrow="#1d8f19" data-id="whitepaper" data-anchor="whitepaper">
                            <div className="full_row_4 full_row_type_fs_t2 row_35">
                                <div className="gridContainer row_36">
                                    <div className="row_37">
                                        <div className="column_28"><img className="image5" src={require("../js/includes/DWFullScreenPage/DWFullScreenPage1/Solution360.gif" )}/></div>
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


                        <div className="section row_38" data-section-name="sale" data-tooltip="Token Sale" data-arrow="#ffffff" data-id="sale" data-anchor="sale">
                            <div className="full_row_6 full_row_type_fs_t3 row_41">
                                <div className="gridContainer row_42">
                                    <div className="row_43">
                                        <div className="column_33">
                                            <h3 className="heading1">Token Sale</h3>
                                            <p className="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <a className="button" href="#">Join Token Sale</a></div>
                                        <div className="column_34"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="section row_39" data-section-name="team" data-tooltip="Team Members" data-alternate-header="true" data-arrow="#1d8f19" data-id="team" data-anchor="team">
                            <div className="full_row_8 full_row_type_fs_t4 row_44">
                                <div className="gridContainer row_47">
                                    <div className="row_48">
                                        <div className="column_36">
                                            <h3>Team Members</h3>
                                            <p>Experience has shown that our best customers are ones who have as much respect for our time as we have for theirs.</p>
                                            <a className="button" href="#">Learn more</a></div>
                                    </div>
                                    <div>
                                        <Slider {...settings}>

                                            <div className="two-img-container">
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/ingram.jpg")}/>
                                                    <div className="info">
                                                        <p className="name">Andrew Ingram</p>
                                                        <p className="designation">CEO & Founder</p>
                                                        <button onClick={this.handleDetails.bind(this, "andrew")}>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/ali_Zain.jpg")}/>
                                                    <div className="info">
                                                        <p className="name">Ali Zain</p>
                                                        <p className="designation">Head Developer</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="two-img-container">
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/sample.png")}/>
                                                    <div className="info">
                                                        <p className="name">Metthew Wolff</p>
                                                        <p className="designation">COO</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/Dean_James.jpg")}/>
                                                    <div className="info">
                                                        <p className="name">Dean James</p>
                                                        <p className="designation">Marketing Director</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="two-img-container">
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/Michael.png")}/>
                                                    <div className="info">
                                                        <p className="name">Michael Gogarty</p>
                                                        <p className="designation">Communications Manager</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/mahar_husnain.jpg")}/>
                                                    <div className="info">
                                                        <p className="name">Mahar Husnain</p>
                                                        <p className="designation">Lead Developer</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="two-img-container">
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/david.png")}/>
                                                    <div className="info">
                                                        <p className="name">David Casciato</p>
                                                        <p className="designation">Humanitarian Director</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/sample.png")}/>
                                                    <div className="info">
                                                        <p className="name">Sean Gallagher</p>
                                                        <p className="designation">Chief Editor</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="two-img-container">
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/sample.png")}/>
                                                    <div className="info">
                                                        <p className="name">Eli Karadsheh</p>
                                                        <p className="designation">Social Media Manager</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/sample.png")}/>
                                                    <div className="info">
                                                        <p className="name">James Fawke</p>
                                                        <p className="designation">Chief Editor</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="two-img-container">
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/sample.png")}/>
                                                    <div className="info">
                                                        <p className="name">Vinnie Pisaniello</p>
                                                        <p className="designation">Lead Graphic Designer</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/Arik.jpg")}/>
                                                    <div className="info">
                                                        <p className="name">Arik Balolong</p>
                                                        <p className="designation">Web & Graphic Designer</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="two-img-container">
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/sample.png")}/>
                                                    <div className="info">
                                                        <p className="name">Daniel Faraj</p>
                                                        <p className="designation">Digital Media Manager</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/sample.png")}/>
                                                    <div className="info">
                                                        <p className="name">Joshua Julia</p>
                                                        <p className="designation">Public Relations America</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="two-img-container">
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/Damian.png")}/>
                                                    <div className="info">
                                                        <p className="name">Damian Godlewski</p>
                                                        <p className="designation">Public Relations Europe</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/sample.png")}/>
                                                    <div className="info">
                                                        <p className="name">Kamil Helou</p>
                                                        <p className="designation">Finance Operator</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="two-img-container">
                                                <div className="single-img-container">
                                                    <img src={require("../images/team/SOLV PROFILES 005.jpg")}/>
                                                    <div className="info">
                                                        <p className="name">Joshua Legaspi</p>
                                                        <p className="designation">Graphics Designer</p>
                                                        <button>
                                                            More Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer"></div>
                <div className="fp-arrow-c" onClick={this.onClickFooter.bind(this)}> <span className="fp-arrow"> <i className="fa fa-chevron-down arrow" aria-hidden="true"></i></span> </div>
                
            </div>
        )
    }
}


export default Home;