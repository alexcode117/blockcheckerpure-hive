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

## 🎯 ¿Qué puedes aprender?

### 🔗 Conceptos de Hive Blockchain
- **Bloques**: Contenedores de transacciones con información temporal
- **Transacciones**: Agrupaciones de operaciones relacionadas
- **Operaciones**: Acciones específicas (votos, transferencias, posts)
- **Nodos**: Servidores que mantienen la red

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