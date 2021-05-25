# joris-optional

A simple Optional implementation.

## Install

```
npm install joris-optional
yarn add joris-optional
```

## Usage

```ts
import { Optional, Some, None } from 'joris-optional';

const maybeNumber: Optional<number> = Some(4);
console.log(maybeNumber.isPresent()); // true

const maybeString: Optional<string> = maybeNumber.map((num) => num.toString());
console.log(maybeNumber.get()); // "4"

const empty: Optional<string> = None();
console.log(empty.getOrThrow(new Error('What are you doing?!'))); // Error: What are you doing?!
console.log(empty.isEmpty()); // true
```

## Types

```
Optional<T>
    get(): T;
    getOrThrow(e: Error): T;
    orElse(t: T): T;
    orElseCall(fn: () => T): T;
    map<R>(fn: (t: T) => R): Optional<R>;
    isPresent(): boolean;
    isEmpty(): boolean;
    toString(): string;
```

## Changelog

| version | changelog                                            |
| ------- | ---------------------------------------------------- |
| 1.0.1   | Add README and make TypeScript a dev dependency only |
| 1.0.0   | Initial release                                      |
