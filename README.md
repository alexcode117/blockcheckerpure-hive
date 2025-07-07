# 🔗 Hive Blockchain Monitor

> **Monitor en tiempo real de la blockchain de Hive** - Una herramienta educativa para explorar y entender el funcionamiento de la blockchain de Hive.

## 📚 ¿Qué es este proyecto?

Este proyecto es un **monitor en tiempo real** que te permite observar y aprender cómo funciona la blockchain de Hive. Es perfecto para:

- 🎓 **Estudiantes** que quieren entender blockchain
- 👨‍💻 **Desarrolladores** que exploran Hive
- 🔍 **Investigadores** que analizan transacciones
- 🚀 **Entusiastas** de la tecnología blockchain

## 🎯 ¿Qué hace?

El monitor se conecta a la red de Hive y:

1. **Escucha bloques nuevos** en tiempo real
2. **Muestra información** de cada transacción
3. **Identifica tipos de operaciones** (votos, posts, transferencias, etc.)
4. **Proporciona datos educativos** sobre el funcionamiento de la blockchain

## 🛠️ Instalación

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- npm (incluido con Node.js)

### Pasos de instalación

```bash
# 1. Clona el repositorio
git clone <tu-repositorio>
cd check-block-hive

# 2. Instala las dependencias
npm install

# 3. Ejecuta el monitor
node app.js
```

## 🚀 Uso

Una vez ejecutado, verás en tu terminal:

```
Bloque #12345678
Operación: vote
Datos: { voter: 'usuario1', author: 'usuario2', ... }
Operación: transfer
Datos: { from: 'usuario1', to: 'usuario2', amount: '1.000 HIVE' }
```

## 📖 Conceptos que aprenderás

### 🔗 ¿Qué es Hive?
Hive es una blockchain de **contenido social** que permite:
- Crear y monetizar contenido
- Votar por posts de otros usuarios
- Transferir tokens (HIVE, HBD)
- Participar en gobernanza

### 🧱 ¿Qué es un bloque?
Cada bloque contiene:
- **Transacciones** de usuarios
- **Operaciones** (votos, posts, transferencias)
- **Información temporal** y de seguridad
- **Hash** del bloque anterior

### ⚡ ¿Qué son las operaciones?
Las operaciones son **acciones** que los usuarios realizan:
- `vote`: Votar por contenido
- `transfer`: Enviar tokens
- `comment`: Crear posts o comentarios
- `custom_json`: Datos personalizados

## 🔧 Personalización

### Cambiar nodos de API
```javascript
const client = new Client([
  'https://api.hive.blog',      // Nodo principal
  'https://api.hivekings.com',  // Nodo de respaldo
  // Agrega más nodos aquí
]);
```

### Filtrar operaciones específicas
```javascript
// Solo mostrar votos
if (op[0] === 'vote') {
  console.log('Voto detectado:', op[1]);
}
```

## 📚 Recursos educativos

- [Documentación oficial de Hive](https://developers.hive.io/)
- [Guía de dhive](https://github.com/ecency/dhive)
- [Explorador de Hive](https://hiveblocks.com/)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Puedes:

1. 🐛 Reportar bugs
2. 💡 Sugerir mejoras
3. 📝 Mejorar la documentación
4. ⚡ Agregar nuevas funcionalidades

## 📄 Licencia

Este proyecto está bajo la licencia ISC.

---

**¿Tienes preguntas?** ¡Abre un issue o únete a la comunidad de Hive!

*Construido con ❤️ para la educación blockchain* 