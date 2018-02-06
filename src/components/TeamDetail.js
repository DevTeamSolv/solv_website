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
                            <img src={require("../images/team/size-/ingram.jpg")}/>
                        </div>
                        <p className="name">Andrew Ingram</p>
                        <p className="designation">CEO & Founder</p>
                        <p className="description">Andrew saw that our world needed certain changes in society to help aid those in need, and founded Solution with the aim of providing new opportunities for people around the world. His biggest passion and wish is to benefit humanity enough to make an impact that is felt globally, and as the mastermind of Solution, he is determined to lead the company to achieve and maintain this goal.</p>
                    </div>
                }
                {
                    this.props.member === "zain" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/ali_Zain.jpg")}/>
                        </div>
                        <p className="name">Ali Zain</p>
                        <p className="designation">Head Developer</p>
                        <p className="description">Ali has more than a decade of full-stack web and application development experience. His expertise in blockchain & cryptocurrency, and thorough familiarity with Ethereum Blockchain development, is a boon to the technical side of Solution.
                        </p>
                    </div>
                }
                {
                    this.props.member === "david" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/David.jpg")}/>
                        </div>
                        <p className="name">David Casciato</p>
                        <p className="designation">Humanitarian Director</p>
                        <p className="description">David is responsible for building the humanitarian platform by reaching out and maintaining communications with charities and setting up arrangements with existing organizations using effective program management. David will also seek out potential projects to benefit individual groups or areas, such as providing relief after natural disasters or setting up green energy in areas without electricity, shelter, and water readily available.</p>
                    </div>
                }
                {
                    this.props.member === "matthew" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/matt.png")}/>
                        </div>
                        <p className="name">Matthew Wolff</p>
                        <p className="designation">COO</p>
                        <p className="description">Matthew is in charge of general management of Solution and its operations. His primary responsibility is to set goals and targets for the company and delegate tasks to team members to ensure optimal performance.</p>
                    </div>
                }
                {
                    this.props.member === "mike" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/Micheal.png")}/>
                        </div>
                        <p className="name">Michael Gogarty</p>
                        <p className="designation">Communications Manager</p>
                        <p className="description">Responsible for handling internal and external relations for Solution Token, including many positions involving community relations, corporate and integrated communication, media, & public affairs. Michael’s core fundamentals reflect onto Solution with pride and full transparency to the public.
                        </p>
                    </div>
                }
                {
                    this.props.member === "dean" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/Dean_James.jpg")}/>
                        </div>
                        <p className="name">Dean James</p>
                        <p className="designation">Marketing Director</p>
                        <p className="description">Dean is Solution Token’s marketing director. He is responsible for managing the company’s marketing campaigns across all media platforms, and spreading the word about Solution to potential users, investors, and beneficiaries. He will also mastermind advertising campaigns, as well as perfect and finalize those suggested by other team members.</p>
                    </div>
                }
                {
                    this.props.member === "mahar" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/mahar_husnain.jpg")}/>
                        </div>
                        <p className="name">Mahar Husnain</p>
                        <p className="designation">Lead Developer</p>
                        <p className="description">Mahar is a seasoned full-stack developer, and greatly contributed to building this website and backend smart contracts work. Besides hundreds of hours of coding and development for Solution Token’s server and smart contract testing, Mahar also had to work closely with other team members to combine text, graphics, and visual ideas into one smooth and polished website.
                        </p>
                    </div>
                }
                {
                    this.props.member === "hassan" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/has.jpg")}/>
                        </div>
                        <p className="name">Tauqeer Hassan</p>
                        <p className="designation">FrontEnd Engineer</p>
                        <p className="description">Tauqeer Hassan is a lead FrontEnd and ReactJS developer and Blockchain Enthusiast. Tauqeer Hassan has worked previously on different ICOs and non-Blockchain platforms.</p>
                    </div>
                }
                {
                    this.props.member === "sean" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/new-sean.jpg")}/>
                        </div>
                        <p className="name">Sean Gallagher</p>
                        <p className="designation">Chief Editor</p>
                        <p className="description">With a degree in Journalism & Public Relations from California State University, Long Beach, Sean has a thorough understanding of the English language and how to build and maintain a positive relationship with the public. Besides helping with public relations and marketing, his primary responsibility is to review all materials released by Solution and make sure that they are grammatically correct and easy to understand.
                        </p>
                    </div>
                }
                {
                    this.props.member === "eli" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/eli-1.jpg")}/>
                        </div>
                        <p className="name">Eli Karadsheh</p>
                        <p className="designation">Social Media Manager</p>
                        <p className="description">Eli is involved with managing all social media platforms and communications with spokespeople to the company. Eli has been pursuing business relationships with current and future spokespeople through each social platform.</p>
                    </div>
                }
                {
                    this.props.member === "james" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/James fawk.jpg")}/>
                        </div>
                        <p className="name">James Fawke</p>
                        <p className="designation">Public Relation Australia</p>
                        <p className="description">As Solution Token’s Australian public relations manager, James works with the marketing and media teams in order to distribute and specialize materials for the Australian market. He is also responsible for directly interacting with the Australian community and answering any of their questions about Solution.
                        </p>
                    </div>
                }
                {
                    this.props.member === "arik" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/Arik.jpg")}/>
                        </div>
                        <p className="name">Arik Balolong</p>
                        <p className="designation">Web & Graphic Designer</p>
                        <p className="description">Arik works closely with Solution Token’s creative designers and developers to produce graphics and elements of websites, visual media, and ad hoc administrative decisions.
                        </p>
                    </div>
                }
                {
                    this.props.member === "daniel" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/SOLV PROFILES 005.jpg")}/>
                        </div>
                        <p className="name">Daniel Faraj</p>
                        <p className="designation">Digital Media Manager</p>
                        <p className="description">Daniel is our media manager. This entails brainstorming and organizing new materials for public release, as well as reaching out to media platforms around the world to help spread our message and get the word out about Solution Token.
                        </p>
                    </div>
                }
                {
                    this.props.member === "damian" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/Damian.jpg")}/>
                        </div>
                        <p className="name">Damian Godlewski</p>
                        <p className="designation">Public Relations Europe</p>
                        <p className="description">Damian deals with the European market for the company. He is responsible for engaging the community within his region. He is also gaining support for the company through international conferences throughout Europe.</p>
                    </div>
                }
                {
                    this.props.member === "legaspi" &&
                    <div>
                        <div className="member-img">
                            <img src={require("../images/team/size-/Joshua L.jpg")}/>
                        </div>
                        <p className="name">Joshua Legaspi</p>
                        <p className="designation">Lead Graphics</p>
                        <p className="description">Joshua is one of Solution Token’s graphics design team, and works closely with other graphics designers, web designers, and the marketing and media team to produce the graphics we need for all purposes. He is also the one behind our amazing motion and video graphics.</p>
                    </div>
                }
            </div>
        )
    }
}

export default TeamDetail;