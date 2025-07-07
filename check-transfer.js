const { Client } = require('@hiveio/dhive');

const client = new Client([
  'https://api.hive.blog',
  'https://testnet.openhive.network' // Para pruebas
]);

console.log("🟢 Escuchando transacciones en vivo...");

client.blockchain.getBlockStream()
  .on('data', (block) => {
    block.transactions.forEach(tx => {
      tx.operations.forEach(op => {
        const [type, data] = op;
        // Filtrar transferencias
        if (type === 'transfer') {
          console.log(`💰 Transferencia: 
            De: ${data.from} 
            Para: ${data.to}
            Monto: ${data.amount}
          `);
        }
      });
    });
  })
  .on('error', (err) => {
    console.error("🔴 Error:", err.message);
  });