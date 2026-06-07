import { v2 as cloudinary } from "cloudinary";

const CLOUDINARY_FOLDER = "Nexora";

const uploadFiles = async (files) => {
  const uploadedFiles = [];

  for (const file of files) {
    //converting call back to  promise
    const uploads = await new Promise((resolve, reject) => {
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

    uploadedFiles.push(uploads);
  }

  return uploadedFiles;
};

export default uploadFiles;
