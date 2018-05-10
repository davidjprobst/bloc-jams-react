import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album,index) =>
            <Link to={`/album/${album.slug}`} key={index} className="library-album">
              <img src={album.albumCover} alt={album.title} className="library-album-cover" />
              <div className="album-info">
                <h1>{album.title}</h1>
                <h2>{album.artist}</h2>
                <p>{album.songs.length} songs</p>
              </div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
