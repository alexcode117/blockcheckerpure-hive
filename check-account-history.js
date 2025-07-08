const { Client } = require('@hiveio/dhive');

// 1. Configurar cliente
const client = new Client([
  'https://api.hive.blog',
  'https://api.openhive.network'
]);

// 2. Función para obtener historial
async function analizarHistorial(cuenta, limite = 5) {
  try {
    const historial = await client.database.getAccountHistory(
      cuenta, 
      -1,       // Comenzar desde la operación más reciente
      limite
    );

    console.log(`📜 Últimas ${limite} operaciones de ${cuenta}:`);
    
    // 3. Procesar cada operación
    historial.forEach(([id, opData]) => {
      const [tipo, datos] = opData.op;
      console.log(`\n🔹 ID: ${id} | Bloque: ${opData.block}`);
      console.log(`🕒 ${opData.timestamp} | Tipo: ${tipo}`);
      
      // 4. Mostrar detalles según tipo de operación
      switch(tipo) {
        case 'transfer':
          console.log(`💸 TRANSFERENCIA: 
            De: ${datos.from}
            Para: ${datos.to}
            Monto: ${datos.amount}
            Memo: ${datos.memo || '--sin memo--'}`);
          break;
          
        case 'vote':
          console.log(`⬆️ VOTO: 
            Votante: ${datos.voter}
            Autor: ${datos.author}
            Post: ${datos.permlink}
            Peso: ${datos.weight / 100}%`);
          break;
          
        case 'comment':
          console.log(`💬 COMENTARIO: 
            Título: ${datos.title || '--sin título--'}
            Enlace: ${datos.parent_author}/${datos.parent_permlink}`);
          break;
          
        default:
          console.log('📦 Datos:', datos);
      }
    });
    
  } catch (error) {
    console.error('🚨 Error:', error.message);
  }
}

// 5. Ejecutar análisis (ej: últimas 3 operaciones de 'dan')
analizarHistorial('alexcode117', 3);