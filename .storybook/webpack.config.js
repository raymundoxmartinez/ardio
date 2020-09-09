const path = require('path')

module.exports = ({ config }) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    config.module.rules[0].use[0].options.plugins = [
        // use @babel/plugin-proposal-class-properties for class arrow functions
        require.resolve('@babel/plugin-proposal-class-properties'),
        // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
        require.resolve('babel-plugin-remove-graphql-queries'),
    ]
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
        require.resolve('@babel/preset-react'),
        require.resolve('@babel/preset-env'),
    ]
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main']
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [['react-app', { flow: false, typescript: true }]],
        },
    })
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.alias = {
        '@src': path.join(__dirname, '../src'),
        '@components': path.join(__dirname, '../src/components'),
        '@atoms': path.join(__dirname, '../src/components/atoms'),
        '@molecules': path.join(__dirname, '../src/components/molecules'),
        '@templates': path.join(__dirname, '../src/components/templates'),
        '@forms': path.join(__dirname, '../src/components/forms'),
        '@routes': path.join(__dirname, '../src/components/routes'),
        '@theme': path.join(__dirname, '../src/theme'),
    }

    return config
}
