import React from 'react';

const bivariateMultivariateData = {
  title: "Bivariate & Multivariate Analysis",
  icon: "🔗",
  description: "Ask pairwise and higher-order questions to uncover relationships, dependencies, and conditional patterns between two or more variables.",
  keyPoint: {
    title: "Why relationships matter",
    content: "Single-variable summaries are like solo performances; real-world data often sings in harmony (or dissonance). Pairing variables reveals patterns, correlations, and conditional effects hidden in univariate views."
  },
  sections: [
    {
      title: "Numeric vs Numeric",
      content: "When both variables are continuous, scatterplots reveal linearity, clusters, and outliers. Use hue to add a categorical dimension.",
      code: `sns.scatterplot(data=df, x='Fare', y='Age', hue='Survived', alpha=0.7)
plt.show()

# correlation matrix
corr = df[['Age','Fare','SibSp','Parch','Pclass']].corr()
sns.heatmap(corr, annot=True, fmt=".2f"); plt.show()`,
      example: "Avoid scatter with millions of points; use hexbin (plt.hexbin) or sample to prevent overplotting."
    },
    {
      title: "Numeric vs Categorical",
      content: "Compare numeric distributions across groups using boxplots, violin plots, or pointplots to visualize mean/CI trends.",
      code: `sns.boxplot(x='Survived', y='Age', data=df)
sns.violinplot(x='Pclass', y='Fare', data=df)
sns.pointplot(x='Pclass', y='Fare', data=df)`,
      example: "Fare differences by Pclass are easier to spot in boxplots; violinplots show density distribution shape."
    },
    {
      title: "Categorical vs Categorical",
      content: "Crosstabs and stacked bar charts (percentage-based) show proportional relationships and avoid misleading counts when group sizes differ.",
      code: `pd.crosstab(df['Pclass'], df['Survived'], normalize='index')*100
(pd.crosstab(df['Pclass'], df['Survived'], normalize='index')*100).plot(kind='bar', stacked=True)`,
      example: "Within each Pclass, what % survived? Normalize='index' keeps comparison fair."
    },
    {
      title: "Pairplot & Pairwise Relationships",
      content: "Pairplots quickly scan all numeric variable pairs for patterns. Best for small datasets (<5k rows).",
      code: `sns.pairplot(df[['Age','Fare','Pclass','Survived']], hue='Survived')`,
      example: "Pairplots do O(n²) plots; avoid with high-dimensional datasets."
    },
    {
      title: "Clustermap & Hierarchical Relationships",
      content: "Clustered heatmaps reorder correlation matrices to group related variables together, revealing blocks of association.",
      code: `sns.clustermap(df.corr(), annot=True)`,
      example: "Fare & Pclass often cluster due to pricing structures."
    },
    {
      title: "Time Series / Lineplot",
      content: "Chronological data benefits from lineplots to reveal trends, seasonality, and anomalies over time.",
      code: `df.groupby('date')['cases'].sum().pipe(lambda s: sns.lineplot(x=s.index, y=s.values))`,
      example: "Epidemic curves or revenue growth are clearer in time series plots than in aggregate statistics."
    }
  ],
  tips: [
    {
      title: "When to Use What",
      items: [
        "Scatter: continuous–continuous relationships; add hue for third variable.",
        "Box/violin: numeric–categorical comparisons; violin adds shape detail.",
        "Crosstab %: categorical–categorical proportional comparisons.",
        "Pairplot: fast EDA for <10 numeric columns; avoid with large feature sets.",
        "Clustermap: discover groups of correlated variables.",
        "Lineplot: any variable indexed by time/date."
      ]
    },
    {
      title: "Quick Recipes & Tips",
      items: [
        "Large scatter data? Use hexbin or 2D KDE to avoid overplotting.",
        "Normalize crosstabs by row (index) for fair comparisons.",
        "For noisy trends, smooth with rolling averages in time series.",
        "Check correlations both numerically and visually; outliers can distort Pearson r.",
        "If pairplot is too slow, manually plot only key pairs."
      ]
    }
  ]
};

export default bivariateMultivariateData;
