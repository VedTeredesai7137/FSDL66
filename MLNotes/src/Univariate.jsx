import React, { useState } from 'react';

const univariateData = {
  title: "Univariate Analysis",
  icon: "⚙",
  description: "Deep, column-by-column detective work aimed at understanding distribution, central tendency, spread, and outliers for one variable at a time.",
  keyPoint: {
    title: "Why plotting matters",
    content: "Numbers hide shape. A mean/median only summarizes; plots show skew, multimodality, gaps, and data entry errors. Use visuals first, stats second."
  },
  sections: [
    {
      title: "Categorical Analysis",
      content: "When the variable is categorical (Sex, Pclass, Embarked, survived binary), it shows counts, imbalanced classes, and missing values using countplot, frequency, and percentages.",
      code: `import seaborn as sns, matplotlib.pyplot as plt
sns.countplot(data=df, x='Pclass', order=sorted(df['Pclass'].unique()))
plt.title('Count by Pclass'); plt.show()

# percentage table
pct = df['Pclass'].value_counts(normalize=True)*100
print(pct)`,
      example: "Titanic example: df['Sex'].value_counts(normalize=True)*100 → % male/female."
    },
    {
      title: "Continuous Distributions",
      content: "When dealing with numeric variables (Age, Fare), use histplot/displot to find skew, multi-peaks, and gaps.",
      code: `sns.displot(df['Age'].dropna(), kde=True, bins=30)
plt.title('Age distribution (with KDE)'); plt.show()`,
      example: "If you care about probability of exactly age 40, use density or discrete binning. But exact ages are often integer; probability of a single value is ~0."
    },
    {
      title: "Boxplots for Outliers/Noise",
      content: "Spot extreme points and compare groups.",
      code: `sns.boxplot(x='Pclass', y='Fare', data=df)
plt.title('Fare by class'); plt.show()`,
      example: "Use IQR rule to flag outliers. If many 'outliers' exist, consider log transform or winsorization."
    },
    {
      title: "Basic Statistics",
      content: "Skewness > 1 or < -1 means highly skewed — consider transformation.",
      code: `df['Fare'].describe()
df['Fare'].median(), df['Fare'].skew()
df.skew()`
    }
  ],
  tips: [
    {
      title: "When to Use What",
      items: [
        "Small numeric sample (<1k): Full histogram + KDE is fine.",
        "Large continuous (100k+): Use hexbin/agg hist or sample to avoid overplotting.",
        "High-cardinality categorical (>30 distinct): Show top-k with 'Other' aggregated."
      ]
    },
    {
      title: "Quick Recipes & Tips",
      items: [
        "If skew > 1: try np.log1p(x) or sklearn.preprocessing.PowerTransformer(standardize=True) (Yeo-Johnson if zeros/negatives).",
        "Missing ages? Plot Age.isna() counts; impute after EDA or use model-based imputation.",
        "Don't treat PassengerId/index as informative — drop it."
      ]
    }
  ]
};


export default univariateData