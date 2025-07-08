# 🔗 Hive Blockchain Monitor

> **Suite de herramientas educativas para monitorear la blockchain de Hive** - Múltiples herramientas para explorar y entender el funcionamiento de la blockchain de Hive desde diferentes perspectivas.

## 📚 ¿Qué es este proyecto?

Este proyecto es una **colección de herramientas educativas** que te permiten observar y aprender cómo funciona la blockchain de Hive desde diferentes ángulos. Es perfecto para:

- 🎓 **Estudiantes** que quieren entender blockchain
- 👨‍💻 **Desarrolladores** que exploran Hive
- 🔍 **Investigadores** que analizan transacciones específicas
- 🚀 **Entusiastas** de la tecnología blockchain

## 🛠️ Herramientas incluidas

### 📦 `check-block.js` - Monitor General de Bloques
**Monitorea todos los bloques y operaciones en tiempo real**

```bash
node check-block.js
```

**Características:**
- Escucha todos los bloques nuevos
- Muestra todas las operaciones (votos, posts, transferencias, etc.)
- Proporciona una vista completa de la actividad de la blockchain

### 💰 `check-transfer.js` - Monitor de Transferencias
**Se enfoca específicamente en transacciones de transferencia**

```bash
node check-transfer.js
```

**Características:**
- Filtra solo operaciones de transferencia
- Muestra detalles específicos: remitente, destinatario, monto
- Incluye manejo de errores
- Usa emojis para mejor visualización

### 👤 `check-account.js` - Consulta de Cuentas
**Obtiene información detallada de una cuenta específica**

```bash
node check-account.js
```

**Características:**
- Consulta datos completos de una cuenta
- Muestra balance, reputación, delegaciones
- Información de metadatos y configuración
- Útil para análisis de cuentas específicas

### 📜 `check-account-history.js` - Historial de Cuentas
**Analiza el historial de operaciones de una cuenta**

```bash
node check-account-history.js
```

**Características:**
- Muestra las últimas operaciones de una cuenta
- Filtra y formatea diferentes tipos de operaciones
- Incluye detalles específicos por tipo (transferencias, votos, comentarios)
- Configurable número de operaciones a mostrar
- Interfaz visual mejorada con emojis

## 🎯 ¿Qué puedes aprender?

### 🔗 Conceptos de Hive Blockchain
- **Bloques**: Contenedores de transacciones con información temporal
- **Transacciones**: Agrupaciones de operaciones relacionadas
- **Operaciones**: Acciones específicas (votos, transferencias, posts)
- **Nodos**: Servidores que mantienen la red
- **Cuentas**: Entidades con balances y reputación en la red
- **Historial**: Registro completo de todas las operaciones de una cuenta

### 📊 Tipos de Operaciones que Observarás
- `vote`: Votar por contenido de otros usuarios
- `transfer`: Enviar tokens HIVE/HBD entre cuentas
- `comment`: Crear posts o comentarios
- `custom_json`: Datos personalizados para aplicaciones

## 🚀 Instalación y Uso

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- npm (incluido con Node.js)

### Instalación

```bash
# 1. Clona el repositorio
git clone <tu-repositorio>
cd check-block-hive

# 2. Instala las dependencias
npm install
```

### Ejecución

```bash
# Monitor general de bloques
node check-block.js

# Monitor específico de transferencias
node check-transfer.js

# Consulta información de cuenta
node check-account.js

# Analiza historial de cuenta
node check-account-history.js
```

## 📖 Ejemplos de Salida

### Monitor General (`check-block.js`)
```
Bloque #12345678
Operación: vote
Datos: { voter: 'usuario1', author: 'usuario2', weight: 1000 }
Operación: transfer
Datos: { from: 'usuario1', to: 'usuario2', amount: '1.000 HIVE' }
```

### Monitor de Transferencias (`check-transfer.js`)
```
🟢 Escuchando transacciones en vivo...
💰 Transferencia: 
    De: usuario1 
    Para: usuario2
    Monto: 1.000 HIVE
```

### Consulta de Cuenta (`check-account.js`)
```
{
  name: 'alexcode117',
  balance: '100.000 HIVE',
  hbd_balance: '50.000 HBD',
  reputation: '1234567890',
  ...
}
```

### Historial de Cuenta (`check-account-history.js`)
```
📜 Últimas 3 operaciones de alexcode117:

🔹 ID: 123456 | Bloque: 78901234
🕒 2024-01-15T10:30:00 | Tipo: transfer
💸 TRANSFERENCIA: 
    De: alexcode117
    Para: usuario2
    Monto: 1.000 HIVE
    Memo: --sin memo--

🔹 ID: 123455 | Bloque: 78901233
🕒 2024-01-15T10:25:00 | Tipo: vote
⬆️ VOTO: 
    Votante: alexcode117
    Autor: usuario3
    Post: mi-post
    Peso: 100%
```

## 🔧 Personalización Avanzada

### Modificar Nodos de API
```javascript
const client = new Client([
  'https://api.hive.blog',           // Nodo principal
  'https://api.hivekings.com',       // Nodo de respaldo
  'https://testnet.openhive.network' // Para pruebas
]);
```

### Crear Filtros Personalizados
```javascript
// Solo mostrar votos
if (type === 'vote') {
  console.log('🎯 Voto detectado:', data);
}

// Solo transferencias grandes
if (type === 'transfer' && parseFloat(data.amount) > 100) {
  console.log('💎 Transferencia grande:', data);
}
```

### Personalizar Consultas de Cuenta
```javascript
// Cambiar la cuenta a consultar
const accounts = await client.database.getAccounts(['tu-usuario']);

// Obtener múltiples cuentas
const accounts = await client.database.getAccounts(['usuario1', 'usuario2']);
```

### Configurar Historial de Cuenta
```javascript
// Cambiar cuenta y número de operaciones
analizarHistorial('tu-usuario', 10); // Últimas 10 operaciones

// Obtener operaciones desde un punto específico
const historial = await client.database.getAccountHistory(
  cuenta, 
  startingPoint,  // ID de operación específico
  limite
);
```

### Agregar Nuevas Herramientas
Crea nuevos archivos como `check-votes.js`, `check-posts.js`, etc., siguiendo el patrón establecido.

## 📚 Recursos Educativos

- [Documentación oficial de Hive](https://developers.hive.io/)
- [Guía de dhive](https://github.com/ecency/dhive)
- [Explorador de Hive](https://hiveblocks.com/)
- [Testnet de Hive](https://testnet.openhive.network/)

## 🎓 Proyectos de Aprendizaje Sugeridos

1. **Analizador de Patrones**: Crear una herramienta que detecte patrones en las transferencias
2. **Monitor de Usuarios**: Seguir la actividad de usuarios específicos
3. **Estadísticas en Tiempo Real**: Contar tipos de operaciones por minuto
4. **Alertas Personalizadas**: Notificar cuando ocurran eventos específicos
5. **Comparador de Cuentas**: Analizar y comparar múltiples cuentas
6. **Análisis de Reputación**: Seguir cambios en la reputación de cuentas
7. **Monitor de Delegaciones**: Rastrear delegaciones de poder de voto

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Puedes:

1. 🐛 Reportar bugs
2. 💡 Sugerir nuevas herramientas
3. 📝 Mejorar la documentación
4. ⚡ Agregar nuevas funcionalidades
5. 🎨 Mejorar la visualización de datos

## 📄 Licencia

Este proyecto está bajo la licencia ISC.

---

**¿Tienes preguntas?** ¡Abre un issue o únete a la comunidad de Hive!

*Construido con ❤️ para la educación blockchain* 