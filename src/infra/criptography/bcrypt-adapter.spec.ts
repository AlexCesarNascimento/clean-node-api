import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter';

describe('Bcryp Adapter', () => {
	test('Should call bcrypt with correct values', async () => {
		const salt = 12
		const sut = new BcryptAdapter(salt)
		const hashSpy = jest.spyOn(bcrypt,  'hash')
		await sut.encrypt('any_value')
		expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
	})
})



// 1 - Quero BcrypAdapter chame meu Bcryp passando os parametros corretos