const fs = require('fs');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

// Cargar variables de entorno
dotenv.config();

// Leer contenido del archivo
const contenido = fs.readFileSync('resumen.txt', 'utf8');

// Prompt de Gemini
const prompt_gemini = `Analiza el siguiente resumen de git diff y actualiza las tareas de Azure correspondientes: ${contenido}`;

// Enviar a Gemini y obtener respuesta
fetch('https://api.gemini.com/v1/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.TU_TOKEN_GEMINI}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ prompt: prompt_gemini })
})
.then(res => res.json())
.then(data => {
  // Extraer correo electrónico de la respuesta (ajusta según el formato de respuesta de Gemini)
  const correo_electronico = data.completions[0].text.match(/Correo electrónico: (.*)/)[1];

  // Imprimir resultados
  console.log("Actualización de Azure:", data.completions[0].text);
  console.log("Correo electrónico generado:", correo_electronico);
})
.catch(error => console.error('Error al comunicarse con Gemini:', error));
