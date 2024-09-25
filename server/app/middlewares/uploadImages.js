// server\app\middlewares\uploadImages.js
import multer from 'multer';
import path from 'path';
import {fileURLToPath} from 'url';

// Define __dirname for ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ________________________________________________________________________
// Function to store the image:
const photoStorage = multer.diskStorage(
    {
        destination: function (req, file, callback) {

            // Use path.join with __dirname to correctly specify the path to the images folder
            callback(null, path.join(__dirname, '../images'));
            // callback([error], [destination error]);
        },
        filename: function (req, file, callback) {
            if (file) {
                // Get the original name of the file
                const fileName = file.originalname;
                // Create a unique name for the file using the current date and time
                const date = new Date().toISOString().replace(/:/g, '-');
                // Return the new name with the original extension
                callback(null, date + fileName);

                // Create a unique name for the file using the current date and time
                // callback(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);

            } else {
                callback(null, false);
            }
        }
    }
);

/* NOTE: __________________________________________________________________
1- we use the .diskStorage() method to tell Express where to store files
to the disk.

2- The destination property on the diskStorage() method determines which
directory the files will store. Here, the files will store in the directory,
images. If you’ve not applied a destination, the operating system will default
to a directory for temporary files.

3- The property filename indicates what to name your files.
If you do not set a filename, Multer will return a randomly generated name for your files.
_________________________________________________________________________ */

// Photo Upload Middleware:
const photoUpload = multer({
    // it takes three arguments
    storage: photoStorage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype.startsWith('image')) {
            callback(null, true);
        } else {
            callback({ message: 'Unsupported file format, Only images are allowed!' }, false);
        }
    },
    limits: { fileSize: 1024 * 1024 * 1 } // 1 MB
});

export { photoUpload };