require('dotenv').config()
module.exports = {
  "development": {
    "database": "communal_care",
    "dialect": 'postgres'
  },
  "test": {
    "database": "communal_care",
    "dialect": 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}