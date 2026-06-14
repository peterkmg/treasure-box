---
title: '[Final] Basics of Probability and Statistics'
---

# 5. Basics of Probability and Statistics

## 5.1 Random Variables and Standard Distributions

A probability model can be described as a Kolmogorov probability space $(\Omega, \mathcal{A}, P)$. Here $\Omega$ is the sample space, $\mathcal{A}$ is a sigma-algebra of events, and $P$ assigns probabilities to events with $P(\Omega)=1$, nonnegative probabilities, and countable additivity for disjoint events.

A random variable is a measurable function $X:\Omega \to \mathbb{R}$. Its distribution function is

$$
F_X(x)=P(X<x).
$$

For a discrete random variable, the range is finite or countably infinite and the distribution is given by point probabilities $p_k=P(X=x_k)$. For an absolutely continuous random variable, there is a density $f$ such that

$$
F_X(x)=\int_{-\infty}^{x} f(t)\,dt,
\qquad
P(a<X<b)=\int_a^b f(t)\,dt.
$$

A density is nonnegative and integrates to $1$.

Important discrete distributions:

| Distribution | Meaning | Probability function | Expected value | Variance |
| --- | --- | --- | --- | --- |
| Bernoulli / indicator $Ind(p)$ | Whether one event with probability $p$ occurs | $P(X=1)=p$, $P(X=0)=1-p$ | $p$ | $p(1-p)$ |
| Binomial $Bin(n,p)$ | Number of successes in $n$ independent trials with success probability $p$ | $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$, $k=0,\ldots,n$ | $np$ | $np(1-p)$ |
| Hypergeometric $Hyp(N,M,n)$ | Number of marked elements in sampling without replacement from $N$ items, $M$ marked | $P(X=k)=\dfrac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}}$ | $n\dfrac{M}{N}$ | $n\dfrac{M}{N}\left(1-\dfrac{M}{N}\right)\left(1-\dfrac{n-1}{N-1}\right)$ |
| Pascal / geometric $Geo(p)$ | Trial number of the first success | $P(X=k)=p(1-p)^{k-1}$, $k=1,2,\ldots$ | $\dfrac{1}{p}$ | $\dfrac{1-p}{p^2}$ |
| Negative binomial $NegBin(r,p)$ | Trial number of the $r$-th success | $P(X=k)=\binom{k-1}{r-1}p^r(1-p)^{k-r}$, $k=r,r+1,\ldots$ | $\dfrac{r}{p}$ | $\dfrac{r(1-p)}{p^2}$ |
| Poisson $Poi(\lambda)$ | Count of rare or independently occurring events in a fixed interval | $P(X=k)=\dfrac{\lambda^k}{k!}e^{-\lambda}$, $k=0,1,\ldots$ | $\lambda$ | $\lambda$ |

The first-success distribution is often called geometric, while the $r$-th-success version is the negative binomial or Pascal distribution. Both conventions are useful because terminology varies.

Important continuous distributions:

| Distribution | Density or distribution function | Expected value | Variance |
| --- | --- | --- | --- |
| Uniform $U(a,b)$ | $f(x)=\dfrac{1}{b-a}$ for $a<x<b$, otherwise $0$ | $\dfrac{a+b}{2}$ | $\dfrac{(b-a)^2}{12}$ |
| Exponential $Exp(\lambda)$ | $f(x)=\lambda e^{-\lambda x}$ for $x\geq 0$, otherwise $0$; $F(x)=1-e^{-\lambda x}$ for $x\geq 0$ | $\dfrac{1}{\lambda}$ | $\dfrac{1}{\lambda^2}$ |
| Normal $N(m,\sigma^2)$ | $f(x)=\dfrac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-m)^2}{2\sigma^2}}$, $x\in\mathbb{R}$ | $m$ | $\sigma^2$ |
| Standard normal $N(0,1)$ | $\varphi(x)=\dfrac{1}{\sqrt{2\pi}}e^{-x^2/2}$, distribution function $\Phi(x)$ | $0$ | $1$ |
| Gamma $\Gamma(\alpha,\lambda)$ | $f(x)=\dfrac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}$ for $x\geq 0$, otherwise $0$ | $\dfrac{\alpha}{\lambda}$ | $\dfrac{\alpha}{\lambda^2}$ |

Uniform, exponential, and normal distributions are the central continuous examples. Gamma is also useful because it generalizes waiting-time distributions and includes the exponential distribution as a special case.

### What to Emphasize in an Oral Answer

- Define the probability space $(\Omega,\mathcal A,P)$ and the random variable as a measurable map $X:\Omega\to\mathbb R$.
- State the distribution function $F_X(x)=P(X<x)$ as the common description for all random variables.
- Contrast discrete and absolutely continuous variables: point probabilities versus densities and interval integrals.
- For discrete distributions, connect each formula to its modeling situation: Bernoulli, binomial, hypergeometric, geometric/Pascal, negative binomial, and Poisson.
- For continuous distributions, identify uniform, exponential, normal/standard normal, and gamma by their roles and main parameters.
- Mention key mean/variance facts when useful, especially $E=Var=\lambda$ for Poisson and mean/variance parameters for normal distributions.
- Emphasize the important distinction: a continuous variable has zero probability at individual points; probability comes from intervals.

::: details Suggested answer

A random experiment can be modeled by a probability space. The sample space contains the elementary outcomes, the event system tells which subsets are measurable events, and the probability function assigns numbers between zero and one in a countably additive way. A random variable is then a measurable real-valued function on this space, so it turns outcomes into numerical quantities.

The distribution of a random variable describes how its values are probabilistically arranged. For a discrete random variable, we list point probabilities such as $P(X=k)$. For a continuous random variable, probabilities are described by a density, and probabilities over intervals are integrals of that density. The distribution function $F_X(x)=P(X<x)$ works in both cases.

The standard discrete distributions each model a common counting situation. A Bernoulli variable records whether one event occurs. A binomial variable counts successes in a fixed number of independent trials with the same success probability. A hypergeometric variable also counts successes, but under sampling without replacement, so the draws are dependent. A Pascal or geometric distribution describes waiting for a success, and the negative binomial form generalizes this to waiting for the $r$-th success. A Poisson distribution models counts of rare or independently occurring events in a fixed interval, and its mean and variance are both $\lambda$.

The standard continuous distributions model measurements rather than counts. A uniform distribution gives equal density to every point in an interval. An exponential distribution models a waiting time with rate $\lambda$ and is often paired conceptually with Poisson counts. A normal distribution is the bell-shaped distribution determined by mean $m$ and variance $\sigma^2$; after standardization, a normal variable becomes standard normal, which is used throughout inference and hypothesis testing.

The important exam contrast is that discrete distributions assign probability to individual values, while continuous distributions assign probability through intervals. In both cases the distribution, expected value, and variance summarize the behavior of the random variable.

:::

## 5.2 Expected Value, Deviation, Covariance, and Correlation

The expected value is the theoretical mean of a random variable when it exists. In the discrete case,

$$
E(X)=\sum_k x_k p_k,
$$

with absolute convergence required. In the continuous case,

$$
E(X)=\int_{-\infty}^{\infty} x f(x)\,dx,
$$

when the integral exists absolutely. More generally, $E(X)$ is the integral of $X$ with respect to the probability measure.

Variance measures squared deviation from the expected value:

$$
D^2X=Var(X)=E\left((X-E(X))^2\right)=E(X^2)-E(X)^2.
$$

The standard deviation is

$$
D(X)=\sqrt{D^2X}.
$$

It has the same physical unit as the random variable, so it is often easier to interpret than variance.

Covariance measures joint linear movement:

$$
cov(X,Y)=E((X-E(X))(Y-E(Y)))=E(XY)-E(X)E(Y).
$$

If $cov(X,Y)=0$, the variables are uncorrelated. Independence implies zero covariance when the moments exist, but zero covariance does not generally imply independence. Also $cov(X,X)=Var(X)$.

Correlation normalizes covariance:

$$
R(X,Y)=\frac{cov(X,Y)}{D(X)D(Y)}.
$$

It is dimensionless, lies between $-1$ and $1$ when defined, and indicates the direction and strength of a linear relationship. Positive correlation means larger values of one variable tend to occur with larger values of the other; negative correlation means larger values of one tend to occur with smaller values of the other.

### What to Emphasize in an Oral Answer

- Define expected value as the probabilistic average, using sums for discrete variables and integrals against a density for continuous variables.
- Mention the existence condition: the expectation should be absolutely convergent/integrable.
- State variance as $Var(X)=E((X-E X)^2)=E(X^2)-E(X)^2$ and standard deviation as its square root.
- Explain why standard deviation is easier to interpret: it has the same unit as the random variable.
- Define covariance by $E((X-EX)(Y-EY))=E(XY)-EX\,EY$ and interpret its sign.
- State the key distinction: independence implies zero covariance when moments exist, but zero covariance does not imply independence.
- Define correlation as normalized covariance, dimensionless and between $-1$ and $1$, measuring linear relationship.

::: details Suggested answer

Expected value is the probabilistic average of a random variable. In the discrete case it is the weighted sum of possible values, and in the continuous case it is the integral of value times density. It is not necessarily the most likely value; it is the center of mass of the distribution.

Variance and standard deviation describe spread around the expected value. The variance is the expected squared deviation from the mean, equivalently $E(X^2)-E(X)^2$. The standard deviation is the square root of the variance, so it returns to the original unit of measurement. For example, if a variable is measured in seconds, the standard deviation is also in seconds, while the variance is in squared seconds.

Covariance extends the idea of variance to two variables. It measures whether deviations from the two means tend to have the same sign or opposite signs. If $X$ is above its mean when $Y$ is also above its mean, covariance is positive. If one tends to be above its mean when the other is below, covariance is negative. If the covariance is zero, the variables are uncorrelated, although they may still have a nonlinear dependence.

Correlation is the normalized version of covariance. It divides covariance by the product of the two standard deviations, so the result has no unit and lies between $-1$ and $1$. Values near $1$ indicate a strong positive linear relationship, values near $-1$ indicate a strong negative linear relationship, and values near $0$ indicate little linear relationship. Independence is stronger than zero correlation: independent variables have zero covariance when the needed moments exist, but uncorrelated variables are not necessarily independent.

:::

## 5.3 Law of Large Numbers and Central Limit Theorem

Let $X_1,X_2,\ldots$ be independent and identically distributed random variables with

$$
E(X_i)=m,\qquad Var(X_i)=\sigma^2<\infty.
$$

The sample mean is

$$
\overline{X}_n=\frac{X_1+\cdots+X_n}{n}.
$$

The weak law of large numbers says that the sample mean converges to the expected value in probability:

$$
P(|\overline{X}_n-m|\geq \varepsilon)\to 0
\quad (n\to\infty)
$$

for every $\varepsilon>0$. The usual weak-law statement uses the absolute-deviation form above.

The strong law of large numbers says that the sample mean converges to the expected value with probability one:

$$
\overline{X}_n \to m
\quad\text{almost surely}.
$$

Almost-sure convergence is stronger than convergence in probability. Other convergence notions include convergence in $L^p$ and convergence in distribution, with the relationships that almost-sure convergence and $L^p$ convergence imply convergence in probability, and convergence in probability implies convergence in distribution.

Chebyshev's inequality is the standard tool behind the weak law in the finite-variance case:

$$
P(|X-E(X)|\geq \lambda)\leq \frac{Var(X)}{\lambda^2}.
$$

For the sample mean, $Var(\overline{X}_n)=\sigma^2/n$, so the probability of a fixed-size deviation goes to zero.

The central limit theorem says that the standardized sum, or equivalently the standardized sample mean, converges in distribution to the standard normal:

$$
\frac{X_1+\cdots+X_n-nm}{\sqrt{n}\sigma}
\Rightarrow N(0,1).
$$

Equivalently,

$$
P\left(\frac{X_1+\cdots+X_n-nm}{\sqrt{n}\sigma}<x\right)\to \Phi(x).
$$

### What to Emphasize in an Oral Answer

- Set up the assumptions: independent identically distributed variables with mean $m$ and finite variance $\sigma^2$.
- Define the sample mean $\overline X_n$.
- State the weak law: $\overline X_n\to m$ in probability; mention Chebyshev's inequality as the standard finite-variance proof idea.
- State the strong law: $\overline X_n\to m$ almost surely, which is stronger than convergence in probability.
- Contrast the central limit theorem with the law of large numbers: LLN gives the limit, CLT gives the normal shape of scaled fluctuations.
- Give the standardized CLT expression $(\sum X_i-nm)/(\sqrt n\,\sigma)\Rightarrow N(0,1)$.
- Tie the result to statistics: stable averages and approximately normal sampling errors.

::: details Suggested answer

The law of large numbers explains why sample averages are meaningful. Suppose $X_1,X_2,\ldots$ are independent and identically distributed with expected value $m$ and finite variance. The sample mean $\overline{X}_n$ averages the first $n$ observations. The weak law says that for any fixed tolerance, the probability that $\overline{X}_n$ differs from $m$ by at least that tolerance goes to zero. In other words, the sample mean converges to the true mean in probability.

The strong law gives a stronger form of the same idea. It says that the sample mean converges to $m$ with probability one. This is not just saying that large deviations become unlikely at each fixed sample size; it says that, except on an event of probability zero, the whole sequence of sample means eventually settles toward the expected value.

The central limit theorem answers a different question. The law of large numbers says where the sample mean goes. The central limit theorem describes the shape of its fluctuations around the mean. If the variables are independent and identically distributed with finite mean and variance, then the centered and scaled sum converges in distribution to the standard normal distribution. This is why normal approximations appear so often, even when the original observations are not normal.

Together, these theorems justify the basic logic of statistics. The law of large numbers says that large samples stabilize empirical averages around theoretical expectations. The central limit theorem says that the remaining random error is often approximately normal after proper standardization. That approximation is the basis for many confidence intervals and tests involving sample means.

:::

## 5.4 Statistical Estimation and Maximum Likelihood

A statistical model, also called a statistical field, is a family of probability spaces or distributions indexed by an unknown parameter:

$$
\mathcal{P}=\{P_\theta:\theta\in\Theta\}.
$$

A sample is a random vector

$$
\underline{X}=(X_1,\ldots,X_n),
$$

and an observed sample realization is

$$
\underline{x}=(x_1,\ldots,x_n).
$$

A statistic is a function of the sample. An estimator of a parameter $\theta$, or of a function $h(\theta)$, is a statistic whose values are possible parameter values.

Unbiasedness means that the estimator is correct on average:

$$
E_\theta(T(\underline{X}))=h(\theta)
\quad\text{for every }\theta\in\Theta.
$$

Asymptotic unbiasedness:

$$
E_\theta(T_n)\to h(\theta).
$$

Consistency means that the estimator converges to the true target as the sample size grows, usually in probability:

$$
T_n \xrightarrow{P} h(\theta).
$$

The main estimator-quality notions are unbiasedness, asymptotic unbiasedness, consistency, efficiency, and maximum likelihood.

Efficiency compares unbiased estimators by variance. An unbiased estimator $T_1$ is more efficient than another unbiased estimator $T_2$ if

$$
Var_\theta(T_1)\leq Var_\theta(T_2)
$$

for every $\theta$. If an efficient estimator exists in this sense, it is unique.

Maximum likelihood estimates the parameter that makes the observed data most probable under the model. In a discrete model, the likelihood is the probability of the observed sample:

$$
L(\theta,\underline{x})=P_\theta(\underline{X}=\underline{x}).
$$

In a continuous model, it is the joint density value at the observed sample:

$$
L(\theta,\underline{x})=f_{\theta,\underline{X}}(\underline{x}).
$$

For independent observations,

$$
L(\theta,\underline{x})=
\prod_{i=1}^{n}p_\theta(x_i)
\quad\text{or}\quad
L(\theta,\underline{x})=
\prod_{i=1}^{n}f_\theta(x_i).
$$

The maximum likelihood estimator is a value $\hat{\theta}$ that maximizes $L(\theta,\underline{x})$ over $\Theta$. In practice one often maximizes the log-likelihood because products become sums and the maximizer is unchanged:

$$
\ell(\theta,\underline{x})=\log L(\theta,\underline{x}).
$$

### What to Emphasize in an Oral Answer

- Define a statistical model as a parameter-indexed family of distributions and distinguish sample, observed sample, statistic, and estimator.
- State unbiasedness as an exact expectation identity for every parameter value; mention asymptotic unbiasedness when the bias vanishes with $n$.
- State consistency as convergence of the estimator to the target, usually in probability.
- Mention efficiency as variance comparison among unbiased estimators.
- Define likelihood: observed-sample probability in the discrete case or joint density value in the continuous case.
- For independent observations, express likelihood as a product and log-likelihood as a sum with the same maximizer.
- Add the practical caveat: maximum likelihood is systematic and often has good large-sample behavior, but it depends on the assumed model.

::: details Suggested answer

Statistical estimation starts with a model: a family of possible distributions indexed by an unknown parameter. A sample is a collection of random observations from that model, and a statistic is any function of the sample. An estimator is a statistic used to estimate the unknown parameter or a function of it.

Unbiasedness is a finite-sample average property. An estimator is unbiased for a target if its expected value is exactly that target for every allowed parameter value. For example, the corrected sample variance is designed so that its expectation equals the true variance under standard assumptions. Unbiasedness is useful, but it is not the only desirable property, because an unbiased estimator may still have high variance.

Consistency is an asymptotic property. It says that as the sample size grows, the estimator converges to the true target, usually in probability. This expresses the idea that more data should eventually identify the parameter more accurately. An estimator can be biased in small samples and still be consistent if the bias disappears and the random fluctuation shrinks as $n$ increases.

Efficiency compares unbiased estimators by variance: among unbiased choices, the estimator with smaller variance is preferable, because it fluctuates less around the correct target.

Maximum likelihood is a general method for constructing estimators. For each possible parameter value, we compute how likely the observed data would be under that parameter. The maximum likelihood estimate is the parameter value that makes the observed sample most likely. For independent observations the likelihood is a product of individual probabilities or densities, and the log-likelihood is often maximized instead because it turns products into sums.

The main advantage of maximum likelihood is that it gives a systematic rule across many models. The main caution is that the answer depends on the assumed statistical model: if the model is badly chosen, maximizing its likelihood does not rescue the inference. In regular situations, maximum likelihood estimators often have good large-sample behavior, including consistency and approximate normality.

:::

## 5.5 Z-Test and T-Test for Normal Expected Values

Hypothesis testing compares a null hypothesis $H_0$ with an alternative hypothesis $H_1$. A test divides the sample space into an acceptance region and a critical region. If the observation falls in the critical region, $H_0$ is rejected. A Type I error rejects a true null hypothesis; its probability is controlled by the significance level $\alpha$. A Type II error fails to reject a false null hypothesis. With fixed sample size, reducing one error type usually increases the other.

For normal mean tests with known variance, the common English name is z-test; some traditions call it a $u$-test. Assume a sample $X_1,\ldots,X_n$ from $N(m,\sigma^2)$ and test

$$
H_0:m=m_0.
$$

If $\sigma$ is known, the one-sample z statistic is

$$
z=\sqrt{n}\frac{\overline{X}-m_0}{\sigma}.
$$

Under $H_0$, $z$ has the standard normal distribution. For a two-sided test at level $\alpha$, reject when

$$
|z|>z_{1-\alpha/2},
$$

where $z_q$ is the $q$-quantile of $N(0,1)$. For one-sided alternatives, reject in the appropriate tail, for example $z>z_{1-\alpha}$ for a right-sided test.

For two independent normal samples with known variances, testing $H_0:m_1=m_2$ uses

$$
z=\frac{\overline{X}-\overline{Y}}
{\sqrt{\frac{\sigma_1^2}{n}+\frac{\sigma_2^2}{m}}}.
$$

If the normal standard deviation is unknown, use a t-test. For the one-sample case,

$$
t=\sqrt{n}\frac{\overline{X}-m_0}{S}
$$

where

$$
S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\overline{X})^2
$$

is the corrected empirical variance. Under $H_0$, $t$ has a Student t distribution with $n-1$ degrees of freedom.

For two independent normal samples with unknown but equal variances, the two-sample t-test uses a pooled variance. An equivalent statistic is

$$
t_{n+m-2}
=
\sqrt{\frac{nm(n+m-2)}{n+m}}\,
\frac{\overline{X}-\overline{Y}}
{\sqrt{\sum_i(X_i-\overline{X})^2+\sum_j(Y_j-\overline{Y})^2}},
$$

with $n+m-2$ degrees of freedom.

### What to Emphasize in an Oral Answer

- Define hypothesis testing: null and alternative hypotheses, test statistic, acceptance/critical regions, and significance level $\alpha$.
- Distinguish Type I and Type II errors and mention the fixed-sample tradeoff.
- For a one-sample normal mean with known $\sigma$, state the z statistic $\sqrt n(\overline X-m_0)/\sigma$ and its standard normal null distribution.
- Explain one-sided versus two-sided rejection regions through normal quantiles.
- For unknown $\sigma$, state the one-sample t statistic $\sqrt n(\overline X-m_0)/S$ with corrected sample variance and $n-1$ degrees of freedom.
- Cover two-sample cases: known variances use the combined-standard-error z statistic; unknown equal variances use a pooled-variance t statistic with $n+m-2$ degrees of freedom.
- Emphasize the shared pattern: observed mean difference divided by standard error, compared with the null distribution.

::: details Suggested answer

A hypothesis test starts with a null hypothesis and an alternative. The test statistic summarizes the sample in a way that has a known distribution if the null hypothesis is true. The critical region is chosen so that the probability of rejecting a true null hypothesis is at most the significance level. A Type I error is rejecting a true null hypothesis, while a Type II error is failing to reject a false one.

For the expected value of a normal distribution, the z-test is used when the population standard deviation is known. In the one-sample case the null hypothesis is usually $m=m_0$, and the statistic is the difference between the sample mean and $m_0$, scaled by the known standard error $\sigma/\sqrt{n}$. Under the null hypothesis, this statistic is standard normal. A two-sided test rejects for unusually large absolute values, while a one-sided test rejects only in the relevant tail.

The t-test handles the more common case where the standard deviation is unknown. Then the unknown $\sigma$ is replaced by the corrected sample standard deviation $S$. This extra uncertainty changes the null distribution from standard normal to Student's t distribution with $n-1$ degrees of freedom in the one-sample case. As the sample size grows, the t distribution becomes close to the standard normal.

There are also two-sample versions. If two independent normal samples have known variances, the z statistic compares their sample means using the combined known standard error. If the variances are unknown but assumed equal, the two-sample t-test uses a pooled estimate of the common variance and has $n+m-2$ degrees of freedom. The conceptual pattern is the same in every case: compare the observed mean difference with the amount of random variation expected under the null hypothesis.

:::

## 5.6 Chi-Square Tests

The chi-square family of tests compares observed frequencies with expected frequencies. For categories $A_1,\ldots,A_r$ with hypothesized probabilities $p_1,\ldots,p_r$ and observed frequencies $\nu_1,\ldots,\nu_r$ in a sample of size $n$, the goodness-of-fit statistic is

$$
\chi^2=\sum_{i=1}^{r}\frac{(\nu_i-np_i)^2}{np_i}.
$$

Under the null hypothesis and with sufficiently large expected counts, this has approximately a chi-square distribution with $r-1$ degrees of freedom if all probabilities are specified in advance. If parameters are estimated from the data, the degrees of freedom are reduced accordingly. Small expected categories are usually pooled.

Three standard applications:

| Test | Null hypothesis | Data layout | Expected count |
| --- | --- | --- | --- |
| Goodness-of-fit | One categorical distribution equals specified probabilities, or data fit a specified distribution after grouping | One sample across $r$ categories | $E_i=np_i$ |
| Homogeneity | Several populations have the same categorical distribution | Contingency table with groups as rows and categories as columns | $E_{ij}=\dfrac{(\text{row total}_i)(\text{column total}_j)}{\text{grand total}}$ |
| Independence | Two categorical variables are independent in one population | Contingency table crossing the two variables | $E_{ij}=\dfrac{(\text{row total}_i)(\text{column total}_j)}{\text{grand total}}$ |

For an $a\times b$ contingency table, the homogeneity and independence test statistic is

$$
\chi^2=\sum_{i=1}^{a}\sum_{j=1}^{b}
\frac{(O_{ij}-E_{ij})^2}{E_{ij}},
$$

with degrees of freedom

$$
(a-1)(b-1).
$$

The formulas for homogeneity and independence are the same because both compare observed cell counts with counts expected from row and column margins. The interpretation differs: homogeneity compares distributions across groups, while independence asks whether two categorical variables are associated.

### What to Emphasize in an Oral Answer

- Frame chi-square tests as observed-versus-expected comparisons for categorical frequency data.
- State the statistic $\sum (O-E)^2/E$ and that large values lead to rejection.
- For goodness-of-fit, identify one sample, hypothesized probabilities $p_i$, expected counts $np_i$, and degrees of freedom $r-1$ adjusted for estimated parameters.
- Mention the large-sample condition and pooling of small expected categories.
- For homogeneity, describe several populations/groups and ask whether their categorical distributions are the same.
- For independence, describe one population cross-classified by two categorical variables and ask whether the variables are associated.
- State that homogeneity and independence use the same contingency-table expected count $E_{ij}=\text{row total}\cdot\text{column total}/\text{grand total}$ and degrees of freedom $(a-1)(b-1)$.

::: details Suggested answer

A chi-square test is used when the data are frequencies in categories. The basic idea is to compare observed counts with the counts expected under the null hypothesis. For each category or table cell, we square the difference between observed and expected count, divide by the expected count, and add the contributions. Large values indicate that the observed pattern is too far from what the null hypothesis predicts.

In a goodness-of-fit test, there is one sample and a proposed distribution over categories. The null hypothesis says that the category probabilities are the specified probabilities, or that grouped data follow a specified distribution. The expected count in category $i$ is $np_i$. If the observed counts are too different from these expected counts, the proposed distribution is rejected. Small expected counts should be pooled because the chi-square approximation depends on sufficiently large expected frequencies.

In a homogeneity test, several samples or populations are compared. The null hypothesis says that all groups have the same categorical distribution. The data are placed in a contingency table, and expected counts are computed from row totals, column totals, and the grand total. If the chi-square statistic is large, the groups do not appear homogeneous.

In an independence test, one sample is classified according to two categorical variables. The null hypothesis says that the variables are independent. The expected count in each cell is again computed from the row total times the column total divided by the grand total. A large chi-square statistic suggests association between the variables.

The goodness-of-fit, homogeneity, and independence tests share the same observed-versus-expected principle. What changes is the null hypothesis and the way expected counts and degrees of freedom are determined.

:::

## 5.7 Additional Statistical Material

Several broader statistical tools fit the same framework and are useful as compact additional material.

#### Fundamental Theorem of Statistics

The Glivenko-Cantelli theorem states: For independent identically distributed observations with true distribution function $F$, the empirical distribution function $F_n$ converges uniformly to $F$ with probability one:

$$
\sup_x |F_n(x)-F(x)|\to 0.
$$

This theorem says that the empirical distribution function is a consistent nonparametric estimate of the true distribution function.

#### Method of Moments

For a parameter vector $\theta=(\theta_1,\dots,\theta_k)$, suppose the theoretical moments

$$
M_l(\theta)=E_\theta(X^l)
$$

are known for $l=1,\dots,k$. The empirical moments are

$$
\hat M_l=\frac{1}{n}\sum_{i=1}^n X_i^l.
$$

The method-of-moments estimator solves

$$
M_l(\theta)=\hat M_l,\qquad l=1,\dots,k.
$$

This is less central than maximum likelihood in the topic, but it is a standard estimator construction.

#### Additional Classical Tests

| Test | Role | Compact interpretation |
| --- | --- | --- |
| F-test | Tests equality of variances in two normal samples. | Compare a variance ratio to an F distribution. |
| Welch test | Two-sample mean test without assuming equal variances. | A t-like statistic with adjusted degrees of freedom. |
| Sequential test | Takes observations until likelihood ratio crosses an accept/reject boundary. | Uses $V_n=L_1/L_0$ and thresholds $A<B$. |
| Quality-control test | Decides accept/reject/continue after staged sampling. | Uses thresholds and expected sample size. |
| Kolmogorov-Smirnov test | Compares empirical distribution functions or tests fit to a distribution. | Uses a supremum distance between distribution functions. |
| Sign test | Nonparametric test based on signs. | Counts how many observations or differences are positive. |
| Wilcoxon test | Rank-based nonparametric test. | Uses ordering/ranks instead of normality assumptions. |

These tests are not part of the subject-5 wording except insofar as they illustrate the general hypothesis-testing framework.

### What to Emphasize in an Oral Answer

- State the Glivenko-Cantelli theorem as uniform convergence of the empirical distribution function to the true distribution function.
- Interpret it as a consistency result for empirical frequencies/distribution functions.
- Explain the method of moments: equate theoretical moments $M_l(\theta)$ with empirical moments and solve for parameters.
- Contrast method of moments with maximum likelihood: often simpler, not necessarily as efficient.
- Place F-tests, Welch tests, sequential tests, and quality-control tests inside the same hypothesis-testing framework.
- Mention nonparametric tests such as Kolmogorov-Smirnov, sign, and Wilcoxon as tools using empirical distributions, signs, or ranks instead of strong normal assumptions.

::: details Suggested answer

Also note several broader statistical tools. The Glivenko-Cantelli theorem says that the empirical distribution function converges uniformly to the true distribution function for independent identically distributed samples. This is a formal justification for using empirical frequencies to approximate the underlying distribution.

The method of moments is another way to build estimators. Instead of maximizing likelihood, it equates theoretical moments of the model with empirical moments from the sample and solves the resulting equations for the unknown parameters. It is often simpler than maximum likelihood, although it may be less efficient.

The extra tests fit into the same general testing framework. The F-test compares variances, Welch's test compares two means without assuming equal variances, and sequential tests keep sampling until a likelihood-ratio decision boundary is crossed. Kolmogorov-Smirnov, sign, and Wilcoxon tests are nonparametric examples: they reduce reliance on normal-distribution assumptions by using empirical distribution functions, signs, or ranks.

:::
