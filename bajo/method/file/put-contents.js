async function putContents (path, contents, opts, clientName) {
  await this.exists(path, undefined, clientName, undefined, true)
  const client = this.getClient(clientName)
  await client.putFileContents(path, contents, opts)
  const data = await client.stat(path)
  return { data }
}

export default putContents
