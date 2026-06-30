# Comandos completos del proyecto

Estos son los comandos para iniciar el repositorio, instalar dependencias, crear `node_modules`, levantar la base de datos y ejecutar el proyecto.

## 1. Iniciar o descargar el repositorio con Git

Si vas a descargarlo desde GitHub:

```powershell
git clone https://github.com/MarisolAL16/LabEnvioyProcesamientoDatos.git
cd LabEnvioyProcesamientoDatos
```

Si lo estas creando desde cero en una carpeta local:

```powershell
mkdir LabEnvioyProcesamientoDatos
cd LabEnvioyProcesamientoDatos
git init
git branch -M main
git remote add origin https://github.com/MarisolAL16/LabEnvioyProcesamientoDatos.git
```

Para guardar cambios en Git:

```powershell
git status
git add .
git commit -m "Inicio del proyecto"
git push -u origin main
```

## 2. Crear e instalar el backend

```powershell
mkdir backend
cd backend
npm init -y
npm install bcrypt cors dotenv express mysql2 nodemon
```

Esto crea `node_modules` en backend e instala:

```powershell
npm install bcrypt
npm install cors
npm install dotenv
npm install express
npm install mysql2
npm install nodemon
```

Tambien se puede instalar todo junto:

```powershell
npm install bcrypt cors dotenv express mysql2 nodemon
```

## 3. Crear e instalar el frontend con React y Vite

Desde la raiz del proyecto:

```powershell
cd ..
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

Dependencias principales del frontend:

```powershell
npm install bootstrap bootstrap-icons react react-dom react-router-dom
```

Dependencias de desarrollo del frontend:

```powershell
npm install -D @eslint/js @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals vite
```

Esto crea `node_modules` en frontend.

## 4. Base de datos con Docker

Desde la raiz del proyecto:

```powershell
mkdir database
cd database
```

Despues de tener el archivo `docker-compose.yml`:

```powershell
docker compose up -d
```

Para revisar contenedores:

```powershell
docker ps
```

Para detenerlos:

```powershell
docker compose down
```

## 5. Ejecutar el backend

```powershell
cd backend
npm run dev
```

O tambien:

```powershell
npm start
```

## 6. Ejecutar el frontend

```powershell
cd frontend
npm run dev
```

## 7. Comandos rapidos si el proyecto ya existe

Backend:

```powershell
cd backend
npm install
npm run dev
```

Frontend:

```powershell
cd frontend
npm install
npm run dev
```

Base de datos:

```powershell
cd database
docker compose up -d
```
