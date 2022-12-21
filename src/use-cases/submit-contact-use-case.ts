import { Contact } from '../interface';
import { ContactsRepository } from '../repositories/contacts-repository';

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
