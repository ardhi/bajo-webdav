async function exists (path, opts, clientName, thrown = true, reverse = false) {
  const client = this.getClient(clientName)
  const exists = await client.exists(path)
  if (reverse) {
    if (exists && thrown) throw this.error('Path \'%s\' already exists', path)
    return !exists
  }
  if (!exists && thrown) throw this.error('Path \'%s\' doesn\'t exist yet', path)
  return exists
}

export default exists
