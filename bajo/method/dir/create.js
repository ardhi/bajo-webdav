async function createDirectory (path, opts, clientName) {
  await this.exists(path, undefined, clientName, undefined, true)
  const client = this.getClient(clientName)
  await client.createDirectory(path, opts)
  const data = client.stat(path)
  return { data }
}

export default createDirectory
