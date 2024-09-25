import exec from '../../../lib/exec.js'

const methods = ['createDirectory:path', 'copyFile:src,dest']

async function find ({ ctx }) {
  async function handler (req, reply, options) {
    const data = await exec.call(this, req, methods)
    return { data }
  }

  return { handler }
}

export default find
