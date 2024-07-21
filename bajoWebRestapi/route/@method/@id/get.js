import exec from '../../../../lib/exec.js'

const methods = ['exists', 'stat']

async function find ({ ctx }) {
  async function handler (ctx, req, reply, options) {
    const data = await exec.call(this, req, methods)
    return { data }
  }

  return { handler }
}

export default find
