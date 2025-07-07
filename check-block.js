const { Client } = require('@hiveio/dhive');

const client = new Client([
  'https://api.hive.blog',
  'https://api.hivekings.com'
]);

// Escuchar bloques nuevos
client.blockchain.getBlockStream().on('data', (block) => {
  console.log(`Bloque #${block.block_id}`);
  block.transactions.forEach(tx => {
    tx.operations.forEach(op => {
      console.log('Operación:', op[0]); // Tipo de operación
      console.log('Datos:', op[1]);     // Contenido
    });
  });
});