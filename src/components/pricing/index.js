import React, { Component } from 'react'
import MyButton from '../utils/MyButton'
import Zoom from 'react-reveal/Zoom'

export default class Pricing extends Component {

    state={
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        buttoncolor:['#ffc15e','#00bd56','#c40b13'],
        delay:[500,200,500]
    }

    showBoxes=()=>(
            this.state.prices.map((box,i)=>(
                      <Zoom key={i} bottom delay={this.state.delay[i]}>
                    <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                   <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>

                    <div className="pricing_buttons">
                        <MyButton 
                        text="Purchase"
                        bck={this.state.buttoncolor[i]}
                        color="#ffffff"
                        link={this.state.linkto[i]}  />
                    </div>
                   </div>
                    </div>
                    </Zoom>

            )
            )

    );


  render() {
    return (
        <div className="bck_black">
        <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
            <div className="pricing_wrapper">
                    {this.showBoxes()}
            </div>
        </div>
            
        </div>
    )
  }
}
