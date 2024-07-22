import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function for multer Upload !
export const uploadFilesToCloudinary = async (files) => {
  const uploadPromises = files.map((file) => {
    return cloudinary.uploader.upload(file.path, {
      resource_type: "auto",
    });
  });
  return await Promise.all(uploadPromises);
};

// Function For felteing files
export const deleteFilesFromCloudinary = async (publicIds) => {
  try {
    const deletionPromises = publicIds.map(public_id => 
      cloudinary.uploader.destroy(public_id)
    );
    await Promise.all(deletionPromises);
  } catch (error) {
    console.error('Error deleting files from Cloudinary:', error);
    throw new Error('Failed to delete files from Cloudinary');
  }
};

export default cloudinary;
