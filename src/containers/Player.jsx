<<<<<<< HEAD
/* eslint-disable react/destructuring-assignment */
=======
>>>>>>> a2aa20ba2160ab61138267a58a23cf5f5fb1d2d8
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
<<<<<<< HEAD
import NotFound from './NotFound';

const Player = (props) => {
=======
import NotFound from '../containers/NotFound';

const Player = props => {
>>>>>>> a2aa20ba2160ab61138267a58a23cf5f5fb1d2d8
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  useEffect(() => {
    props.getVideoSource(id);
  }, []);
  return hasPlaying ? (
<<<<<<< HEAD
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
            Regresar
=======
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
>>>>>>> a2aa20ba2160ab61138267a58a23cf5f5fb1d2d8
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
=======
const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource, 
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
>>>>>>> a2aa20ba2160ab61138267a58a23cf5f5fb1d2d8
