/**
 * 类型的 key
 * string | number | symbol
 */
export declare type KeyType = keyof any;
/**
 * 没有同时存在 T 和 U 中的类型
 */
export declare type SymmetricDiff<T, U> = {
    [K in Exclude<keyof T | keyof U, Extract<keyof T, keyof U>>]: K extends keyof T ? T[K] : K extends keyof U ? U[K] : never;
};
/**
 * 获取 T 中类型为 U (= Function) 的 Key 组成的联合类型
 */
export declare type FactoryKeys<T, U> = {
    [K in keyof T]: T[K] extends U ? T[K] : never;
}[keyof T];
/**
 * 判断 T 和 U 是否相同（包含是否可选，是否只读）
 */
export declare type Equal<T, U> = (<A>() => A extends T ? 1 : 2) extends <A>() => A extends U ? 1 : 2 ? true : false;
/**
 * 获取 T 中非只读类型的 key 组成的联合类型
 */
export declare type ReadonlyKeys<T> = {
    [K in keyof T]: Equal<Pick<T, K>, {
        -readonly [Q in K]: T[Q];
    }> extends true ? K : never;
}[keyof T];
/**
 * 获取 T 中可选类型的 key 组成的联合类型
 */
export declare type OptionalKeys<T> = {
    [K in keyof T]: {} extends Pick<T, K> ? K : never;
}[keyof T];
/**
 * 用 U 中的同名属性类型覆盖 T 中的同名属性类型
 */
export declare type Overwrite<T, U> = {
    [K in keyof T]: K extends keyof U ? U[K] : T[K];
};
/**
 * 合并 T 和 U，同名属性类型后者覆盖前者
 */
export declare type Assign<T, U> = {
    [K in keyof T | keyof U]: K extends keyof U ? U[K] : K extends keyof T ? T[K] : never;
};
