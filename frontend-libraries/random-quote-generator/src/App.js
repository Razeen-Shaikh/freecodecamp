import React from 'react';
import {FaTwitter} from 'react-icons/fa';
import {FaQuoteLeft} from 'react-icons/fa';
import {FaTumblr} from 'react-icons/fa';
import './bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      quotes: [],
      colors: [],
      index: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({isLoading: true})
    const { colors } = this.state;
    let color = "";
    const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    fetch(API).then(res => res.json())
      .then(res => {
        this.setState({
          quotes: res.quotes,
          isLoading: false
        });    
    });
    while (colors.length < 130) {
    do {
        color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
      colors.push("#" + ("111111" + color.toString(16)).slice(-6));
    }
  }

  handleClick() {
    const { quotes } = this.state;
    
    if(quotes.length > 0) {
      this.setState({
        index: Math.floor(Math.random() * quotes.length),
      })
    }
  }

  render() {
    const { quotes, colors, index } = this.state;
    const quote = quotes[index];
    const color = colors[index];
    const style = {backgroundColor: color};
    const textStyle = {color: color};
    console.log(color,colors)
    
    return (
      this.state.isLoading ?
        (<p>Loading...</p>):
        (
          <div style={style} className="container-fluid d-flex justify-content-center align-items-center">
            <div id="quote-box" className="wrapper d-flex flex-column justify-content-center bg-white">
              {
                quote && (
                  <blockquote id="text" className="d-flex">
                    <div style={textStyle} className="icon-size"><FaQuoteLeft /></div>
                    <div className="text-size text-center">{quote.quote}
                      <p id="author" className="text-right">- {quote.author}</p>
                    </div>
                  </blockquote>
                )
              }
            <div className="d-flex text-light justify-content-between">
              <div>
                <button style={style} className="btn-size btn btn-default"> <a id="tweet-quote" href="#" className="text-light btn-size"><FaTwitter /></a></button>
                <button style={style} className="btn-size btn btn-default"> <a id="tumblr-quote" href="#" className="text-light btn-size"><FaTumblr /></a></button>
              </div>
              <button id="new-quote" style={style} onClick={this.handleClick} className="btn btn-default text-light">New quote</button>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default App;