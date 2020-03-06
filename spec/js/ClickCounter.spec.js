describe("Clicking calamity Tests:", () => {
    let underTest;

    beforeEach(() => {
        underTest = new clickCount();
    });

    describe('countClick() records clicks and clickCount returns clickCount', () => {
        it('countClick() 1 time should return clickCount 1.', () => {
            underTest.countClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('countClick() 2 times should return clickCount 2', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
    });

    describe('Clicking Companions:', () => {
        it('clickCounter should have 0 when new', () => {
            expect(underTest.getCompanionCount()).toBe(0);
        });
        describe('clicking companion should have 1 when clickCount is 100', () => {
            it('should go 1 when clicked', () => {
                for (let i = 0; i < 100; i++) {
                    underTest.countClick();
                }
                underTest.purchaseCompanion();
                expect(underTest.getCompanionCount()).toBe(1); 
            });
        });
        describe('clicking companion will go up on cost by 10% ', () => {
            it('Companion will cost 10% more after buying one time')
            
            
        });
    });

});