import dotenv from 'dotenv';
dotenv.config();

export const PORT = Number(process.env.PORT) || 3001;
export const apiUrl = 'https://api.apilayer.com/fixer'
export const accessKey = process.env.APILAYER_ACCESS_KEY || '' //put the access key shared previously
export const source = 'AED'
export const destination= 'COP'
export const ENDPOINT = {
    LATEST: '/latest',
    CONVERT: '/convert'
}
