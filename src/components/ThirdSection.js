import React from 'react';
import $ from "jquery";

class ThirdSection extends React.Component {
    readMore(evt){
        $('.' + evt + ' span').toggleClass('hide-text');
        var R = $('.' + evt + ' a').html();
        console.log(R)
        if (R === "... read more") {
            $('.' + evt + ' a').text(" read less");
        }
        else {
            $('.' + evt + ' a').text("... read more");
        }
    }
    render() {
        return (
                <div className="third-section section">
                    <h2>What Makes US Unique?</h2>
                    <div className="inner-container clearfix">
                        <div className="box b1">
                            <img src={require("../images/Health-Icon.png")}/>
                            <h3>100% DONATIONS</h3>
                            <p>
                                We want to revolutionise the set standard in donations. Here at solution we want to take out all admin fees and cost so that whatever you want to donate will be completely transparent and cost free<span className="hide-text"> of charges, in simple words you know where your money goes, how iyts spent and mostly it's not tampered with!</span><a onClick={this.readMore.bind(this, "b1")}>... read more</a>
                            </p>
                        </div>
                        <div className="box b2">
                            <img src={require("../images/SE_facts_blue_Earth_Europe-Africa.png")}/>
                            <h3>REAL WORLD IMPLEMENTATION</h3>
                            <p>
                                Our platforms is based of real world problems to provide a real world solution, as exciting as it seems with the new technology in the world and advancements, there are still issues in the world without<span className="hide-text"> any resolutions. Therefore Solution Token has decided to tackle these problems through long term solutions instead of temporary solutions. Our technology will adapt as we move forward into moving the world forward.</span><a onClick={this.readMore.bind(this, "b2")}>... read more</a>
                            </p>
                        </div>
                        <div className="box b3">
                            <img src={require("../images/SE_value_prop_money.png")}/>
                            <h3>FIAT BACKING</h3>
                            <p>
                                As Cryptocurrencies advances closer to mass adoption, it is not yet the set standard currency so we have decided that we will not purely base the company on crypto but to use both Fiat and crypto in correlation<span className="hide-text"> with each other. By doing this it will help the company deal with potential issues regarding in finances in a smooth way without many hazards. Since we are doing real world implementation off the get go, it makes sense for us to have a fiat income stream to fund resources of the company to make productivity and work. Explanation of how we make fiat income streams you can find below in profitability.</span><a onClick={this.readMore.bind(this, "b3")}>... read more</a>
                            </p>
                        </div>
                        <div className="box b4">
                            <img src={require("../images/about.jpg")}/>
                            <h3>EVERYONE'S A WINNER</h3>
                            <p>
                                Everyone’s a winner baby, that’s alright! Let's think for a second, what's the best way to get everyone involved while the people that are involved is actually benefiting others without any effort at all.<span className="hide-text"> Well what we have found from our team is that by having multiple platforms it allows us to create a cross platform experience. By using one platform of solution token it allows someone else to indirectly benefit from this use while being involved on another platform.</span><a onClick={this.readMore.bind(this, "b4")}>... read more</a>
                            </p>
                        </div>
                        <div className="box b5">
                            <img src={require("../images/Thumbs up icon - 500px.png")}/>
                            <h3>GIVING BACK</h3>
                            <p>
                                Let's focus on giving back, our main goal is to help those in need. For the support and use of our platforms this will help us create solutions. Putting this into example, for everytime someone gets involved with our<span className="hide-text"> Water Solutions platform, such as buying a simple water bottle, it allows us to not just gain fiat backing but help fund, wells and clean water sources to places without sustainable water. We will be doing this on our own good will, without the aid of operation humanity.</span><a onClick={this.readMore.bind(this, "b5")}>... read more</a>
                            </p>
                        </div>
                        <div className="box b6">
                            <img src={require("../images/download.png")}/>
                            <h3>MERCHANDISE</h3>
                            <p>
                                We will be opening up a merchandise store for you Solution masterminds #SOLVCREW! We will be bringing out from clothes, stickers, posters, bags you name it. Fun fact little thing that we have with our merchandise and<span className="hide-text"> brand products, is they will all have a unique QR code which you will be able to scan for fun prizes and even Tokens if you are lucky! These prizes can be used and redeemed to our other platforms such as Street QRed or even SOLV Wallet. From the public's support this will be one form of fiat backing for the company.</span><a onClick={this.readMore.bind(this, "b6")}>... read more</a>
                            </p>
                        </div>
                        <div className="box b7">
                            <img src={require("../images/depositphotos_145492071-stock-illustration-atom-sign-illustration-vector-green.jpg")}/>
                            <h3>GLOBAL FUTURE BENEFIT</h3>
                            <p>
                                Moving to the future with new technology and innovators that are consistently evolving the world everyday, solution token wants to not only be among great inventors and revolutions but a stand out. Our goal is to not<span className="hide-text"> only break the barriers of a real world company or a crypto company but as a Brand. Solution as a brand will have more of an impact on the world than just being a crypto company.</span><a onClick={this.readMore.bind(this, "b7")}>... read more</a>
                            </p>
                        </div>
                        <div className="box b8">
                            <img src={require("../images/971de19592654f9b2ad89c8a7bb35364.png")}/>
                            <h3>COMPANY PROFITABILITY</h3>
                            <p>
                                Having 100% donations is great but how long can the company sustain itself without a positive income stream... well not that long. Solution token have adapted a process in which they can generate 100% donations without taking admin fees!<span className="hide-text"> With multiple platforms of the company we are able to create a positive income stream in both crypto and fiat in which it can help the life of the company without issues of finances running out.</span><a onClick={this.readMore.bind(this, "b8")}>... read more</a>
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ThirdSection;