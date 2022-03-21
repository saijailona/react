import {mediaUrl} from '../utils/variables';
import {useLocation} from 'react-router-dom';

const Single = () => {
const location = useLocation();
console.log(location);

  const file = location.state.file; 
  return (
    <>
      <h1>{file.title}</h1>
      <img src={mediaUrl + file.filename} alt={file.title} />
    </>
  );
};

// TODO in the next task: add propType for location

export default Single;