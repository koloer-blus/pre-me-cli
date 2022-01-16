import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default {
    plugins: [
        reactRefresh(),
    ],
    resolve: {
        modules: ['node_modules'],
        mainFiles: ['index'],
        mainFields: ['browser', 'module', 'main'],
        extensions: ['.js', '.json', '.jsx'],
        alias: [
            { find: '@', replacement: path.resolve(__dirname, '../src') },
            { find: "components", replacement: path.resolve(__dirname, '../src/components') },
            { find: "pages", replacement: path.resolve(__dirname, '../src/pages') },
            { find: "hooks", replacement: path.resolve(__dirname, '../src/hooks') },
            { find: "types", replacement: path.resolve(__dirname, '../src/types') },
        ]
    }
};