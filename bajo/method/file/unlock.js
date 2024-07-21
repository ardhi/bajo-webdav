async function unlock (path, token, opts, clientName) {
  await this.exists(path, undefined, clientName)
  const data = await this.getClient(clientName).unlock(path, token)
  return { data }
}

export default unlock
