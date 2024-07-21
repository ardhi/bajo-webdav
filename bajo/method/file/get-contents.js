async function getContents (path, opts, clientName) {
  await this.exists(path, undefined, clientName)
  const client = this.getClient(clientName)
  const data = await client.getFileContents(path, opts)
  return { data }
}

export default getContents
