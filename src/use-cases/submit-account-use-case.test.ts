import { SubmitAccountUseCase } from "./submit-account-use-case";

const createSubmitSpy = jest.fn();

const submitFeedback = new SubmitAccountUseCase(
    {create: createSubmitSpy},
)

describe('Submit account',()=>{
    it('should be able to submit the account',async ()=>{
        
        await expect(submitFeedback.execute({
            email: 'test@email.com',
            password: 'test12345',
    })).resolves.not.toThrow();

        expect(createSubmitSpy).toHaveBeenCalled();
})

    it('should not be able to submit the account', async ()=>{
        
        await expect(submitFeedback.execute({
            email: 'test@email.com',
            password: ''
        })).resolves.toThrow()
    })

})