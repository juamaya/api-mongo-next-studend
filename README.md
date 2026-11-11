# Proyecto FullStack
# 🎓 Student Manager - Next.js & MongoDB

Aplicación web para gestionar estudiantes mediante un CRUD completo (Create, Read, Update, Delete), desarrollada con Next.js, React, MongoDB y Tailwind CSS.

El proyecto permite crear, consultar, editar y eliminar estudiantes mediante una interfaz moderna y una API REST conectada a MongoDB.

---

## 🚀 Tecnologías utilizadas

### Frontend

- **Next.js 16** - Framework de React.
- **React** - Biblioteca para construir interfaces.
- **Tailwind CSS** - Framework de estilos.
- **SweetAlert2** - Alertas y confirmaciones interactivas.
- **JavaScript** - Lenguaje de programación.

### Backend

- **Next.js API Routes** - Creación de endpoints REST.
- **Node.js** - Entorno de ejecución.
- **MongoDB** - Base de datos NoSQL.
- **Mongoose** - Modelado de datos y conexión con MongoDB.

---

## 📂 Estructura del proyecto

```text
api-mongo-next-studend/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── student/
│   │   │       ├── route.js
│   │   │       └── [id]/
│   │   │           └── route.js
│   │   │
│   │   ├── create/
│   │   │   └── page.js
│   │   │
│   │   ├── edit/
│   │   │   └── [id]/
│   │   │       └── page.js
│   │   │
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Form.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ScrollToTop.js
│   │
│   └── app/models/
│       └── Student.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Instalación del proyecto

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Entrar en el proyecto

```bash
cd api-mongo-next-studend
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Instalar SweetAlert2

```bash
npm install sweetalert2
```

### 5. Configurar MongoDB

Crear un archivo `.env` en la raíz del proyecto:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/studentdb
```

También puedes utilizar una conexión de MongoDB Atlas.

**Importante:** No subir el archivo `.env` a GitHub. Debe estar incluido en `.gitignore`.

### 6. Ejecutar el proyecto

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

---

## 🗄️ Backend - API REST

La aplicación dispone de una API REST para gestionar los estudiantes.

### Endpoints

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/student` | Obtener todos los estudiantes |
| GET | `/api/student/[id]` | Obtener estudiante por ID |
| POST | `/api/student` | Crear estudiante |
| PUT | `/api/student/[id]` | Actualizar estudiante |
| DELETE | `/api/student/[id]` | Eliminar estudiante |

### Ejemplo de creación de estudiante

**POST**

```text
/api/student
```

Body JSON:

```json
{
  "name": "Carlos",
  "age": 25
}
```

### Ejemplo de actualización

**PUT**

```text
/api/student/ID_DEL_ESTUDIANTE
```

Body JSON:

```json
{
  "name": "Carlos actualizado",
  "age": 26
}
```

---

## 🎨 Frontend - Funcionalidades

La interfaz permite gestionar los estudiantes de forma sencilla e intuitiva.

### Funcionalidades principales

- 📋 Listado de estudiantes.
- ➕ Crear nuevos estudiantes.
- ✏️ Editar estudiantes existentes.
- 🗑️ Eliminar estudiantes.
- 🔔 Alertas interactivas con SweetAlert2.
- 📱 Diseño adaptable con Tailwind CSS.
- 🧭 Navegación entre páginas.
- 🔝 Scroll automático al cambiar de página.
- 🧩 Componentes reutilizables.

### Componentes principales

| Componente | Funcionalidad |
|---|---|
| Navbar | Navegación principal |
| Footer | Pie de página |
| Form | Formulario reutilizable para crear y editar |
| ScrollToTop | Volver al inicio al cambiar de ruta |

---

## 🔄 Funcionamiento del CRUD

1. **Create:** permite registrar nuevos estudiantes.
2. **Read:** muestra los estudiantes almacenados en MongoDB.
3. **Update:** permite modificar los datos de un estudiante.
4. **Delete:** permite eliminar estudiantes de la base de datos.

---

## 🛠️ Scripts disponibles

```bash
npm run dev
```
Inicia el servidor en modo desarrollo.

```bash
npm run build
```
Genera la versión de producción.

```bash
npm run start
```
Inicia el servidor de producción después de compilar.

```bash
npm run lint
```
Ejecuta el análisis de código, si el script está configurado.

---

## 🔐 Seguridad

- Utilizar variables de entorno para las credenciales de MongoDB.
- No publicar el archivo `.env`.
- Validar los datos recibidos en la API.
- Gestionar los errores mediante bloques try/catch.
- Utilizar validaciones de Mongoose.

---

## 👨‍💻 Autor

Proyecto desarrollado como práctica de desarrollo Full Stack utilizando Next.js, React, MongoDB y Tailwind CSS.

---

## 📄 Licencia

Este proyecto es de uso educativo y personal.ç

---

# La opción más sencilla es desplegar todo tu proyecto Next.js (frontend y API) en Vercel y utilizar MongoDB Atlas como base de datos.

 ## 1.  Subir el proyecto a GitHub
  - Primero crea un repositorio en:

  - Crear repositorio en GitHub 
Por ejemplo, llámalo:

>api-mongo-next-student

## En la terminal, dentro de la carpeta de tu proyecto, ejecuta:

Paso 1. Preparar Git
En tu terminal Git Bash ejecuta:


```bash
git init
git add .
git commit -m "Initial commit - Student Manager"
git branch -M main
```
Paso 2. Conectar con GitHub
Copia la URL de tu repositorio de GitHub y ejecuta:


```bash
git remote add origin https://github.com/TU_USUARIO/api-mongo-next-student.git
git push -u origin main
```
>¡Ya tendrás tu código subido a GitHub!

## <code >Importante: Antes de subirlo, comprueba que tu .gitignore incluya:</code>

```
gitignore
node_modules
.next
.env
.env.local
```

> No publiques las credenciales de MongoDB.

## 2. Desplegar en Vercel
 
  - Entra en Vercel 

  - Regístrate con tu cuenta de GitHub.

  - Pulsa Add New → Project.

  - Selecciona tu repositorio api-mongo-next-student.

  - Pulsa Import.

  - Configura las variables de entorno.

## 3. Configurar MongoDB Atlas

> Si utilizas MongoDB Atlas:

  - Entra en MongoDB Atlas.

  - Crea una base de datos.

  - Obtén tu cadena de conexión.

  - En Vercel, dentro de Settings → Environment Variables, añade:

Variable

Valor

MONGODB_URI

Tu cadena de conexión de MongoDB

Por ejemplo:


```env
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/studentdb
```

>No utilices literalmente ese ejemplo: introduce tus credenciales reales.

## 4. ¡Muy importante! Modificar las URL de tu API
En tus páginas Create y Edit utilizabas:


```javascript
const uri = "http://localhost:3000/api/student";
```
Esto funcionará en local, pero cuando publiques la aplicación dejará de funcionar para los visitantes.

# Cámbialo en ambos archivos por:


```javascript
const uri = "/api/student";
```
>Así funcionará tanto en local como en producción.

## 5. Publicar

### En Vercel pulsa Deploy.

 
Cuando termine, tendrás una dirección similar a:


```text
https://api-mongo-next-student.vercel.app
```

Tu aplicación tendrá disponibles:

  - ## Frontend: página principal, Create y Edit.

  - ## Backend: API REST de Next.js.

  - ## Base de datos: MongoDB Atlas.

# 6. Actualizar tu proyecto en el futuro

Cada vez que hagas modificaciones, ejecuta:


```bash
git add .
git commit -m "Update student manager"
git push
```
>Vercel detectará los cambios y desplegará automáticamente una nueva versión.

>## Mi recomendación
>### Para tu proyecto CRUD, utilizaría esta combinación:

 Servicio --------------- Funcion   

- GitHub

        - Guardar el código

- Vercel

        - Publicar frontend y backend

- MongoDB Atlas

        - Alojar la base de datos

## No necesitas GitHub Pages para este proyecto. Vercel te permite publicar tanto las páginas como las rutas API de Next.js en un mismo despliegue.