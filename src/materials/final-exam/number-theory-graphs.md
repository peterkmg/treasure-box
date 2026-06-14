---
title: '[Final] Number Theory and Graphs'
---

# 4. Number Theory, Graphs

## 4.1 Sets, Relations, Functions, and Operations

A **set** is determined by its elements. The empty set is $\emptyset$. A set $A$ is a subset of $B$, written $A \subseteq B$, if every element of $A$ is also in $B$. The power set $2^A$ is the set of all subsets of $A$, and for finite $A$ it has $2^{|A|}$ elements.

Basic set operations:

| Operation | Definition |
| --- | --- |
| Union | $A \cup B$ contains elements in $A$ or in $B$. |
| Intersection | $A \cap B = \{x \in A : x \in B\}$. |
| Difference | $A \setminus B = \{x \in A : x \notin B\}$. |
| Complement | If $A \subseteq X$, then $\overline A = X \setminus A$. |
| Symmetric difference | $A \triangle B = (A \setminus B) \cup (B \setminus A)$. |

Useful identities include associativity and commutativity of $\cup$ and $\cap$, distributivity of each over the other, $A \setminus B = A \cap \overline B$, and De Morgan's laws:

$$
\overline{A \cap B} = \overline A \cup \overline B,
\qquad
\overline{A \cup B} = \overline A \cap \overline B.
$$

An ordered pair $(x,y)$ records order, and the Cartesian product is $X \times Y = \{(x,y): x \in X,\ y \in Y\}$. A binary relation between $X$ and $Y$ is a subset of $X \times Y$; a relation on $X$ is a subset of $X \times X$.

Important relation properties:

| Property | Meaning |
| --- | --- |
| Reflexive | $xRx$ for every $x$. |
| Irreflexive | No $xRx$. |
| Symmetric | $xRy$ implies $yRx$. |
| Antisymmetric | $xRy$ and $yRx$ imply $x=y$. |
| Transitive | $xRy$ and $yRz$ imply $xRz$. |
| Dichotomous / total comparability | For any $x,y$, at least one of $xRy$ or $yRx$ holds. |

An **equivalence relation** is reflexive, symmetric, and transitive. It partitions a set into disjoint equivalence classes, and every partition defines an equivalence relation by putting elements in relation exactly when they belong to the same block.

A **partial order** is reflexive, antisymmetric, and transitive. If every two elements are comparable, it is a total order. In a partial order, the smallest element is below every element; a minimal element only has no strictly smaller element. Similarly, the largest element is above every element, while a maximal element has no strictly larger element. Bounds, infimum, and supremum describe lower and upper constraints on subsets.

A **function** is a relation that assigns at most one value to each input. For $f:X \to Y$, the domain is $X$ and the range is a subset of $Y$. A function is injective if different inputs cannot have the same output, surjective if every element of $Y$ is hit, and bijective if it is both.

Operations are functions with algebraic meaning:

| Operation type | Form |
| --- | --- |
| Nullary operation | Chooses an element of $X$. |
| Unary operation | $f:X \to X$. |
| Binary operation | $f:X \times X \to X$. |

A binary operation may be associative, commutative, have identity elements, have inverses, and distribute over another operation. A structure-preserving map between two sets with operations is a homomorphism: if $\star$ is an operation on $X$ and $\circ$ is an operation on $Y$, then $f(x_1 \star x_2)=f(x_1)\circ f(x_2)$.

These ideas lead to algebraic structures. A set with a binary operation is a groupoid; associativity gives a semigroup; an identity gives a monoid; inverses give a group; a commutative group is Abelian. A ring combines additional Abelian-group structure with multiplication and distributivity. A field is a ring where every nonzero element has a multiplicative inverse.

### What to Emphasize in an Oral Answer

- Start with sets: membership, subset, power set, and the basic operations union, intersection, difference, complement, and symmetric difference.
- Mention the main set identities, especially distributivity and De Morgan's laws.
- Define relations as subsets of Cartesian products and list the key relation properties: reflexive, symmetric, antisymmetric, transitive, and total comparability.
- Contrast equivalence relations with partial orders: equivalences partition into classes, while partial orders support comparisons, bounds, minimal/maximal, and smallest/largest elements.
- Define functions as single-valued relations and distinguish injective, surjective, and bijective maps.
- Explain operations as functions on a set, then connect associativity, identity, inverses, and distributivity to structures such as semigroups, monoids, groups, rings, and fields.
- Mention homomorphisms as maps preserving operations.

::: details Suggested answer

The basic language of this topic starts with sets. A set is determined by its elements, so the central questions are membership, inclusion, and how sets are combined. The empty set has no elements, a subset contains only elements of another set, and the power set contains all subsets. The basic operations are union, intersection, difference, complement, and symmetric difference. Their algebraic laws, such as associativity, commutativity, distributivity, and De Morgan's laws, let us transform set expressions in the same way arithmetic laws let us transform numeric expressions.

Relations add structure between elements. A binary relation is a subset of a Cartesian product, so it consists of ordered pairs. On one set, the important properties are reflexivity, symmetry, antisymmetry, transitivity, and comparability. Equivalence relations are reflexive, symmetric, and transitive; they express "same type as" and divide the set into disjoint equivalence classes. Partial orders are reflexive, antisymmetric, and transitive; they express ordering where not every two elements must be comparable. If every pair is comparable, the partial order becomes a total order.

Functions are special relations: each input has at most one output. A function can be injective, meaning no two different inputs share one output; surjective, meaning every target element is reached; or bijective, meaning both. Bijections are especially important because they show two sets have the same size or the same structure.

Operations are functions that take elements of a set and produce elements of the same set. Unary operations take one argument, binary operations take two, and nullary operations can be viewed as choosing a distinguished element. Properties such as associativity, commutativity, identity, inverse, and distributivity determine the algebraic behavior of the operation. This is how we arrive at structures such as semigroups, monoids, groups, rings, integral domains, and fields. The point is that sets provide the universe of objects, relations describe comparisons or classifications among them, functions describe deterministic mappings, and operations provide the internal algebraic rules.

:::

## 4.2 Complex Numbers

The complex numbers are defined as $\mathbb C = \mathbb R \times \mathbb R$ with

$$
(x,y)+(x',y')=(x+x',y+y')
$$

and

$$
(x,y)(x',y')=(xx'-yy',xy'+yx').
$$

The element $(0,1)$ is denoted by $i$, and $i^2=-1$. Real numbers embed as $(x,0)$, so $(x,y)$ can be written as $x+yi$.

Core forms and operations:

| Concept | Formula |
| --- | --- |
| Real and imaginary parts | If $z=x+yi$, then $\operatorname{Re}(z)=x$ and $\operatorname{Im}(z)=y$. |
| Conjugate | $\overline z=x-yi$. |
| Modulus | $\lvert z\rvert=\sqrt{x^2+y^2}$. |
| Inverse | If $z\ne0$, then $z^{-1}=\overline z/\lvert z\rvert^2$. |
| Product with conjugate | $z\overline z=\lvert z\rvert^2$. |

Conjugation preserves addition and multiplication:

$$
\overline{z+w}=\overline z+\overline w,
\qquad
\overline{zw}=\overline z\,\overline w.
$$

The modulus is multiplicative and satisfies the triangle inequality:

$$
|zw|=|z||w|,
\qquad
|z+w|\le |z|+|w|.
$$

If $z\ne0$, an argument $t$ is an angle such that

$$
z=|z|(\cos t+i\sin t).
$$

Arguments are not unique: adding $2k\pi$ gives the same complex number.

Multiplication and powers are simple in trigonometric form. If

$$
z=r(\cos t+i\sin t), \qquad w=s(\cos u+i\sin u),
$$

then

$$
zw=rs(\cos(t+u)+i\sin(t+u)),
$$

and de Moivre's formula gives

$$
z^n=r^n(\cos(nt)+i\sin(nt)).
$$

The $n$th roots of $w=R(\cos t+i\sin t)$ are

$$
z_k=\sqrt[n]{R}\left(\cos\frac{t+2k\pi}{n}+i\sin\frac{t+2k\pi}{n}\right),
\qquad k=0,\dots,n-1.
$$

Complex numbers form a field but not an ordered field compatible with multiplication, because $i^2=-1$ contradicts the ordered-field rule that every nonzero square is positive.

### What to Emphasize in an Oral Answer

- Define $\mathbb C$ as $\mathbb R^2$ with special multiplication, introduce $i=(0,1)$, and note $i^2=-1$.
- Explain algebraic form $x+yi$, real/imaginary parts, conjugate, modulus, and inverse $z^{-1}=\overline z/|z|^2$ for $z\ne0$.
- State useful identities: $z\overline z=|z|^2$, conjugation respects addition/multiplication, and $|zw|=|z||w|$.
- Give the geometric/trigonometric form $z=r(\cos t+i\sin t)$ and note that arguments are defined modulo $2\pi$.
- Explain multiplication, powers, and roots through moduli and arguments, including de Moivre's formula.
- Finish with the structural point: $\mathbb C$ is a field but not an ordered field compatible with multiplication.

::: details Suggested answer

Complex numbers extend the real numbers so that equations such as $x^2+1=0$ have solutions. Formally, a complex number is a pair of real numbers with special addition and multiplication rules. The pair $(x,y)$ is written as $x+yi$, where $i=(0,1)$ and $i^2=-1$. Real numbers sit inside the complex numbers as $x+0i$, so the real number system is preserved.

The algebraic form $x+yi$ separates a complex number into real and imaginary parts. The conjugate of $z=x+yi$ is $\overline z=x-yi$, and the modulus is $|z|=\sqrt{x^2+y^2}$. These are not just notation: they make division possible, because $z\overline z=|z|^2$, so for nonzero $z$ the inverse is $\overline z/|z|^2$. Conjugation also respects addition and multiplication, which makes it a useful algebraic tool.

Complex numbers also have a geometric interpretation as points or vectors in the plane. The modulus is the distance from the origin, and the argument is the angle with the positive real axis. In trigonometric form, $z=r(\cos t+i\sin t)$. This form explains why multiplication adds angles and multiplies lengths. If another number is $s(\cos u+i\sin u)$, then the product has modulus $rs$ and angle $t+u$.

This leads to de Moivre's formula: raising a complex number to the $n$th power raises the modulus to the $n$th power and multiplies the argument by $n$. Roots work in the reverse direction. An $n$th root has modulus equal to the $n$th root of the original modulus, and its possible arguments are obtained by adding multiples of $2\pi$ before dividing by $n$. Therefore a nonzero complex number has $n$ distinct $n$th roots, evenly placed around a circle.

The complex numbers form a field, so addition, subtraction, multiplication, and division by nonzero elements all work. However, they cannot be ordered like the real numbers in a way compatible with field multiplication, because $i$ is nonzero but $i^2=-1$, whereas in an ordered field every nonzero square must be positive.

:::

## 4.3 Enumeration Problems

Enumeration studies finite sets by counting possible choices, arrangements, and mappings. Two finite sets have the same cardinality if there is a bijection between them. The pigeonhole principle says that if $|X|>|Y|$, then no function $f:X\to Y$ can be injective.

Basic formulas:

| Problem | Meaning | Count |
| --- | --- | --- |
| Permutation | Order all $n$ distinct elements. | $P_n=n!$ |
| Variation without repetition | Ordered choice of $k$ distinct elements from $n$. | $V_n^k=\dfrac{n!}{(n-k)!}$ |
| Combination without repetition | Unordered choice of $k$ distinct elements from $n$. | $C_n^k=\binom nk=\dfrac{n!}{k!(n-k)!}$ |
| Permutation with repetitions | Arrange multiset counts $i_1,\dots,i_r$ with total $n$. | $\dfrac{n!}{i_1!i_2!\cdots i_r!}$ |
| Variation with repetition | Ordered length-$k$ sequence from $n$ options. | $n^k$ |
| Combination with repetition | Unordered choice of $k$ elements from $n$ types, repetition allowed. | $\binom{n+k-1}{k}$ |

The binomial theorem is

$$
(x+y)^n=\sum_{k=0}^{n}\binom nk x^k y^{n-k}.
$$

The multinomial theorem generalizes it:

$$
(x_1+\cdots+x_r)^n
=
\sum_{i_1+\cdots+i_r=n}
\frac{n!}{i_1!\cdots i_r!}
x_1^{i_1}\cdots x_r^{i_r}.
$$

The inclusion-exclusion principle counts elements outside or inside unions by alternating intersections. For finite sets $A_1,\dots,A_k$,

$$
\left|\bigcup_{i=1}^k A_i\right|
=
\sum_i |A_i|
-
\sum_{i<j}|A_i\cap A_j|
+
\sum_{i<j<\ell}|A_i\cap A_j\cap A_\ell|
-
\cdots.
$$

### What to Emphasize in an Oral Answer

- Frame enumeration as counting finite choices, arrangements, and mappings; mention cardinality through bijections.
- State the pigeonhole principle as the basic non-injectivity obstruction.
- Organize formulas by two questions: does order matter, and is repetition allowed?
- Give the no-repetition counts: permutations $n!$, ordered variations $n!/(n-k)!$, and combinations $\binom nk$.
- Give the repetition counts: ordered choices $n^k$, combinations with repetition $\binom{n+k-1}{k}$, and multiset permutations $n!/(i_1!\cdots i_r!)$.
- Include binomial and multinomial theorem coefficients as counting choices from factors.
- Mention inclusion-exclusion for overlapping conditions, with alternating sums of intersections.

::: details Suggested answer

Enumeration problems ask how many possibilities a finite construction has. The starting point is cardinality: finite sets have the same size when a bijection exists between them. The pigeonhole principle is the simplest counting obstruction. If more objects are assigned to fewer boxes, then at least two objects must share a box, so the assignment cannot be injective.

The main distinction in elementary enumeration is whether order matters and whether repetition is allowed. If we arrange all $n$ distinct elements, we get $n!$ permutations. If we choose $k$ distinct elements and order matters, we get variations without repetition, with count $n!/(n-k)!$. If order does not matter, we divide by the $k!$ possible orders of the chosen elements, giving the combination formula $\binom nk$.

When repetition is allowed, the formulas change. Ordered length-$k$ sequences from $n$ choices give $n^k$, because each position has $n$ independent possibilities. If order is ignored but repetition is allowed, the stars-and-bars formula gives $\binom{n+k-1}{k}$. For arrangements of a multiset, where element types repeat with multiplicities $i_1,\dots,i_r$, the number of distinguishable orders is $n!/(i_1!\cdots i_r!)$, because permutations that only swap identical copies do not create new outcomes.

Two important theorems organize these counts. The binomial theorem expands $(x+y)^n$ by choosing which $k$ of the $n$ factors contribute $x$ and which contribute $y$. The multinomial theorem does the same for more than two terms, with coefficients counting repeated-type permutations. Finally, inclusion-exclusion handles overlapping conditions. To count a union, we add the single set sizes, subtract pairwise overlaps that were counted twice, add triple overlaps that were subtracted too much, and continue alternating. This is the standard way to count objects satisfying at least one of several possibly overlapping properties.

:::

## 4.4 Undirected Graphs, Trees, Eulerian and Hamiltonian Graphs

An **undirected graph** consists of a vertex set $V$, an edge set $E$, and an incidence relation assigning endpoints to edges. In a simple undirected graph, there are no loops and no parallel edges, so an edge can be viewed as a two-element subset of $V$.

Basic graph notions:

| Concept | Meaning |
| --- | --- |
| Isolated vertex | A vertex incident with no edge. |
| Loop | An edge whose two endpoints coincide. |
| Parallel edges | Distinct edges with the same endpoints. |
| Adjacent vertices | Vertices joined by an edge. |
| Degree $d(v)$ | Number of incident edge ends at $v$; in a simple graph, number of neighbors. |
| $r$-regular graph | Every vertex has degree $r$. |
| Complete graph $K_n$ | Simple graph where every pair of distinct vertices is adjacent. |
| Bipartite graph | Vertices split into two disjoint parts and edges run only between the parts. |
| Complete bipartite graph $K_{m,n}$ | Every vertex in one part is joined to every vertex in the other. |
| Subgraph | Uses subsets of the original vertices and edges with inherited incidence. |

A **walk** is an alternating sequence of vertices and edges where each edge joins its neighboring vertices in the sequence. A **trail** has no repeated edge. A **path** has no repeated vertex. A graph is **connected** if every two vertices are joined by a path; the connected components are the equivalence classes of the reachability relation.

A **tree** is a connected acyclic graph. For a finite simple graph with $n$ vertices, the following are equivalent:

- It is a tree.
- It is connected and has $n-1$ edges.
- It is acyclic and has $n-1$ edges.
- Between every two distinct vertices there is exactly one path.
- Deleting any edge destroys connectedness.
- Adding any new edge creates a cycle.

A **spanning tree** of a graph $G$ is a subgraph that is a tree and contains all vertices of $G$.

An **Eulerian trail** uses every edge exactly once. If it starts and ends at the same vertex, it is an Eulerian circuit. A connected finite undirected graph has an Eulerian circuit exactly when every vertex has even degree. A connected finite graph has an open Eulerian trail exactly when exactly two vertices have odd degree; those vertices are the start and end.

A **Hamiltonian path** visits every vertex exactly once. A Hamiltonian cycle returns to the starting vertex after visiting all vertices. Unlike the Eulerian condition, Hamiltonian graphs do not have one equally simple degree-parity characterization; Hamiltonian questions are generally harder because the restriction is on vertices rather than edges.

Also note planar graphs. A connected planar graph satisfies Euler's formula $|V|-|E|+|F|=2$, where $F$ is the number of faces in a planar drawing. Kuratowski's theorem characterizes finite planar graphs by excluding subdivisions of $K_5$ and $K_{3,3}$. This is useful graph background but not central to the subject wording.

Graph representations are usually adjacency lists or matrices. Lists are economical for sparse graphs; adjacency matrices are simple and efficient for dense graphs or constant-time adjacency tests.

### What to Emphasize in an Oral Answer

- Define an undirected graph by vertices, edges, and incidence; in a simple graph, edges are unordered pairs with no loops or parallel edges.
- Cover local vocabulary: adjacency, degree, isolated vertices, regular, complete, bipartite, complete bipartite, and subgraph.
- Distinguish walks, trails, and paths, then define connectedness and connected components.
- State equivalent characterizations of finite trees: connected acyclic, $n-1$ edges, unique path between vertices, edge deletion disconnects, edge addition creates a cycle.
- Explain spanning trees as minimal connected backbones of connected graphs.
- Contrast Eulerian and Hamiltonian traversal: Eulerian uses every edge once and has a degree-parity criterion; Hamiltonian visits every vertex once and has no comparable simple test.
- Mention graph representations briefly: adjacency lists for sparse graphs, matrices for dense graphs or fast adjacency checks.

::: details Suggested answer

An undirected graph is a structure made of vertices and edges, where each edge connects vertices without direction. In a simple graph there are no loops and no parallel edges, so each edge just joins two distinct vertices. Basic terminology describes local structure: adjacent vertices share an edge, the degree of a vertex is the number of incident edge ends, an isolated vertex has degree zero, and an $r$-regular graph has the same degree $r$ at every vertex. Complete graphs connect every pair of vertices, while bipartite graphs split vertices into two parts and only allow edges between the parts.

Movement through a graph is described by walks, trails, and paths. A walk may repeat vertices and edges. A trail may repeat vertices but not edges. A path repeats no vertex. Connectivity means every pair of vertices is joined by some path, and the connected components are the maximal connected pieces.

Trees are the most important special connected graphs. A tree is connected and acyclic. This definition has several equivalent forms for finite simple graphs: a tree with $n$ vertices has exactly $n-1$ edges; between any two vertices there is exactly one path; deleting any edge disconnects it; and adding a new edge creates a cycle. A spanning tree of a connected graph keeps all vertices but selects enough edges to form a tree, so it captures a minimal connected backbone.

Eulerian and Hamiltonian graphs ask for global traversals, but they ask for different things. An Eulerian trail uses every edge exactly once, and an Eulerian circuit returns to its starting vertex. In a connected finite undirected graph, an Eulerian circuit exists exactly when all vertices have even degree, because every time the traversal enters a vertex it must also leave it. If exactly two vertices have odd degree, an open Eulerian trail can start at one and end at the other.

A Hamiltonian path visits every vertex exactly once, and a Hamiltonian cycle returns to the starting vertex. This is a vertex-covering condition rather than an edge-covering condition. The contrast is important: Eulerian existence has a clean parity test, while Hamiltonian existence is much harder and does not have a simple universal characterization. In applications, adjacency lists and adjacency matrices are common representations; lists fit sparse graphs, while matrices fit dense graphs or fast adjacency lookup.

:::

## 4.5 Divisibility, Congruence, and Primes

For integers, $b$ divides $a$, written $b\mid a$, if there exists an integer $c$ with $a=bc$. Basic properties include:

- $a\mid 0$ for every integer $a$.
- $0\mid a$ if and only if $a=0$.
- $1\mid a$ for every integer $a$.
- Divisibility is reflexive and transitive.
- If $b\mid a_i$ for several $a_i$, then $b$ divides every integer linear combination $\sum a_i c_i$.

The **greatest common divisor** $\gcd(a,b)$ is a common divisor divisible by every other common divisor. Integers $a$ and $b$ are relatively prime if their gcd is $1$. The **least common multiple** is a common multiple that divides every other common multiple.

The Euclidean algorithm computes $\gcd(a,b)$. The extended Euclidean algorithm also produces $x,y\in\mathbb Z$ such that

$$
\gcd(a,b)=ax+by.
$$

An integer greater than $1$ is **prime** if its only positive divisors are $1$ and itself. In integral-domain language, $p$ is prime if $p\mid ab$ implies $p\mid a$ or $p\mid b$. The fundamental theorem of arithmetic says every positive integer greater than $1$ has a unique prime factorization up to order. The Sieve of Eratosthenes finds primes up to $n$ by repeatedly marking multiples of the smallest remaining unmarked number.

Congruence modulo $m$ is defined by

$$
a\equiv b \pmod m
\quad\Longleftrightarrow\quad
m\mid(a-b).
$$

It is an equivalence relation on $\mathbb Z$. The equivalence classes are residue classes; a complete residue system contains exactly one representative from each class. A reduced residue system contains representatives relatively prime to $m$. Euler's totient function $\varphi(m)$ counts reduced residue classes modulo $m$.

Euler-Fermat theorem:

$$
\gcd(a,m)=1 \Longrightarrow a^{\varphi(m)}\equiv 1 \pmod m.
$$

Fermat's little theorem is the prime-modulus special case:

$$
p \text{ prime},\ p\nmid a \Longrightarrow a^{p-1}\equiv 1 \pmod p.
$$

A linear congruence $ax\equiv b\pmod m$ is equivalent to $ax+my=b$. Let $d=\gcd(a,m)$. It has a solution if and only if $d\mid b$. After dividing by $d$, the reduced coefficient $a/d$ is invertible modulo $m/d$, and the extended Euclidean algorithm gives the solution class.

For two congruences

$$
x\equiv a\pmod m,
\qquad
x\equiv b\pmod n,
$$

a common solution exists if and only if $\gcd(m,n)\mid(b-a)$. If $m$ and $n$ are coprime, the Chinese remainder theorem gives a unique solution modulo $mn$. More generally, pairwise coprime moduli $m_1,\dots,m_k$ give a unique solution modulo $m_1\cdots m_k$.

### What to Emphasize in an Oral Answer

- Define divisibility $b\mid a$ and mention reflexivity, transitivity, and closure under integer linear combinations.
- Define gcd, lcm, relative primality, and Bezout's identity from the extended Euclidean algorithm.
- Explain primes through divisors and the product-divisibility property; state unique prime factorization and the sieve idea.
- Define congruence modulo $m$ by $m\mid(a-b)$, residue classes, complete residue systems, reduced residue systems, and Euler's $\varphi$.
- State Euler-Fermat and Fermat's little theorem as the key exponent results.
- Explain solvability of $ax\equiv b\pmod m$: solutions exist exactly when $\gcd(a,m)\mid b$.
- Include the Chinese remainder theorem: compatibility for non-coprime moduli and unique solution modulo the product when moduli are pairwise coprime.

::: details Suggested answer

Divisibility is the relation behind elementary number theory. We say that $b$ divides $a$ if $a$ can be written as $bc$ for some integer $c$. This relation is reflexive and transitive, and it behaves well with linear combinations: if a number divides several integers, it also divides every integer linear combination of them.

The greatest common divisor of two integers is the common divisor that is divisible by all other common divisors. If the gcd is $1$, the integers are relatively prime. The Euclidean algorithm computes the gcd by repeated division with remainder, and the extended Euclidean algorithm gives Bezout coefficients, integers $x$ and $y$ such that $\gcd(a,b)=ax+by$. This identity is the bridge between divisibility and congruence solving.

Primes are the building blocks of the integers. A prime integer has no positive divisors except $1$ and itself, and equivalently it has the property that if it divides a product, it divides at least one factor. The fundamental theorem of arithmetic says every positive integer greater than $1$ factors uniquely into primes, up to order. The Sieve of Eratosthenes is a constructive way to list primes up to a bound: starting from $2$, repeatedly keep the smallest unmarked number and mark its multiples.

Congruence modulo $m$ means that two integers have the same remainder behavior modulo $m$, or equivalently that $m$ divides their difference. It is an equivalence relation, and its equivalence classes are residue classes. Arithmetic can be performed on these classes because addition and multiplication respect congruence. A complete residue system chooses one representative from each class, and a reduced residue system chooses representatives from the classes relatively prime to the modulus. Euler's totient function counts these reduced classes.

Euler-Fermat's theorem states that if $a$ is relatively prime to $m$, then $a^{\varphi(m)}\equiv1\pmod m$. For a prime modulus $p$, this becomes Fermat's little theorem: $a^{p-1}\equiv1\pmod p$ when $p$ does not divide $a$. Linear congruences are solved by translating $ax\equiv b\pmod m$ into $ax+my=b$. If $d=\gcd(a,m)$ does not divide $b$, there is no solution; if it does, division by $d$ and the extended Euclidean algorithm produce a solution modulo $m/d$. Systems of congruences are handled similarly, and when the moduli are pairwise coprime the Chinese remainder theorem guarantees a unique solution modulo their product.

:::

## 4.6 Polynomials and Division With Remainder

Let $R$ be a ring. A polynomial over $R$ is a finite expression

$$
f(x)=\sum_{i=0}^{n} f_i x^i,
\qquad f_i\in R.
$$

If $f_n\ne0$, then $f_n$ is the leading coefficient and $n$ is the degree. The polynomial ring $R[x]$ can also be viewed as sequences of coefficients with only finitely many nonzero terms.

Polynomial operations:

| Operation | Rule |
| --- | --- |
| Addition | Add coefficients componentwise: $(f+g)_i=f_i+g_i$. |
| Negation/subtraction | Use additional inverses coefficientwise. |
| Multiplication | Convolution of coefficients: $(fg)_k=\sum_{i+j=k} f_i g_j$. |

If $R$ is commutative, then $R[x]$ is commutative. If $R$ has multiplicative identity $1$, then $R[x]$ has identity polynomial $1+0x+0x^2+\cdots$.

Division with remainder: if $R$ is a ring where the leading coefficient of $g$ is invertible, and in particular if $g$ is monic, then for $f,g\in R[x]$ with $g\ne0$, there exist unique polynomials $q,r\in R[x]$ such that

$$
f=gq+r,
\qquad
\deg r<\deg g.
$$

Over a field this works for every nonzero divisor polynomial $g$.

Horner's scheme evaluates

$$
f(x)=f_nx^n+f_{n-1}x^{n-1}+\cdots+f_0
$$

by rewriting it as

$$
f(x)=(((f_nx+f_{n-1})x+f_{n-2})x+\cdots)x+f_0.
$$

This reduces the number of multiplications and also supports testing whether $c$ is a root: $c$ is a root exactly when $f(c)=0$. The same nested computation is closely related to division by $x-c$, where the remainder is $f(c)$.

### What to Emphasize in an Oral Answer

- Define a polynomial over a ring $R$ as a finite formal sum and identify leading coefficient and degree.
- State how $R[x]$ operations work: coefficientwise addition and convolution-style multiplication.
- Mention inherited structure: commutativity or a multiplicative identity in $R$ carries to $R[x]$ when applicable.
- Explain division with remainder $f=gq+r$, $\deg r<\deg g$, and the condition needed: the leading coefficient of $g$ is invertible; over fields every nonzero divisor works.
- State uniqueness of quotient and remainder under the division hypotheses.
- Present Horner's scheme as efficient nested evaluation and connect it to the remainder theorem/root test for division by $x-c$.

::: details Suggested answer

A polynomial over a ring $R$ is a finite formal sum $f_0+f_1x+\cdots+f_nx^n$ with coefficients in $R$. It is important that only finitely many coefficients are nonzero. The highest index with nonzero coefficient is the degree, and the corresponding coefficient is the leading coefficient.

Polynomials form a ring $R[x]$. Addition is componentwise: coefficients of the same power of $x$ are added. Multiplication is based on collecting equal powers. The coefficient of $x^k$ in a product is the sum of all products $f_i g_j$ with $i+j=k$. This is the same convolution pattern that appears when multiplying ordinary algebraic expressions. If the coefficient ring is commutative or has a unit, the polynomial ring inherits those corresponding properties.

Division with remainder generalizes integer division. Given polynomials $f$ and nonzero $g$, we want to write $f=gq+r$, where the remainder has smaller degree than $g$. Over a field this is always possible and unique. More generally, it is enough for the leading coefficient of $g$ to be invertible; in particular, monic divisors work over any coefficient ring where the other operations are defined. The quotient records how many times the divisor fits into the polynomial by leading terms, and the remainder is what cannot be further reduced below the divisor's degree.

Horner's scheme is a practical consequence of polynomial structure. Instead of evaluating $f_nx^n+f_{n-1}x^{n-1}+\cdots+f_0$ by computing every power separately, the polynomial is nested as $(((f_nx+f_{n-1})x+f_{n-2})x+\cdots)+f_0$. This uses repeated multiply-and-add steps, so evaluation is efficient. It also tests roots: $c$ is a root if and only if the computed value $f(c)$ is zero. In the background, this is related to division by $x-c$, because the remainder of that division is exactly $f(c)$.

:::

## 4.7 Additional Material: Coding Theory

Coding theory is included here as related material for number theory, graphs, and discrete mathematics.

#### Letter-by-Letter Encoding

Encoding maps messages into another set of messages, usually over a different alphabet. If messages are words over an alphabet $A$ and code words use an alphabet $B$, then a letter-by-letter code is determined by a mapping

$$
\varphi:A\to B^*.
$$

This mapping extends to whole words by concatenation:

$$
\psi(a_1a_2\cdots a_n)=\varphi(a_1)\varphi(a_2)\cdots\varphi(a_n).
$$

For decoding to be unambiguous, the extended mapping $\psi:A^*\to B^*$ must be injective. If two source letters get the same code word, or if an empty code word is allowed for a source letter, unique decoding fails. Therefore practical letter-by-letter codes use $\varphi:A\to B^+$ and require enough structure to decode concatenated words.

Word terminology:

| Term | Meaning |
| --- | --- |
| $A^+$ | Nonempty words over alphabet $A$. |
| $A^*$ | All words over $A$, including the empty word. |
| Prefix | A beginning part of a word. |
| Infix | A contiguous middle part of a word. |
| Suffix | An ending part of a word. |
| Prefix code | No code word is a prefix of another code word. |
| Uniform code | All code words have the same length. |
| Comma code | A special comma word terminates code words and appears neither as prefix nor infix of code words. |

A code tree represents code words as root-to-vertex paths labelled by alphabet symbols. Prefix-free codes correspond to choosing code words at vertices none of which is an ancestor of another chosen code-word vertex.

#### Frequency, Information, Entropy, and Average Length

If a source emits $n$ messages and symbol $a_i$ occurs $k_i$ times, then

$$
p_i=\frac{k_i}{n}
$$

is the relative frequency. The distribution is $(p_1,\dots,p_m)$ with $\sum_i p_i=1$.

The information content of symbol $a_i$ is

$$
I_i=-\log_r p_i,
$$

where $r$ is the size/base of the unit. With $r=2$, information is measured in bits.

Entropy is the average information content:

$$
H_r(p_1,\dots,p_m)=-\sum_{i=1}^{m}p_i\log_r p_i.
$$

If code word $i$ has length $l_i$, then the average word length is

$$
\bar l=\sum_{i=1}^{m}p_i l_i.
$$

An optimal uniquely decodable code minimizes average word length for the given alphabet size and source distribution.

#### Shannon Code

A Shannon-code construction for an $r$-letter code alphabet.

1. Sort source letters by decreasing relative frequency.
2. Choose code lengths $l_i$ such that

$$
r^{-l_i}\le p_i < r^{-l_i+1}.
$$

3. Assign code words in lexicographic tree order with those lengths.

For the example with code alphabet $\{0,1,2\}$:

| Letter | Frequency | Shannon length | Shannon code |
| --- | ---: | ---: | --- |
| f | 0.31 | 2 | 00 |
| a | 0.17 | 2 | 01 |
| h | 0.17 | 2 | 02 |
| c | 0.13 | 2 | 10 |
| j | 0.09 | 3 | 110 |
| i | 0.06 | 3 | 111 |
| b | 0.02 | 4 | 1120 |
| d | 0.02 | 4 | 1121 |
| g | 0.02 | 4 | 1122 |
| e | 0.01 | 5 | 12000 |

The original tree image is represented by the table: each code is the path label from the root to the leaf for that symbol.

#### Huffman Code

Huffman coding builds an optimal prefix code by repeatedly merging least frequent symbols.

For an $r$-ary code alphabet, the construction first adjusts the number of leaves so that the final tree has the right arity. If the number of source symbols is $n$, the first merge uses

$$
m=2+((n-2)\bmod(r-1))
$$

symbols. After that, each reduction merges the $r$ least frequent current symbols into a new combined symbol whose frequency is their sum. When only $r$ symbols remain, labels from the code alphabet are assigned, and the reductions are expanded backwards to obtain the final code words.

The ternary Huffman example has final code table:

| Letter | Frequency | Huffman code |
| --- | ---: | --- |
| f | 0.31 | 1 |
| a | 0.17 | 00 |
| h | 0.17 | 01 |
| c | 0.13 | 02 |
| j | 0.09 | 20 |
| i | 0.06 | 22 |
| b | 0.02 | 211 |
| d | 0.02 | 212 |
| g | 0.02 | 2100 |
| e | 0.01 | 2101 |

The original Huffman tree image is replaced by the reduction description plus this code table. The important mechanism is that frequent symbols get short paths and rare symbols get longer paths.

#### Error-Control Codes and Hamming Distance

Error-control codes add redundancy so that transmission errors can be detected or corrected. Error-detecting codes report that something went wrong; error-correcting codes choose a likely original code word. For error-control codes, code words usually have a fixed length.

For words $u$ and $v$ of the same length, the Hamming distance $d(u,v)$ is the number of positions where they differ. It is a metric:

- $d(u,v)\ge0$;
- $d(u,v)=0$ exactly when $u=v$;
- $d(u,v)=d(v,u)$;
- $d(u,z)\le d(u,v)+d(v,z)$.

The minimum distance of a code $C$ is

$$
d(C)=\min_{u\ne v,\ u,v\in C} d(u,v).
$$

If the alphabet is an Abelian group with zero, the Hamming weight $w(u)$ is the number of nonzero positions. For a linear code, the minimum distance is the minimum nonzero weight.

A code corrects all errors of size at most $t$ when every received word within distance $t$ of a code word is closer to that code word than to any other code word. A minimum distance $d$ permits unique correction of up to

$$
\left\lfloor\frac{d-1}{2}\right\rfloor
$$

errors.

The Hamming bound for a $q$-ary length-$n$ code correcting $t$ errors is

$$
|C|\sum_{j=0}^{t}\binom{n}{j}(q-1)^j \le q^n.
$$

If equality holds, the code is perfect.

#### Linear Codes, Polynomial Codes, and CRC

Over a finite field $K$ with $q$ elements, a linear code is a subspace $C\le K^n$. If it has dimension $k$ and minimum distance $d$, it is an $[n,k,d]_q$ code. A linear encoding can be represented by a generator matrix

$$
G:K^k\to K^n.
$$

Polynomial coding represents a message vector $(a_0,\dots,a_{k-1})$ as a polynomial

$$
p(x)=a_0+a_1x+\cdots+a_{k-1}x^{k-1}.
$$

Choosing a fixed monic polynomial $g(x)$ of degree $m$ with nonzero constant term, the message is encoded by multiplication:

$$
p(x)\mapsto p(x)g(x).
$$

The resulting code length is $n=k+m$.

A cyclic code is a polynomial code where $g(x)$ divides $x^n-1$. Cyclic redundancy check (CRC) is the most familiar practical example over $\mathbb F_2$. To encode, multiply the message polynomial by $x^m$, divide by $g(x)$, and subtract the remainder:

$$
p(x)x^m=q(x)g(x)+r(x),
\qquad
\text{code word}=p(x)x^m-r(x).
$$

The transmitted polynomial is divisible by $g(x)$. To check a received word, divide by $g(x)$; a nonzero remainder indicates an error. CRC is mainly an error-detecting code, not a full error-correcting code.

### What to Emphasize in an Oral Answer

- Frame coding theory around three goals: representation, compression/short average length, and error detection or correction.
- For letter-by-letter codes, explain extension by concatenation and the need for injectivity of the extended map for unique decoding.
- Mention prefix codes and code trees as the clean practical way to decode unambiguously.
- Define information content, entropy, and average code-word length; stress that frequent symbols should get shorter code words.
- Contrast Shannon coding with Huffman coding: Shannon uses probability-based lengths, while Huffman constructs an optimal prefix code by merging least frequent symbols.
- Explain Hamming distance, minimum distance, and correction capability $\lfloor(d-1)/2\rfloor$; mention the Hamming bound.
- Describe linear codes as subspaces $[n,k,d]_q$ with generator matrices, and polynomial/cyclic codes including CRC as mainly error-detecting.

::: details Suggested answer

Coding theory studies how messages can be represented so that they are compact, uniquely decodable, or robust against errors. In letter-by-letter encoding, each source symbol from an alphabet $A$ is assigned a word over a code alphabet $B$, and the code of a whole message is obtained by concatenating the code words of its symbols. For decoding to be unambiguous, the resulting map on whole words must be injective. Prefix codes are especially useful because no code word is the beginning of another, so decoding can proceed from left to right without ambiguity.

The efficiency of a code depends on the source distribution. If symbol $a_i$ has relative frequency $p_i$, its information content is $-\log_r p_i$, and the entropy is the weighted average of these values. A code with lengths $l_i$ has average length $\sum p_i l_i$, so frequent symbols should receive shorter code words. Shannon coding chooses lengths from the probabilities and assigns code words with those lengths. Huffman coding gives an optimal prefix code by repeatedly merging the least frequent symbols and then expanding the merge tree back into code words.

Coding theory also handles transmission errors. For fixed-length code words, the Hamming distance counts how many positions differ. The minimum distance of a code determines its error-control ability: a code with distance $d$ can reliably correct up to $\lfloor(d-1)/2\rfloor$ errors, because balls of that radius around different code words do not overlap. The Hamming bound counts how many received words can lie in these error balls and shows a limit on how large such a code can be.

Linear codes use algebraic structure. Over a finite field, a linear code is a subspace of $K^n$, described by parameters $[n,k,d]_q$. A generator matrix maps message vectors into code words. Polynomial codes represent messages as polynomials and multiply them by a fixed generator polynomial. CRC is a cyclic polynomial code used mainly for error detection: the sender appends a remainder so that the transmitted polynomial is divisible by the generator polynomial, and the receiver checks divisibility again.

:::
