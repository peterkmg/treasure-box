---
title: '[Final] Theory of Computation'
---

# 13. Theory of Computation

## 13.1 Turing Machines and the Church-Turing Thesis

Start from **models of algorithms**. The point is to formalize what it means for a problem to be effectively solvable. Several models exist, such as Turing machines, register machines, recursive functions, lambda calculus, and real programming languages.

The **Church-Turing thesis** is not a mathematical theorem but a foundational claim:

> Every effectively computable function can be computed by a Turing machine.

Its force comes from the fact that many independent formal models of computation define the same class of computable functions. A result proved for Turing machines is therefore treated as a statement about algorithmic computability in general.

A decision problem has:

| Concept | Meaning |
| --- | --- |
| Problem | A set of instances together with a yes/no question. |
| Instance | One encoded input word. |
| Language view | The set of encodings whose answer is yes. |
| Algorithm/decider | A procedure that halts on every input and answers correctly. |
| Recognizer | A procedure that halts and accepts yes-instances, but may loop on no-instances. |

A standard one-tape Turing machine has:

| Component | Meaning |
| --- | --- |
| Tape | Unbounded memory divided into cells. |
| Tape alphabet | Symbols that can appear on the tape, including blank. |
| Input alphabet | Symbols allowed in the input. |
| Finite control | A finite set of states. |
| Head | Reads and writes one tape cell and moves left or right. |
| Transition function | Determines the next state, symbol written, and head movement. |
| Accept/reject or halting states | States where computation stops with an answer. |

One common formal shape is:

$$
M=(Q,\Sigma,\Gamma,\delta,q_0,q_{accept},q_{reject}),
$$

with

$$
\delta:Q\times\Gamma\to Q\times\Gamma\times\{L,R,S\}.
$$

Some definitions omit an explicit reject state or allow only left/right movement. These variants are equivalent for computability.

A computation is a sequence of configurations. A configuration records the current state, tape content, and head position. The machine accepts if it reaches an accepting state and rejects if it reaches a rejecting state. If it never reaches a halting state, it loops.

Include a Turing-machine example for recognizing a language of duplicated words separated by `#`, such as $\{u\#u:u\in\{0,1\}^+\}$. The important idea is not the exact state diagram but the mechanism: mark a symbol on the left side, move to the matching symbol on the right side, mark it, return, and repeat until both sides are checked.

### What to Emphasize in an Oral Answer

- Frame the topic as formalizing algorithms and decision problems through languages of encoded inputs.
- Define the basic Turing-machine components: finite control, unbounded tape, head, tape/input alphabets, transition function, and halting states.
- Explain configurations and computations: state, tape contents, head position, then accept, reject, or loop.
- State the Church-Turing thesis and stress that it is a foundational thesis, not a theorem.
- Mention why the thesis is credible: independent models such as lambda calculus, recursive functions, register machines, and real programming languages agree in computability power.
- Distinguish recognizers from deciders: recognizers may loop on no-instances, deciders halt on every input.
- Include one concrete TM mechanism if asked, such as marking matching symbols to recognize words of the form $u\#u$.

::: details Suggested answer

Theory of computation begins by formalizing the idea of an algorithm. A Turing machine is a simple but powerful model: it has a finite control, an unbounded tape, and a head that reads, writes, and moves along the tape. At each step, the transition function uses the current state and tape symbol to choose a new state, write a symbol, and move the head.

An input computation is a sequence of configurations. A configuration records the state, tape contents, and head position. If the machine enters an accepting state, it accepts the input. If it enters a rejecting state, it rejects. If it never halts, it loops.

The Church-Turing thesis says that every effectively computable function can be computed by a Turing machine. This is not proved like a theorem, because "effectively computable" is an informal notion, but it is supported by the fact that many different formal models lead to the same class of computable functions. Therefore Turing machines are used as a standard model for reasoning about algorithms.

It is also important to distinguish recognition from decision. A recognizer must halt and accept inputs in the language, but it may loop forever on inputs outside the language. A decider must halt on every input and answer yes or no correctly. That distinction is the basis for recursive and recursively enumerable languages.

As a concrete mechanism, a Turing machine can recognize a structured language such as $\{u\#u\}$ by repeatedly marking one unprocessed symbol on the left of `#`, moving to the matching position on the right, marking it, and returning until both sides have been checked.

:::

## 13.2 Turing-Machine Variants: Multitape, Nondeterministic, Counting, and Offline

Turing-machine variants change the machine model but usually not the class of computable languages. They often affect time or space complexity.

### Multitape Turing Machines

A multitape Turing machine has several tapes, each with its own head. In one step, it reads the symbols under all heads, writes on all tapes, changes state, and moves each head.

Multitape machines are more convenient and can be faster. However, they are computationally equivalent to one-tape machines. A one-tape machine can simulate all tapes by encoding their contents on one tape, with marked head positions. This simulation may introduce polynomial overhead.

### Nondeterministic Turing Machines

A nondeterministic Turing machine may have several possible transitions from the same configuration. Computation is a tree of possible branches. It accepts if **some** branch accepts.

For decision problems, this is equivalent to saying that a yes-instance has a certificate or computation path that can be verified. Deterministic machines can simulate nondeterministic machines by systematically exploring the computation tree, but this may take exponential time.

### Counting Turing Machines

A counting Turing machine can be understood as a Turing-machine model equipped with counters or countable work storage for natural numbers, with operations such as increment, decrement, and zero-test. This model is useful for discussing alternative algorithm models, but it does not exceed ordinary Turing-machine computability: counters can be encoded on a tape, and tape computations can be simulated by suitable counter encodings.

### Offline Turing Machines

Discuss offline machines in the space-complexity section. An offline Turing machine separates:

| Tape | Role |
| --- | --- |
| Read-only input tape | Contains the input and is not counted as work space in the same way. |
| Work tape(s) | Used for computation and counted for space complexity. |
| Optional output tape | Used to write output, often one-way or write-only in some models. |

Offline machines are useful in space complexity because we want to measure the additional memory used by the algorithm, not the input size itself.

### Variant Summary

| Variant | Main point | Effect |
| --- | --- | --- |
| Multitape | Several tapes and heads. | Same computability, often lower time complexity. |
| Nondeterministic | Many possible branches; accepts if one branch accepts. | Same decidability power, central for NP. |
| Counting | Counters as work storage. | Equivalent computability after encoding. |
| Offline | Read-only input separated from work space. | Standard for defining space complexity. |

### What to Emphasize in an Oral Answer

- State the general theme: variants change convenience or resource bounds, not ordinary computability.
- For multitape machines, explain multiple tapes/heads and simulation by one tape through encoding, usually with polynomial overhead.
- For nondeterministic machines, define branching computation and acceptance by some accepting branch.
- Connect nondeterminism to certificates and NP, while noting deterministic simulation may be exponentially slower.
- For counting machines, explain counters with increment/decrement/zero-test and equivalence by encoding counters on tapes.
- For offline machines, separate read-only input from work tapes and explain why this is natural for space complexity.
- Mention that variants can change time or space complexity even when they do not change decidability.

::: details Suggested answer

Turing-machine variants change the model to make algorithms easier to describe or to measure resources differently. A multitape Turing machine has several tapes and heads, so it can store different pieces of information separately. This can make algorithms faster and clearer, but it does not change what is computable, because a one-tape machine can encode and simulate all tapes.

A nondeterministic Turing machine may choose among several transitions. Its computation is a tree, and it accepts if at least one branch accepts. Deterministic machines can simulate this by exploring the tree, but the simulation may be exponentially slower. This model is central for NP, where yes-instances have some accepting computation path or certificate.

Counting Turing machines use counters as a form of storage. They are another algorithmic model, but counters can be encoded on ordinary tapes and ordinary tape behavior can be simulated by suitable counter encodings, so they do not go beyond Turing computability.

Offline Turing machines separate the read-only input tape from the work tapes. This is especially important for space complexity, because it lets us measure the extra working memory used by the algorithm rather than charging the algorithm for merely having an input.

:::

## 13.3 Recursive and Recursively Enumerable Languages

The language view of decision problems lets us classify problems by how Turing machines behave on their encodings.

| Class | Machine behavior |
| --- | --- |
| Recursive / decidable language | There is a Turing machine that halts on every input and accepts exactly the words in the language. |
| Recursively enumerable / recognizable language | There is a Turing machine that halts and accepts words in the language; on words outside the language it may reject or loop forever. |

Every recursive language is recursively enumerable, because a decider is also a recognizer. The converse is false.

Useful equivalent viewpoint:

| Language status | Yes input | No input |
| --- | --- | --- |
| Recursive | Halt accept | Halt reject |
| Recursively enumerable only | Halt accept | May loop |
| Not recursively enumerable | No recognizer can halt exactly on all yes inputs |

A language $L$ is recursive iff both $L$ and its complement $\overline L$ are recursively enumerable. One direction is easy: if $L$ is decidable, decide both $L$ and its complement. For the other direction, run the recognizers for $L$ and $\overline L$ in parallel; exactly one must eventually accept, giving a decider.

Two important existence results:

| Result | Meaning |
| --- | --- |
| A language that is not recursively enumerable | There are more languages than Turing machines, so not every language can even be recognized. |
| A recursively enumerable but undecidable language | Some languages can be recognized but not decided. The universal/halting-style language is the central example. |

### What to Emphasize in an Oral Answer

- Define recursive/decidable languages by a machine that halts on every input and accepts exactly the language.
- Define recursively enumerable/recognizable languages by halting and accepting yes-instances, with possible looping on no-instances.
- State the inclusion: every recursive language is recursively enumerable, but not conversely.
- Use a halting-style or universal language as the standard recognizable-but-undecidable example.
- State the complement characterization: $L$ is recursive iff both $L$ and $\overline L$ are recursively enumerable.
- Explain the parallel-simulation proof idea for the complement characterization.
- Mention that some languages are not recursively enumerable at all because there are more languages than Turing machines.

::: details Suggested answer

Recursive and recursively enumerable languages differ by halting behavior. A recursive, or decidable, language has a Turing machine that halts on every input and gives the correct yes or no answer. A recursively enumerable, or recognizable, language has a Turing machine that halts and accepts exactly the yes-instances, but on no-instances it may run forever.

Every recursive language is recursively enumerable, because a decider can be used as a recognizer. The converse is not true. The halting-style language is recognizable: we can simulate a machine on an input and accept if it eventually halts in the required way. But if it never halts, the simulation never gives a negative answer, and no decider exists for the general problem.

A useful characterization is that a language is recursive exactly when both it and its complement are recursively enumerable. If both sides have recognizers, we can run the two recognizers in parallel. One of them must eventually accept, and that tells us whether the input is in the language or not.

This distinction is one of the main boundaries in computability theory. Recognizability means yes-instances can be verified by waiting long enough. Decidability means every instance can be resolved in finite time.

:::

## 13.4 Undecidable Problems

An **undecidable problem** is a decision problem for which no Turing machine halts on every input and answers correctly. Undecidability is usually proved by diagonalization or reduction from a known undecidable problem.

Include encodings of Turing machines. Since Turing machines are finite descriptions, they can be encoded as words. This allows machines to receive descriptions of other machines as input.

Key undecidable or non-enumerable examples:

| Problem/language | Status | Idea |
| --- | --- | --- |
| Diagonal language | Not recursively enumerable | Constructed to differ from every recognizer on its own encoding. |
| Universal language | Recursively enumerable but undecidable | Pairs $\langle M,w\rangle$ where machine $M$ accepts input $w$. |
| Halting problem | Undecidable | No decider can determine for every $\langle M,w\rangle$ whether $M$ halts on $w$. |
| Empty-language problem for TMs | Undecidable | Asking whether $L(M)=\emptyset$ is nontrivial semantic information. |
| Post correspondence problem | Undecidable | Asks whether two lists of strings have matching concatenations by the same index sequence. |

Reduction is the main transfer tool. To prove problem $B$ undecidable, reduce known undecidable problem $A$ to $B$:

$$
A\le_m B.
$$

This means there is a computable transformation $f$ such that

$$
x\in A \quad\Longleftrightarrow\quad f(x)\in B.
$$

If $B$ had a decider, then $A$ would have a decider by computing $f(x)$ and running the decider for $B$. Therefore $B$ is undecidable.

Also state **Rice's theorem** in spirit: every nontrivial semantic property of recursively enumerable languages recognized by Turing machines is undecidable. "Nontrivial" means some Turing-recognizable languages have the property and some do not. This explains why many questions about what a program recognizes are undecidable.

### What to Emphasize in an Oral Answer

- Define undecidability as the nonexistence of a decider that halts on all inputs and answers correctly.
- Mention encodings of Turing machines as words, which makes self-reference and machine-input questions possible.
- Use the halting problem as the central example and explain the diagonal contradiction idea at a high level.
- Distinguish undecidable from non-recursively-enumerable: the universal language is recognizable but undecidable, while diagonal languages can fail to be recognizable.
- State mapping reductions $A\le_m B$ as computable transformations preserving yes/no answers.
- Explain the proof pattern: if undecidable $A$ reduces to $B$, then a decider for $B$ would decide $A$, impossible.
- Mention Rice's theorem as the broad rule: nontrivial semantic properties of recognized languages are undecidable.

::: details Suggested answer

An undecidable problem is a decision problem with no algorithm that halts on every input and always gives the correct answer. The central reason such problems exist is that Turing machines can be encoded as data, so we can ask machines questions about other machines, or even about themselves.

The halting problem is the standard example. It asks whether a given machine halts on a given input. If a universal decider for this existed, one could build a diagonal machine that behaves oppositely on its own encoding, creating a contradiction. Therefore no such decider exists.

There are also languages that are recursively enumerable but not decidable. The universal acceptance language is recognizable: simulate the encoded machine on the encoded input and accept if it accepts. But it is not decidable because the simulation may run forever, and the halting problem prevents a general negative answer.

Reductions spread undecidability. If a known undecidable problem can be transformed computably into another problem, then the second problem must also be undecidable; otherwise it would solve the first. This is how many undecidability results are proved. Rice's theorem summarizes a large family of such results: every nontrivial semantic property of the language recognized by a Turing machine is undecidable.

:::

## 13.5 Complexity Classes: P, NP, PSPACE, and Related Classes

Computability asks whether an algorithm exists at all. Complexity asks how many resources an algorithm needs as a function of input size.

Time complexity is usually measured by the number of Turing-machine steps. A language is in **P** if some deterministic Turing machine decides it in polynomial time:

$$
P=\bigcup_{k\ge1} TIME(n^k).
$$

P is treated as the class of efficiently solvable decision problems.

A language is in **NP** if some nondeterministic Turing machine decides it in polynomial time. Equivalently, a language is in NP if yes-instances have polynomial-size certificates verifiable by a deterministic polynomial-time algorithm.

$$
P\subseteq NP.
$$

Whether $P=NP$ is a major open problem.

Space complexity measures how many work-tape cells are used. An offline Turing machine model is useful because the read-only input tape is not counted as work memory. A language is in **PSPACE** if it can be decided by a deterministic Turing machine using polynomial space:

$$
PSPACE=\bigcup_{k\ge1} SPACE(n^k).
$$

Important relationships:

$$
P\subseteq NP\subseteq PSPACE.
$$

The second inclusion holds because a polynomial-time nondeterministic computation has at most polynomial-length branches, and depth-first search of the computation tree can reuse space.

Also note:

| Class/result | Meaning |
| --- | --- |
| NPSPACE | Nondeterministic polynomial space. |
| Savitch's theorem | $NPSPACE=PSPACE$ more generally, $NSPACE(f(n))\subseteq SPACE(f(n)^2)$ for suitable $f$. |
| L | Deterministic logarithmic space. |
| NL | Nondeterministic logarithmic space. |

These are useful context, but the topic only names P, NP, and PSPACE.

### What to Emphasize in an Oral Answer

- Frame complexity as resource-bounded computability, usually time and space as functions of input size.
- Define P as deterministic polynomial time and say why it is treated as efficient solvability.
- Define NP both ways: nondeterministic polynomial time and polynomial-size certificates verifiable deterministically in polynomial time.
- State $P\subseteq NP$ and the open problem $P$ versus $NP$.
- Define PSPACE as deterministic polynomial space, using offline machines to avoid counting the read-only input tape as work memory.
- State $P\subseteq NP\subseteq PSPACE$ and give the intuition that polynomial-time branches can be searched using polynomial space.
- Mention NPSPACE and Savitch's theorem only as context: nondeterministic polynomial space equals PSPACE.

::: details Suggested answer

Complexity theory refines computability by measuring resources. Instead of only asking whether a problem is decidable, it asks how much time or memory is needed.

The class P contains decision problems decidable by a deterministic Turing machine in polynomial time. These are usually considered efficiently solvable. The class NP contains decision problems decidable by a nondeterministic Turing machine in polynomial time. Equivalently, a problem is in NP if every yes-instance has a polynomial-size certificate that can be checked in deterministic polynomial time.

Clearly $P\subseteq NP$, because deterministic computation is a special case of nondeterministic computation. The famous open question is whether $P=NP$. If they were equal, every efficiently verifiable yes-answer would also be efficiently findable or decidable.

PSPACE contains problems decidable using polynomial space. It may allow exponential time, as long as the amount of memory used is polynomial. Offline Turing machines are useful here because they separate the input tape from the work tape, so the space bound measures working memory. We have $P\subseteq NP\subseteq PSPACE$. Also note NPSPACE and Savitch's theorem, which says nondeterministic polynomial space collapses to deterministic polynomial space.

:::

## 13.6 NP-Complete Problems

NP-completeness identifies the hardest problems in NP under polynomial-time reductions.

A language $A$ is polynomial-time many-one reducible to $B$, written

$$
A\le_p B,
$$

if there is a polynomial-time computable function $f$ such that

$$
x\in A \quad\Longleftrightarrow\quad f(x)\in B.
$$

A problem $B$ is **NP-hard** if every problem in NP reduces to $B$. It is **NP-complete** if:

1. $B\in NP$;
2. $B$ is NP-hard.

If any NP-complete problem is in P, then $P=NP$. If $P\ne NP$, then no NP-complete problem has a polynomial-time algorithm.

### SAT and 3SAT

SAT asks whether a propositional formula has a truth assignment making it true. Cook-Levin says SAT is NP-complete.

3SAT is the restriction where the formula is in conjunctive normal form and each clause has at most three literals, often exactly three after standard transformations. 3SAT is also NP-complete.

### Common NP-Complete Problems

Several standard examples:

| Problem | Instance | Question |
| --- | --- | --- |
| Clique | Graph $G$, integer $k$ | Does $G$ contain $k$ vertices pairwise connected by edges? |
| Independent Set | Graph $G$, integer $k$ | Does $G$ contain $k$ vertices with no edges among them? |
| Vertex Cover | Graph $G$, integer $k$ | Is there a set of at most $k$ vertices touching every edge? |
| Hamiltonian Cycle | Graph $G$ | Is there a cycle visiting every vertex exactly once? |
| Traveling Salesman decision problem | Weighted complete graph, bound $B$ | Is there a tour with total cost at most $B$? |

Many of these are related:

| Relationship | Explanation |
| --- | --- |
| Clique vs independent set | A clique in $G$ is an independent set in the complement graph. |
| Independent set vs vertex cover | $S$ is an independent set iff $V-S$ is a vertex cover. |
| SAT/3SAT as starting points | Many graph NP-completeness proofs reduce from 3SAT. |

Proof pattern for NP-completeness:

1. Show the problem is in NP by giving a polynomial-time verifier.
2. Choose a known NP-complete problem $A$.
3. Give a polynomial-time reduction $A\le_p B$.
4. Prove the transformation preserves yes/no answers.

### What to Emphasize in an Oral Answer

- Define polynomial-time many-one reduction $A\le_p B$ as a polynomial transformation preserving yes/no answers.
- Define NP-hard and NP-complete separately: NP-hard means all NP problems reduce to it; NP-complete also requires membership in NP.
- State the main consequence: if any NP-complete problem is in P, then $P=NP$.
- Present SAT via Cook-Levin as the foundational NP-complete problem, and 3SAT as the standard restricted NP-complete starting point.
- Name common NP-complete graph/optimization decision problems: Clique, Independent Set, Vertex Cover, Hamiltonian Cycle, and TSP decision.
- Mention useful relationships: clique in $G$ is independent set in $\overline G$, and independent sets complement vertex covers.
- Give the proof pattern: show the target is in NP, reduce from a known NP-complete problem, and prove the transformation preserves yes/no answers.

::: details Suggested answer

NP-complete problems are the hardest problems in NP under polynomial-time reductions. A polynomial reduction from problem $A$ to problem $B$ transforms instances of $A$ into instances of $B$ so that yes-instances remain yes and no-instances remain no. If $B$ could then be solved efficiently, $A$ could be solved efficiently too.

A problem is NP-hard if every problem in NP reduces to it. It is NP-complete if it is NP-hard and also belongs to NP. Membership in NP usually means that yes-instances have certificates that can be checked in polynomial time.

SAT is the foundational NP-complete problem: given a propositional formula, decide whether some truth assignment satisfies it. 3SAT remains NP-complete even when the formula is restricted to conjunctive normal form with clauses of size at most three. From SAT or 3SAT one can reduce to many graph and optimization decision problems.

Typical NP-complete problems include Clique, Independent Set, Vertex Cover, Hamiltonian Cycle, and the decision version of Traveling Salesman. They are useful because they show that many natural search and optimization problems are unlikely to have polynomial-time algorithms. If any NP-complete problem were solved in polynomial time, every problem in NP would be in P, so $P=NP$.

To prove a new problem NP-complete, first show it is in NP by giving a polynomial-time verifier. Then reduce a known NP-complete problem to it in polynomial time and prove that the reduction preserves yes and no instances.

:::

## 13.7 Logic Supplement for SAT and CNF

The logic background needed for NP-completeness is propositional satisfiability, especially SAT and CNF notation.

| Logic concept | Meaning |
| --- | --- |
| Propositional variable | A symbol assigned true or false. |
| Literal | A variable $x$ or its negation $\neg x$. |
| Clause | A disjunction of literals, for example $(x\vee\neg y\vee z)$. |
| CNF | A conjunction of clauses. |
| Model / satisfying assignment | A truth assignment that makes the formula true. |
| SAT | Decide whether a formula has a satisfying assignment. |
| 3SAT | SAT restricted to CNF clauses of size at most three, or exactly three under a common normalized convention. |

Example:

$$
(x\vee y\vee \neg z)\wedge(\neg x\vee z)\wedge(y\vee z)
$$

is in CNF. It is satisfiable if some assignment to $x,y,z$ makes all clauses true.

Broader logic topics include full propositional syntax trees, semantic trees, truth-value trees, DNF/CNF construction procedures, resolution strategies, and predicate calculus. For reductions, the essential part is the SAT/CNF vocabulary and the idea of a satisfying assignment.

### What to Emphasize in an Oral Answer

- Define the logic vocabulary needed for reductions: propositional variable, literal, clause, CNF, model/satisfying assignment, SAT, and 3SAT.
- Explain CNF as an AND of clauses, where each clause is an OR of literals.
- State SAT as asking whether some truth assignment makes the formula true.
- State 3SAT as SAT restricted to CNF clauses of size at most three, or exactly three after normalization.
- Emphasize the NP certificate idea: a truth assignment can be checked against all clauses in polynomial time.
- Connect the supplement to NP-completeness: SAT is foundational, and 3SAT is a common source problem for reductions.

::: details Suggested answer

For NP-completeness, the needed logic background is propositional satisfiability. A literal is a variable or its negation. A clause is an OR of literals. A CNF formula is an AND of clauses. SAT asks whether there is a truth assignment that makes a propositional formula true. 3SAT is the restricted version where the formula is in CNF and clauses have at most, or by convention exactly, three literals.

This matters because SAT is the first standard NP-complete problem, and 3SAT is often used as the starting point for reductions. The logic supplement contains much more material, but the key computational idea is simple: a truth assignment is a certificate, and checking whether it satisfies all clauses is polynomial.

:::
