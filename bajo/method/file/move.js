async function move (src, dest, opts, clientName) {
  const client = this.getClient(clientName)
  let exists = await client.exists(src)
  if (!exists) throw this.error('Source path \'%s\' doesn\'t exist yet', src)
  const oldData = client.stat(src)
  exists = await client.exists(dest)
  if (exists) throw this.error('Destination path \'%s\' exists already', dest)
  await client.moveFile(src, dest, opts)
  const data = client.stat(dest)
  return { oldData, data }
}

export default move
