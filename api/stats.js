// Vercel serverless function for handling password generation stats

async function getKV(key) {
  const response = await fetch(`${process.env.KV_URL}/get/${key}`, {
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`
    }
  });
  if (!response.ok) throw new Error('Failed to get from KV');
  const data = await response.json();
  return data.result;
}

async function setKV(key, value) {
  const response = await fetch(`${process.env.KV_URL}/set/${key}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.KV_REST_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  });
  if (!response.ok) throw new Error('Failed to set KV');
  return response.json();
}

// Initialize stats if they don't exist
async function initializeStats() {
  try {
    console.log('Checking KV connection...');
    const stats = await getKV('pwdgen:stats');
    console.log('Current stats:', stats);
    
    if (!stats) {
      console.log('Initializing new stats...');
      const initialStats = {
        count: 0,
        lastGenerated: null
      };
      await setKV('pwdgen:stats', initialStats);
      console.log('Stats initialized:', initialStats);
    }
  } catch (error) {
    console.error('Error initializing stats:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  try {
    console.log('Request method:', req.method);
    
    // Ensure stats are initialized
    await initializeStats();

    if (req.method === 'GET') {
      console.log('Handling GET request...');
      const stats = await getKV('pwdgen:stats');
      console.log('Retrieved stats:', stats);
      
      if (!stats) {
        console.log('No stats found, creating initial stats...');
        const initialStats = {
          count: 0,
          lastGenerated: null
        };
        await setKV('pwdgen:stats', initialStats);
        console.log('Created initial stats:', initialStats);
        return res.status(200).json(initialStats);
      }
      return res.status(200).json(stats);
    } 
    else if (req.method === 'POST') {
      console.log('Handling POST request...');
      
      // Accept count and lastGenerated directly from client
      const { count, lastGenerated } = req.body;
      
      const updatedStats = {
        count: typeof count === 'number' ? count : 0,
        lastGenerated: lastGenerated || null
      };
      
      console.log('Storing stats:', updatedStats);
      await setKV('pwdgen:stats', updatedStats);
      console.log('Stats updated successfully');
      
      return res.status(200).json(updatedStats);
    }
    else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message,
      stack: error.stack
    });
  }
} 
