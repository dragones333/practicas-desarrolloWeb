const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 81;

app.get('/', async (req, res) => {
    try {

        const response = await fetch('https://fakestoreapi.com/products');
        const productos = await response.json();

        let htmlContent = '<table border="1" width="100%">';
        productos.forEach((producto) => {
            htmlContent += `
                <tr>
                    <td>${producto.title}</td>
                    <td>${producto.price}</td>
                    <td>${producto.description}</td>
                </tr>
            `;
        });
        htmlContent += '</table>';

        res.send(htmlContent);
    } catch (error) {
        res.status(500).send('Error fetching products');
    }
});

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});
