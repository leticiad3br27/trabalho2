import mysql from 'mysql2/promise';

export default async function handler(req, res) {

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'UsuarioP',
    password: 'Mnb2711@', 
    database: 'policlinica',
  });
  import mysql from 'mysql2/promise';


  // Função para listar médicos
  export async function listarMedicos() {
    const connection = await mysql.createConnection(config);
    const [rows] = await connection.execute('SELECT * FROM medicos');
    await connection.end();
    return rows;
  }
  
  // Função para cadastrar um médico
  export async function cadastrarMedico({ nome, crm, telefone, email, especialidade_id }) {
    const connection = await mysql.createConnection(config);
    await connection.execute(
      'INSERT INTO medicos (nome, crm, telefone, email, especialidade_id) VALUES (?, ?, ?, ?, ?)',
      [nome, crm, telefone, email, especialidade_id]
    );
    await connection.end();
  }