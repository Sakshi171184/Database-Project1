const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sakshi',
  password: 'Source@123',
  port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM Employee ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM Employee WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows);
    })
  };

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM Employee WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  };

  const createUser = (request, response) => {
    const { id,firstname,middlename,lastname,email,phonenumber,role,address } = request.body;
    console.log(email);
    pool.query(`INSERT INTO Employee
    (firstname,
    middlename,
    lastname,
    email,
    phonenumber,
    role,
    address) 
    VALUES ($1, $2,$3,$4,$5,$6,$7)
    RETURNING id`,
     [firstname,middlename,lastname,email,phonenumber,role,address], (error, result) => {
      if (error) {
        throw error
      }
      console.log(result.rows[0].id);
      response.status(201).json(result.rows[0].id)
    })
  };

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const {firstname,middlename,lastname,email,phonenumber,role,address} = request.body;
    console.log(request.body);
    pool.query(
      'UPDATE Employee SET Firstname=$1,Middlename=$2,Lastname=$3,email=$4,phonenumber=$5,role=$6,address=$7 WHERE id=$8',
      [firstname,middlename,lastname,email,phonenumber,role,address,id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  module.exports = {
    getUsers,
    getUserById,
    deleteUser,
    createUser,
    updateUser  

  };
