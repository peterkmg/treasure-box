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
          { text: 'Computer Graphics', link: '/materials/computer-graphics/' },
        ],
      },
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
        {
          text: 'Computer Graphics [CG]',
          collapsed: true,
          items: [
            { text: '[CG] General', link: '/materials/computer-graphics' },
            { text: '[CG] First set', link: '/materials/computer-graphics/first-set.md' }
          ]
        }
      ],
    },
  ],
}

export { nav, sidebar }
