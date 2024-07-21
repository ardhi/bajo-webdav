async function copy (src, dest, opts, clientName) {
  const client = this.getClient(clientName)
  let exists = await client.exists(src)
  if (!exists) throw this.error('Source path \'%s\' doesn\'t exist yet', src)
  exists = await client.exists(dest)
  if (exists) throw this.error('Destination path \'%s\' exists already', dest)
  await client.copyFile(src, dest, opts)
  const data = await client.stat(dest)
  return { data }
}

export default copy
