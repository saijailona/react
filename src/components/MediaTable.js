// import PropTypes from 'prop-types';
import { useMedia } from '../hooks/ApiHooks';
import MediaRow from './MediaRow';



const MediaTable = () => {

 const {mediaArray} = useMedia();


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
