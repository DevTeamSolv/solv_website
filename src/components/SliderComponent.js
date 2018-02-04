import React, {Component} from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SliderComponent extends React.Component {
    render() {
        var settings1 = {
            infinite: true,
            autoplaySpeed: 3000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
        };
        var settings2 = {
            infinite: true,
            autoplaySpeed: 3000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
        };
        var settings3 = {
            infinite: true,
            autoplaySpeed: 3000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
        };
        var settings4 = {
            infinite: true,
            autoplaySpeed: 3000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 3,
        };
        return (
            <div>
                {
                    this.props.sliderNumber === '1' &&
                    <Slider {...settings1}>
                        <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                             data-anchor="humanitarian" id="human">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Heart-Logo-Render.gif")}/><span
                                className="client-name1"><span>Operation</span> Humanity</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                        <p>
                                                            Operation Humanity is what Solution believes will set the standard for all donations of any sort in the future - for 100% of donated funds to go directly to their intended recipient. Building our donation module on a blockchain will allow people to make decentralised donations without having to worry about cuts and administrative fees from third parties.
                                                        </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide3" data-id="water" data-tooltip="Water Solutions" data-anchor="water"
                             id="water">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Water-Logo-Render.gif")}/><span
                                className="client-name1"><span>Water</span> Solutions</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          Bringing crypto to the real world - breaking this barrier will help Solution soar to new heights, as well as bring the world closer to mass adoption. Solution has decided to create and market Solution bottles of water to stores worldwide. The benefits that consumers will get from purchasing a Solution water bottle will give this program a sure shot at success.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide4" data-id="gaming" data-tooltip="Gaming Platform"
                             data-anchor="gaming" id="game">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Gaming-logo-Render.gif")}/><span
                                className="client-name1"><span>Street</span> QRed</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          Street QRed will bring users a fun and interactive game within the cryptoverse. The peer to peer, skill-based game will allow players to level up, constantly growing and upgrading their character by participating in events and competitions for rewards. Players will also be able to generate an active income from their in-game winnings.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                             data-anchor="rewards" id="wallet">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Reward-logo-Render.gif")}/><span
                                className="client-name1"><span>SOLV Wallet</span></span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          The SOLV Wallet will allow the user to hold Solution Tokens and generate KEY tokens - a secondary token with a capped, decreasing supply - through staking. The user will be rewarded KEY tokens for holding Solution Tokens, which will help stabilize Solution Token’s value.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                }
                {
                    this.props.sliderNumber === '2' &&
                    <Slider {...settings2}>
                        <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                             data-anchor="humanitarian" id="human">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Heart-Logo-Render.gif")}/><span
                                className="client-name1"><span>Operation</span> Humanity</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                        <p>
                                                            Operation Humanity is what Solution believes will set the standard for all donations of any sort in the future - for 100% of donated funds to go directly to their intended recipient. Building our donation module on a blockchain will allow people to make decentralised donations without having to worry about cuts and administrative fees from third parties.
                                                        </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide3" data-id="water" data-tooltip="Water Solutions" data-anchor="water"
                             id="water">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Water-Logo-Render.gif")}/><span
                                className="client-name1"><span>Water</span> Solutions</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          Bringing crypto to the real world - breaking this barrier will help Solution soar to new heights, as well as bring the world closer to mass adoption. Solution has decided to create and market Solution bottles of water to stores worldwide. The benefits that consumers will get from purchasing a Solution water bottle will give this program a sure shot at success.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide4" data-id="gaming" data-tooltip="Gaming Platform"
                             data-anchor="gaming" id="game">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Gaming-logo-Render.gif")}/><span
                                className="client-name1"><span>Street</span> QRed</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          Street QRed will bring users a fun and interactive game within the cryptoverse. The peer to peer, skill-based game will allow players to level up, constantly growing and upgrading their character by participating in events and competitions for rewards. Players will also be able to generate an active income from their in-game winnings.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                             data-anchor="rewards" id="wallet">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Reward-logo-Render.gif")}/><span
                                className="client-name1"><span>SOLV Wallet</span></span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          The SOLV Wallet will allow the user to hold Solution Tokens and generate KEY tokens - a secondary token with a capped, decreasing supply - through staking. The user will be rewarded KEY tokens for holding Solution Tokens, which will help stabilize Solution Token’s value.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                }
                {
                    this.props.sliderNumber === '3' &&
                    <Slider {...settings3}>
                        <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                             data-anchor="humanitarian" id="human">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Heart-Logo-Render.gif")}/><span
                                className="client-name1"><span>Operation</span> Humanity</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                        <p>
                                                            Operation Humanity is what Solution believes will set the standard for all donations of any sort in the future - for 100% of donated funds to go directly to their intended recipient. Building our donation module on a blockchain will allow people to make decentralised donations without having to worry about cuts and administrative fees from third parties.
                                                        </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide3" data-id="water" data-tooltip="Water Solutions" data-anchor="water"
                             id="water">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Water-Logo-Render.gif")}/><span
                                className="client-name1"><span>Water</span> Solutions</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          Bringing crypto to the real world - breaking this barrier will help Solution soar to new heights, as well as bring the world closer to mass adoption. Solution has decided to create and market Solution bottles of water to stores worldwide. The benefits that consumers will get from purchasing a Solution water bottle will give this program a sure shot at success.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide4" data-id="gaming" data-tooltip="Gaming Platform"
                             data-anchor="gaming" id="game">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Gaming-logo-Render.gif")}/><span
                                className="client-name1"><span>Street</span> QRed</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          Street QRed will bring users a fun and interactive game within the cryptoverse. The peer to peer, skill-based game will allow players to level up, constantly growing and upgrading their character by participating in events and competitions for rewards. Players will also be able to generate an active income from their in-game winnings.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                             data-anchor="rewards" id="wallet">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Reward-logo-Render.gif")}/><span
                                className="client-name1"><span>SOLV Wallet</span></span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          The SOLV Wallet will allow the user to hold Solution Tokens and generate KEY tokens - a secondary token with a capped, decreasing supply - through staking. The user will be rewarded KEY tokens for holding Solution Tokens, which will help stabilize Solution Token’s value.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                }
                {
                    this.props.sliderNumber === '4' &&
                    <Slider {...settings4}>
                        <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                             data-anchor="humanitarian" id="human">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Heart-Logo-Render.gif")}/><span
                                className="client-name1"><span>Operation</span> Humanity</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                        <p>
                                                            Operation Humanity is what Solution believes will set the standard for all donations of any sort in the future - for 100% of donated funds to go directly to their intended recipient. Building our donation module on a blockchain will allow people to make decentralised donations without having to worry about cuts and administrative fees from third parties.
                                                        </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide3" data-id="water" data-tooltip="Water Solutions" data-anchor="water"
                             id="water">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Water-Logo-Render.gif")}/><span
                                className="client-name1"><span>Water</span> Solutions</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          Bringing crypto to the real world - breaking this barrier will help Solution soar to new heights, as well as bring the world closer to mass adoption. Solution has decided to create and market Solution bottles of water to stores worldwide. The benefits that consumers will get from purchasing a Solution water bottle will give this program a sure shot at success.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide4" data-id="gaming" data-tooltip="Gaming Platform"
                             data-anchor="gaming" id="game">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Gaming-logo-Render.gif")}/><span
                                className="client-name1"><span>Street</span> QRed</span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          Street QRed will bring users a fun and interactive game within the cryptoverse. The peer to peer, skill-based game will allow players to level up, constantly growing and upgrading their character by participating in events and competitions for rewards. Players will also be able to generate an active income from their in-game winnings.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                             data-anchor="rewards" id="wallet">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Reward-logo-Render.gif")}/><span
                                className="client-name1"><span>SOLV Wallet</span></span>
                                <div className="testimonials-content-inner1">
                                                <span>
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          The SOLV Wallet will allow the user to hold Solution Tokens and generate KEY tokens - a secondary token with a capped, decreasing supply - through staking. The user will be rewarded KEY tokens for holding Solution Tokens, which will help stabilize Solution Token’s value.
                                                      </p>
                                                    </div>
                                                </span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                }
            </div>
        )
    }
}


export default SliderComponent;