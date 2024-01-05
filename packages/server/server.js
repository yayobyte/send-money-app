import express from 'express';
import fetch from 'node-fetch';
import { PassThrough } from 'node:stream'
import moment from 'moment'
import chalk from 'chalk'
import { readFile } from 'fs/promises';


import { PORT, source, endpoint, accessKey } from './config.js'

const app = express();
app.disable('x-powered-by');

const processStream = (res, response) => {

    const passThroughStream = new PassThrough();
    response.body.pipe(passThroughStream);

    passThroughStream.on('data', (chunk) => {
        console.log('Received data chunk:', chunk.toString());
        res.write(chunk);
    });
    passThroughStream.on('end', (data) => {
        console.log('End of data:');
        res.end();
    });
}

app.get('/', (req, res) => {
    res.json({ message: 'Hola' });
});

app.get(`/rates`, async (req, res) => {
    const url = `${endpoint}/live?access_key=${accessKey}&source=${source}&format=1`
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        processStream(res, response)
    } catch(e) {
        console.log(e)
    }
})

app.get('/convert', async(req, res) => {
    const { from, to, amount } = req.query
    const currentDate = moment();
    const formattedDate = currentDate.format('YYYY-MM-DD');
    const url = `${endpoint}/convert?access_key=${accessKey}&from=${from}&to=${to}&amount=${amount}&date=${formattedDate}&format=1`

    if (!from || !to || !amount) {
        res.status(400)
        res.send('Please send { from, to, amount } query params')
    }

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        processStream(res, response)
    } catch(e) {
        console.log(e)
        console.log(chalk.yellow('Currency Layer (http://currencylayer.com) server not reachable, defaulting to mock data rates'))
        const json = JSON.parse(
            await readFile(
                new URL('./rates.json', import.meta.url)
            )
        );
        res.setHeader('Content-Type', 'application/json')
        res.json({
            success: 'true',
            query: { from, to, amount },
            date: formattedDate,
            result: json[`${from.toUpperCase()}${to.toUpperCase()}`],
            source: 'mock data'
        })
    }
})

app.listen(PORT, () => {
    if (accessKey === '') {
        console.log(chalk.red('*** Please put the accessKey value inside the file /packages/server/config.js ***'))
        console.log(chalk.red('*** to use http://currencylayer.com live exchange rates ***'))
    }
    console.log(`listening on port http://localhost:${PORT}`);
});
