                                          BASE DE DATOS

BDD 🗃️
Tipo SQL 💾

- Manejada por Postgres, un database management system (DBMS), es la encargada de almacenar la información. 📚

- El DBMS habla lenguaje SQL y el servidor de Express está en Javascript. La librería Sequelize un ORM nos permite comunicar el servidor y la base de datos, funcionando como intérprete entre javascript y SQL. 📜🔍

- Instalar pg y pg-hstore, dos drivers para que sequelize hable con postgres. 📥⚙️

Crear la base de datos. 💿

- Hacer la conexión a la base de datos con mi información que debe estar en un archivo .env, es una nueva instancia de sequelize. 🔌🔒

- Crear los modelos con el que voy a trabajar, los modelos se definen a la conexión que ya creé. 🏗️📝

- Crear las relaciones entre los modelos dependiendo de su cardinalidad. ↔️🔗

                                            BACKEND

SERVIDOR 🖥️
BFF backend for frontend - Node 🤝

- Aplicación de Express, no tiene como responsabilidad guardar información, es quien provee de información al cliente, ante toda request una response, aun cuando no se logre hacer lo que el cliente pide, siempre se da una respuesta al cliente. 📤📥🔌

- Para esto pide la información a una base de datos, la base de datos es algo totalmente externo a mi aplicación de Express. 🗃️🔗

- Una vez Express le pide a Postgres la información, esta llega como un objeto y se puede manipular para pasar como response a la request del cliente, al recibir la información llega con todas las propiedades que hay en la base de datos y solo queremos enviar las que el cliente solicitó. 🔄📊

Mi servicio cumplirá con 4 funciones:

1. Pedir información a la API externa.
2. Pedir información a mi BDD.
3. Unificar las respuestas.
4. Responder al cliente. ✅📡
5. Creo el servidor con Express, creo los middlewares por los que pasarán las request y pongo a escuchar en algún puerto el servidor. 🚀🔊

- odularizo y creo las peticiones con el protocolo HTTP a cada ruta. 🛣️📥📤

- El handler no debe tocar el modelo, tiene una función que interactúa con el modelo, esa función será un controlador. 🧰🎛️

- Mi controlador hará BUSCAR EN BASE DE DATOS, BUSCAR EN API, UNIFICAR. Los datos que le paso al controlador son los datos que pide mi modelo. 🔍🔁🔀

- La ruta se conecta con el handler, se conecta con el controlador, y el controlador se conecta con el modelo. ↔️🔄🔗

- De parte del backend, las librerías con las que trabajaré son: npm i express nodemon morgan axios sequelize pg-hstore dotenv. 📦🔧
