import { Contact, ContactsRepository, ContactsUpdateRepository } from '../interface';

export class SubmitContactUseCase {
    constructor(
      private  ContactsRepository: ContactsRepository, 
    ){}

    async execute(request : Contact){
        const { name, phone, email } = request;

        if(!name || !phone || !email){
            throw new Error('All informations are required')
        }
        if(phone.length<8 || phone.length>12 || isNaN(parseInt(phone))){
            throw new Error('Invalid phone number')
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

        if(!name || !id || !phone){
            throw new Error('All informations are required')
        }
        if(phone.length != 9 || isNaN(parseInt(phone))){
            throw new Error('Invalid phone number')
        }
        await this.ContactsUpdateRepository.update({
            id,
            name,
            phone
        })
    }
}