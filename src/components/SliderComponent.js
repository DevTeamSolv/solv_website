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
                                className="client-name1"><span>Humanitity</span> Platform</span>
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
                                                          Bringing Crypto to the real world for productivity. Breaking this barrier will help solutiongo to
                                                          new heights as well as bringing the world closer to mass adoption. Solution decided to create and
                                                          market solution bottles of water to stores world wide, why Solution believes this will be a success
                                                          is because of the benefits the consumer gets from purchasing a solution water bottle.
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
                                className="client-name1"><span>Gaming</span> Platform</span>
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
                        </div>
                        <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                             data-anchor="rewards" id="wallet">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Reward-logo-Render.gif")}/><span
                                className="client-name1"><span>Solution Wallet</span> &amp; Rewards</span>
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
                    </Slider>
                }
                {
                    this.props.sliderNumber === '2' &&
                    <Slider {...settings2}>
                        <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                             data-anchor="humanitarian" id="human">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Heart-Logo-Render.gif")}/><span
                                className="client-name1"><span>Humanitity</span> Platform</span>
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
                                                          Bringing Crypto to the real world for productivity. Breaking this barrier will help solutiongo to
                                                          new heights as well as bringing the world closer to mass adoption. Solution decided to create and
                                                          market solution bottles of water to stores world wide, why Solution believes this will be a success
                                                          is because of the benefits the consumer gets from purchasing a solution water bottle.
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
                                className="client-name1"><span>Gaming</span> Platform</span>
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
                        </div>
                        <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                             data-anchor="rewards" id="wallet">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Reward-logo-Render.gif")}/><span
                                className="client-name1"><span>Solution Wallet</span> &amp; Rewards</span>
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
                    </Slider>
                }
                {
                    this.props.sliderNumber === '3' &&
                    <Slider {...settings3}>
                        <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                             data-anchor="humanitarian" id="human">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Heart-Logo-Render.gif")}/><span
                                className="client-name1"><span>Humanitity</span> Platform</span>
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
                                                          Bringing Crypto to the real world for productivity. Breaking this barrier will help solutiongo to
                                                          new heights as well as bringing the world closer to mass adoption. Solution decided to create and
                                                          market solution bottles of water to stores world wide, why Solution believes this will be a success
                                                          is because of the benefits the consumer gets from purchasing a solution water bottle.
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
                                className="client-name1"><span>Gaming</span> Platform</span>
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
                        </div>
                        <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                             data-anchor="rewards" id="wallet">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Reward-logo-Render.gif")}/><span
                                className="client-name1"><span>Solution Wallet</span> &amp; Rewards</span>
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
                    </Slider>
                }
                {
                    this.props.sliderNumber === '4' &&
                    <Slider {...settings4}>
                        <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                             data-anchor="humanitarian" id="human">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Heart-Logo-Render.gif")}/><span
                                className="client-name1"><span>Humanitity</span> Platform</span>
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
                                                          Bringing Crypto to the real world for productivity. Breaking this barrier will help solutiongo to
                                                          new heights as well as bringing the world closer to mass adoption. Solution decided to create and
                                                          market solution bottles of water to stores world wide, why Solution believes this will be a success
                                                          is because of the benefits the consumer gets from purchasing a solution water bottle.
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
                                className="client-name1"><span>Gaming</span> Platform</span>
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
                        </div>
                        <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                             data-anchor="rewards" id="wallet">
                            <div className="custom-post-content1"><img className="image-field2"
                                                                       src={require("../images/gifs/Reward-logo-Render.gif")}/><span
                                className="client-name1"><span>Solution Wallet</span> &amp; Rewards</span>
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
                    </Slider>
                }
            </div>
        )
    }
}


export default SliderComponent;