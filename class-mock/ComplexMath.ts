import { BasicMath } from './BasicMath';

export class ComplexMath {
  basicMath = new BasicMath();

  avg(a: number, b: number): number {
    return this.basicMath.sum(a, b) / 2;
  }
}
