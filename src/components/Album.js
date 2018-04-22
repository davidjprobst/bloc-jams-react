import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album
    };
  }

    togglePlaying(index) {
      const clickedSong = this.state.album.songs[index];
      clickedSong.isPlaying = clickedSong.isPlaying ? false : true;
      if (clickedSong.isPlaying === true) {
        console.log("the song is playing");
      } else if (clickedSong.isPlaying === false) {
        console.log("the song is not playing")
      };
    }


  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {
              this.state.album.songs.map( (song,index) =>
              <tr className="song" key={index} onClick={ () => this.togglePlaying(index) }>
                <td id="song-number-column" className="song-action">
                  <span className="song-number">{index + 1}</span>
                  <span className="ion-play"></span>
                </td>
                <td id="song-title-column" className="song-title">{song.title}</td>
                <td id="song-duration-column" className="song-duration">{parseInt(song.duration)}</td>
              </tr>
              )
            }
          </tbody>
        </table>
      </section>
    );
  }
}

export default Album;
