import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      UnoCSS()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_PORT),
      // open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          changeOrigin: true,
          target: env.VITE_APP_TARGET_URL,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), env.VITE_APP_TARGET_BASE_API)
        }
      }
    }
  }
})
