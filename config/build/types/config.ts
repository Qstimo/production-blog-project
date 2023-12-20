export type BuildMode = 'production' | 'development';

export interface BuildPath {
    resolve(__dirname: string, arg1: string, arg2: string): string;
    entry: string,
    build: string,
    html: string,
    src: string

}
export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPath,
    isDev: boolean,
    port: number,
}
export interface BuildEnv {
    mode: BuildMode,
    port: number,
}
