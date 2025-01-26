const express = require('express');

const products = require('./routes');

const app = express();

const PORT = 3000;

app.use('/products', products);

app.listen(PORT, () => {
	console.log(`Api is running in http://loacalhost:${PORT}`);
});
