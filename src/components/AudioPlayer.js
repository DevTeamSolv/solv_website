import React from 'react';

class AudioPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTrackId: 0,
            currentTrackName: "",
            audioPaused: false,
            allTracks: [
                require("../images/musics/BG-music.mp3"),
                require("../images/musics/Cloud 9 NCS Release.mp3"),
                require("../images/musics/Flares NCS Release.mp3"),
                require("../images/musics/TRow No Copyright Music.mp3"),
                require("../images/musics/Get Your Love.mp3"),
                require("../images/musics/Those Nights.mp3"),
                require("../images/musics/391 - Everybody NCS Release.mp3"),
                require("../images/musics/Happy Days Non - Copyrighted Music.mp3"),
                require("../images/musics/You re The Best.mp3")
            ]
        }
    }
    previous(){
        console.log(this.state.currentTrackId)
        var prevTID = this.state.currentTrackId;
        this.setState({
            currentTrackId: prevTID-1
        })
        // if(this.state.currentTrackId > 0){
        //
        // }
    }
    next(){
        console.log(this.state.currentTrackId)
        var nextTID = this.state.currentTrackId;
        this.setState({
            currentTrackId: nextTID+1
        })
    }
    pausePlay () {
        var audio = document.getElementById('myAudio');
        if (audio.paused){
            audio.play();
        }
        else {
            audio.pause();
        }
        this.setState({
            audioPaused: audio.paused
        })
    }
    render() {
        return (
            <div>
                <audio src={this.state.allTracks[this.state.currentTrackId]} autoPlay={true} loop id="myAudio">
                    <p>If you are reading this, it is because your browser does not support the audio element.</p>
                </audio>
                <div className="audio-controls">
                    <div className="outer-box">
                        <div className="button-prev">
                            <img onClick={this.previous.bind(this)} src={require("../images/icons8-skip-to-start-filled-100.png")}/>
                        </div>

                        <div className="button-pause">
                            {this.state.audioPaused && <img onClick={this.pausePlay.bind(this)} src={require("../images/icons8-play-50 (1).png")}/>}
                            {!this.state.audioPaused && <img onClick={this.pausePlay.bind(this)} src={require("../images/icons8-pause-100.png")}/>}
                        </div>
                        <div className="button-next">
                            <img onClick={this.next.bind(this)} src={require("../images/icons8-end-filled-100.png")}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AudioPlayer;