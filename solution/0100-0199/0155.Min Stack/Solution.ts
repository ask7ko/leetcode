class MinStack {
    stk1: number[];
    stk2: number[];

    constructor() {
        this.stk1 = [];
        this.stk2 = [Infinity];
    }

    push(val: number): void {
        this.stk1.push(val);
        this.stk2.push(Math.min(val, this.stk2[this.stk2.length - 1]));
    }

    pop(): void {
        this.stk1.pop();
        this.stk2.pop();
    }

    top(): number {
        return this.stk1[this.stk1.length - 1];
    }

    getMin(): number {
        return this.stk2[this.stk2.length - 1];
    }
}
