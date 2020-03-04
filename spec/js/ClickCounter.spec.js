describe("Clicking calamity Tests", () => {
    beforeEach(() => {
        clickCount = 0;
    })
    describe("countClick() records clicks and clickCounter can give click count", () => {  
        it('countClick() 1 time should return in clickCount of 1', () => {
            countClick();
            expect(clickCount).toBe(1);

        });
        
        it('countClick() 2 times should return in clickCount of 2', () => {
            countClick();
            expect(clickCount).toBe(2);

        });
    })
})