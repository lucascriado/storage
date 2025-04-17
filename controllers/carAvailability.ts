import { connect } from '../database/connection';

export async function allCarsList() {
  try {
    const db = await connect();
    const [rows] = await db.query('SELECT * FROM carros');
    return rows;
  } catch (error) {
    console.error('Erro ao buscar carros:', error);
    throw error;
  }
}

allCarsList();
