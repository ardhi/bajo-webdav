async function stat (path, opts, clientName) {
  await this.exists(path, undefined, clientName)
  const data = await this.getClient(clientName).stat(path)
  return { data }
}

export default stat
