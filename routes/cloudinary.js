const cloudinary = require('cloudinary').v2
cloudinary.config({ 
    cloud_name: 'df4yheuch', 
    api_key: '844783582559455', 
    api_secret: 'eJzb7_V1TMhjFVmZ0fWL9tJvRhU' 
  });
  imagePath = "C:/projet/tournament/logo.png";
//   const uploadImage = async (imagePath) => {
    console.log("here");
    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    };
// };

// console.log(uploadImage);