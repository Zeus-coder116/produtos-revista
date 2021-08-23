const db = require("../config/database");

exports.listAllProducts  = async (req, res) => {
 const codigo = req.params.codigo;
 
 const rows = await db.query('SELECT produtos_id, produtos_item, produtos_nfabricante, produtos_codigo, produtos_revista, produtos_estacao, produtos_tamanho,  produtos_cor, produtos_dbasica, produtos_imagem, produtos_estampa,  produtos_dcadastro, produtos_hora, produtos_descricao, produtos_pagina, produtos_modelo, produtos_preco, produtos_cbarras, produtos_status, produtos_num_item, produtos_num_fornecedor,produtos_tempotroca\r\
FROM public.erp_produtos\r\
where produtos_revista ='+codigo+'');
 
 return res.json(rows.rows);
  };
