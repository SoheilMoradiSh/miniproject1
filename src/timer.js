import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
      isStart: false,
    };
  }
  // componentDidMount(){
  //     interval=setInterval(()=>{
  //       this.setState({
  //         time:this.state.time - 1
  //       })
  //     } , 1000)
  // }
  // componentDidUpdate(){
  //   if(this.state.time===0){
  //     clearInterval(interval)
  //   }
  // }
  stop = () => {
    clearInterval(interval);
  };
  start = () => {
    if (this.state.isStart == false) {
      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second == 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
        }
        if (this.state.minute == 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };
  reset = () => {
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
      isStart: false,
    });
  };
  render() {
    var h = this.state.hour;
    var m = this.state.minute;
    var s = this.state.second;
    return (
      <>
        <h2 className="timer">
          {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
            s > 9 ? s : "0" + s
          } `}
        </h2>
        <div className="btn">
          <button onClick={this.stop} className="mybtn">Stop</button>
          <button onClick={this.start} className="mybtn">Start</button>
          <button onClick={this.reset} className="mybtn">Reset</button>
        </div>
      </>
    );
  }
}

export default Timer;
