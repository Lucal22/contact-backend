import { SubmitContactUseCase } from "./submit-contact-use-case";

const createSubmitSpy = jest.fn();

const submitContact = new SubmitContactUseCase(
    {create: createSubmitSpy},
)

describe('Submit contact',()=>{
    it('should be able to submit the contact',async ()=>{
        
        await expect(submitContact.execute({
            email: 'test@email.com',
            name: 'luis',
            phone: '987654321',
    })).resolves.not.toThrow();

        expect(createSubmitSpy).toHaveBeenCalled();
})

    it('should not be able to submit the contact', async ()=>{
        
        await expect(submitContact.execute({
            email: 'test@email.com',
            name: 'luis',
            phone: '987654321',
        })).resolves.toThrow()
    })

})