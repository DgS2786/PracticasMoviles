# Mobile UI Showcase App

Aplicación móvil desarrollada con React Native y Expo que demuestra el uso
de múltiples componentes de interfaz moderna, gestión de estado, theming
global y un módulo CRUD conectado a Firebase.

Este proyecto funciona como un laboratorio de UI/UX, integración con backend
y pruebas de interacción en dispositivos móviles.

---

## Descripción

Mobile UI Showcase App es una aplicación demostrativa que integra:

- Pantalla de perfil con galería
- Pantalla de componentes interactivos
- Vista de producto con notificaciones
- Tabla de inventario
- CRUD en tiempo real con Firebase

La app permite explorar múltiples patrones de diseño y comportamiento
común en aplicaciones reales.

---

## Módulos

### Perfil
- Avatar con badge
- Estado verificado
- Galería con Grid
- Botón de edición
- Guardar cambios

### Componentes interactivos
- Selector de color global
- Checkbox, Radio y Select
- Slider, Switch y TextArea
- Enlaces externos
- Botones con estados dinámicos

### Catálogo y notificaciones
- Tarjeta de producto
- Toast personalizado
- Acciones (Agregar, Wishlist)

### Tabla de inventario
- Tabla con estados
- Badges con íconos
- Indicadores visuales

### CRUD Firebase
- Insertar registros
- Actualizar registros
- Eliminar registros
- Búsqueda por ID o campo
- Resultados dinámicos

---

## Tecnologías

- React Native
- Expo
- TypeScript
- Gluestack UI
- Firebase Firestore
- Context API para theming
- Hooks (useState, useEffect)

---

## Arquitectura

1. La interfaz se construye con componentes reutilizables.
2. El tema global se controla con Context.
3. Los datos remotos se almacenan en Firebase.
4. Los eventos actualizan el estado local.
5. La UI se re-renderiza dinámicamente.

---
