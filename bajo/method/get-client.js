function getClient (name = 'default', returnConn) {
  if (typeof name !== 'string') return name
  const conn = this.connections.find(c => c.name === name)
  if (!conn) throw this.error('No such connection \'%s\'', name)
  return returnConn ? conn : conn.instance
}

export default getClient
