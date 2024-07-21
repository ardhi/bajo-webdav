async function remove (path, opts, clientName) {
  if (path[path.length - 1] !== '/') path += '/'
  await this.exists(path, undefined, clientName)
  const client = this.getClient(clientName)
  const oldData = await client.stat(path)
  await client.deleteFile(path, opts)
  return { oldData }
}

export default remove
