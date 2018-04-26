import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous">
            <span className="ion-skip-backward" onClick={this.props.handlePrevClick}></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </button>
          <button id="next">
            <span className="ion-skip-forward" onClick={this.props.handleNextClick}></span>
          </button>
          <section id="time-control">
            <div className="current-time">{this.props.currentTime}</div>
            <input
              type="range"
              className="seek-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            <div className="total-time">{this.props.duration}</div>
          </section>
          <section id="volume-control">
            <div className="icon ion-volume-low"></div>
            <input
              type="range"
              className="volume-bar"
              volume={this.props.currentVolume}
              max="1.0"
              min="0.0"
              step="0.01"
              onChange={this.props.handleVolumeChange}
            />
          <div className="icon ion-volume-high">{this.props.currentVolume}</div>
          </section>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
