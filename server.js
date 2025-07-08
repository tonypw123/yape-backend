import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta de confirmación de pago simulada
app.post('/confirmar-pago', (req, res) => {
    const { monto } = req.body;
    console.log(`✅ Pago confirmado por S/ ${monto}`);
    res.json({ success: true, message: `Pago de S/ ${monto} confirmado` });
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor Yape Backend en funcionamiento 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
