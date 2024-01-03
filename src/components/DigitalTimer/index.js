// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {timerStart: false, timer: 1500}

  clearingInt = () => {
    console.log(5)
    if (this.timerId !== undefined) {
      clearInterval(this.timerId)
    }
  }

  startOrStopBtn = () => {
    const {timerStart} = this.state
    if (!timerStart) {
      this.timerId = setInterval(() => {
        this.setState(prevState => {
          let a = {}
          if (prevState.timer !== 0) {
            a = {
              timer: prevState.timer - 1,
              timerStart: !timerStart,
            }
          } else {
            this.clearingInt()
            a = {timerStart}
          }
          return a
        })
      }, 1000)
    } else {
      console.log(2)
      this.clearingInt()
      this.setState(prevState => ({
        timerStart: !timerStart,
      }))
    }
  }

  incr = () => {
    const {timerStart} = this.state
    if (!timerStart) {
      this.setState(p => ({timer: p.timer + 60}))
    }
  }

  decr = () => {
    const {timer, timerStart} = this.state
    if (!timerStart) {
      if (timer !== 0) {
        this.setState(p => ({timer: p.timer - 60}))
      }
    }
  }

  resetBtn = () => {
    this.clearingInt()
    this.setState({timer: 1500, timerStart: false})
  }

  render() {
    const {timerStart, timer} = this.state
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="body">
          <div className="body-part1">
            <h1 className="p1-heading">
              {Math.floor(timer / 60)
                .toString()
                .padStart(2, '0')}
              :{(timer % 60).toString().padStart(2, '0')}
            </h1>
            <p>{timerStart ? 'Running' : 'Paused'}</p>
          </div>
          <div className="body-part2">
            <div className="div1">
              <button className="button btn1" type="button">
                <img
                  className="img"
                  onClick={this.startOrStopBtn}
                  alt={timerStart ? 'pause icon' : 'play icon'}
                  src={
                    timerStart
                      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                  }
                />
                <p className="b2-para b2-para3">
                  {timerStart ? 'Pause' : 'Start'}
                </p>
              </button>

              <button className="button btn1" type="button">
                <img
                  className="img"
                  onClick={this.resetBtn}
                  alt="reset icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                />
                <p className="b2-para">Reset</p>
              </button>
            </div>
            <p>Set Timer limit</p>
            <div className="div1">
              <button type="button" onClick={this.decr} className="button">
                -
              </button>
              <p className="b2-para2">
                {Math.floor(timer / 60)
                  .toString()
                  .padStart(2, '0')}
              </p>
              <button type="button" onClick={this.incr} className="button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
