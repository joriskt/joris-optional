interface BaseOptional<T> {
    get(): T;
    getOrThrow(e: Error): T;

    orElse(t: T): T;
    orElseCall(fn: () => T): T;

    map<R>(fn: (t: T) => R): Optional<R>;

    isPresent(): boolean;
    isEmpty(): boolean;

    toString(): string;
}

class SomeOptional<T> implements BaseOptional<T> {
    private some: T;
    constructor(some: T) {
        this.some = some;
    }

    get(): T {
        return this.some;
    }
    getOrThrow(_: Error): T {
        return this.some;
    }

    orElse(_: T): T {
        return this.some;
    }
    orElseCall(_: () => T): T {
        return this.some;
    }

    map<R>(fn: (t: T) => R): Optional<R> {
        return Some(fn(this.some));
    }

    isPresent(): boolean {
        return true;
    }
    isEmpty(): boolean {
        return false;
    }

    toString(): string {
        return `Some(${Object.prototype.toString.call(this.some)})`;
    }
}

class NoneOptional<T> implements BaseOptional<T> {
    constructor() {}

    get(): T {
        throw new Error('Cannot get() on None optional');
    }
    getOrThrow(e: Error): T {
        throw e;
    }

    orElse(t: T): T {
        return t;
    }
    orElseCall(fn: () => T): T {
        return fn();
    }

    map<R>(_: (t: T) => R): Optional<R> {
        return None();
    }

    isPresent(): boolean {
        return false;
    }
    isEmpty(): boolean {
        return true;
    }

    toString(): string {
        return 'None()';
    }
}

export function Some<T>(t: T): Optional<T> {
    return new SomeOptional(t);
}

export function None<T>(): Optional<T> {
    return new NoneOptional();
}

export type Optional<T> = SomeOptional<T> | NoneOptional<T>;
