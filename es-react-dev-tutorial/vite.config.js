import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,  // Permite que el contenedor acepte conexiones externas
    port: 3000,       // Cambia el puerto al 3000
    strictPort: true, // Asegura que no cambie automáticamente
    watch: {
      usePolling: true, // Forzar polling para detectar cambios en Docker
    },
    hmr: {
      clientPort: 3000, // Especifica el puerto correcto para HMR
      protocol: 'ws',   // Usa WebSockets en lugar de HTTP
    }
  },
  plugins: [react()],
})
