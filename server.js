const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/santisvoiture', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Modelo de Evento
const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
});

const Event = mongoose.model('Event', eventSchema);

// Rota para obter eventos
app.get('/events', async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

// Rota para criar um novo evento
app.post('/events', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.json(event);
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
}); 