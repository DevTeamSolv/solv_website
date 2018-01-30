import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import axios from "axios";
import numeral from "numeral";
import $ from "jquery";

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
        var x = 100-evt;
        $("#eth1").attr('offset', x + '%')
        $("#eth2").attr('offset', x + '%')
        // console.log($("#eth1").attr('offset'))
        this.setState({
            numberofEth: evt
        })
        console.log(this.state.ethPrice)
    }
    render() {
        return (
            <div className="section row_38" data-section-name="sale" data-tooltip="Token Sale" data-arrow="#ffffff" data-id="sale" data-anchor="sale">
                <div className="full_row_6 full_row_type_fs_t3 row_41">
                    <h1>Token Sale</h1>
                    <div className="inner">
                        <div className="data">
                            <p className="presale-heading">Pre Sale Coming Soon</p>
                            <div className="inner-data">
                                <p>1 <span className="solv">SOLV</span> = $0.10</p>
                                <p>1 <span className="eth">ETH</span> = ${this.state.ethPrice}</p>
                                <hr />
                                <p>{this.state.numberofEth} <span className="eth">ETH</span> = {numeral(this.state.numberofEth * (this.state.ethPrice / 0.1)).format('0.000a')} <span className="solv">SOLV</span></p>
                            </div>
                            <a className="button" href="#">Join The Solution</a>
                        </div>
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
                        <div>
                            <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 785 1260">
                                <defs>
                                    <linearGradient id="half_grad" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(90)">
                                        <stop id="eth1" offset="50%" stopColor="transparent"/>
                                        <stop id="eth2"  offset="50%" stopColor="#1b251a" stopOpacity="1" />
                                    </linearGradient>
                                </defs>
                                <path className="eth" d="M1041.51,120h2.66V577.333L675,738.667v-4c11.786-10,24.23-41.372,33.319-56,28.77-46.305,55.12-94.287,83.964-141.334,56.573-92.273,109.669-187.1,166.6-280C986.363,212.473,1017.44,167.282,1041.51,120Zm25.32,0c10.62,5.592,23.5,37.825,30.65,49.333,24.44,39.351,47.2,80.118,71.97,120,92.29,148.593,182.71,299.8,271.89,450.667h-4L1066.83,577.333V120Zm-22.66,482.667V993.333h-2.66c-6.99-6.727-16.79-9.359-25.33-14.666-22.9-14.236-47.091-26.884-70.633-41.334-58.687-36.02-119.941-70.606-178.591-106.666-25.745-15.829-52.163-29.887-77.3-45.334C681.439,780.285,666.532,777.41,663,768c9.258-1.833,16.514-7.349,23.99-10.667,24.87-11.035,49.353-21.445,73.3-32C826.826,696.011,892.227,669.218,958.874,640q31.23-13.69,63.976-28C1029.58,609.058,1035.46,604.06,1044.17,602.667Zm22.66,0c13,2.875,24.72,11.025,35.98,16,29.74,13.136,59.22,25.962,87.97,38.666,86.07,38.048,172.85,71.885,257.22,112a3.826,3.826,0,0,1-1.33,1.334c-11.1,10.65-27.94,15.708-41.32,24-31.26,19.367-64.07,36.424-95.96,56-53.65,32.931-109.66,62.723-163.93,96-25.47,15.622-51.28,33.365-78.63,46.666V602.667ZM1044.17,1380h-5.33Q851.606,1114.7,664.333,849.333h4c7.065,6.793,16.627,9.327,25.323,14.667,22.97,14.105,47.079,26.872,70.636,41.333C822.961,941.35,884.264,975.938,942.881,1012c23.544,14.48,47.694,27.23,70.639,41.33,4.61,2.84,28.9,13.49,30.65,16V1380Zm22.66,0V1069.33c12.05-5.29,22.65-13.41,33.32-20,25.68-15.85,52.2-29.86,77.3-45.33,56.64-34.91,115.21-63.878,171.93-98.667,22.95-14.082,47.06-26.884,70.63-41.333,8.03-4.918,15.05-11.874,25.32-14.667v1.334c-10.78,10.922-17.71,25.935-26.65,38.666-21.13,30.084-42.59,60.161-63.97,90.667-62.5,89.17-127.91,177.62-190.59,266.67-23.63,33.57-47.29,66.82-70.64,100C1086.86,1356.08,1079.4,1377.4,1066.83,1380Z" transform="translate(-663 -120)" fill="url(#half_grad)" strokeWidth="2" stroke="#1b251a" />
                            </svg>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Sale;