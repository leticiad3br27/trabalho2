

import { listarMedicos, cadastrarMedico } from './service';
import express from 'express';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Lista os médicos usando a camada de serviço
      const medicos = await listarMedicos();
      res.status(200).json(medicos);
    } catch (error) {
      console.error('Erro ao buscar médicos:', error);
      res.status(500).json({ message: 'Erro ao buscar médicos' });
    }
  } else if (req.method === 'POST') {
    try {
      // Cadastra um médico usando a camada de serviço
      await cadastrarMedico(req.body);
      res.status(201).json({ message: 'Médico cadastrado com sucesso!' });
    } catch (error) {
      console.error('Erro ao cadastrar médico:', error);
      res.status(500).json({ message: 'Erro ao cadastrar médico' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}