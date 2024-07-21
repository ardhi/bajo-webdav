async function exec (req, methods) {
  const { camelCase } = this.app.bajo.lib._
  const method = camelCase(req.params.method)
  const methodsKeys = []
  const methodsParts = {}
  for (const m of methods) {
    const [mk, mp] = m.split(':')
    methodsKeys.push(mk)
    if (mp) methodsParts[mk] = mp.split(',')
  }
  if (!methodsKeys.includes(method)) throw this.error('Invalid method \'%s\'', method)
  const client = this.getClient(req.query.conn)
  let isHelper = false
  let handler = this[method]
  if (handler) isHelper = true
  else handler = client[method]
  if (!handler) throw this.error('Unknown method \'%s\'', method)
  const args = []
  const opts = {}
  if (req.params.id) args.unshift(req.params.id)
  const parts = methodsParts[method] ?? []
  if (parts.length > 0) args.push(...parts.map(p => req.body[p]))
  args.push(opts)
  if (isHelper) args.push(client)
  return await handler(...args)
}

export default exec
