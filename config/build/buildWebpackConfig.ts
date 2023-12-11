import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlagins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options:BuildOptions):webpack.Configuration {
    const { mode, paths } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlagins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
    };
}
