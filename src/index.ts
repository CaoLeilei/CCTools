import { program } from "@commander-js/extra-typings"
import command from './commands'

// const commandOptions = {}

const bootstrap = async () => {
  // const program = createCommand()
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
