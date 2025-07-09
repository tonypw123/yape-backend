import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Variable temporal en memoria
let pagoConfirmado = false;

// Ruta de confirmación de pago simulada
app.post('/confirmar-pago', (req, res) => {
    const { monto } = req.body;
    console.log(`✅ Pago confirmado por S/ ${monto}`);
    pagoConfirmado = true;
    res.json({ success: true, message: `Pago de S/ ${monto} confirmado` });
});

// Ruta para que la app consulte si ya se pagó
app.get('/estado-pago', (req, res) => {
    res.json({ pagado: pagoConfirmado });
});

// Ruta para resetear estado (opcional)
app.post('/resetear', (req, res) => {
    pagoConfirmado = false;
    res.json({ success: true, message: "Estado de pago reseteado" });
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor Yape Backend en funcionamiento 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
