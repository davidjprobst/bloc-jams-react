import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section className="now-playing">
          <h3 id="playing-song">{this.props.currentSong.title}</h3>
          <p id="playing-artist">{this.props.currentArtist}</p>
        </section>
        <section id="time-control">
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="any"
            onChange={this.props.handleTimeChange}
          />
          <div className="current-time">{this.props.formatCurrentTime}</div>
          <div className="total-time">{this.props.formatDuration}</div>
        </section>
        <section id="buttons">
          <button id="previous">
            <span className="ion-skip-backward" onClick={this.props.handlePrevClick}></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span id="play-toggle" className={this.props.isPlaying ? "ion-pause" : "ion-play"}></span>
          </button>
          <button id="next">
            <span className="ion-skip-forward" onClick={this.props.handleNextClick}></span>
          </button>
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
    );
  }
}

export default PlayerBar;
