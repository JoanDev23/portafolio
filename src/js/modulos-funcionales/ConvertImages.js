const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../../assets/imagenes');
const outputDir = path.join(__dirname, '../../../build/imagenes');

// Asegúrate de que la carpeta de salida exista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Leer todos los archivos PNG y JPG
fs.readdirSync(inputDir).forEach(file => {
  if (path.extname(file).toLowerCase() === '.png' || path.extname(file).toLowerCase() === '.jpg') {
    const inputPath = path.join(inputDir, file);
    const basename = path.basename(file, path.extname(file));


    const webpFile = basename + '.webp';
    const webpPath = path.join(outputDir, webpFile);

    // --- 1. CONVERTIR A WEBP ---
    sharp(inputPath)
      .webp({ quality: 80 }) // Ajusta la calidad si lo deseas
      .toFile(webpPath)
      .then(() => console.log(`Convertido: ${file} → ${webpFile}`))
      .catch(err => console.error(`Error con ${file}:`, err));

    
    // --- 2. CONVERTIR A AVIF ---
    const avifFile = basename + '.avif';
    const avifPath = path.join(outputDir, avifFile);

    sharp(inputPath)
      .avif({ quality: 60 }) // Puedes ajustar la calidad si lo deseas
      .toFile(avifPath)
      .then(() => console.log(`Convertido a AVIF: ${file} → ${avifFile}`))
      .catch(err => console.error(`Error con AVIF ${file}:`, err));

    // --- 3. COPIAR IMAGEN ORIGINAL COMO FALLBACK ---
    const fallbackPath = path.join(outputDir, file);
    fs.copyFile(inputPath, fallbackPath, (err) => {
      if (err) {
        console.error(`Error al copiar el fallback de ${file}:`, err);
        return;
      }
      console.log(`Fallback copiado: ${file}`);
    });
  }
});

