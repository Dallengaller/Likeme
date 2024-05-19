# Desafío - Like Me (Parte I)
# Se ha importado y utilizado el paquete Cors para habilitarlos en el servidor Express.
# Se ha importado el paquete pg para conectarse a la base de datos PostgreSQL y ejecutar consultas SQL. También se creado un archivo dbconfig.js donde se configura la conexión a la base de datos utilizando pg.Pool. Tambien se ha creada un archivo de pruebas para revisar si hay conexion con la base de datos.
# Se ha creado una ruta GET /posts en Express que devuelve todos los registros de la tabla posts en PostgreSQL. Esta ruta ejecuta una consulta SQL para seleccionar todos los registros de la tabla y los devuelve como una respuesta JSON al cliente.
# Se ha creado una ruta POST /posts en Express que recibe datos del cliente y los almacena como un nuevo registro en la tabla posts de PostgreSQL. Esta ruta recibe los datos del nuevo post a través del cuerpo de la solicitud y luego ejecuta una consulta SQL para insertar estos datos en la base de datos. Has cumplido con este punto.
# Se ha instalado un paquete para iniciar ambos servidores al mismo tiempo con NPM RUN DEV, el problema es que para cada cambio deberia reiniciar el servidor Express de forma manual ya que con Nodemon no pude iniciar el servidor para backend por tanto no permitia la conexion.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
