// pages/api/tiktok-verification.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'tiktokWh0NLUMWY59LGWpHBb3HIbdhUdoS7qp.txt');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(fileContent);
}