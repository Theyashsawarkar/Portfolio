const path = require('path') 

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // For Cloudinary images
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to', // For dev.to images served via CDN
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com', // For dev.to's S3-hosted images
        pathname: '**',
      },
    ],
  },
}
