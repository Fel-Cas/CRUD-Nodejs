const express=require('express');
const conectarDB=require('./config/db');
const cors=require('cors');

//creamos el servidor
const app=express();

//Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());
app.use('/api/productos',require('./routes/producto'));

app.listen(3000,()=>{
    console.log('El servidor iniciado en el puerto 3000');
});