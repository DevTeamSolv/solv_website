import React from 'react';
import SkyLight from 'react-skylight';

class TeamDetail extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.member === "andrew" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/ingram.jpg")}/>
                        </div>
                        <p className="name">Andrew Ingram</p>
                        <p className="designation">CEO & Founder</p>
                        <p className="description">Andrew believes that the world needed certain changes in society to help aid those in need, with the concept of Solution, it will provide many opportunities for everyone. Andrew will also lead the project for future successes.</p>
                    </div>
                }
                {
                    this.props.member === "zain" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/ali_Zain.jpg")}/>
                        </div>
                        <p className="name">Ali Zain</p>
                        <p className="designation">Head Developer</p>
                        <p className="description">Full-stack developer in the Ethereum Blockchain, who built the smart contracts for the Token as well as on going assistance for solution platforms.</p>
                    </div>
                }
                {
                    this.props.member === "matthew" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/sample.png")}/>
                        </div>
                        <p className="name">Andrew Ingram</p>
                        <p className="designation">COO</p>
                        <p className="description">(vision and goal) In charge of the operations and overview management of the company, while setting goals and targets for the company to achieve the best possible results.</p>
                    </div>
                }
                {
                    this.props.member === "dean" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/Dean_James.jpg")}/>
                        </div>
                        <p className="name">Dean James</p>
                        <p className="designation">Marketing Director</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto</p>
                    </div>
                }
                {
                    this.props.member === "mike" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/Michael.png")}/>
                        </div>
                        <p className="name">Michael Gogarty</p>
                        <p className="designation">Communications Manager</p>
                        <p className="description">(vision and goal) deals with company partnerships and international business operations.</p>
                    </div>
                }
                {
                    this.props.member === "mahar" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/mahar_husnain.jpg")}/>
                        </div>
                        <p className="name">Mahar Husnain</p>
                        <p className="designation">Lead Developer</p>
                        <p className="description">Mahar Husnain is a full-stack web developer who built web platforms.</p>
                    </div>
                }
                {
                    this.props.member === "david" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/david.png")}/>
                        </div>
                        <p className="name">David Casciato</p>
                        <p className="designation">Humanitarian Director</p>
                        <p className="description">Responsible for alleviating suffering, assistance and action with the purpose of saving lives and protecting human dignity.</p>
                    </div>
                }
                {
                    this.props.member === "hassan" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/hasan-small.jpg")}/>
                        </div>
                        <p className="name">Hassan</p>
                        <p className="designation">ReactJS & FrontEnd Developer</p>
                        <p className="description">Hassan is lead FrontEnd and ReactJS developer and Blockchain Enthusiast. Hassan has worked previously on different ICOs and non-Blockchain platforms.</p>
                    </div>
                }
                {
                    this.props.member === "sean" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/sample.png")}/>
                        </div>
                        <p className="name">Sean Gallagher</p>
                        <p className="designation">Chief Editor</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto.</p>
                    </div>
                }
                {
                    this.props.member === "eli" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/sample.png")}/>
                        </div>
                        <p className="name">Eli Karadsheh</p>
                        <p className="designation">Social Media Manager</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto.</p>
                    </div>
                }
                {
                    this.props.member === "james" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/James fawk.jpg")}/>
                        </div>
                        <p className="name">James Fawke</p>
                        <p className="designation">Public Relation Australia</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto.</p>
                    </div>
                }
                {
                    this.props.member === "arik" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/Arik.jpg")}/>
                        </div>
                        <p className="name">Arik Balolong</p>
                        <p className="designation">Web & Graphic Designer</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto.</p>
                    </div>
                }
                {
                    this.props.member === "daniel" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/SOLV PROFILES 005.jpg")}/>
                        </div>
                        <p className="name">Daniel Faraj</p>
                        <p className="designation">Digital Media Manager</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto.</p>
                    </div>
                }
                {
                    this.props.member === "joshua" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/sample.png")}/>
                        </div>
                        <p className="name">Joshua Julia</p>
                        <p className="designation">Public Relations America</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto.</p>
                    </div>
                }
                {
                    this.props.member === "damian" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/Damian.png")}/>
                        </div>
                        <p className="name">Damian Godlewski</p>
                        <p className="designation">Public Relations Europe</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto.</p>
                    </div>
                }
                {
                    this.props.member === "kamil" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/sample.png")}/>
                        </div>
                        <p className="name">Kamil Helou</p>
                        <p className="designation">Finance Operator</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto.</p>
                    </div>
                }
                {
                    this.props.member === "legaspi" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/sample.png")}/>
                        </div>
                        <p className="name">Joshua Legaspi</p>
                        <p className="designation">Lead Graphics</p>
                        <p className="description">Dev is a full-stack developer and cryptocurrency enthusiast who has built both platforms, both crypto and non-crypto.</p>
                    </div>
                }
            </div>
        )
    }
}

export default TeamDetail;