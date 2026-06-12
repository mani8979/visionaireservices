const cloudinary = require('cloudinary').v2;

// 1. Configure Cloudinary
cloudinary.config({
  cloud_name: 'dyx9dzxwa',
  api_key: '521646221462269',
  api_secret: 'ro8vRiI7NMo11QTt2uTyUKUwsD8'
});

async function run() {
  try {
    // 2. Upload an image
    console.log("Uploading image...");
    const uploadResult = await cloudinary.uploader.upload('https://res.cloudinary.com/demo/image/upload/sample.jpg');
    console.log("Uploaded Image Secure URL:", uploadResult.secure_url);
    console.log("Uploaded Image Public ID:", uploadResult.public_id);

    // 3. Get image details
    console.log("\nFetching image details...");
    const details = await cloudinary.api.resource(uploadResult.public_id);
    console.log("Width:", details.width);
    console.log("Height:", details.height);
    console.log("Format:", details.format);
    console.log("Size (bytes):", details.bytes);

    // 4. Transform the image
    // f_auto: Automatically selects the most optimal image format (like webp or avif) based on the requesting browser.
    // q_auto: Automatically optimizes image quality, reducing file size without visible degradation.
    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: 'auto',
      quality: 'auto'
    });

    console.log("\nDone! Click link below to see optimized version of the image. Check the size and the format.");
    console.log(transformedUrl);

  } catch (error) {
    console.error("Error:", error);
  }
}

run();
