import dotenv from 'dotenv';

dotenv.config();

const config = {
  mode: process.env.MODE,
  database: {
    host: process.env.MODE === 'local' ? 'localhost' : 'database',
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dbName: process.env.MYSQL_DATABASE,
  },
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
    redirectURL: process.env.REDIRECT_URL ?? 'localhost:3000',
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? 'secret',
  },
};

export default config;
