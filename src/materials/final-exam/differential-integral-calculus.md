---
title: '[Final] Differential and Integral Calculus'
---

# 2. Differential and Integral Calculus

## 2.1 Derivative of Real Functions

For a real function $f$ defined near $a$, the derivative at $a$ is the limit

$$
f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h},
$$

if the finite limit exists. Equivalently,

$$
f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.
$$

The quotient is the slope of the secant line through $(a,f(a))$ and $(a+h,f(a+h))$; the derivative is the limiting slope of the tangent line. The one-variable definition is the concrete special case of the more general differentiability concept for mappings between normed spaces.

Differentiability implies continuity. If $f'(a)$ exists, then

$$
f(a+h)-f(a)=h\cdot\frac{f(a+h)-f(a)}{h}\to 0,
$$

so $f(a+h)\to f(a)$. The converse is false: $f(x)=|x|$ is continuous at $0$ but not differentiable there, because the left and right slopes are $-1$ and $1$.

The tangent line at $a$ is

$$
y=f(a)+f'(a)(x-a).
$$

The linear approximation form is

$$
f(a+h)=f(a)+f'(a)h+o(h)\quad(h\to 0),
$$

meaning that the error is negligible compared with $h$. This is the one-variable version of the general differentiability formula with a linear map plus a small error term.

Basic differentiation rules:

| Rule | Formula |
| --- | --- |
| Constant multiple | $(cf)'=cf'$ |
| Sum / difference | $(f+g)'=f'+g'$, $(f-g)'=f'-g'$ |
| Product | $(fg)'=f'g+fg'$ |
| Reciprocal | $(1/g)'=-g'/g^2$, where $g \ne 0$ |
| Quotient | $(f/g)'=(f'g-fg')/g^2$, where $g \ne 0$ |
| Chain rule | $(g\circ f)'(a)=g'(f(a))f'(a)$ |
| Inverse function | If $f$ is invertible and $f'(a)\ne 0$, then $(f^{-1})'(f(a))=1/f'(a)$ |

Common elementary derivatives:

| Function | Derivative |
| --- | --- |
| $x^n$ | $n x^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $1/\cos^2 x$ |

### What to Emphasize in an Oral Answer

- Define the derivative as the limit of the difference quotient and interpret it as the limiting slope of secants or the tangent slope.
- State the tangent-line formula $y=f(a)+f'(a)(x-a)$ and the local linear approximation $f(a+h)=f(a)+f'(a)h+o(h)$.
- Emphasize differentiability implies continuity, but continuity does not imply differentiability; use $|x|$ at $0$ as the standard contrast.
- Mention the main computation rules: linearity, product, quotient with nonzero denominator, chain rule, and inverse-function rule with nonzero derivative.
- Recall common elementary derivatives when relevant: powers, exponentials, logarithm, and trigonometric functions.

::: details Suggested answer

The derivative of a real function at a point is the limit of the difference quotient. It measures the limiting slope of secant lines, and geometrically it is the slope of the tangent line at the point. If the limit exists, the tangent line has equation $y=f(a)+f'(a)(x-a)$.

Differentiability is stronger than continuity. From the identity $f(a+h)-f(a)=h((f(a+h)-f(a))/h)$, if the derivative exists then the right-hand side tends to zero, so $f(a+h)$ tends to $f(a)$. But a continuous function need not be differentiable; the absolute value function is the standard example at zero.

The derivative also gives the best local linear approximation: $f(a+h)=f(a)+f'(a)h+o(h)$. This means the function is approximated by its tangent line, with an error smaller than first order in $h$.

Finally, derivatives are computed using rules. Linear combinations differentiate linearly, products and quotients use the product and quotient rules, composite functions use the chain rule, and inverse functions differentiate by the reciprocal of the original derivative at the corresponding point, provided that derivative is nonzero.

:::

## 2.2 Applications of Differential Calculus to Function Analysis

Function analysis uses local and absolute extrema, first-order necessary conditions, derivative sign changes, monotonicity, convexity/concavity, inflection, and higher derivatives.

An extremum can be local or absolute:

| Type | Definition |
| --- | --- |
| Local maximum at $a$ | $f(x)\le f(a)$ for all $x$ in some neighborhood of $a$. |
| Local minimum at $a$ | $f(x)\ge f(a)$ for all $x$ in some neighborhood of $a$. |
| Absolute maximum at $a$ | $f(x)\le f(a)$ for every $x$ in the domain. |
| Absolute minimum at $a$ | $f(x)\ge f(a)$ for every $x$ in the domain. |

If $a$ is an interior point, $f$ is differentiable at $a$, and $f$ has a local extremum at $a$, then

$$
f'(a)=0.
$$

This is necessary, not sufficient. A stationary point may fail to be an extremum, as $f(x)=x^3$ at $0$ shows.

Sufficient tests:

| Test | Conclusion |
| --- | --- |
| $f'$ changes from $+$ to $-$ at $a$ | local maximum |
| $f'$ changes from $-$ to $+$ at $a$ | local minimum |
| $f'(a)=0$ and $f''(a)<0$ | strict local maximum |
| $f'(a)=0$ and $f''(a)>0$ | strict local minimum |
| $f'(a)=0$ and $f''(a)=0$ | inconclusive |

The mean value theorems support many function-analysis arguments:

| Theorem | Statement |
| --- | --- |
| Rolle | If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, then some $c$ has $f'(c)=0$. |
| Lagrange mean value theorem | If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then some $c$ has $f'(c)=(f(b)-f(a))/(b-a)$. |
| Cauchy mean value theorem | Applies the same idea to two functions and compares their increments through derivatives. |

Monotonicity is characterized by the derivative on intervals:

| Derivative condition on interval $I$ | Function behavior |
| --- | --- |
| $f'(x)\ge 0$ for all $x \in I$ | $f$ is increasing on $I$. |
| $f'(x)\le 0$ for all $x \in I$ | $f$ is decreasing on $I$. |
| $f'(x)>0$ for all $x \in I$ | $f$ is strictly increasing. |
| $f'(x)<0$ for all $x \in I$ | $f$ is strictly decreasing. |
| $f'(x)=0$ for all $x \in I$ | $f$ is constant. |

Convexity and concavity:

$$
f(\lambda a+(1-\lambda)b)\le \lambda f(a)+(1-\lambda)f(b)
\quad(0\le \lambda\le 1)
$$

means $f$ is convex. The reverse inequality means concave. Geometrically, a convex graph lies below its chords; a concave graph lies above its chords. If $f$ is differentiable on an interval, then:

| Derivative behavior | Shape |
| --- | --- |
| $f'$ increasing | $f$ convex |
| $f'$ decreasing | $f$ concave |
| $f''\ge 0$ where defined | convex criterion |
| $f''\le 0$ where defined | concave criterion |

An inflection point is a point where the graph changes convexity. Through the tangent definition, at $a$, with tangent $e_a(x)=f(a)+f'(a)(x-a)$, an inflection occurs if $f-e_a$ changes sign at $a$. For example, $x^3$ has an inflection at $0$ because the graph crosses its tangent while changing from concave to convex; $\sin x$ has repeated inflection points; $x^2$ does not have an inflection at $0$ because it stays on one side of its tangent and remains convex.

### What to Emphasize in an Oral Answer

- Frame the topic as using derivatives to analyze extrema, monotonicity, convexity/concavity, and inflection.
- Define local versus absolute extrema and state Fermat's necessary condition: an interior differentiable local extremum has $f'(a)=0$.
- Stress that $f'(a)=0$ is not sufficient; apply first-derivative sign changes or the second-derivative test to classify candidates.
- Mention Rolle's and Lagrange's mean value theorems as the basis for monotonicity results.
- State derivative criteria for monotonicity: $f'\ge0$ increasing, $f'\le0$ decreasing, $f'=0$ constant on intervals.
- Define convexity/concavity via chords and give the derivative tests: increasing/decreasing $f'$ or signs of $f''$.
- Explain inflection as a change of convexity, often seen as the graph crossing its tangent.

::: details Suggested answer

Differential calculus is used in function analysis because the derivative describes local change. For extrema, distinguish local extrema, which compare values only in a neighborhood, from absolute extrema, which compare values on the whole domain. The first important result is the necessary condition: if a differentiable function has a local extremum at an interior point, then its derivative there must be zero. This condition only gives candidates. To decide the type, we use sufficient conditions: if the derivative changes from positive to negative, there is a local maximum; if it changes from negative to positive, there is a local minimum. If the second derivative exists and $f'(a)=0$, then $f''(a)<0$ gives a strict local maximum, while $f''(a)>0$ gives a strict local minimum.

The derivative also controls monotonicity. On an interval, nonnegative derivative means increasing, nonpositive derivative means decreasing, and a derivative that is identically zero means the function is constant. These statements are based on the mean value theorem.

For shape, convexity means the graph lies below its chords, and concavity means it lies above them. If the derivative is increasing, the function is convex; if the derivative is decreasing, the function is concave. When the second derivative exists, this is often checked by the sign of $f''$. An inflection point is where the graph changes convexity, equivalently where the graph crosses its tangent in a sign-changing way.

:::

## 2.3 Differential Calculus of Functions of Several Variables

For $f: \mathbb{R}^n \to \mathbb{R}^m$, differentiability at an interior point $a$ means there is a bounded linear map $L$ such that

$$
f(a+h)-f(a)=L(h)+\eta(h)\|h\|,
\qquad \eta(h)\to 0 \text{ as } \|h\|\to 0.
$$

Equivalently,

$$
\frac{f(a+h)-f(a)-L(h)}{\|h\|}\to 0.
$$

The derivative is this unique linear map $L$.

For a real-valued function $h: \mathbb{R}^n \to \mathbb{R}$, the partial derivative with respect to the $i$-th variable is obtained by varying only that variable:

$$
\partial_i h(a)=
\lim_{t\to a_i}
\frac{h(a_1,\ldots,a_{i-1},t,a_{i+1},\ldots,a_n)-h(a)}
{t-a_i}.
$$

In coordinates, partial derivatives are slopes along coordinate-parallel lines on the graph.

The topic also asks for directional derivatives. For a direction vector $v$, usually normalized to $\|v\|=1$, the directional derivative is

$$
D_v f(a)=\lim_{t\to 0}\frac{f(a+tv)-f(a)}{t},
$$

if the limit exists. If $f$ is totally differentiable, then

$$
D_v f(a)=Df(a)(v).
$$

For scalar-valued $f$, this becomes

$$
D_v f(a)=\nabla f(a)\cdot v.
$$

Partial derivatives alone do not always imply total differentiability. A common sufficient condition is: if the partial derivatives exist in a neighborhood of $a$ and are continuous at $a$, then $f$ is totally differentiable at $a$. State a related differentiability criterion using existence and continuity of partial derivatives.

The Jacobian matrix is the matrix of the total derivative. For $f=(f_1,...,f_m): \mathbb{R}^n \to \mathbb{R}^m$,

$$
J_f(a)=
\begin{bmatrix}
\partial_1 f_1(a) & \cdots & \partial_n f_1(a) \\
\vdots & \ddots & \vdots \\
\partial_1 f_m(a) & \cdots & \partial_n f_m(a)
\end{bmatrix}.
$$

For scalar-valued $f: \mathbb{R}^n \to \mathbb{R}$, the Jacobian is a row vector and is identified with the gradient

$$
\nabla f(a)=(\partial_1 f(a),...,\partial_n f(a)).
$$

The gradient points in the direction of steepest increase, and its dot product with a unit vector gives the directional derivative in that direction.

For a surface $z=f(x,y)$, the tangent plane at $(a,b,f(a,b))$ is

$$
z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b),
$$

provided $f$ is differentiable at $(a,b)$. This is the multivariable analogue of the one-variable tangent line and follows from the total derivative as the best linear approximation.

### What to Emphasize in an Oral Answer

- Define total differentiability as a linear map plus an error that is $o(\|h\|)$; this is the real multivariable derivative.
- Explain partial derivatives as one-coordinate slopes and note that their existence alone does not guarantee total differentiability.
- State the common sufficient criterion: partial derivatives exist near the point and are continuous at the point.
- Define directional derivatives and, under total differentiability, use $D_v f(a)=Df(a)(v)$.
- Describe the Jacobian matrix for vector-valued functions and the gradient for scalar-valued functions.
- Mention the gradient's role: $\nabla f(a)\cdot v$ gives directional derivatives and the gradient points toward steepest increase.
- Give the tangent-plane formula for $z=f(x,y)$ as the concrete linear approximation.

::: details Suggested answer

For functions of several variables, the correct analogue of the derivative is the total derivative. A function $f:\mathbb{R}^n\to \mathbb{R}^m$ is differentiable at $a$ if its increment can be written as a linear map applied to the displacement plus an error that is small compared with the length of the displacement. This linear map is the derivative, and its matrix is the Jacobian.

Partial derivatives are obtained by varying one coordinate at a time. They measure coordinate-direction slopes, but by themselves they do not always guarantee full differentiability. A standard sufficient condition is that the partial derivatives exist near the point and are continuous at the point. Directional derivatives generalize partial derivatives by varying in an arbitrary direction $v$; if the function is totally differentiable, the directional derivative is $Df(a)(v)$.

For scalar-valued functions, the Jacobian is identified with the gradient vector. The gradient contains the partial derivatives, points in the direction of steepest increase, and satisfies $D_v f(a)=\nabla f(a) \cdot v$ for unit directions. For a graph $z=f(x,y)$, the tangent plane is $z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$, which is exactly the linear approximation given by the total derivative.

:::

## 2.4 The Definite Integral

The Riemann integral can be defined through lower and upper Darboux sums. Let $f:[a,b]\to \mathbb{R}$ be bounded and let

$$
a=x_0<x_1<\cdots<x_n=b
$$

be a partition. On each subinterval define

$$
m_i=\inf\{f(x):x_i\le x\le x_{i+1}\},
\qquad
M_i=\sup\{f(x):x_i\le x\le x_{i+1}\}.
$$

The lower and upper sums are

$$
s(f,\tau)=\sum_{i=0}^{n-1}m_i(x_{i+1}-x_i),
\qquad
S(f,\tau)=\sum_{i=0}^{n-1}M_i(x_{i+1}-x_i).
$$

The lower Darboux integral is the supremum of lower sums, and the upper Darboux integral is the infimum of upper sums. The function is Riemann integrable if these two values are equal; their common value is

$$
\int_a^b f(x)\,dx.
$$

Continuous functions on $[a,b]$ are Riemann integrable. Piecewise continuous functions are also Riemann integrable when they are bounded and have only finitely many discontinuities or finitely many pieces with one-sided limits.

Integrability is stable under common operations. If $f,g$ are Riemann integrable on $[a,b]$, then:

| Operation | Result |
| --- | --- |
| $f+g$, $f-g$ | integrable |
| $cf$ | integrable |
| $fg$ | integrable |
| $|f|$ | integrable, and $|\int f| \le \int |f|$ |
| $f/g$ | integrable if $g$ is integrable and bounded away from $0$ |

Important properties:

| Property | Formula |
| --- | --- |
| Linearity | $\int_a^b (\alpha f+\beta g)=\alpha \int_a^b f+\beta \int_a^b g$ |
| Monotonicity | If $f\le g$, then $\int_a^b f \le \int_a^b g$. |
| Interval additivity | If $a<c<b$, then $\int_a^b f=\int_a^c f+\int_c^b f$. |
| Reversal | $\int_b^a f=-\int_a^b f$. |
| Zero interval | $\int_a^a f=0$. |

The integral function generated by an integrable function is

$$
F(x)=\int_a^x f(t)\,dt.
$$

If $f$ is Riemann integrable, then $F$ is continuous. If $f$ is continuous at $x$, then $F$ is differentiable at $x$ and

$$
F'(x)=f(x).
$$

This is one form of the fundamental theorem of calculus.

The Newton-Leibniz formula in State: if $f$ is integrable on $[a,b]$ and $F$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $F'=f$, then

$$
\int_a^b f(x)\,dx=F(b)-F(a).
$$

### What to Emphasize in an Oral Answer

- Define the Riemann integral through Darboux lower and upper sums; integrability means their supremum and infimum coincide.
- Mention key integrable classes: continuous functions and bounded piecewise continuous functions with finitely many discontinuities/pieces.
- State the main algebraic and order properties: linearity, monotonicity, interval additivity, reversal of bounds, and absolute-value inequality.
- Explain the integral function $F(x)=\int_a^x f(t)\,dt$: it is continuous for integrable $f$ and differentiable at points where $f$ is continuous.
- State Newton-Leibniz: if $F'=f$ under the usual hypotheses, then $\int_a^b f=F(b)-F(a)$.

::: details Suggested answer

The definite integral can be defined by Darboux sums. For a bounded function on $[a,b]$, choose a partition and on each subinterval take the infimum and supremum of the function. The lower sum uses the infima, the upper sum uses the suprema. The lower integral is the supremum of all lower sums, and the upper integral is the infimum of all upper sums. The function is Riemann integrable when these two values are equal, and their common value is the definite integral.

Continuous functions are Riemann integrable, and bounded piecewise continuous functions with finitely many pieces are also integrable. Integrability is preserved by sums, scalar multiples, products, absolute values, and quotients when the denominator stays away from zero. The integral is linear, monotone, additive over adjacent intervals, changes sign when the bounds are reversed, and is zero over a degenerate interval.

The integral function $F(x)=\int_a^x f(t)dt$ connects integration back to differentiation. If $f$ is integrable, this function is continuous; if $f$ is continuous at a point, then the integral function is differentiable there and its derivative is $f$. The Newton-Leibniz formula says that if $F$ is a primitive of $f$, then the definite integral is $F(b)-F(a)$.

:::

## 2.5 The Indefinite Integral

A primitive function is follows: on an open interval $I$, a function $F$ is a primitive of $f$ if $F$ is differentiable on $I$ and $F'=f$. The indefinite integral is the set of all primitives:

$$
\int f(x)\,dx=\{F:I\to R : F'=f\}.
$$

On an interval, if $F$ and $G$ are primitives of the same function, then $F-G$ is constant. Therefore an indefinite integral is usually written as

$$
\int f(x)\,dx=F(x)+C.
$$

Continuity is a sufficient condition for the existence of a primitive locally through the integral function: if $f$ is continuous on an interval, then

$$
F(x)=\int_a^x f(t)\,dt
$$

is a primitive of $f$. Continuity is not necessary; some derivatives are not continuous, so discontinuous functions can also have primitives.

Linearity:

$$
\int(\alpha f+\beta g)\,dx
=\alpha\int f\,dx+\beta\int g\,dx.
$$

Integration by parts follows from the product rule. If $f$ and $g$ are differentiable and the required primitives exist, then

$$
\int f'(x)g(x)\,dx=f(x)g(x)-\int f(x)g'(x)\,dx.
$$

Equivalently, in the common notation:

$$
\int u\,dv=uv-\int v\,du.
$$

For definite integrals:

$$
\int_a^b f'(x)g(x)\,dx
=f(b)g(b)-f(a)g(a)-\int_a^b f(x)g'(x)\,dx.
$$

Substitution rules:

| Rule | Formula | Idea |
| --- | --- | --- |
| First substitution / chain-rule form | If $F'=f$, then $\int f(g(x))g'(x) dx = F(g(x))+C$. | Recognize a derivative inside a composition. |
| Definite substitution | $\int_a^b f(x)dx = \int_alpha^\beta f(g(t))g'(t)dt$ when $g(\alpha)=a$, $g(\beta)=b$. | Change variables and transform bounds. |
| Second substitution / inverse substitution | Set $x=g(t)$, integrate in $t$, then return to $x$ when $g$ is invertible on the interval. | Useful for roots, trigonometric substitutions, and rationalization. |

State both indefinite and definite substitution cases and both indefinite and definite integration-by-parts cases.

### What to Emphasize in an Oral Answer

- Define a primitive $F$ by $F'=f$ and the indefinite integral as the family of all primitives.
- State that on an interval any two primitives differ by a constant, giving the notation $F+C$.
- Mention existence: continuity of $f$ is sufficient via $F(x)=\int_a^x f(t)\,dt$, but not necessary.
- Include linearity of indefinite integration.
- State integration by parts as the inverse of the product rule, with both indefinite and definite versions.
- State substitution as the inverse of the chain rule, including transformed bounds for definite integrals and inverse substitution when appropriate.

::: details Suggested answer

The indefinite integral is the inverse problem of differentiation. A primitive of $f$ on an interval is a differentiable function $F$ with $F'=f$, and the indefinite integral is the set of all such primitives. On an interval, any two primitives differ by a constant, so we write $\int f(x)dx=F(x)+C$.

Continuity of $f$ is a sufficient condition for a primitive to exist, because the integral function $F(x)=\int_a^x f(t)dt$ then satisfies $F'=f$. It is not necessary, since derivatives can be discontinuous. Indefinite integration is linear, so constants and sums can be handled termwise.

The main computation rules come from differentiation rules. Integration by parts is the inverse of the product rule: $\int u dv = uv - \int v du$. In a definite integral, the boundary term is evaluated at the endpoints and then the remaining integral is subtracted. Substitution is the inverse of the chain rule: if we see $f(g(x))g'(x)$, then its integral is $F(g(x))$ where $F'=f$. In definite integrals, substitution also changes the bounds according to the variable transformation.

:::

## Additional Material: Differential Equations

Differential equations are included here as related calculus material.

A differential equation is a problem of finding a differentiable function $\varphi$ satisfying

$$
\phi'(x)=f(x,\phi(x)).
$$

If additionally $\varphi(\tau)=\xi$ is prescribed, the problem is an initial value problem or Cauchy problem.

For first-order linear differential equations, use

$$
\phi'(x)=g(x)\phi(x)+h(x).
$$

If $h=0$, the equation is homogeneous; otherwise it is inhomogeneous. Homogeneous solutions have the form

$$
c\,e^{G(x)},\qquad G'=g.
$$

The method of variation of constants looks for an inhomogeneous solution as $m(x)e^{G(x)}$. Radioactive decay is a standard example:

$$
m'(t)=-\alpha m(t),\qquad m(0)=m_0,
$$

with solution

$$
m(t)=m_0 e^{-\alpha t}
$$

and half-life $T=\ln(2)/\alpha$.

For higher-order linear differential equations, use the form

$$
\phi^{(n)}(x)+\sum_{k=0}^{n-1}a_k(x)\phi^{(k)}(x)=c(x).
$$

With constant coefficients, the characteristic polynomial

$$
P(t)=t^n+\sum_{k=0}^{n-1}a_k t^k
$$

determines homogeneous exponential solutions. Repeated roots add powers of $x$, and complex roots produce real sine/cosine solution pairs. A standard oscillation example is a second-order linear equation derived from Newton's law with restoring force, damping, and external forcing.
