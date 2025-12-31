# Prueba Técnica - Frontend React 

Esta aplicación es una solución a la prueba técnica para el cargo de Desarrollador Frontend. Implementa un sistema de gestión de "Acciones" con autenticación, listado paginado y creación de registros.

##  Tecnologías Utilizadas
* **React 18** (Vite como herramienta de construcción).
* **React Router DOM** para la navegación y protección de rutas.
* **CSS3** para los estilos (Diseño responsive y componentes UI personalizados).
* **Fetch API** para el consumo de servicios REST.
* **LocalStorage** para la persistencia del token de sesión.

##  Estructura del Proyecto
Siguiendo las buenas prácticas sugeridas, el proyecto se organiza de la siguiente manera:
```text
src/
 ├── api/        # Funciones para llamadas a endpoints (Login, Listado, Creación).
 ├── components/ # Componentes reutilizables (Header, Sidebar, DataTable, Modal).
 ├── pages/      # Vistas principales (Login, Dashboard/Bakanes).
 ├── hooks/      # Lógica personalizada (useActions para manejar datos y carga).
 ├── routes/     # Configuración de rutas y protección (ProtectedRoute).
 └── styles/     # Archivos de estilos CSS.


 
## Instalación y Ejecución
Para correr este proyecto localmente, sigue estos pasos:

1.Clonar el repositorio:

    git clone [https://github.com/tiven40020/Prueba-tecnica-frotend](https://github.com/tiven40020/Prueba-tecnica-frotend)
    cd prueba-tecnica-frontend

2.Instalar dependencias:

    npm install

3.Iniciar el servidor de desarrollo:

    npm run dev
    
La app estará disponible en http://localhost:5173

-Decisiones Técnicas y Supuestos
Autenticación: Se implementó una ruta protegida (ProtectedRoute) que verifica la existencia de un token en el almacenamiento local antes de permitir el acceso al Dashboard.

-Manejo de Estado: Se optó por un enfoque híbrido usando useState para UI local y un Hook personalizado (useActions) para gestionar el estado de los datos remotos, loaders y errores, facilitando la escalabilidad.

-Ambigüedad del API: Debido a la ambigüedad en el endpoint de creación, realicé pruebas con distintos nombres de campos. Decidí implementar Name, Description y HexCode como datos principales, y mapeé la imagen al campo Icon. Esta estructura sigue la lógica observada en el sistema, asegurando que el formulario sea funcional y procese archivos correctamente.

-UI/UX: Se implementaron estados de carga (skeletons/texto de carga) y validaciones visuales en los formularios para mejorar la experiencia del usuario.

-Entregables Adicionales
Se incluye el archivo QA_CHECKLIST.md con las 10 pruebas funcionales críticas realizadas para asegurar la estabilidad del flujo.

Desarrollado por: Giovanny Steven Contreras Lozano
