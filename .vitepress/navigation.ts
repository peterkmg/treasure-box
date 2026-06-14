import type { DefaultTheme } from 'vitepress/theme'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Materials',
    items: [
      { text: 'Introduction', link: '/materials/introduction' },
      {
        text: 'Semester 1',
        items: [
          { text: 'Programming', link: '/materials/programming/' },
          { text: 'Basic Mathematics', link: '/materials/basicmath/' },
        ],
      },
      {
        text: 'Semester 2', items: [
          { text: 'Analysis I', link: '/materials/analysis/' },
          { text: 'Analysis I Theory', link: '/materials/analysis-theory/'}
        ],
      },
      {
        text: 'Semester 3', items: [
          { text: 'Analysis II', link: '/materials/analysis2/' },
        ],
      },
      {
        text: 'Semester 4', items: [
          { text: 'Fundamentals of Theory of Computation', link: '/materials/fotoc/' },
          { text: 'Operating Systems', link: '/materials/os/' },
        ],
      },
      {
        text: 'Semester 5', items: [
          { text: 'Probability and Statistics', link: '/materials/probability-statistics/' },
        ],
      },
      {
        text: 'Electives', items: [
          { text: 'Introduction to ML', link: '/materials/intro-ml/' },
          // { text: 'ADA Language', link: '/materials/ada/' },
        ],
      },
      { text: 'Final Exam', link: '/materials/final-exam/' },
    ],
  },
  // { text: 'Posts', link: '/posts/' },
  { text: 'Contributors', link: '' },
]

const sidebar: DefaultTheme.Sidebar = {
  '/materials/': [
    {
      text: 'Introduction',
      link: '/materials/introduction',
    },
    {
      text: 'Semester 1',
      collapsed: false,
      items: [
        {
          text: 'Programming [P]',
          collapsed: true,
          items: [
            { text: '[P] General', link: '/materials/programming/' },
            { text: '[P] Algo: Seq -> Single', link: '/materials/programming/single.md' },
            { text: '[P] Algo: Seq -> Seq', link: '/materials/programming/sequence.md' },
            { text: '[P] Algo: Sort and other', link: '/materials/programming/sort.md' },
            { text: '[P] Practical examples', link: '/materials/programming/poa-examples.md' },
            { text: '[P] C2 sample solutions', link: '/materials/programming/c2-examples.md' },
          ],
        },
        {
          text: 'Basic Mathematics [BM]',
          collapsed: true,
          items: [
            { text: '[BM] General', link: '/materials/basicmath/' },
            { text: '[BM] Inverse matrices', link: '/materials/basicmath/inverse-mx.md' },
            {
              text: '[BM] Inverse matrices Gauss-Jordan method',
              link: '/materials/basicmath/inverse-mx-gj.md',
            },
            { text: '[BM] Eigenvalues and eigenvectors', link: '/materials/basicmath/eigen.md' },
            { text: '[BM] Diagonalization', link: '/materials/basicmath/diagonalization.md' },
            {
              text: '[BM] Orthogonal and orthonormal basis',
              link: '/materials/basicmath/ortho.md',
            },
            { text: '[BM] Inverse functions', link: '/materials/basicmath/inverse-fn.md' },
            { text: '[BM] Proving limits', link: '/materials/basicmath/limits.md' },
          ],
        },
      ],
    },
    {
      text: 'Semester 2',
      collapsed: false,
      items: [
        {
          text: 'Analysis I [A1]',
          collapsed: true,
          items: [
            { text: '[A1] General', link: '/materials/analysis/' },
            { text: '[A1] Invertable functions', link: '/materials/analysis/invertable.md' },
            { text: '[A1] Function composition', link: '/materials/analysis/composition.md' },
            { text: '[A1] Bounded sets', link: '/materials/analysis/bounded.md' },
            {
              text: '[A1] Limits: proving by definition Vol. 1',
              link: '/materials/analysis/limits-def.md',
            },
            {
              text: '[A1] Limits: evaluating limits Vol. 1',
              link: '/materials/analysis/limits-eval.md',
            },
            {
              text: '[A1] Limits: recursive sequences',
              link: '/materials/analysis/limits-rs.md',
            },
            { text: '[A1] Convergence of series', link: '/materials/analysis/series-conv.md' },
            { text: '[A1] Evaluating sums of series', link: '/materials/analysis/series.md' },
            {
              text: '[A1] Power series and radius of convergence',
              link: '/materials/analysis/ps-radius.md',
            },
            {
              text: '[A1] Limits: proving by definition Vol. 2',
              link: '/materials/analysis/limits-def2.md',
            },
            {
              text: '[A1] Limits: evaluating limits Vol. 2',
              link: '/materials/analysis/limits-eval2.md',
            },
          ],
        },
        {
          text: 'Analysis Theory [A1-T]',
          collapsed: true,
          items: [
            { text: '[A1-T] General', link: '/materials/analysis-theory/' },
            { text: '[A1-T] Sets', link: '/materials/analysis-theory/sets.md' },
            { text: '[A1-T] Inequalities', link: '/materials/analysis-theory/inequalities.md' },
            { text: '[A1-T] Sequences', link: '/materials/analysis-theory/sequences.md' },
            { text: '[A1-T] Series', link: '/materials/analysis-theory/series.md' },
            { text: '[A1-T] Functions', link: '/materials/analysis-theory/functions.md' },
            { text: '[A1-T] Round 1 questions', link: '/materials/analysis-theory/round1.md' },
            { text: '[A1-T] Round 2 questions', link: '/materials/analysis-theory/round2.md' },
          ],
        }
      ],
    },
    {
      text: 'Semester 3',
      collapsed: false,
      items: [
        {
          text: 'Analysis II [A2]',
          collapsed: true,
          items: [
            { text: '[A2] General', link: '/materials/analysis2/' },
            { text: '[A2] Continuity', link: '/materials/analysis2/continuity.md' },
            { text: '[A2] Differentiation', link: '/materials/analysis2/differentiation.md' },
            { text: '[A2] Extreme values of functions', link: '/materials/analysis2/extremes.md' },
            { text: `[A2] L'Hôpital's rule`, link: '/materials/analysis2/LH.md' },
            { text: '[A2] Taylor polynomials', link: '/materials/analysis2/taylor.md' },
            { text: '[A2] Function analysis', link: '/materials/analysis2/analysis.md' },
            { text: '[A2] Indefinite integrals I', link: '/materials/analysis2/integrals-indefinite-1.md' },
            { text: '[A2] Indefinite integrals II', link: '/materials/analysis2/integrals-indefinite-2.md' },
            { text: '[A2] Definite integrals', link: '/materials/analysis2/integrals-definite.md' },
            { text: '[A2] Multivariable function differentiation', link: '/materials/analysis2/multivariate-differentiation.md' },
            { text: '[A2] Multivariable function integration', link: '/materials/analysis2/multivariate-integration.md' },
          ]
        }
      ],
    },
    {
      text: 'Semester 4',
      collapsed: false,
      items: [
        {
          text: 'Fundamentals of Theory of Computation [FOTOC]',
          collapsed: true,
          items: [
            { text: '[FOTOC] General', link: '/materials/fotoc/' },
            { text: '[FOTOC] Languages', link: '/materials/fotoc/languages.md' },
            { text: '[FOTOC] Grammars', link: '/materials/fotoc/grammars.md' },
            { text: '[FOTOC] Regular expressions', link: '/materials/fotoc/regex.md' },
          ]
        },
        {
          text: 'Operating Systems [OS]',
          collapsed: true,
          items: [
            { text: '[OS] General', link: '/materials/os/' },
            { text: '[OS] C Language and POSIX API Reference', link: '/materials/os/reference.md' },
            { text: '[OS] Running code on Windows', link: '/materials/os/wsl.md' },
            { text: '[OS] Exam program skeleton', link: '/materials/os/exam-program-skeleton.md' },
            { text: '[OS] Exam sample solution', link: '/materials/os/exam-sample-solution.md' },
          ]
        }
      ],
    },
    {
      text: 'Semester 5',
      collapsed: false,
      items: [
        {
          text: 'Introduction to Probability and Statistics [IPS]',
          collapsed: true,
          items: [
            { text: '[IPS] General', link: '/materials/probability-statistics/' },
            { text: '[IPS] Discrete Probability', link: '/materials/probability-statistics/discrete-probability.md' },
            { text: '[IPS] Types of Distributions', link: '/materials/probability-statistics/types-of-distributions.md' },
            { text: '[IPS] Continuous Probability', link: '/materials/probability-statistics/continuous-probability.md' },
            { text: '[IPS] Normal Distribution', link: '/materials/probability-statistics/normal-distribution.md' },
            { text: '[IPS] Covariance and Correlation Coefficient', link: '/materials/probability-statistics/covariance-and-correlation-coefficient.md' },
          ],
        },
        {}
      ],
    },
    {
      text: 'Electives',
      collapsed: false,
      items: [
        {
          text: 'Introduction to Machine Learning [IML]',
          collapsed: true,
          items: [
            { text: '[IML] General', link: '/materials/intro-ml/' },
            { text: '[IML] Topics 1 - 6', link: '/materials/intro-ml/01-06.md' },
            { text: '[IML] Topics 7 - 12', link: '/materials/intro-ml/07-12.md' },
            { text: '[IML] Topics 13 - 18', link: '/materials/intro-ml/13-18.md' },
            { text: '[IML] Topics 19 - 24', link: '/materials/intro-ml/19-24.md' },
          ]
        },
        // {
        //   text: 'ADA Language [ADA]',
        //   collapsed: true,
        //   items: [
        //     { text: '[ADA] General', link: '/materials/ada/' },
        //     { text: '[ADA] Basics', link: '/materials/ada/basics.md' },
        //     { text: '[ADA] Types', link: '/materials/ada/types.md' },
        //     { text: '[ADA] Arrays', link: '/materials/ada/arrays.md' },
        //     { text: '[ADA] Records', link: '/materials/ada/records.md' },
        //     { text: '[ADA] Generics', link: '/materials/ada/generics.md' },
        //   ],
        // }
      ],
    },
    {
      text: 'Final Exam [Final]',
      collapsed: false,
      items: [
        { text: '[Final] General', link: '/materials/final-exam/' },
        { text: '[Final] 1. Limits and Continuity of Functions', link: '/materials/final-exam/limits-continuity-functions.md' },
        { text: '[Final] 2. Differential and Integral Calculus', link: '/materials/final-exam/differential-integral-calculus.md' },
        { text: '[Final] 3. Numerical Methods', link: '/materials/final-exam/numerical-methods.md' },
        { text: '[Final] 4. Number Theory, Graphs', link: '/materials/final-exam/number-theory-graphs.md' },
        { text: '[Final] 5. Probability and Statistics', link: '/materials/final-exam/probability-statistics.md' },
        { text: '[Final] 6. Artificial Intelligence', link: '/materials/final-exam/artificial-intelligence.md' },
        { text: '[Final] 7. Algorithmic Patterns', link: '/materials/final-exam/algorithmic-patterns.md' },
        { text: '[Final] 8. Object-Oriented Modeling', link: '/materials/final-exam/object-oriented-modeling.md' },
        { text: '[Final] 9. Object-Oriented Design', link: '/materials/final-exam/object-oriented-design.md' },
        { text: '[Final] 10. Fundamentals of Programming Languages', link: '/materials/final-exam/fundamentals-programming-languages.md' },
        { text: '[Final] 11. Object-Oriented Programming Languages', link: '/materials/final-exam/object-oriented-programming-languages.md' },
        { text: '[Final] 12. Formal Languages and Automata', link: '/materials/final-exam/formal-languages-automata.md' },
        { text: '[Final] 13. Theory of Computation', link: '/materials/final-exam/theory-of-computation.md' },
        { text: '[Final] 14. Basic Algorithms', link: '/materials/final-exam/basic-algorithms.md' },
        { text: '[Final] 15. Data Structures and Data Types', link: '/materials/final-exam/data-structures-data-types.md' },
        { text: '[Final] 16. Advanced Algorithms', link: '/materials/final-exam/advanced-algorithms.md' },
        { text: '[Final] 17. Operating Systems', link: '/materials/final-exam/operating-systems.md' },
        { text: '[Final] 18. Computer Networks', link: '/materials/final-exam/computer-networks.md' },
        { text: '[Final] 19. Concurrent Programming', link: '/materials/final-exam/concurrent-programming.md' },
        { text: '[Final] 20. Databases: Design and Query', link: '/materials/final-exam/databases-design-query.md' },
        { text: '[Final] 21. Databases: Optimization and Concurrency Control', link: '/materials/final-exam/databases-optimization-concurrency-control.md' },
        { text: '[Final] 22. Functional Programming', link: '/materials/final-exam/functional-programming.md' },
      ],
    },
  ],
}

export { nav, sidebar }
