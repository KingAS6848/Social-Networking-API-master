import multer from 'multer';

import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log('Destination path:', uploadPath);
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const formattedDate = new Date().toISOString().replace(/:/g, '-');
    const fileName = `${formattedDate}-${file.originalname}`;
    console.log('Filename:', fileName);
    cb(null, fileName);
  },
});

// 4. Export multer middleware.
export const uploadMiddleware = multer({
  storage: storage,
});
