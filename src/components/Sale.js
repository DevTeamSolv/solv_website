import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import axios from "axios";
import numeral from "numeral";

class Sale extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numberofEth: 65,
            ethPrice: 0,
            numberSolv: 0,
        }
    }
    componentDidMount(){
        this.getEthPrice();
    }
    getEthPrice(){
        var self = this;
        axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/')
            .then(function (response) {
                console.log(response.data[0].price_usd);
                self.setState({
                    ethPrice: parseFloat(response.data[0].price_usd)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(this.state.ethPrice)
    }
    onChangeValue(evt){
        this.setState({
            numberofEth: evt
        })
        console.log(this.state.ethPrice)
    }
    render() {
        return (
            <div className="section row_38" data-section-name="sale" data-tooltip="Token Sale" data-arrow="#ffffff" data-id="sale" data-anchor="sale">
                <div className="full_row_6 full_row_type_fs_t3 row_41">
                    {/*<div className="gridContainer row_42">*/}
                        {/*<div className="row_43">*/}
                            {/*<div className="column_33">*/}
                                {/*<h3 className="heading1">Token Sale</h3>*/}
                                {/*<p className="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>*/}
                                {/*<a className="button" href="#">Join Token Sale</a></div>*/}
                            {/*<div className="column_34"></div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <h1>Token Sale</h1>
                    <div className="inner">
                        <div className="my-rangeslider">
                            <Slider
                                orientation="vertical"
                                value={this.state.numberofEth}
                                onChange={this.onChangeValue.bind(this)}
                                min={1}
                                max={100}
                                step={1}
                            />
                        </div>
                        <div className="data">
                            <div>
                                {/*<svg enableBackground="new 0 0 226.777 226.777" height="226.777px" id="Layer_1" version="1.1" viewBox="0 0 226.777 226.777" width="226.777px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><polygon fill="#231F20" points="112.553,157 112.553,86.977 44.158,116.937  "/><polygon fill="#231F20" points="112.553,82.163 112.553,-0.056 46.362,111.156  "/><polygon fill="#231F20" points="116.962,-0.09 116.962,82.163 184.083,111.566  "/><polygon fill="#231F20" points="116.962,86.977 116.962,157.002 185.405,116.957  "/><polygon fill="#231F20" points="112.553,227.406 112.553,171.085 44.618,131.31  "/><polygon fill="#231F20" points="116.962,227.406 184.897,131.31 116.962,171.085  "/></g></svg>*/}
                            </div>
                            <p className="presale-heading">Pre Sale Coming Soon</p>
                            <div className="inner-data">
                                <p>1 SOLV = $0.10</p>
                                <p>1 ETH = ${this.state.ethPrice}</p>
                                <p>{this.state.numberofEth} ETH = {numeral(this.state.numberofEth * (this.state.ethPrice / 0.1)).format('0.000a')} SOLV</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Sale;