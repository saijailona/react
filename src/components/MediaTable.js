import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {CircularProgress, ImageList} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import {useWindowSize} from '../hooks/WindowHooks';
import MediaRow from './MediaRow';
import { MediaContext } from '../contexts/MediaContext';

const MediaTable = ({allFiles = true}) => {
  const {user} = useContext(MediaContext);
  const {mediaArray, loading, deleteMedia} = useMedia(allFiles, user ? user.user_id : 1);
  const windowSize = useWindowSize();
  console.log(mediaArray);
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <ImageList
          variant="masonry"
          cols={windowSize.width > 768 ? 3 : 2}
          gap={8}
        >
          {mediaArray.map((item, index) => {
            return <MediaRow key={index} file={item} userId={user.user_id} deleteMedia={deleteMedia}/>;
          })}
        </ImageList>
      )}
    </>
  );
};

MediaTable.propTypes = {
  allFiles: PropTypes.bool,
};

export default MediaTable;