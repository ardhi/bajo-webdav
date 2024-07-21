async function lock (path, opts, clientName) {
  await this.exists(path, undefined, clientName)
  const data = await this.getClient(clientName).lock(path)
  return { data }
}

export default lock
