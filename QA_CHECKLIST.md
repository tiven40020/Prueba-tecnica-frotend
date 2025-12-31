# QA Checklist - Prueba Técnica Frontend React

Este documento detalla las pruebas funcionales realizadas para validar el flujo completo de la aplicación "BeKing - Gestión de Acciones".

## 1. Módulo de Autenticación (Login)
- [x] **TC-01: Validación de campos vacíos.** Intentar hacer login sin ingresar datos. *Resultado esperado: El formulario no debe enviarse o debe mostrar alertas de campos requeridos.*
- [x] **TC-02: Manejo de credenciales erróneas.** Ingresar un correo o contraseña incorrectos. *Resultado esperado: El sistema muestra un mensaje de error claro (ej. "Credenciales inválidas").*
- [x] **TC-03: Login exitoso y persistencia.** Ingresar credenciales válidas. *Resultado esperado: Redirección al Dashboard y almacenamiento del Token en LocalStorage.*
- [x] **TC-04: Protección de rutas.** Intentar acceder a `/bakanes` sin haber iniciado sesión. *Resultado esperado: Redirección automática al Login.*

## 2. Dashboard y Listado de Acciones
- [x] **TC-05: Carga inicial de datos.** Entrar al dashboard con sesión activa. *Resultado esperado: Visualización de un loader y posterior carga de la tabla con datos del API.*
- [x] **TC-06: Formateo de datos.** Verificar que las fechas se vean como `DD MMM YYYY` y que los estados muestren un badge (Activo/Inactivo). *Resultado esperado: Los datos son legibles y visualmente coherentes.*

## 3. Paginación
- [ ] **TC-07: Navegación entre páginas.** Clic en el botón "Siguiente" (›). *Resultado esperado: La tabla se actualiza con los siguientes 10 registros y el texto informativo cambia (ej. "11 - 20 de ...").*
- [ ] **TC-08: Límites de paginación.** Verificar el botón "Atrás" en la página 1. *Resultado esperado: El botón debe estar deshabilitado (`disabled`).*

## 4. Crear Acción (Modal)
- [x] **TC-09: Interfaz del Modal.** Clic en el botón "Crear Categoría" en el ActionBar. *Resultado esperado: Apertura del modal con los campos: Nombre, Descripción, Logo, Color y Switch de Estado.*
- [x] **TC-10: Contador de caracteres dinámico.** Escribir en el campo de descripción. *Resultado esperado: El contador de caracteres (0/200) se actualiza en tiempo real.*

---
**Nota:** Todas las pruebas fueron realizadas en entorno local usando el navegador (Chrome/Edge) y herramientas de desarrollador para validar las peticiones de red hacia los subdominios correspondientes.
