class clickCount{
    constructor(){
        this.clickCount = 0;
        this.companionCount = 0;

    }
    countClick(){
        Math.round(this.clickCount++);
    }
    getCompanionCount(){
        return 0;
    }
    getCompanionCount(){
        return Math.round(this.companionCount);
    }
    purchaseCompanion(){
        if(this.clickCount >= 100){
            this.clickCount -= 100;
            this.companionCount++;
        }

    }

}





