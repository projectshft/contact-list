import React, {useState} from 'react';

// Component that renders profile pics
const ProfilePic = ({imgUrl, imgType}) => {
  const [picUrl, setPicUrl] = useState(imgUrl);

  // Render default pic if there's an error with a contact's imgUrl
  const handleError = () => {
    setPicUrl('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg');
  }

  return (
    <img src={picUrl} className={imgType} onError={handleError}></img>
  )
}

export default ProfilePic;