/**
 * 四角形のインターフェイス。
 */
interface Quadrilateral {
  /**
   * @returns 面積
   */
  findArea(): number;
}

/**
 * 点
 */
class Point {
  constructor(public x: number, public y: number) {}
}

/**
 * 正方形。
 */
class Square implements Quadrilateral {
  /**
   * コンストラクタ。
   *
   * @param p1 左上の点
   * @param p2 右下の点
   */
  constructor(private p1: Point, private p2: Point) {}

  findArea() {
    return Math.pow(this.getSideLength(), 2);
  }

  /**
   * @returns 1辺の長さ
   */
  private getSideLength(): number {
    // 対角線の長さ = p1とp2の距離
    const diagonal = Math.sqrt(
      Math.pow(this.p2.x - this.p1.x, 2) + Math.pow(this.p2.y - this.p1.y, 2)
    );
    // 正方形なので、対角線の平方根を返す。
    return diagonal / Math.sqrt(2);
  }
}

const square = new Square(new Point(0, 5), new Point(5, 0));
console.log(square.findArea());
