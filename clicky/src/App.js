import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { start } from 'repl';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: ["https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559__340.jpg",
        "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/20/1495031140-gettyimages-573950777.jpg",
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "https://i.imgur.com/XSVpW.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLEMdD_x_qzPbuHjZPOSFK18zWFsMfXJriW77CK2qqzIYz46Ojw",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1MRh1lrDtlxIULEoi-khPIeDz6EtrOZe2sxE01Idr5B3MfBevw",
        "https://tractive.com/static/images/menu/Tractive-GPS-3G-Dalmatian-Dog-in-the-woods.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJgJR3Im5OIkha28Hd_VADjd8ErO_p2lmzdwRwao-bt1iaa3oIA",
        "http://petharbor.com/get_image.asp?RES=detail&ID=A514831&LOCATION=TACM",
        "https://www.what-dog.net/Images/faces2/scroll000.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvHrea4dtFXJj5ZjHYqw3oQ7eP38eDi2TySd3lgnI8KXxYTpR",
        "https://i.dailymail.co.uk/i/pix/2014/07/26/1406401375831_wps_5_scout_and_buck_jpg.jpg",      

    ]
    }
  }
  render() {
    console.log(this.state);
    const style = {
      imagestyle: {
        width: "200px",
        height: "200px",
      
      }
    }


    return (
      <div className="App">
        {this.state.imgs.map(function (singleImg) {
          return (<img style={style.imagestyle} src={singleImg}></img>)
        })}
      </div>
    );
  }
}

export default App;

           
       
        