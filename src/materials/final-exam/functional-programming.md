---
title: '[Final] 22. Functional Programming'
---

# 22. Functional Programming

This subject covers functional-programming characteristics, expression evaluation, function definitions, types, type classes, pattern matching, recursion, algebraic data types, and higher-order functions.

## 22.1 Characteristics of Functional Programming Languages

Functional programming languages are built around evaluating expressions rather than executing commands that mutate state. They support functions as first-class values: functions can be passed as parameters, returned as results, stored in data structures, and composed.

Core characteristics:

| Concept | Meaning |
| --- | --- |
| Pure function | A function whose result depends only on its arguments and which has no side effects. |
| Referential transparency | An expression can be replaced by its value without changing program behavior. |
| First-class function | A function can be used as a value. |
| Higher-order function | A function that receives a function as an argument or returns a function. |
| Static typing | Types are checked before execution. |
| Type inference | The compiler derives types without requiring every annotation. |
| Immutable style | Values are usually not changed in place; new values are produced instead. |

### Lazy and Eager Evaluation

Distinguish lazy and eager evaluation.

| Strategy | Meaning | Consequence |
| --- | --- | --- |
| Eager / strict evaluation | Function arguments are evaluated before the function body is entered. | Predictable evaluation order; may compute unused values. |
| Lazy evaluation | Arguments are evaluated only when their values are needed. | Can avoid unnecessary work and allows infinite structures, but can make space/time behavior less direct. |

Example:

```haskell
const 1 (expensiveComputation x)
```

With eager evaluation, `expensiveComputation x` is evaluated before `const` returns. With lazy evaluation, the second argument is never needed, so it is not evaluated.

Lazy evaluation can be explained as reduction by need. An expression is rewritten step by step, and only the demanded part is reduced.

```haskell
take 3 [1..]
```

The list `[1..]` is infinite, but lazy evaluation only constructs enough of it to produce:

```text
[1,2,3]
```

Also note Clean as a lazy functional language and calls strict evaluation eager. Haskell is also a standard lazy language; Clean is included in the topic as a static functional language.

### Rewriting Steps and Reductions

Evaluation in a functional language can be viewed as rewriting expressions according to function definitions.

```haskell
double x = x + x

double (2 + 3)
```

Eager-style reduction:

```text
double (2 + 3)
=> double 5
=> 5 + 5
=> 10
```

Lazy-style reduction:

```text
double (2 + 3)
=> (2 + 3) + (2 + 3)
=> 5 + (2 + 3)
=> 5 + 5
=> 10
```

Real lazy implementations use sharing, so `(2 + 3)` is not necessarily recomputed twice. The important exam point is the evaluation strategy: strict languages evaluate arguments before calls; lazy languages evaluate them when demanded.

### Referential Transparency and Purity

referential transparency is the property that an expression's value does not depend on where it appears in the program text. More precisely, an expression can be replaced by its value without changing observable behavior.

Example of referential transparency:

```haskell
square x = x * x

square 4 + square 4
```

Since `square 4` always means `16`, it can be replaced:

```text
16 + 16
```

Side effects break this property. If a function reads input, writes output, mutates a variable, or depends on hidden global state, replacing the call by a value may change behavior.

### Static Typing, Hindley-Milner, and Type Inference

 in static type systems, declarations do not always have to be written explicitly, but the compiler must infer the most general type of every expression. It names the Hindley-Milner polymorphic type system.

Example:

```haskell
id x = x
```

The compiler can infer:

```haskell
id :: a -> a
```

This means `id` works for any type `a`: it is parametrically polymorphic.

Type annotations may be omitted, but types are still present and checked. Static typing catches many errors before execution, while type inference reduces annotation burden.

### Polymorphism

The two main polymorphism forms here are parametric polymorphism and ad-hoc polymorphism.

| Form | Meaning | Example |
| --- | --- | --- |
| Parametric polymorphism | Code works uniformly for any type. | `length :: [a] -> Int` |
| Ad-hoc polymorphism | Same operation name has type-specific implementations. | `(+)` for different numeric types; `show` via type classes |
| Subtype polymorphism | Values of a subtype can be used where a supertype is expected. | Common in object-oriented languages, not the main Haskell model |

In Haskell-style functional programming, ad-hoc polymorphism is expressed through type classes.

```haskell
show :: Show a => a -> String
```

This means `show` works for any type `a` that has an instance of the `Show` type class.

### Currying

Call this the Curry principle; the usual term is currying. A multi-argument function can be treated as a chain of one-argument functions.

```haskell
add :: Int -> Int -> Int
add x y = x + y
```

The type associates to the right:

```text
Int -> Int -> Int
means
Int -> (Int -> Int)
```

Calling `add 3` returns a new function:

```haskell
add3 :: Int -> Int
add3 = add 3
```

This is partial application. It is important for concise higher-order programming.

### What to Emphasize in an Oral Answer

- Frame functional programming as expression evaluation with functions as first-class values, rather than command sequences that mutate state.
- Define purity and referential transparency, and explain why side effects break substitution by value.
- Contrast eager/strict evaluation with lazy evaluation, including avoided unused computation and infinite structures.
- Mention expression rewriting/reduction and the fact that real lazy implementations use sharing.
- Explain static typing with type inference and the Hindley-Milner idea of inferring a most general type.
- Distinguish parametric polymorphism from ad-hoc polymorphism through type classes.
- Include currying and partial application as the basis for concise higher-order programming.

::: details Suggested answer

Functional programming is centered on expression evaluation and functions as values. A pure function has no side effects and its result depends only on its arguments. This gives referential transparency: an expression can be replaced by its value without changing the program's behavior.

Evaluation can be eager or lazy. In eager evaluation, arguments are evaluated before a function call. In lazy evaluation, arguments are evaluated only when their values are needed. Lazy evaluation makes it possible to avoid unused computations and to work with infinite structures, such as taking the first three elements of an infinite list. Evaluation can be viewed as rewriting expressions by reductions.

Functional languages such as Haskell and Clean use static typing with type inference. The compiler can infer the most general type of an expression, often using the Hindley-Milner style of polymorphic typing. Parametric polymorphism means a function works uniformly for any type, while ad-hoc polymorphism means the same operation has type-specific implementations, usually expressed through type classes. Currying treats multi-argument functions as chains of one-argument functions, enabling partial application and higher-order programming.

:::

## 22.2 Defining Functions

Functional programs are usually collections of function definitions. A function definition states what result expression corresponds to a given pattern of arguments.

### Type Signatures

A type signature documents and constrains a function.

```haskell
factorial :: Integer -> Integer
```

The arrow `->` is the function type constructor. For multiple arguments:

```haskell
add :: Int -> Int -> Int
```

This means `add` takes an `Int` and returns a function that takes another `Int` and returns an `Int`.

### Pattern Matching

A function may have several branches, and different formal-parameter patterns are assigned to clauses. The first matching clause is used.

```haskell
not' :: Bool -> Bool
not' True  = False
not' False = True
```

List patterns:

```haskell
sumList :: [Int] -> Int
sumList []     = 0
sumList (x:xs) = x + sumList xs
```

Here `[]` matches the empty list, and `(x:xs)` matches a non-empty list with head `x` and tail `xs`.

Pattern matching is not the same as object-oriented overloading. It selects a clause based on value structure, while overloading usually selects an operation based on types or signatures.

### Guards and Case Distinctions

Guards are Boolean conditions attached to function clauses.

```haskell
sign :: Int -> String
sign x
  | x < 0     = "negative"
  | x == 0    = "zero"
  | otherwise = "positive"
```

`otherwise` is conventionally `True`.

`case` expressions make case distinction inside an expression:

```haskell
describe :: Maybe Int -> String
describe value =
  case value of
    Nothing -> "missing"
    Just n  -> "value: " ++ show n
```

### Recursion

Functional languages use recursion instead of mutable loop variables as a central repetition mechanism.

Simple recursion:

```haskell
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)
```

Tail recursion uses an accumulator so the recursive call is the last operation:

```haskell
factorialTail :: Integer -> Integer
factorialTail n = go n 1
  where
    go 0 acc = acc
    go k acc = go (k - 1) (k * acc)
```

Tail recursion can often be optimized like a loop in strict languages. In lazy languages, accumulator strictness may still matter for memory behavior, but the important distinction is that tail recursion has no pending multiplication after the recursive call.

### Local Definitions with `where` and `let`

The topic mentions `where`. A `where` clause defines local names after the main equation:

```haskell
bmi :: Double -> Double -> String
bmi weight height
  | index < 18.5 = "underweight"
  | index < 25.0 = "normal"
  | otherwise    = "high"
  where
    index = weight / (height * height)
```

`let ... in ...` introduces local definitions inside an expression:

```haskell
let x = 3
    y = 4
in x * x + y * y
```

### Layout / Offside Rule

Describe the layout rule: indentation groups related expressions and restricts the scope of declarations. In Haskell-style syntax, indentation can replace explicit braces and semicolons.

Correct grouping:

```haskell
f x =
  let a = x + 1
      b = x + 2
  in a * b
```

The alignment of `a` and `b` shows they belong to the same `let` block.

### Partial Functions

A partial function is not defined for all values of its declared input type.

```haskell
head :: [a] -> a
head (x:_) = x
```

`head []` is undefined or causes an error. Safer alternatives use `Maybe`:

```haskell
safeHead :: [a] -> Maybe a
safeHead []    = Nothing
safeHead (x:_) = Just x
```

### List Comprehensions

Call these set expressions and list generators. In Haskell terms, they are list comprehensions.

```haskell
[x * x | x <- [1..10], even x]
```

This means: take each `x` from `[1..10]`, keep it if `even x` holds, and produce `x * x`.

List comprehensions can describe finite or infinite lists:

```haskell
[x * x | x <- [1..]]
```

With lazy evaluation, finite prefixes of this infinite list can be consumed safely.

### What to Emphasize in an Oral Answer

- Define functions by equations with type signatures using `->`.
- Explain that repeated arrows express curried multi-argument functions.
- Describe pattern matching as selecting the first matching clause by value structure, not OO-style overloading.
- Include list patterns such as `[]` and `(x:xs)`.
- Mention guards and `case` expressions for conditional and pattern-based branching.
- Explain recursion and tail recursion with an accumulator as central repetition mechanisms.
- Cover local definitions and syntax: `where`, `let ... in ...`, layout/offside indentation, partial functions, and list comprehensions.

::: details Suggested answer

Functions in Haskell-style functional programming are defined by equations. A type signature states the function type, such as `Integer -> Integer` for factorial. Multiple arguments are represented by repeated arrows, which also supports currying and partial application.

Pattern matching lets different clauses handle different shapes of input. For lists, `[]` matches the empty list and `(x:xs)` matches a non-empty list with head and tail. Guards add Boolean conditions to clauses, and `case` expressions perform pattern-based branching inside an expression. Recursion is the main repetition technique: simple recursion defines a result in terms of a smaller input, while tail recursion carries an accumulator so the recursive call is the last action.

Local definitions can be written with `where` or `let`. The layout rule uses indentation to group declarations and determine scope. Functional programs also use list comprehensions, which combine generators and filters, and they must handle partial functions carefully. A function like `head` is undefined on the empty list, so a safer version returns `Maybe a` to make failure explicit.

:::

## 22.3 Types and Type Classes

Basic type material is included here directly.

### Basic Types

Common Haskell-style basic types:

| Type | Meaning | Examples |
| --- | --- | --- |
| `Bool` | Boolean values | `True`, `False` |
| `Char` | Character | `'a'`, `'Z'` |
| `Int` | Fixed-size integer | `42` |
| `Integer` | Arbitrary-precision integer | `12345678901234567890` |
| `Float`, `Double` | Floating-point numbers | `3.14` |
| `String` | List of characters | `"hello"` |

`String` is usually a type synonym for `[Char]` in Haskell.

### Complex Types: Lists and Tuples

Lists contain elements of one type:

```haskell
[1, 2, 3] :: [Int]
["a", "b"] :: [String]
```

Tuples group a fixed number of values that may have different types:

```haskell
("Alice", 20) :: (String, Int)
(True, 'x', 3.5) :: (Bool, Char, Double)
```

Lists are homogeneous and variable length. Tuples are fixed length and may be heterogeneous.

### Conversions

Static typing means conversions must be explicit when types differ and no overloaded operation resolves them.

Examples:

```haskell
fromIntegral :: (Integral a, Num b) => a -> b
round        :: (RealFrac a, Integral b) => a -> b
show         :: Show a => a -> String
read         :: Read a => String -> a
```

Example:

```haskell
fromIntegral (length xs) / 2.0
```

Here `length xs` is an integer-like value and must be converted before floating-point division.

### Type Synonyms

A type synonym gives another name to an existing type.

```haskell
type Name = String
type Point = (Double, Double)
```

Type synonyms improve readability but do not create a new distinct runtime representation.

### Algebraic Data Types

Algebraic data types are built from alternatives, each introduced by a constructor and defined with `data`.

```haskell
data Shape
  = Circle Double
  | Rectangle Double Double
```

Pattern matching consumes such values:

```haskell
area :: Shape -> Double
area (Circle r)      = pi * r * r
area (Rectangle w h) = w * h
```

Recursive algebraic data type:

```haskell
data Tree a
  = Empty
  | Node a (Tree a) (Tree a)
```

### `Maybe` and `Either`

`Maybe` represents an optional value:

```haskell
data Maybe a = Nothing | Just a
```

Use it when a computation may fail without detailed error information.

```haskell
lookupUser :: Int -> Maybe User
```

`Either` represents one of two alternatives, often error or success:

```haskell
data Either e a = Left e | Right a
```

Example:

```haskell
parseInt :: String -> Either String Int
```

By convention, `Left` carries an error and `Right` carries a successful result.

### Type Classes and Instances

Type classes express ad-hoc polymorphism: a group of operations that types may implement.

Example:

```haskell
class Eq a where
  (==) :: a -> a -> Bool
```

An instance provides the implementation for a concrete type:

```haskell
data Color = Red | Green | Blue

instance Eq Color where
  Red == Red     = True
  Green == Green = True
  Blue == Blue   = True
  _ == _         = False
```

Common type classes:

| Type class | Meaning |
| --- | --- |
| `Eq` | Equality comparison. |
| `Ord` | Ordering. |
| `Show` | Convert to string. |
| `Read` | Parse from string. |
| `Num` | Numeric operations. |
| `Functor` | Mapping over a context with `fmap`. |

Type-class constraint example:

```haskell
sort :: Ord a => [a] -> [a]
```

This means `sort` works for lists of any type `a` that has an `Ord` instance.

### Function Type

The function type constructor is `->`.

```haskell
not :: Bool -> Bool
map :: (a -> b) -> [a] -> [b]
```

Function arrows associate to the right:

```text
a -> b -> c = a -> (b -> c)
```

Function application associates to the left:

```text
f x y = (f x) y
```

This is the technical basis for currying and partial application.

### What to Emphasize in an Oral Answer

- Start with the type-system framing: strong static types include basic, compound, function, and user-defined algebraic types.
- Name common basic Haskell-style types: `Bool`, `Char`, `Int`, `Integer`, `Float`, `Double`, and `String`.
- Contrast lists and tuples: homogeneous variable-length lists versus fixed-length possibly heterogeneous tuples.
- Mention explicit conversions such as `fromIntegral`, `round`, `show`, and `read`.
- Explain type synonyms as readability aliases, not new distinct runtime representations.
- Define algebraic data types with constructors and pattern matching; include recursive ADTs.
- Include `Maybe` for optional values and `Either` for error-or-success alternatives.
- Explain type classes and instances as ad-hoc polymorphism with constraints such as `Ord a =>`.
- Mention function types with `->`, right-associating arrows, and left-associating function application.

::: details Suggested answer

Functional languages use strong type systems with both basic and compound types. Basic Haskell-style types include `Bool`, `Char`, `Int`, `Integer`, `Float`, `Double`, and `String`. Lists are homogeneous variable-length collections, such as `[Int]`, while tuples have fixed length and can contain different types, such as `(String, Int)`.

Conversions are explicit when needed, for example `fromIntegral` converts integral values to more general numeric types and `show` converts printable values to strings. A type synonym gives a readable name to an existing type, such as `type Point = (Double, Double)`.

Algebraic data types are defined with `data` and consist of constructors. For example, a `Shape` can be a `Circle` or a `Rectangle`, and functions over shapes use pattern matching. `Maybe` represents optional values with `Nothing` or `Just`, while `Either` represents two alternatives, often error and success. Type classes express ad-hoc polymorphism: a type is an instance of a class when it implements the required operations. Function types use the arrow `->`, and repeated arrows support currying.

:::

## 22.4 Higher-Order Functions

 lambda expressions can be passed as parameters and that parameterization by functions helps create general functions. This is the central idea of higher-order functions.

A higher-order function either:

- receives a function as an argument, or
- returns a function as a result.

### Lambda Expressions

A lambda expression creates an anonymous function.

```haskell
\x -> x + 1
```

Example use:

```haskell
map (\x -> x * x) [1,2,3]
```

Result:

```text
[1,4,9]
```

### Operator Sections

Operator sections partially apply infix operators.

```haskell
(+1)    -- function that adds 1
(2*)    -- function that multiplies by 2
(/2)    -- function that divides by 2
(10/)   -- function that divides 10 by its argument
```

Examples:

```haskell
map (+1) [1,2,3]      -- [2,3,4]
filter (>0) [-2,0,5] -- [5]
```

### `map`

`map` applies a function to every element of a list.

```haskell
map :: (a -> b) -> [a] -> [b]
map f []     = []
map f (x:xs) = f x : map f xs
```

Example:

```haskell
map length ["aa", "bbb", "c"]
-- [2,3,1]
```

### `filter`

`filter` keeps elements satisfying a predicate.

```haskell
filter :: (a -> Bool) -> [a] -> [a]
filter p [] = []
filter p (x:xs)
  | p x       = x : filter p xs
  | otherwise = filter p xs
```

Example:

```haskell
filter even [1..10]
-- [2,4,6,8,10]
```

### Function Composition

Function composition `(.)` combines functions.

```haskell
(.) :: (b -> c) -> (a -> b) -> a -> c
(f . g) x = f (g x)
```

Example:

```haskell
map (negate . abs) [3, -4, 5]
-- [-3, -4, -5]
```

Composition helps build pipelines without naming intermediate values.

### Functions as Returned Values

Because functions are first-class, a function can return another function.

```haskell
add :: Int -> Int -> Int
add x y = x + y

add10 :: Int -> Int
add10 = add 10
```

Here `add 10` returns a function waiting for the second argument.

### Why Higher-Order Functions Matter

Higher-order functions capture common traversal and transformation patterns. Instead of writing explicit recursion every time, we can express intent:

| Task | Higher-order expression |
| --- | --- |
| Square all numbers | `map (^2) xs` |
| Keep positives | `filter (>0) xs` |
| Transform then filter | `filter p (map f xs)` or composed variants |
| Build a reusable operation | Partial application such as `map (+1)` |

They are the functional-programming counterpart of many loop patterns: the traversal is abstracted, and the caller supplies only the operation or predicate.

### What to Emphasize in an Oral Answer

- Define higher-order functions as functions that take functions as arguments or return functions as results.
- Tie the definition to first-class functions and lambda expressions such as `\x -> x + 1`.
- Explain `map`: apply a function to every list element.
- Explain `filter`: keep elements satisfying a predicate.
- Explain function composition `(.)`: `(f . g) x = f (g x)`.
- Mention operator sections such as `(+1)`, `(2*)`, and `(>0)` as compact partial applications.
- Explain why higher-order functions matter: they abstract traversal/transformation patterns and reduce explicit recursion.

::: details Suggested answer

A higher-order function is a function that takes another function as an argument or returns a function as a result. This is possible because functional languages treat functions as first-class values. Lambda expressions create anonymous functions, for example `\x -> x + 1`, and these can be passed directly to higher-order functions.

The standard examples are `map`, `filter`, and composition. `map` applies a function to every element of a list, so `map (+1) [1,2,3]` gives `[2,3,4]`. `filter` keeps only elements satisfying a predicate, such as `filter even [1..10]`. Function composition `(.)` combines functions so that `(f . g) x` means `f (g x)`.

Operator sections are a concise form of partial application for operators, such as `(+1)` or `(>0)`. Currying means functions can return functions, so `add 10` is a new function that adds ten. Higher-order functions matter because they express common traversal and transformation patterns without rewriting explicit recursion each time.

:::
