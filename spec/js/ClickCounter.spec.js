class ClickCounter {
    llamaCount = 0;
    autoClick = 0;
    multiplier = 1.0;
    companionCost = 100;
    priceMultiplier = 10;
    multiplierPricePercentage = 1.1;
    multiplierCount = 0;

    increaseClickCount() {
        this.llamaCount += this.multiplier;
        return this.llamaCount;
    }
    autoClicks() {
        for (let i = 0; i < this.autoClick; i++) {
            this.increaseClickCount();
        }
    }
    increaseAutoClicks() {
        if (this.llamaCount >= this.companionCost.toFixed(0)) {
            this.autoClick++;
            this.llamaCount -= this.companionCost;
            this.companionCost *= 1.1 + (0.1 * (this.autoClick - 1));
            return this.autoClick
        } else {
            return this.autoClick
        }
    }
    increaseMultiplier() {
        if (this.llamaCount >= this.priceMultiplier.toFixed(0)) {
            this.multiplierCount++;
            if (this.multiplier === 1.0) {
                this.multiplier += 0.2;
            } else {
                this.multiplier = Math.pow(1.2, this.multiplierCount);
            }
            this.llamaCount -= this.priceMultiplier.toFixed(0);
            this.priceMultiplier *= this.multiplierPricePercentage;
            this.multiplierPricePercentage += 0.1;
            return this.multiplier;
        }
        return this.multiplier
    }
}
       