# Amiibo E-Commerce

Pequeño e-commerce utilizando como fuente de datos la API [https://www.amiiboapi.com](https://www.amiiboapi.com). Es un ejemplo básico, donde solo se abarca la parte Web.

## Stack Tecnológico utilizado

- [NodeJS](https://nodejs.org/en/): Versión 16 LTS.
- [NextJS](https://nextjs.org): Framework para desarrollo de aplicaciones Web con [React](https://reactjs.org).
- [Redux Toolkit](https://redux-toolkit.js.org/): Librería para el desarrollo con [Redux](https://redux.js.org/).
- [VSCode](https://code.visualstudio.com): Editor de código.
- [Docker](https://www.docker.com/): Ideal para despliegues y 0 dependencia tecnológica.

## Funcionalidades

- Listar productos provistos de la API amiboapi.
- Mostrar los detalles de un producto.
- Agregar los productos seleccionados al carro de compras.
- Información básica para procesar una venta.

## Dependencias

- NodeJS: Si quiere levantar la aplicación en modo desarrollo. Requerido para la sección [¿Que debo hacer? > NodeJS](#nodejs).
- Docker: Si quiere levantar la aplicación dockerizada. Requerido para la sección [¿Que debo hacer? > Docker](#docker).

## ¿Que debo hacer?

### NodeJS

Descargar o clonar el repositorio. Ubicarse en la raíz del proyecto y abra una terminal. Ejecute el siguiente comando para instalar las dependencias:

```sh
npm i
```

Luego que se instalen las dependecias, puede levantar la aplicación en:

**Modo desarrollo**

```sh
npm run dev
```

Este comando levantará la aplicación en modo desarrollo, con detección de cambios para recargar los cambios en el navegador.

**Modo producción**

```sh
npm run build
```

Para compilar la aplicación y dejar todas las optimizaciones listas

```sh
npm start
```

Para levantar la aplicación una vez compilada.

A fines de revisar el e-commerce, se recomienda utilizar el **modo de producción**, debido a que se hizo uso de [Static Site Generation (SSG)](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) + [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration), con el objetivo de elevar al máximo el rendimiento de la aplicación :ok_hand:.

Luego que la aplicación este corriendo, acceda a [http://localhost:3000](http://localhost:3000) desde su navegador para visualizar la aplicación.

### Docker

Ubicarse en la raíz del proyecto y abra una terminal. Si tiene NodeJS instalado, ejecute los siguiente comandos:

```sh
npm run docker:build
```

Este comando construirá la imagen de la aplicación compilada.

Luego para levantar la aplicación ejecute:

```sh
npm run docker:run
```

Con este comando se inicia el contenedor de docker donde se ejecutará la aplicación.

En caso de no tener instalado npm, ejecute en la raíz del proyecto el comando para compilar la imagen docker de la aplicación

```sh
docker build --rm -t amiibo .
```

Una vez creada, ejecute el siguiente comando para levantar la aplicación mediante el contenedor de docker

```sh
docker run --rm -it -p 3000:3000 amiibo
```

Luego que el contenedor de docker este corriendo, acceda a [http://localhost:3000](http://localhost:3000) desde su navegador para visualizar la aplicación.

## Feedbacks

¿Algo que reportar? Déjame saber aquí :point_right: [Twitter](https://twitter.com/mlezcano1985).
