import { MongoHelper } from '../helpers/mongo-helper';
import { AccountMongoRepository } from './account-repository';

describe('Account Mongo Repository', () => {
  // vai iniciar um simulador do mongoDB antes dos testes começarem
  beforeAll(async () => {
    await MongoHelper.connect(String(process.env.MONGO_URL));
  });

  // vai desconectar o simulador quando os testes acabarem
  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  // vai limpar a tabela, apos cada teste
  beforeEach(async () => {
      const accountCollection = MongoHelper.getCollection('account')
      await accountCollection.deleteMany({})
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository;
  }

  test('Should return an account on success', async () => {
    const sut = makeSut();
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toBe('any_name');
    expect(account.email).toBe('any_email@mail.com');
    expect(account.password).toBe('any_password');
  });
});