import db from '../../lib/db'
export default async (req, res) => {
    try {
      const data = req.body
        try {
          const query = 'DELETE FROM posts WHERE id=?'
          const values = [data.uid]
          const results = await db.query(query, values);
          await db.end();
          res.end(JSON.stringify(results))
        } catch (error) {
          res.end(error)
        }
      res.end(JSON.stringify(result))
  } catch ( error ) {
      console.log( error );
  }
  };