import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function dogImgs(array) {

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
// import { start } from 'repl';

class App extends Component {
  // constructor(props) {
  //   super(props)
    state = {
      imgs: [

        {
          url:"https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559__340.jpg",
          id: 0
        },
        {
          url:"https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          id: 1
        },
        {
          url:"https://i.imgur.com/XSVpW.jpg",
          id: 2
        },
        {
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLEMdD_x_qzPbuHjZPOSFK18zWFsMfXJriW77CK2qqzIYz46Ojw",
          id: 3
        },
        {
          url:"https://tractive.com/static/images/menu/Tractive-GPS-3G-Dalmatian-Dog-in-the-woods.jpg",
          id: 4
        },
        {
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1MRh1lrDtlxIULEoi-khPIeDz6EtrOZe2sxE01Idr5B3MfBevw",
          id: 5
        },
        {
          url:"https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/20/1495031140-gettyimages-573950777.jpg",
          id: 7
        },
        {
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJgJR3Im5OIkha28Hd_VADjd8ErO_p2lmzdwRwao-bt1iaa3oIA",
          id: 8
        },
        {
          url:"http://petharbor.com/get_image.asp?RES=detail&ID=A514831&LOCATION=TACM",
          id: 9
        },
        {
          url: "https://i.dailymail.co.uk/i/pix/2014/07/26/1406401375831_wps_5_scout_and_buck_jpg.jpg",
          id: 10
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvHrea4dtFXJj5ZjHYqw3oQ7eP38eDi2TySd3lgnI8KXxYTpR",
          id: 11
        },
        {
          url: "https://www.what-dog.net/Images/faces2/scroll000.jpg",
          id: 12
        }],
      
      currentScore: 0,
      topScore: 0,
      correctIncorrect: "",
      clicked: [],
      lastIdClicked: 1000,
    };
  // }

  handleClick = id => {
    console.log("we got clicked",id)
    this.handleShuffle(id)

    // if (this.state.clicked.indexOf(id) === -1) {
    //   this.handleIncrement();
    //   this.setState({ clicked: this.state.clicked.concat(id) });

    // } else {
    //   this.handleReset();
    // }

  };

  handleIncrement = () => {
    // const newScore = this.state.currentScore + 1;
    // this.setState({
    //   currentScore: newScore,
    //   correctIncorrect: "You guessed correctly!"
    // });

    // if (newScore >= this.state.topScore) {
    //   this.setState({ topScore: newScore });
    // }
    // else if (newScore === 12) {
    //   this.setState({ correctIncorrect: "You win!" });
    // }

    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []

    });

    this.handleShuffle();

  };

  handleShuffle = (id) => {
    var oldDogs = this.state.imgs
    let shuffledDogs = dogImgs(oldDogs);
    if (this.state.lastIdClicked === id){
      alert(" You lose!")
          }else{
            this.setState({ imgs: shuffledDogs, lastIdClicked: id });
  
          } 

  };

  render() {
    console.log(this.state);
    const style = {
      imagestyle: {
        width: "200px",
        height: "200px",
        margin: "10px",
      }
    }
    let self = this
    return (
      <div className="App">
        {this.state.imgs.map(function (singleImg, i ) {
          return (<img onClick={()=>{self.handleClick(singleImg.id)}} style={style.imagestyle} key={i} src={singleImg.url}></img>)
        })}
      </div>
    );
  }
}

export default App;



