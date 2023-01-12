import { SubmitContactUseCase, UpdateContactUseCase } from "./contact-use-case";

const createSubmitSpy = jest.fn();
const createUpdateSpy = jest.fn();


const submitContact = new SubmitContactUseCase(
    {create: createSubmitSpy},
)

const updateContact = new UpdateContactUseCase(
    {update: createUpdateSpy},
)

describe('Submit contact',()=>{
    it('should be able to submit the contact',async ()=>{
        
        await expect(submitContact.execute({
            email: 'luis@gmail.com',
            name: 'luis',
            phone: '987654321',
    })).resolves.not.toThrow();

        expect(createSubmitSpy).toHaveBeenCalled();
})

    it('should not be able to submit the contact', async ()=>{
        
        await expect(submitContact.execute({
            email: 'luis@gmail.com',
            name: 'luis',
            phone: '',
        })).resolves.toThrow()

    })

    it('should not be able to submit the contact', async ()=>{
    
        await expect(submitContact.execute({
            email: 'luis@gmail.com',
            name: 'luis',
            phone: '0319876543212345',
        })).resolves.toThrow()
    })

})

describe('Update contact',()=>{
    it('should be able to update the contact',async ()=>{
        
        await expect(updateContact.execute({
            id: 'asoifh1819301fnd112jn12',
            name: 'luis',
            phone: '987654321',
    })).resolves.not.toThrow();

        expect(createSubmitSpy).toHaveBeenCalled();
    })

    it('should be able to update the contact',async ()=>{
        
        await expect(updateContact.execute({
            id: 'asoifh1819301fnd112jn12',
            name: 'luis',
            phone: '',
    })).resolves.toThrow();
    })

    it('should be able to update the contact',async ()=>{
        
        await expect(updateContact.execute({
            id: 'asoifh1819301fnd112jn12',
            name: 'luis',
            phone: '0319876543212345',
    })).resolves.toThrow();
    })

})