/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// {
//   "compilerOptions": {
//       "target": "es5",
//       "lib": ["dom", "dom.iterable", "esnext"],
//       "allowJs": true,
//       "skipLibCheck": true,
//       "strict": true,
//       "noImplicitAny": false,
//       "forceConsistentCasingInFileNames": true,
//       "noEmit": true,
//       "esModuleInterop": true,
//       "module": "esnext",
//       "moduleResolution": "node",
//       "resolveJsonModule": true,
//       "isolatedModules": true,
//       "jsx": "preserve",
//       "incremental": true,
//       "baseUrl": "./src",
//       "paths": {
//           "@/lib/*": ["lib/*"],
//           "@/env/*": ["lib/env/*"],
//           "@/helpers/*": ["lib/helpers/*"],
//           "@/codegen/*": ["lib/codegen/*"],
//           "@/components/*": ["components/*"],
//           "@/hooks/*": ["lib/hooks/*"],
//           "@/styles/*":["styles/*"]
//       }
//   },
//   "include": ["next-env.d.ts", "./**/*.ts", "./**/*.tsx"],
//   "exclude": ["node_modules"]
// }
