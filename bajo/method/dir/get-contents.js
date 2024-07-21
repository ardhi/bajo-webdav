async function getContents (path, opts, clientName) {
  await this.exists(path, undefined, clientName)
  const client = this.getClient(clientName)
  const data = await client.getDirectoryContents(path, opts)
  return { data }
}

export default getContents
