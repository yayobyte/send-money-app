import './setupEnv.js';
import express from 'express';
import fetch from 'node-fetch';
import moment from 'moment'
import chalk from 'chalk'
import { readFile } from 'fs/promises';
import cors from 'cors'

import { PORT, source, apiUrl, accessKey, destination, ENDPOINT } from './config.js'

const app = express();
app.disable('x-powered-by');
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'Hola' });
});

app.get(`/rates`, async (req, res) => {
    try {
        const url = new URL(`${apiUrl}${ENDPOINT.LATEST}`);
        const params = new URLSearchParams({
            base: source,
            symbols: destination
        });
        url.search = params.toString();

        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                "apikey": accessKey,
                "Content-Type": "application/json",
            },
        })

        if (!response.ok) {
            res.status(400).send({ message: 'An error happened'})
        }

        const data = await response.json();
        res.json(data)

    } catch(e) {
        console.log(e)
        console.log(chalk.yellow('Currency Layer (http://currencylayer.com) server not reachable, defaulting to mock data rates'))
        
        const jsonBuffer = await readFile(new URL('./rates.json', import.meta.url));
        const jsonString = jsonBuffer.toString();
        const json = JSON.parse(jsonString);

        res.setHeader('Content-Type', 'application/json')
        res.json({
            success: 'true',
            timestamp: new Date(),
            source: 'mock data',
            quotes: json,
        })
    }
})

app.get('/convert', async(req, res) => {
    const { from, to, amount } = req.query
    
    if (!from || !to || !amount) {
        res.status(400)
        res.send('Please send { from, to, amount } query params')
    }

    try {
        const currentDate = moment();
        const formattedDate = currentDate.format('YYYY-MM-DD');
        const url = new URL(`${apiUrl}${ENDPOINT.CONVERT}`);
        const params = new URLSearchParams({
            from,
            to,
            amount,
            date: formattedDate
        });
        url.search = params.toString();

        const headers = new Headers();
        headers.append("apikey", accessKey);
        headers.append('Content-Type', 'application/json');

        const response = await fetch(url.toString(), {
            method: 'GET',
            headers,
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
