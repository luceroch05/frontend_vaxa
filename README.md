# Vaxa - Sistema de Gestión de Terapias

Sistema web para la gestión de terapias, pacientes y asistencias con funcionalidad multiempresa.

## Características

- 🏥 **Gestión de Pacientes**: Registro y administración de información de pacientes
- 📅 **Control de Asistencias**: Seguimiento de citas y terapias
- 📊 **Reportes y Análisis**: Generación de reportes detallados
- 🏢 **Multiempresa**: Gestión de múltiples clínicas y terapeutas
- 🔐 **Autenticación**: Sistema de login seguro
- 📱 **Responsive**: Diseño adaptable a dispositivos móviles

## Tecnologías

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI**: Material-UI (MUI)
- **Autenticación**: NextAuth.js
- **Base de Datos**: Prisma (PostgreSQL)
- **Styling**: Emotion (CSS-in-JS)

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
```bash
cp .env.example .env.local
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000)

## Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── auth/              # Páginas de autenticación
│   ├── dashboard/         # Panel administrativo
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizables
│   └── providers/         # Context providers
├── lib/                   # Utilidades y configuración
└── types/                 # Tipos de TypeScript
```

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código

## Licencia

MIT

