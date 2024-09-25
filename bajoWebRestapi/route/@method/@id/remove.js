import exec from '../../../../lib/exec.js'

const methods = ['deleteFile']

async function find ({ ctx }) {
  async function handler (req, reply, options) {
    const oldData = await exec.call(this, req, methods)
    return { oldData }
  }

  return { handler }
}

export default find
