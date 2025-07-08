const { Client } = require('@hiveio/dhive');

const client = new Client([
  'https://api.hive.blog',
  'https://testnet.openhive.network' // Para pruebas
]);

async function checkAccount() {
    try {
        const accounts = await client.database.getAccounts(['alexcode117']);
        console.log(accounts);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

checkAccount();