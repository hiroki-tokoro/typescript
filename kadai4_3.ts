/**
 * 単純なファクトリー
 */
class Factory {
  /**
   * @param {string} name 生成時に設定する名称
   */
  constructor(private readonly name: string) {}

  /**
   * 引数に渡された型のインスタンスを生成します。
   *
   * @template 生成する型
   * @param type
   * @returns 型パラメータのインスタンス
   */
  getInstance<T>(type: { new (name: string): T }): T {
    return new type(this.name);
  }
}

const factory = new Factory('test');
console.log(factory.getInstance(TypeA).name);
