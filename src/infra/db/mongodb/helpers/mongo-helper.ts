import { MongoClient } from 'mongodb'

// como a sintaxe de um objeto é igual a sintase de typagem do Typescript, precisamos passar um valor, e depois fazer o casting
export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (url: string): Promise<void> {
    this.client = await MongoClient.connect(url);
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}