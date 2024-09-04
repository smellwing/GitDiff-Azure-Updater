const fs = require('fs');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Cargar variables de entorno
dotenv.config();

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.TU_API_KEY);
const model = genAI.getGenerativeModel({ model: process.env.TU_MODELO_GEMINI });

// Leer contenido del archivo
const contenido = fs.readFileSync('resumen.txt', 'utf8');

// Prompt de Gemini
const systemInstructions = "You are a programmer who talks in Formal Chilean Spanish and you report to your Boss and your coordinators. The coordinators are from the IT Development area and IR projects. All are technical profiles, but the project coordinator must report to people without IT training.";
const prompt_azure = `Analyze the following git diff summary and create a summary that allows updating the corresponding Azure tasks: ${contenido}`;
const prompt_correo = `Analyze the following git diff summary and report the day's progress, generating an end-of-day email. 
Commit Messages must be in formal spanish from Chile and have a short description that is less than 50 characters followed by a newline and a more detailed description.
- Write concisely using an informal tone
- List significant changes
- Do not use specific names or files from the code
- Do not use phrases like "this commit", "this change", etc.
Create a summary of the changes: ${contenido}`;

// Enviar a Gemini y obtener respuesta
const result = await model.generateContent(prompt, {
  systemInstructions: systemInstructions,
});

const response = result.response;
const text = response.text();


const result = await model.generateContent(prompt, {
  systemInstructions: systemInstructions,
});

