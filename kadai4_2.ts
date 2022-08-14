/**
 * 図形
 */
interface Shape {
  /**
   * 面積を取得します。
   *
   * @returns {number} 面積
   */
  getArea: () => number;
}

/**
 * 長方形
 */
class Rectangle implements Shape {
  /**
   * @param {number} height 横の辺
   * @param {number} width 縦の辺
   */
  constructor(public readonly height: number, public readonly width: number) {}
  getArea: () => number = () => this.height * this.width;
}

/**
 * 円
 */
class Circle implements Shape {
  /**
   * @param {number} radius 半径
   */
  constructor(public readonly radius: number) {}
  getArea: () => number = () => Math.pow(this.radius, 2) * Math.PI;
}

/**
 * 図形を格納するコンテナ
 * @template T 図形の型
 */
class Container<T extends Shape = Rectangle> {
  private shapes: T[] = [];

  /**
   * @param {T} shape 図形
   */
  push(shape: T): void {
    this.shapes.push(shape);
  }

  /**
   * 最後にpushした要素を取得します。
   * @returns {T | undefined} 先頭の要素。空の場合はundefined。
   */
  pop(): T | undefined {
    return this.shapes.pop();
  }
}

const c1 = new Container();
c1.push(new Rectangle(1, 1));
console.log('Rectangle', c1);
//c1.push(new Circle(1)); // コンパイルエラー

const c2 = new Container<Circle>();
c2.push(new Circle(1));
console.log('Circle', c2);
