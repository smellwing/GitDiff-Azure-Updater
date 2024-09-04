const fs = require('fs');
const dotenv = require('dotenv');

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Cargar variables de entorno
dotenv.config();

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.TU_TOKEN_GEMINI);
const model = genAI.getGenerativeModel({ model: process.env.TU_MODELO_GEMINI });
async function run() {
  // Leer contenido del archivo
  const contenido = fs.readFileSync('resumen.txt', 'utf8');

  // Prompt de Gemini
  const systemInstructions = "You are a programmer who talks in Formal Chilean Spanish and you report to your Boss and your coordinators. The coordinators are from the IT Development area and IR projects. All are technical profiles, but the project coordinator must report to people without IT training.";
  const prompt = 
  `Analyze the following git diff summary and create a summary in formal chilean spanish that allows updating the corresponding Azure tasks. 
  Then Summary and report in formal chilean spanish the day's progress, generating an end-of-day email.  
  For diff sumary, follow the rules: Summary must be in formal spanish from Chile and have a short description that is less than 50 characters followed by a newline and a more detailed description.
- Write concisely using an informal tone
- List significant changes
- Do not use specific names or files from the code
- Do not use phrases like "this commit", "this change", etc.
Create a summary of the changes: ${contenido}`;

  // Enviar a Gemini y obtener respuesta
  let result = await model.generateContent(prompt, {
    systemInstructions: systemInstructions,
  });

  const response = result.response;
  const text = response.text();
  console.log(text);
};

run();
