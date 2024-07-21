import { AuthType, createClient } from 'webdav'

async function start () {
  for (const c of this.connections ?? []) {
    if (c.options.authType) c.options.authType = AuthType[c.options.authType]
    const client = createClient(c.url, c.options)
    c.instance = client
  }
}

export default start
