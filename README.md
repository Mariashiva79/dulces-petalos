## 🌸 Floristería Dulces Pétalos - Catálogo Online
Proyecto desarrollado en React para el catálogo de la floristería "Dulces Pétalos". 
La aplicación permite visualizar un listado de plantas, filtrar en tiempo real y consultar detalles específicos de cada una.

## 🚀 Características
Listado Dinámico: Consumo de API REST para mostrar el catálogo actualizado.

Buscador Inteligente: Filtrado en tiempo real por nombre común y nombre científico.

Responsive Design: Diseño adaptado para Desktop (3 columnas), Tablet (2 columnas) y Móvil (1 columna) basado en Figma.

Detalle de Producto: Vista extendida con requerimientos de cuidado (riego y fertilización).

Navegación: Sistema de rutas con React Router y Breadcrumbs funcionales.

## 🛠️ Stack Tecnológico
React (Vite)

TypeScript

React Router Dom (Navegación)

CSS (Diseño basado en Tokens de Figma)

## 📦 Instalación y Uso
Clonar el repositorio: 

```bash
git clone https://github.com/Mariashiva79/dulces-petalos.git
```
Instalar dependencias: 
```bash
npm install
```
Ejecutar en modo desarrollo: 
```bash
npm run dev
```

Construir para producción: 
```bash
npm run build
```
## 🏗️ Arquitectura del Proyecto
El proyecto sigue una estructura modular para facilitar el mantenimiento:

/src/components: Componentes reutilizables (SearchBar, ProductCard, Header, Breadcrumbs).

/src/pages: Vistas principales (ProductList y ProductDetail).

/src/services: Lógica de conexión con la API (productService.ts).

/src/types: Definiciones de interfaces TypeScript.

## 📐 Especificaciones de Diseño (Figma)
Se han aplicado los valores técnicos extraídos directamente del diseño de Figma proporcionado.

Layout: Contenedor principal de 1200px centrado.

Tipografía: Nunito para títulos/precios y DM Sans para el cuerpo de texto.

Tokens: Uso de variables CSS para colores (Accent #771E42) y radios (16px).

## 🔌 API Reference
La aplicación consume los siguientes endpoints de https://dulces-petalos.jakala.es/:

GET /api/v1/product: Listado completo de flores.

GET /api/v1/product/:id: Detalle por identificador único.
``