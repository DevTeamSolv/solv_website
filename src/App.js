import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import '../src/css/reset.css';
import '../src/js/includes/DWFullScreenPage/jquery.fullpage.css';
import '../src/font-awesome-4.7.0/css/font-awesome.min.css';
import '../src/css/animate.css';
import '../src/css/style.css';
import '../src/css/DWFullScreenPage1.css';
import '../src/css/DWFullScreenPage1-header.css';
import '../src/css/DWFullScreenPage1-footer.css';
import '../src/js/includes/FlexiMenus2/CSSMenu_DWFullScreenPage1menu.css';
import '../src/js/includes/FlexiMenus2/CSSMenu_DWFullScreenPage1menualt.css';
import '../src/css/HoverFX.css';
import '../src/css/main.css';
import '../src/css/media-main.css';
// import "./js/afterLoading";
import $ from "jquery";

class App extends Component {
  componentDidMount(){
      window.scrollTo(0,0);
      setTimeout(function () {
      document.getElementById('outer-loader').style.display = 'none';
      document.getElementById('root').style.display = 'block';
      }, 100)
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
