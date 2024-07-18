import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dbq1kyads', 
  api_key: process.env.api_key, 
  api_secret: process.env.api_secret ,
  secure:true
});
cloudinary.uploader.upload