# tp2_template

# Proceso para iniciar

##Puertos
- phpMyAdmin: 9090:80
- webserver: 9999:88
- mysql: 7500:3306

## Datos del usuario
- Usuario: 1234
- Contraseña: 1234

Luego de correr `sudo docker-compose up -d` es necesario esperar unos segundos (~40) para que el servidor de MySQL
acepte la conexión por parte de la aplicación.

Esto se puede chequear tratando de logear en la base desde phpMyAdmin. Al abrir no habrá nada en la tabla *samples*.

Recién una vez que se accede, abrir `localhost:9999` en el navegador. 

*Respetar los tiempos y el orden*. Caso contrario, al cargar primero la página, se desencadena el proceso de generación de datos
y el Process querrá guardar tuplas en la base. Si la base aún no acepta la conexión se genera un error que no permite guardar nada.

Ahora podemos chequear que la tabla se está llenando con la información generada en el Process.
