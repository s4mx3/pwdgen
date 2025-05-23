// Vercel serverless function for handling password generation stats
import { createClient } from '@vercel/kv';

export default async function handler(req, res) {
  // Initialize KV client
  const kv = createClient({
    url: process.env.KV_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  try {
    if (req.method === 'GET') {
      // Get current stats
      const stats = await kv.get('pwdgen:stats') || {
        count: 0,
        lastGenerated: null
      };
      res.status(200).json(stats);
    } 
    else if (req.method === 'POST') {
      // Get current count
      const currentStats = await kv.get('pwdgen:stats') || {
        count: 0,
        lastGenerated: null
      };
      
      // Increment the count
      const newCount = currentStats.count + 1;
      
      // Update stats with new count and timestamp
      await kv.set('pwdgen:stats', {
        count: newCount,
        lastGenerated: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})
      });
      
      res.status(200).json({ 
        success: true,
        count: newCount
      });
    }
    else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 
