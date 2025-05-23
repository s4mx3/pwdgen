// Vercel serverless function for handling password generation stats
import { createClient } from '@vercel/kv';

// Initialize KV client
const kv = createClient({
  url: process.env.KV_URL,
  token: process.env.KV_REST_API_TOKEN,
});

// Initialize stats if they don't exist
async function initializeStats() {
  const stats = await kv.get('pwdgen:stats');
  if (!stats) {
    await kv.set('pwdgen:stats', {
      count: 0,
      lastGenerated: null
    });
  }
}

export default async function handler(req, res) {
  try {
    // Ensure stats are initialized
    await initializeStats();

    if (req.method === 'GET') {
      // Get current stats
      const stats = await kv.get('pwdgen:stats');
      if (!stats) {
        // If still no stats, create them
        const initialStats = {
          count: 0,
          lastGenerated: null
        };
        await kv.set('pwdgen:stats', initialStats);
        return res.status(200).json(initialStats);
      }
      return res.status(200).json(stats);
    } 
    else if (req.method === 'POST') {
      // Get current stats
      let currentStats = await kv.get('pwdgen:stats');
      if (!currentStats) {
        currentStats = {
          count: 0,
          lastGenerated: null
        };
      }
      
      // Increment the count
      const newCount = currentStats.count + 1;
      const newTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      
      // Update stats
      const updatedStats = {
        count: newCount,
        lastGenerated: newTime
      };
      
      await kv.set('pwdgen:stats', updatedStats);
      
      return res.status(200).json(updatedStats);
    }
    else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling stats:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
} 
