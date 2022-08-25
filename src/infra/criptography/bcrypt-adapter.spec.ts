import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter';

jest.mock('bcrypt', () => ({
	async hash (): Promise<string> {
		return new Promise(resolve => resolve('hash'))
	}
}))

describe('Bcryp Adapter', () => {
	test('Should call bcrypt with correct values', async () => {
		const salt = 12
		const sut = new BcryptAdapter(salt)
		const hashSpy = jest.spyOn(bcrypt,  'hash')
		await sut.encrypt('any_value')
		expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
	})
	
	test('Should return a hash on success', async () => {
		const salt = 12
		const sut = new BcryptAdapter(salt)
		const hash = await sut.encrypt('any_value')
		expect(hash).toBe('hash')
	})
})



// 1 - Quero BcrypAdapter chame meu Bcryp passando os parametros corretos
// 2 - Se o BCrypt funcionar, retorna a hash pra ele