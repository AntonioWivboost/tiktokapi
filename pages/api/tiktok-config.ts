// pages/api/tiktok-config.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export interface TikTokConfigType {
  CLIENT_KEY: string;
  REDIRECT_URI: string;
  SCOPES: string[];
}

export const TIKTOK_CONFIG: TikTokConfigType = {
  CLIENT_KEY: process.env.NEXT_PUBLIC_TIKTOK_CLIENT_KEY || '',
  REDIRECT_URI: process.env.NEXT_PUBLIC_TIKTOK_REDIRECT_URI || 'http://localhost:3000/api/auth/tiktok/callback',
  SCOPES: ['user.info.basic'], // Puedes añadir más scopes según tus necesidades
};

type ResponseData = {
  clientKey: string;
  redirectUri: string;
  scopes: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ 
    clientKey: TIKTOK_CONFIG.CLIENT_KEY,
    redirectUri: TIKTOK_CONFIG.REDIRECT_URI,
    scopes: TIKTOK_CONFIG.SCOPES
  });
}