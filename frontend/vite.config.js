import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src"),
      "@components":path.resolve(__dirname,"./src/components"),
      "@sections":path.resolve(__dirname,"./src/sections"),
      "@assets":path.resolve(__dirname,"./src/assets"),
      "@hooks":path.resolve(__dirname,"./src/hooks"),
      "@layout":path.resolve(__dirname,"./src/layout"),
      "@pages":path.resolve(__dirname,"./src/pages"),
      "@styles":path.resolve(__dirname,"./src/styles"),
      "@utils":path.resolve(__dirname,"./src/utlis"),

    }
  }
})
