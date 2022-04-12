import db from '../../lib/db'
export default async (req, res) => {
    try {
        let results = await db.query('SELECT * FROM posts')
 
        // Run clean up function
        await db.end()
        
        res.end(JSON.stringify(results))
  } catch ( error ) {
      console.log( error );
  }
  };