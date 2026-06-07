import { v2 as cloudinary } from "cloudinary";

const CLOUDINARY_FOLDER = "Nexora";

const uploadFile = async (file) => {
  //converting call back to  promise
  return await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: CLOUDINARY_FOLDER,
        },
        (error, result) => {
          if (error) {
            return reject(error);
          } else {
            resolve(result);
          }
        },
      )
      .end(file.buffer);
  });
};

export default uploadFile;
