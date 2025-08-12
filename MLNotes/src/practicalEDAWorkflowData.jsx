import React from 'react';

const practicalEDAWorkflowData = {
  title: "Practical EDA Workflow",
  icon: "🧭",
  description: "An ordered, repeatable process for exploring datasets — combining manual Pandas/Seaborn EDA with automated profiling tools like ydata-profiling — ensuring thorough and reproducible insights.",
  keyPoint: {
    title: "Why workflow matters",
    content: "A systematic EDA process ensures no important patterns are missed, keeps analysis reproducible, and helps distinguish real signals from noise."
  },
  sections: [
    {
      title: "Step 1 — Global Overview",
      content: "Quickly assess dataset shape, data types, basic statistics, and missing values before plotting.",
      code: `df.info()
df.describe()
df.isna().sum()`,
      example: "In Titanic: instantly see 891 rows, 12 columns, 'Cabin' with 77% missing, 'Age' with ~20% missing."
    },
    {
      title: "Step 2 — Univariate Analysis",
      content: "Analyze each column individually for distribution, skewness, outliers, and possible transformations.",
      code: `sns.histplot(df['Age'].dropna(), kde=True)
sns.countplot(x='Pclass', data=df)
sns.boxplot(y='Fare', data=df)

# Log transform skewed variables
df['Fare_log'] = np.log1p(df['Fare'])`,
      example: "In Titanic: 'Fare' is heavily right-skewed → log transform; 'Survived' is imbalanced (~38% positive) → note for modeling."
    },
    {
      title: "Step 3 — Bivariate Analysis",
      content: "Look at relationships between two variables — numeric vs numeric, numeric vs categorical, categorical vs categorical.",
      code: `sns.heatmap(df.corr(), annot=True, fmt=".2f")
sns.scatterplot(x='Age', y='Fare', hue='Survived', data=df)
pd.crosstab(df['Pclass'], df['Survived'], normalize='index') * 100`,
      example: "In Titanic: 'Pclass' negatively correlates with 'Survived'; 'Fare' positively correlates."
    },
    {
      title: "Step 4 — Multivariate Analysis",
      content: "Explore patterns involving more than two variables at a time.",
      code: `sns.pairplot(df[['Age','Fare','Pclass','Survived']], hue='Survived')  # small datasets
from sklearn.decomposition import PCA
sns.clustermap(df.corr())`,
      example: "In Titanic: Interaction of Sex & Pclass shows women in 1st class had highest survival."
    },
    {
      title: "Step 5 — Document Findings",
      content: "Write down what predicts the target, patterns in missingness, anomalies, and ideas for new features.",
      code: `eda_notes = {
  'strong_predictors': ['Pclass', 'Fare', 'Sex'],
  'missing_patterns': ['Age missing more in 3rd class'],
  'feature_ideas': ['FamilySize', 'IsAlone']
}`,
      example: "Recording this ensures you and your team can revisit decisions with clear reasoning."
    },
    {
      title: "Step 6 — Iterative Mindset",
      content: "EDA is not one-and-done. Each discovery often raises new questions that require deeper digging.",
      example: "Seeing Fare's effect might lead to: 'Is this effect independent of Pclass?' → further controlled plots."
    },
    {
      title: "Step 7 — Automated Profiling (ydata-profiling)",
      content: "Quickly generate a rich HTML report of variables, correlations, missingness, and interactions.",
      code: `pip install -U ydata-profiling

from ydata_profiling import ProfileReport
report = ProfileReport(df, title="Titanic EDA", minimal=False)
report.to_file("titanic_report.html")`,
      example: "Great for first-pass insights; for large datasets use minimal=True or sample to save time."
    },
    {
      title: "Titanic HTML Profiling — What to Focus On",
      content: "Not all sections are equally valuable; here’s a Titanic-specific priority list.",
      example: `Most important:
1. Overview → Alerts: 
   - 'Cabin' missing 77% → drop or impute.
   - 'Ticket' high cardinality → drop.
2. Variables: 
   - 'Age' ~20% missing; 'Fare' right-skewed; 'Survived' imbalanced.
3. Correlations: 
   - 'Pclass' (-) and 'Fare' (+) vs Survived.
4. Interactions: 
   - Sex & Pclass → huge survival difference.
5. Missing Values Heatmap: 
   - Missing 'Cabin' often lower-class passengers.

Skip/skim:
- Duplicates (few in Titanic).
- Constant columns (none here).
- Unsupported variable types (irrelevant).
- Extreme pairwise plots (overwhelming without a specific hypothesis).`
    }
  ],
  tips: [
    {
      title: "When to Use What",
      items: [
        "Always run Global Overview first — it frames your whole analysis.",
        "Univariate plots before relational plots to catch obvious anomalies.",
        "Bivariate before Multivariate to understand pairwise context.",
        "Profiling reports are great for speed, but must be interpreted carefully."
      ]
    },
    {
      title: "Quick Recipes & Tips",
      items: [
        "Check .info() for unexpected object dtypes in numeric columns.",
        "Log-transform only positive skewed variables.",
        "Normalize crosstabs for fair percentage comparison.",
        "Document both findings and non-findings — absence of pattern is still data.",
        "Automated profiling = complement, not replacement, for manual EDA."
      ]
    }
  ]
};

export default practicalEDAWorkflowData;
