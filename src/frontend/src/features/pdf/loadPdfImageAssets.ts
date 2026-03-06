/**
 * Load local image assets and convert them to base64 data URLs for PDF embedding
 */
export async function loadImageAsBase64(imagePath: string): Promise<string> {
  return new Promise((resolve, _reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          console.error("Failed to get canvas context for:", imagePath);
          resolve(""); // Return empty string instead of rejecting
          return;
        }

        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");
        resolve(dataUrl);
      } catch (error) {
        console.error("Error converting image to base64:", imagePath, error);
        resolve(""); // Return empty string instead of rejecting
      }
    };

    img.onerror = (error) => {
      console.warn(`Failed to load image: ${imagePath}`, error);
      resolve(""); // Return empty string instead of rejecting
    };

    img.src = imagePath;
  });
}

export async function loadPdfImageAssets(): Promise<{
  cryptoMiningImage: string;
  blockchainDevImage: string;
}> {
  try {
    const [cryptoMiningImage, blockchainDevImage] = await Promise.all([
      loadImageAsBase64(
        "/assets/generated/mininghub-crypto-mining-hero.dim_1400x800.png",
      ),
      loadImageAsBase64(
        "/assets/generated/mininghub-blockchain-dev-hero.dim_1400x800.png",
      ),
    ]);

    return {
      cryptoMiningImage,
      blockchainDevImage,
    };
  } catch (error) {
    console.error("Error loading PDF image assets:", error);
    // Return empty strings instead of throwing
    return {
      cryptoMiningImage: "",
      blockchainDevImage: "",
    };
  }
}
