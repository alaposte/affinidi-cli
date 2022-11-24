import { CliUx, Command } from '@oclif/core'
import { VAULT_KEYS, vaultService } from '../services'

export default class Analytics extends Command {
  static description = 'Opt-in or opt-out of analytics'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static args = [
    {
      name: 'newValue',
      required: false,
      description: 'Whether to send analytics to Affinidi',
      options: ['true', 'false'],
    },
  ]

  public async run(): Promise<void> {
    const { args } = await this.parse(Analytics)

    if (args.newValue != null) {
      vaultService.set(VAULT_KEYS.analyticsOptIn, args.newValue)
    }

    if (vaultService.get(VAULT_KEYS.analyticsOptIn) === 'true') {
      CliUx.ux.info('You have opted in to analytics')
    } else {
      CliUx.ux.info('You have not opted in to analytics')
    }
  }
}
