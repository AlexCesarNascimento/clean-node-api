import {
    AddAccountRepository,
  } from '../../../../data/protocols/add-account-repository';
  import {
    AddAccountModel,
  } from '../../../../domain/usecases/add-account';
  import { AccountModel } from '../../../../domain/models/account';
  import { MongoHelper } from '../helpers/mongo-helper';
  import { Document, WithId } from 'mongodb';
  
  /**
   * MongoDB Account Repository class
   */
  export class AccountMongoRepository implements AddAccountRepository {
    /**
     * Add a new account to MongoDB database
     * @param {AddAccountModel} account - account data to be added
     * @return {Promise<AccountModel>}
     */
    public async add(account: AddAccountModel): Promise<AccountModel> {
      const accountCollection = MongoHelper.getCollection('accounts');
      const result = await accountCollection.insertOne(account);
      const insertedAccount = await accountCollection.findOne({
        _id: result.insertedId,
      });
      console.log(insertedAccount)
      const { _id, ...accountWithoutId } = insertedAccount as WithId<Document>;
      const parsedAccount = Object.assign({}, accountWithoutId, {
        id: _id,
      }) as unknown as AccountModel;
      console.log(parsedAccount)
      return parsedAccount;
    }
  }