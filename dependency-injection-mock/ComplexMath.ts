import { BasicMath } from './BasicMath';

export class ComplexMath {
  basicMath: BasicMath;

  constructor(basicMath: BasicMath) {
    this.basicMath = basicMath;
  }

  avg(a: number, b: number): number {
    return this.basicMath.sum(a, b) / 2;
  }
}
