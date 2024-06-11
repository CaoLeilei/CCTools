import { createCommand } from "commander"
import command from './commands/index'

// const commandOptions = {}

const bootstrap = async () => {
  const program = createCommand()
  console.log(command)
  // console.log(program)
  program
    .version(
      require('../package.json').version,
      '-v, --version',
      'Output the current version.',
    )
    .usage('<command> [options]')
    .helpOption('-h, --help', 'Output usage information.');
}

bootstrap()
