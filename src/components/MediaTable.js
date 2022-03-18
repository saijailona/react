// import PropTypes from 'prop-types';
import MediaRow from './MediaRow';
import {useEffect, useState} from 'react';




const MediaTable = () => {

  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
   const response = await fetch('test.json');
   const json = await response.json();
   setMediaArray(json);
    } catch (err) {
      console.error(err.message);
    }

  };

  useEffect( () => {
    getMedia();
  }, []);


  console.log(mediaArray);
  return (
    <table>
      <tbody>
        {mediaArray.map((item, index) => {
          return <MediaRow key={index} file={item} />;
        })}
      </tbody>
    </table>
  );
};


export default MediaTable;
