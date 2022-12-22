import { Contact, ContactsRepository, ContactsUpdateRepository } from '../interface';

export class SubmitContactUseCase {
    constructor(
      private  ContactsRepository: ContactsRepository, 
    ){}

    async execute(request : Contact){
        const { name, phone, email } = request;

        if(!name || !phone || !email || phone.length > 9){
            throw new Error('All informations are required')
        }
        await this.ContactsRepository.create({
            email,
            name,
            phone
        })
    }
}

export class UpdateContactUseCase {
    constructor(
        private  ContactsUpdateRepository: ContactsUpdateRepository, 
      ){}
      async execute(request : Contact){
        const { name, phone, id } = request;

        if(!name || !id || !phone || phone.length > 9){
            throw new Error('All informations are required')
        }
        await this.ContactsUpdateRepository.update({
            id,
            name,
            phone
        })
    }
}
