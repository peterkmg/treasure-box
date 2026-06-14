---
title: '[Final] Formal Languages and Automata'
---

# 12. Formal Languages and Automata

## 12.1 Generative Grammars and the Chomsky Hierarchy

An **alphabet** is a finite nonempty set of symbols. A **word** or **string** over alphabet $V$ is a finite sequence of symbols from $V$. The empty word has length zero and is denoted by $\varepsilon$. The set of all words over $V$ is $V^*$, and the set of nonempty words is $V^+$.

Concatenation joins words. If $u,v\in V^*$, then $uv\in V^*$. Concatenation is associative, but usually not commutative. The empty word is the identity:

$$
u\varepsilon=\varepsilon u=u.
$$

For words, Also define:

| Concept        | Meaning                                                  |
| -------------- | -------------------------------------------------------- |
| Subword        | $u$ is a subword of $v$ if $v=xuy$ for some words $x,y$. |
| Proper subword | $u$ is a subword and $xy\ne\varepsilon$.                 |
| Prefix         | $u$ is a prefix of $v$ if $v=uy$.                        |
| Suffix         | $u$ is a suffix of $v$ if $v=xu$.                        |
| Mirror image   | The word obtained by reversing symbol order.             |

A **language** over $V$ is any subset $L\subseteq V^*$. The empty language is $\emptyset$. A language may be finite or infinite.

Operations on languages:

| Operation     | Definition                                  |
| ------------- | ------------------------------------------- |
| Union         | $L_1\cup L_2=\{u:u\in L_1$ or $u\in L_2\}$  |
| Intersection  | $L_1\cap L_2=\{u:u\in L_1$ and $u\in L_2\}$ |
| Difference    | $L_1-L_2=\{u:u\in L_1,\ u\notin L_2\}$      |
| Complement    | $\overline L=V^*-L$                         |
| Concatenation | $L_1L_2=\{uv:u\in L_1,\ v\in L_2\}$         |
| Iteration     | $L^0=\{\varepsilon\}$, $L^i=LL^{i-1}$       |
| Kleene star   | $L^*=\bigcup_{i\ge 0}L^i$                   |

Call union, concatenation, and iterative closure the **regular operations**.

A **generative grammar** is a quadruple

$$
G=(N,T,P,S),
$$

where:

| Component | Meaning                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------- |
| $N$       | Nonterminal alphabet.                                                                           |
| $T$       | Terminal alphabet, disjoint from $N$.                                                           |
| $S\in N$  | Start symbol.                                                                                   |
| $P$       | Production rules $x\to y$, where $x,y\in(N\cup T)^*$ and $x$ contains at least one nonterminal. |

A word $v$ is **directly derivable** from $u$ if one occurrence of a rule's left side in $u$ is replaced by the rule's right side:

$$
u=u_1xu_2,\quad v=u_1yu_2,\quad x\to y\in P.
$$

This is written $u\Rightarrow_G v$. Its reflexive-transitive closure is written $\Rightarrow_G^*$. The generated language is

$$
L(G)=\{w\in T^*:S\Rightarrow_G^* w\}.
$$

The **Chomsky hierarchy** classifies grammars by rule restrictions:

| Type | Name                            | Rule shape                                                                                                      | Language class                    |
| ---- | ------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| 0    | Phrase-structure / unrestricted | No restriction except left side contains a nonterminal.                                                         | Recursively enumerable languages. |
| 1    | Context-sensitive               | $u_1Au_2\to u_1vu_2$, $v\ne\varepsilon$; optionally $S\to\varepsilon$ under the usual start-symbol restriction. | Context-sensitive languages.      |
| 2    | Context-free                    | $A\to v$, where $A\in N$.                                                                                       | Context-free languages.           |
| 3    | Regular                         | $A\to vB$ or $A\to v$, where $v\in T^*$.                                                                        | Regular languages.                |

The hierarchy is strict:

$$
\mathcal L_3\subset \mathcal L_2\subset \mathcal L_1\subset \mathcal L_0.
$$

Every regular language is context-free, every context-free language is context-sensitive in the usual nonempty-language sense with the $\varepsilon$ exception handled separately, and every context-sensitive language is type 0.

### What to Emphasize in an Oral Answer

- Define alphabet, word/string, empty word $\varepsilon$, $V^*$, and concatenation with $\varepsilon$ as identity.
- Define a language as a subset of $V^*$ and list both set operations and language operations, especially concatenation and Kleene star.
- Identify union, concatenation, and Kleene star as the regular operations.
- Define a generative grammar $G=(N,T,P,S)$ and explain derivation and generated language $L(G)$.
- State the Chomsky hierarchy by rule restrictions: unrestricted, context-sensitive, context-free, and regular.
- Give the strict inclusion chain $\mathcal L_3\subset\mathcal L_2\subset\mathcal L_1\subset\mathcal L_0$.
- Mention the usual context-sensitive $\varepsilon$ exception if the empty word is discussed.

::: details Suggested answer

Formal language theory starts with alphabets and words. An alphabet is a finite nonempty set of symbols, and a word is a finite sequence of symbols over that alphabet. The empty word is denoted by $\varepsilon$, the set of all words is $V^*$, and concatenation joins words. Concatenation is associative, and $\varepsilon$ is its identity.

A language is simply a set of words. Languages can be combined by set operations such as union, intersection, difference, and complement, and also by language operations such as concatenation and Kleene star. These operations are important because regular languages are exactly the languages built from finite languages using union, concatenation, and iteration.

A generative grammar is a formal system for producing words. It consists of nonterminals, terminals, a start symbol, and production rules. A derivation starts from the start symbol and repeatedly replaces a left side of a rule by its right side. The language generated by the grammar is the set of all terminal words derivable from the start symbol.

The Chomsky hierarchy classifies grammars by how restricted their rules are. Type 0 grammars are unrestricted. Type 1 grammars are context-sensitive: a nonterminal may be rewritten only within a context, and the rule cannot shrink the word except for the special empty-word rule. Type 2 grammars are context-free: a single nonterminal is rewritten independently of context. Type 3 grammars are regular: rules are essentially right-linear. The corresponding language classes satisfy $\mathcal L_3\subset\mathcal L_2\subset\mathcal L_1\subset\mathcal L_0$, so regular languages are the simplest class and unrestricted languages are the broadest.

:::

## 12.2 Normal Forms of Grammars

A **normal form** is an equivalent grammar shape with simpler syntactic restrictions. Normal forms are useful because they preserve the generated language while making proofs and algorithms easier.

For **type-3 grammars**, every regular language can be generated by a grammar with only rules of the form:

$$
X\to aY,\quad X\to\varepsilon,
$$

where $X,Y\in N$ and $a\in T$. This is a strict right-linear normal form.

For **context-free grammars**, Discuss three transformations.

First, empty right-hand sides can be eliminated except for the start symbol if the language contains $\varepsilon$. More precisely, for every context-free grammar $G$ one can construct an equivalent grammar $G'$ in which every right-hand side is nonempty, except possibly a single rule

$$
S'\to\varepsilon,
$$

where $S'$ does not occur on the right-hand side of any rule.

An **$\varepsilon$-free grammar** has no rule whose right-hand side is $\varepsilon$. For every context-free grammar $G$, one can construct an $\varepsilon$-free grammar $G'$ with

$$
L(G')=L(G)-\{\varepsilon\}.
$$

Second, a grammar is in **Chomsky normal form** if every production has one of these forms:

$$
X\to a,\quad X\to YZ,
$$

where $X,Y,Z\in N$ and $a\in T$. For every $\varepsilon$-free context-free grammar, an equivalent grammar in Chomsky normal form can be constructed.

Chomsky normal form matters because derivations have a tree-like binary structure. A word of length $n$ is derived using terminal rules for leaves and binary rules for internal branching. This supports parsing and decidability of membership.

Third, a context-free grammar can be **reduced** by removing useless nonterminals.

| Concept                 | Meaning                                                        |
| ----------------------- | -------------------------------------------------------------- |
| Active nonterminal      | Some terminal word can be derived from it.                     |
| Inactive nonterminal    | No terminal word can be derived from it.                       |
| Reachable nonterminal   | Appears in some sentential form derived from the start symbol. |
| Unreachable nonterminal | Cannot be reached from the start symbol.                       |
| Useless nonterminal     | Inactive or unreachable.                                       |
| Reduced grammar         | Every nonterminal is active and reachable.                     |

It is decidable whether a nonterminal is active or reachable, and every context-free grammar can be transformed into an equivalent reduced grammar.

A **derivation tree** represents a context-free derivation as a tree. The root is labelled by $S$, internal nodes are nonterminals, and leaves are terminals or possibly $\varepsilon$ depending on the grammar form. A derivation tree captures the structural production of a word. It does not necessarily record the exact order in which rules were applied, because independent branches may be expanded in different orders. Every derivation tree determines a unique leftmost derivation when the leftmost nonterminal is always rewritten first.

### What to Emphasize in an Oral Answer

- Define a normal form as an equivalent grammar with restricted production shapes used for proofs and algorithms.
- For type-3 grammars, state the right-linear normal form $X\to aY$ and $X\to\varepsilon$.
- For CFGs, explain elimination of $\varepsilon$-rules, preserving $\varepsilon$ only through a special start rule when needed.
- Describe reduction of CFGs by removing inactive and unreachable nonterminals.
- State Chomsky normal form rules $X\to a$ and $X\to YZ$ and that every $\varepsilon$-free CFG can be converted to it.
- Explain why CNF matters: binary derivation trees support parsing and membership algorithms.
- Mention derivation trees and the role of leftmost derivations as a canonical derivation order for a tree.

::: details Suggested answer

Normal forms are equivalent grammar shapes with stricter production rules. They are useful because they simplify algorithms and proofs without changing the language, except for controlled treatment of the empty word.

For regular grammars, a normal form uses rules such as $X\to aY$ and $X\to\varepsilon$. This makes the connection with finite automata clear: each nonterminal behaves like a state, reading one terminal symbol and moving to another nonterminal, or accepting by producing the empty continuation.

For context-free grammars, the first important cleanup is removing empty productions. If the language contains the empty word, a special new start rule may preserve it; otherwise the grammar can be made $\varepsilon$-free. Another cleanup is reduction: remove nonterminals that can never produce a terminal word or can never be reached from the start symbol. A reduced grammar contains only useful nonterminals.

The most important context-free normal form here is Chomsky normal form. Its rules are only $X\to a$ or $X\to YZ$. This binary structure is especially useful for parsing and decidability arguments, because every derivation tree has a controlled shape. It leads directly to algorithms for testing whether a word belongs to a context-free language. Derivation trees also explain why different derivation orders can describe the same structural derivation; using leftmost derivations gives a canonical order for the same tree.

:::

## 12.3 Regular Expressions

Regular expressions are a syntactic way to define regular languages. They are built recursively from alphabet symbols and regular operations.

Let $V$ be the alphabet. Regular expressions over $V$ are generated by:

1. $\varepsilon$ is a regular expression.
2. Every $a\in V$ is a regular expression.
3. If $R$ is a regular expression, then $(R)^*$ is a regular expression.
4. If $Q$ and $R$ are regular expressions, then $(Q)\cdot(R)$ and $(Q)+(R)$ are regular expressions.

The usual meanings are:

| Expression    | Language denoted  |
| ------------- | ----------------- |
| $\varepsilon$ | $\{\varepsilon\}$ |
| $a$           | $\{a\}$           |
| $Q+R$         | $L(Q)\cup L(R)$   |
| $Q\cdot R$    | $L(Q)L(R)$        |
| $R^*$         | $L(R)^*$          |
| $\emptyset$   | $\emptyset$       |

The list includes algebraic laws for regular expressions:

| Law                            | Form                               |
| ------------------------------ | ---------------------------------- |
| Associativity of union         | $P+(Q+R)=(P+Q)+R$                  |
| Associativity of concatenation | $P(QR)=(PQ)R$                      |
| Commutativity of union         | $P+Q=Q+P$                          |
| Distributivity                 | $P(Q+R)=PQ+PR$, $(P+Q)R=PR+QR$     |
| Identity                       | $\varepsilon P=P\varepsilon=P$     |
| Star unfolding                 | $P^*=\varepsilon+PP^*$             |
| Star with optional one-step    | $P^*=(\varepsilon+P)^*$            |
| Empty annihilator              | $\emptyset P=P\emptyset=\emptyset$ |

It also gives an inference rule similar to Arden's lemma:

$$
P=R+P\cdot Q,\quad \varepsilon\notin Q \Longrightarrow P=R\cdot Q^*.
$$

The central theorem is:

> Every regular expression denotes a regular language, and every regular language can be denoted by a regular expression.

This theorem connects expressions, regular grammars, and finite automata as equivalent descriptions of the same language class.

### What to Emphasize in an Oral Answer

- Define regular expressions recursively from $\varepsilon$, alphabet symbols, union, concatenation, and Kleene star.
- Keep syntax and semantics separate: expressions denote languages.
- State the meanings of $+$, concatenation, star, $\varepsilon$, and $\emptyset$.
- Mention important algebraic laws: associativity, commutativity of union, distributivity, identities, empty-language annihilation, and star unfolding.
- Include Arden-style equation solving when relevant: $P=R+PQ$ with $\varepsilon\notin Q$ gives $P=RQ^*$.
- State the central equivalence theorem: regular expressions, regular grammars, and finite automata define the same language class.

::: details Suggested answer

Regular expressions are a compact notation for regular languages. They start from basic expressions for single symbols and the empty word, then combine them using union, concatenation, and Kleene star. The meaning is language-theoretic: union means alternative choice, concatenation means one word followed by another, and star means any finite number of repetitions, including zero repetitions.

The expression syntax is separate from semantics. For example, $a+b$ is a syntactic expression, and it denotes the language $\{a,b\}$. Similarly, $ab$ denotes the language containing the one word $ab$, and $a^*$ denotes all finite strings of $a$'s, including $\varepsilon$.

Regular expressions satisfy algebraic laws such as associativity and commutativity of union, associativity of concatenation, distributivity of concatenation over union, and identities involving $\varepsilon$ and $\emptyset$. Star has characteristic equations such as $P^*=\varepsilon+PP^*$. Arden-style reasoning can solve regular-expression equations and is useful when deriving an expression from an automaton.

The key theorem is that regular expressions describe exactly the regular languages. Every expression denotes a regular language because it is built using operations under which regular languages are closed. Conversely, every regular language accepted by a finite automaton can be expressed by a regular expression. Thus regular grammars, finite automata, and regular expressions are equivalent descriptions of the same class.

:::

## 12.4 Finite Automata

Finite automata are recognizing devices for regular languages. A deterministic finite automaton is a quintuple

$$
A=(Q,T,\delta,q_0,F),
$$

where:

| Component               | Meaning                        |
| ----------------------- | ------------------------------ |
| $Q$                     | Finite nonempty set of states. |
| $T$                     | Input alphabet.                |
| $\delta:Q\times T\to Q$ | Transition function.           |
| $q_0\in Q$              | Initial state.                 |
| $F\subseteq Q$          | Accepting states.              |

The automaton reads the input word from left to right. After the last symbol is read, it accepts if the current state is in $F$.

A **nondeterministic finite automaton** allows several possible next states:

$$
\delta:Q\times T\to 2^Q.
$$

An automaton may also permit a set $Q_0$ of initial states. The current state can be regarded as a set of possible states. A word is accepted if some possible run reaches an accepting state.

Automaton transitions can be viewed as rules:

$$
qa\to p
$$

when $p\in\delta(q,a)$. A direct reduction changes $qaw$ to $pw$, consuming one input symbol. The accepted language is

$$
L(A)=\{u\in T^*:q_0u\Rightarrow_A^*p,\ p\in F\}.
$$

For an NFA with initial-state set $Q_0$, the empty word is accepted exactly when $Q_0\cap F\ne\emptyset$.

Core equivalence theorems:

| Theorem                      | Meaning                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------- |
| NFA to regular grammar       | For every NFA $A$, there is a type-3 grammar $G$ with $L(G)=L(A)$.              |
| Regular grammar to automaton | For every type-3 grammar $G$, there is a finite automaton $A$ with $L(A)=L(G)$. |
| NFA to DFA                   | For every NFA there is an equivalent DFA.                                       |

The NFA-to-DFA construction is the **subset construction**. DFA states are subsets of NFA states. On symbol $a$, a subset $R\subseteq Q$ moves to

$$
\delta'(R,a)=\bigcup_{q\in R}\delta(q,a).
$$

Accepting subsets are those intersecting $F$. This proves that nondeterminism does not increase expressive power for finite automata.

### What to Emphasize in an Oral Answer

- Define a DFA by its finite states, input alphabet, transition function, initial state, and accepting states.
- Explain the run: read input left to right and accept exactly if the final state after the whole word is accepting.
- Contrast NFAs: a state and symbol may have several possible next states, and acceptance means some run accepts.
- Mention multiple initial states or empty-word acceptance conditions when they appear in the model.
- State subset construction: DFA states are subsets of NFA states, accepting subsets intersect the NFA accepting set.
- Emphasize that nondeterminism does not increase finite-automaton expressive power, though it may reduce description size.
- State equivalence with regular grammars and regular expressions.

::: details Suggested answer

A finite automaton is a finite-state recognizer for words. It has a finite set of states, an input alphabet, a transition function, an initial state, and a set of accepting states. It reads the input from left to right, updating its state after each symbol. When the input is finished, the word is accepted exactly if the automaton is in an accepting state.

In a deterministic finite automaton, each pair of current state and input symbol determines exactly one next state. In a nondeterministic finite automaton, a pair may determine several next states, or none. A nondeterministic automaton accepts a word if at least one possible run reaches an accepting state.

The important result is that deterministic and nondeterministic finite automata recognize the same languages. The subset construction turns an NFA into a DFA by making each DFA state a set of possible NFA states. This can increase the number of states, but it does not change the accepted language.

Finite automata are equivalent to regular grammars and regular expressions. From an automaton one can construct a regular grammar whose nonterminals behave like states. From a regular grammar one can build an automaton whose transitions simulate productions. Therefore finite automata are exactly the recognizing model for regular languages.

:::

## 12.5 Pushdown Automata

Pushdown automata recognize context-free languages by adding a stack to finite control. A pushdown automaton can be defined as

$$
A=(Z,Q,T,\delta,z_0,q_0,F),
$$

where:

| Component                                                         | Meaning                |
| ----------------------------------------------------------------- | ---------------------- |
| $Z$                                                               | Finite stack alphabet. |
| $Q$                                                               | Finite set of states.  |
| $T$                                                               | Input alphabet.        |
| $\delta:Z\times Q\times(T\cup\{\varepsilon\})\to 2^{Z^*\times Q}$ | Transition function.   |
| $z_0\in Z$                                                        | Initial stack symbol.  |
| $q_0\in Q$                                                        | Initial state.         |
| $F\subseteq Q$                                                    | Accepting states.      |

A configuration records the stack content, current state, and unread input. One compact notation combines stack and state into words such as $z_0q_0w$.

If the top stack symbol is $z$, the current state is $q$, and the next input symbol is $a$, then a transition

$$
(u,p)\in\delta(z,q,a)
$$

means: replace top stack symbol $z$ by word $u$, move to state $p$, and consume $a$. If the transition uses $\varepsilon$, it does not consume an input symbol.

Acceptance by final state:

$$
L(A)=\{w\in T^*:z_0q_0w\Rightarrow_A^*up,\ u\in Z^*,\ p\in F\}.
$$

Acceptance by empty stack:

$$
N(A)=\{w\in T^*:z_0q_0w\Rightarrow_A^*p,\ p\in Q\}.
$$

State two equivalence theorems:

| Theorem    | Meaning                                                                  |
| ---------- | ------------------------------------------------------------------------ |
| CFG to PDA | For every context-free grammar $G$, there is a PDA $A$ with $L(A)=L(G)$. |
| PDA to CFG | For every PDA $A$, there is a context-free grammar $G$ with $L(G)=N(A)$. |

Thus pushdown automata and context-free grammars are equivalent in expressive power.

Determinism for pushdown automata is stricter than for finite automata. For each pair of top stack symbol and state, either exactly one input-consuming move is available for each input symbol and no $\varepsilon$-move is available, or exactly one $\varepsilon$-move is available and no input-consuming move is available. Unlike finite automata, deterministic and nondeterministic pushdown automata do not recognize exactly the same language class; nondeterministic PDAs recognize all context-free languages, while deterministic PDAs recognize a proper subclass.

### What to Emphasize in an Oral Answer

- Define a PDA as finite control plus a stack, with stack alphabet, input alphabet, transition relation, initial stack symbol/state, and final states.
- Explain a transition: inspect state, top stack symbol, and input symbol or $\varepsilon$; replace the top stack symbol, change state, and optionally consume input.
- Use the stack's LIFO memory to explain matching and nesting, the typical context-free behavior.
- Distinguish acceptance by final state and acceptance by empty stack; for nondeterministic PDAs they are equivalent in expressive power.
- State both equivalence theorems: CFGs can be simulated by PDAs and PDAs can be converted to CFGs.
- Highlight the contrast with finite automata: deterministic and nondeterministic PDAs are not equivalent in power.

::: details Suggested answer

A pushdown automaton is a finite automaton equipped with a stack. The finite control stores the current state, while the stack stores unbounded last-in-first-out information. A transition looks at the current state, the top stack symbol, and either the next input symbol or $\varepsilon$. It then changes state, replaces the top stack symbol by a word of stack symbols, and optionally consumes an input symbol.

This stack is exactly what makes pushdown automata suitable for context-free languages. Finite automata cannot count arbitrarily nested or matched structures, but a stack can remember pending symbols. For example, a PDA can push symbols while reading one part of a word and pop them while reading a matching later part.

There are two common acceptance modes. Acceptance by final state means that after reading the input the automaton reaches an accepting state. Acceptance by empty stack means that after reading the input the stack has been reduced to empty, regardless of final state. These acceptance conventions are equivalent in expressive power for nondeterministic pushdown automata, with suitable constructions.

The key theorem is that pushdown automata recognize exactly the context-free languages. Every context-free grammar can be simulated by a PDA, and every PDA can be converted into a context-free grammar. Determinism is more delicate here than for finite automata: nondeterministic finite automata can always be determinized, but nondeterministic pushdown automata are more powerful than deterministic ones.

:::

## 12.6 Closure Properties of Language Classes

Closure properties state whether applying an operation to languages in a class always produces another language in the same class.

every Chomsky class $\mathcal L_i$ is closed under the **regular operations**: union, concatenation, and iterative closure. It is useful to separate the regular and context-free cases because their closure properties differ in important ways.

Regular languages are closed under:

| Operation     | Reason or construction                                                       |
| ------------- | ---------------------------------------------------------------------------- |
| Union         | Product construction or NFA branching.                                       |
| Concatenation | NFA connects final states of the first automaton to the start of the second. |
| Kleene star   | NFA loops from accepting states back to the start and allows $\varepsilon$.  |
| Intersection  | Product automaton tracks both input automata.                                |
| Complement    | Complete a DFA and swap accepting/nonaccepting states.                       |
| Difference    | $L_1-L_2=L_1\cap\overline{L_2}$.                                             |
| Reversal      | Reverse automaton edges and swap start/final roles using an NFA.             |

Context-free languages are closed under:

| Operation                          | Status                                                                |
| ---------------------------------- | --------------------------------------------------------------------- |
| Union                              | Closed. Add a new start symbol with alternatives to the two grammars. |
| Concatenation                      | Closed. Add a start rule combining the two start symbols.             |
| Kleene star                        | Closed. Add recursive start rules for repeated copies.                |
| Reversal                           | Closed. Reverse right-hand sides of grammar rules.                    |
| Intersection with regular language | Closed. Combine a PDA with a finite automaton.                        |

Context-free languages are **not** closed under:

| Operation            | Caution                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| General intersection | Two CFLs can intersect to a non-CFL.                                                                                           |
| Complement           | If CFLs were closed under complement, closure under union would imply closure under intersection by De Morgan, which is false. |
| Difference           | Difference with an arbitrary CFL would imply complement.                                                                       |

The broader Chomsky hierarchy has additional closure facts, but for the subject the most important practical contrast is: regular languages have robust Boolean closure; context-free languages are closed under the grammar-building operations but not under arbitrary Boolean operations.

### What to Emphasize in an Oral Answer

- Define closure under an operation and apply it to language classes.
- State that the Chomsky classes are closed under regular operations: union, concatenation, and Kleene star.
- For regular languages, list strong closures: union, concatenation, star, intersection, complement, difference, and reversal.
- Tie regular closures to automata constructions such as product automata, DFA complementation, and reversing edges with an NFA.
- For context-free languages, list positive closures: union, concatenation, star, reversal, and intersection with a regular language.
- State the negative CFL closures: not closed under arbitrary intersection, complement, or difference.
- Explain the De Morgan reason why complement closure plus union closure would imply intersection closure.

::: details Suggested answer

A language class is closed under an operation if applying that operation to languages in the class always gives a language still in the class. The Chomsky classes are closed under the regular operations: union, concatenation, and Kleene star. Regular languages have even stronger closure properties. They are closed under union, concatenation, Kleene star, intersection, complement, difference, and reversal. The automata constructions explain this: union and intersection use product or nondeterministic constructions, complement swaps accepting and nonaccepting states in a complete DFA, and difference is intersection with a complement.

Context-free languages have weaker closure properties. They are closed under union, concatenation, Kleene star, and reversal because grammars can be combined or transformed to produce these languages. They are also closed under intersection with a regular language, because a pushdown automaton can be run together with a finite automaton.

However, context-free languages are not closed under arbitrary intersection, complement, or difference. This is a central contrast with regular languages. The reason complement closure would be too strong is that, together with union closure, it would imply intersection closure by De Morgan's laws, but context-free languages are known not to be closed under intersection.

So for oral exam purposes, the safe summary is: regular languages are closed under both regular operations and Boolean operations; context-free languages are closed under the constructive operations used by grammars, but not under general Boolean operations.

:::

## 12.7 Algorithmic Problems for Regular and Context-Free Languages

An **algorithmic problem** asks whether there is an effective procedure deciding a property of a grammar, automaton, or language.

For **regular languages**, many central problems are decidable because finite automata have finitely many states and can be analyzed as finite graphs.

| Problem     | Regular-language method                                                               |
| ----------- | ------------------------------------------------------------------------------------- |
| Membership  | Run the DFA or simulate the NFA on the word.                                          |
| Emptiness   | Check whether an accepting state is reachable from an initial state.                  |
| Finiteness  | Check whether a cycle lies on some path from the initial state to an accepting state. |
| Equivalence | Minimize DFAs or test emptiness of the symmetric difference.                          |
| Inclusion   | Test emptiness of $L(A)\setminus L(B)$.                                               |

For **context-free languages**, the main decidability results are:

| Problem                 | Context-free-language method or theorem                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Membership              | Decidable; Chomsky normal form supports parsing algorithms such as CYK.                                          |
| Emptiness               | Decidable; remove inactive/unreachable nonterminals or test whether the start symbol can derive a terminal word. |
| Finiteness/infiniteness | Decidable; use grammar graph/cycle analysis after reduction.                                                     |

Also include the **Bar-Hillel lemma**, a pumping lemma for context-free languages. For every context-free language $L$, there are natural numbers $p$ and $q$ such that every word in $L$ longer than $p$ can be written in the form

$$
uxwyz
$$

with

$$
|xwy|\le q,\quad xy\ne\varepsilon,
$$

and

$$
ux^iwy^iz\in L
$$

for every $i\ge0$.

This lemma is mainly a proof tool for showing that some languages are not context-free. The exact notation differs across textbooks; the core idea is that in a long enough derivation tree, a nonterminal repeats along a path, allowing two parts of the word to be pumped together.

Important cautions for context-free languages:

| Problem                       | Status       |
| ----------------------------- | ------------ |
| Equivalence of arbitrary CFGs | Undecidable. |
| Inclusion of arbitrary CFGs   | Undecidable. |
| Ambiguity of arbitrary CFGs   | Undecidable. |
| Universality of CFGs          | Undecidable. |

These negative results explain why normal forms and decidable subproblems are important: context-free grammars are useful and analyzable in some ways, but not all natural questions about them have algorithms.

### What to Emphasize in an Oral Answer

- Define algorithmic problems as decidability questions about grammars, automata, and languages.
- For regular languages, mention why many problems are decidable: finite automata are finite graphs.
- State regular-language methods for membership, emptiness, finiteness, equivalence, and inclusion.
- For context-free languages, list the main decidable problems: membership, emptiness, and finiteness/infiniteness.
- Mention Chomsky normal form and parsing algorithms such as CYK for CFG membership.
- State the Bar-Hillel pumping lemma's purpose: long CFL words have pumpable paired parts, used mainly to prove languages are not CFLs.
- Name the major undecidable CFG problems: equivalence, inclusion, ambiguity, and universality.

::: details Suggested answer

Algorithmic problems ask what properties of languages, grammars, and automata can be decided by an algorithm. For regular languages, the main questions are decidable because finite automata are finite graphs. Membership is decided by running the automaton. Emptiness is decided by reachability of an accepting state. Finiteness is decided by checking whether there is a cycle on a path from the start to an accepting state. Equivalence and inclusion are also decidable, for example by using complement and intersection to reduce them to emptiness.

For context-free languages, several important problems remain decidable. Membership is decidable, and Chomsky normal form gives a basis for parsing algorithms. Emptiness is decidable by checking whether the start symbol can derive some terminal word, which is related to removing inactive and unreachable nonterminals. Infiniteness is also decidable by analyzing whether a reduced grammar can generate arbitrarily long words.

The Bar-Hillel lemma is a pumping lemma for context-free languages. It says that every sufficiently long word in a context-free language has two parts that can be repeated together while staying in the language. This is usually used negatively: to prove a language is not context-free, assume it is context-free, take a long enough word, and show that every possible pumping decomposition eventually leaves the language.

The important caution is that context-free languages are not algorithmically tame in every respect. Equivalence, inclusion, universality, and ambiguity of arbitrary context-free grammars are undecidable. Thus regular languages have a very complete finite-state decision theory, while context-free languages have useful decidable problems but also important undecidable boundaries.

:::
