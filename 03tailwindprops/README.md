

Tailwind Installation ->>

npm install tailwindcss @tailwindcss/vite

->>>>> In vite.config.js

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
->>>import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,
    ->>tailwindcss()
  ],
})


@import "tailwindcss";

->> In index.css



->>> props makes components reusable 
