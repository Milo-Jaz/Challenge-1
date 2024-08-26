# Encriptador de Texto

Les presento mi proyecto: encriptador de texto desarrollado en HTML, CSS y JavaScript. Su propósito es encriptar y desencriptar mensajes de texto utilizando reglas de sustitución de letras específicas. Está diseñado como un reto de programación y sirve como una herramienta divertida para ocultar mensajes sencillos.

## Características

- **Encriptación personalizada**: 
  - La letra `e` es convertida en `enter`
  - La letra `i` es convertida en `imes`
  - La letra `a` es convertida en `ai`
  - La letra `o` es convertida en `ober`
  - La letra `u` es convertida en `ufat`
  
- **Desencriptación**: 
  - Es posible revertir el proceso de encriptación a su mensaje original

- **Manejo de entradas**: 
  - Elimina acentos y caracteres especiales antes de encriptar o desencriptar
  - Acepta solo letras minúsculas sin acentos, no acepta caracteres especiales.

- **Alertas personalizadas**:
  - Uso de SweetAlert2 para mostrar mensajes de advertencia y confirmación

## Lenguajes Utilizados

- **HTML5**: Para la estructura del contenido
- **CSS**: Para el diseño visual y la adaptación a diferentes pantallas
- **JavaScript**: Para la lógica programación

## Cómo Usar

1. **Encriptar o desencriptar un mensaje**:
   - Escribe el texto en el área de texto provista
   - Haz clic en el botón "Encriptar" o "Desencriptar"
   - El texto se mostrará en el área derecha de la pantalla

2. **Copiar el mensaje**:
   - Después de encriptar o desencriptar un mensaje, se mostrará un botón "Copiar". Haz clic en él para copiar el texto al portapapeles.
