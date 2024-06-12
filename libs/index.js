'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const extra_typings_1 = require("@commander-js/extra-typings");
const commands_1 = tslib_1.__importDefault(require("./commands"));
// const commandOptions = {}
const bootstrap = async () => {
    // const program = createCommand()
    console.log(commands_1.default);
    // console.log(program)
    extra_typings_1.program
        .version(require('../package.json').version, '-v, --version', 'Output the current version.')
        .usage('<command> [options]')
        .helpOption('-h, --help', 'Output usage information.');
};
bootstrap();
