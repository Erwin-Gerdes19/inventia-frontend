import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config(); //Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Configurar TypeORM
const dataSource = new DataSource({
    type:"postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10), // Asegúrate de convertir el puerto a número
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true, // Sincroniza las entidades con la base de datos (útil en desarrollo)
    logging: true, // Desactiva los logs de TypeORM
    entities:['src/entities/**/*.ts'], // Carga las entidades desde la carpeta entities
})

const initializePostgres = async () => {
    try {
        await dataSource.initialize();

        console.log('Conexión a la base de datos establecida');
        console.log('Estado de la conexión:', dataSource.isInitialized);
    } catch(err) {
        console.error("Error al conectar a la base de datos:", err);
    }
}

initializePostgres().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
    });
});