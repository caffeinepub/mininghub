/**
 * Load local image assets and convert them to base64 data URLs for PDF embedding
 */
export async function loadImageAsBase64(imagePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }

        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        resolve(dataUrl);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${imagePath}`));
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
      loadImageAsBase64('/assets/generated/mininghub-crypto-mining-hero.dim_1400x800.png'),
      loadImageAsBase64('/assets/generated/mininghub-blockchain-dev-hero.dim_1400x800.png'),
    ]);

    return {
      cryptoMiningImage,
      blockchainDevImage,
    };
  } catch (error) {
    console.error('Error loading PDF image assets:', error);
    throw error;
  }
}
