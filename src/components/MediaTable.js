// import PropTypes from 'prop-types';
import MediaRow from './MediaRow';
import {useEffect, useState} from 'react';
import { baseUrl } from '../utils/variables';




const MediaTable = () => {

  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
   const response = await fetch(baseUrl + 'media');
   const media = await response.json();
   const allFiles = await Promise.all(media.map(async (file)=>{
     // tee ite
     const fileResponse = await fetch(`${baseUrl}media/${file.file_id}`);
     return await fileResponse.json();
   })
   );
   setMediaArray(allFiles);
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
