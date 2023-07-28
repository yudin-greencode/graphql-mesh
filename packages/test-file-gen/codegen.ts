
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '../single-source/.mesh/schema.graphql',
  documents: ['../single-source/.mesh/**/*.ts'],

  generates: {
    './components.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config:{
        withHooks: true,
      }
    }
  }
};

export default config;
