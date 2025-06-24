# 📊 Statistical Research Analyzer (SRA)

> **A privacy-first, browser-based statistical tool for comprehensive subgroup analysis**

---

## 👤 Who is this for?

SRA is designed for anyone who needs to explore and compare data subgroups—**entirely offline and with maximum data privacy**:

- 🏥 **Medical researchers** analyzing patient cohorts or clinical trial data
- 🏢 **Corporate analysts** handling confidential business metrics
- 🎓 **Academic researchers** exploring survey results or experimental data
- 🧪 **Data scientists** performing diagnostic test evaluations
- 🔒 **Anyone** working with sensitive data requiring complex subgroup comparisons

---

## 💡 What does it do?

SRA allows you to:

- **Import CSV data** with automatic scale type detection (nominal, ordinal, interval, ratio)
- **Define complex subgroups** using individual conditions
- **Perform comprehensive statistical analysis** across multiple scale types
- **Run appropriate statistical tests** with automatic test selection and prerequisite checking
- **Create visualizations** with regression analysis
- **Conduct diagnostic test analysis** with fourfold tables and comprehensive metrics
- **Export everything** - data, results, charts, and group definitions

All processing happens locally in your browser—**no data ever leaves your computer**.

---

## ❗ Important Notice

- **SRA is intended for exploratory analysis and hypothesis generation.**
- Always verify critical findings using professional statistical software (R, SPSS, SAS, etc.).
- The tool includes warnings for test assumption violations but cannot replace expert statistical judgment.

---

## 🚀 Quick Start

### 1. Prepare your data

Create a CSV file in this format:

```csv
Age;Gender;Treatment;Score;Severity
r;k;k;r;o
45;Male;A;85.2;3
52;Female;B;92.1;4
38;Male;A;78.5;2
```
- **Row 1:** Variable names
- **Row 2:** Scale types:
  - `k` = Nominal (categories without order)
  - `o` = Ordinal (ordered categories, e.g., 1-5 ratings)
  - `i` = Interval (equal intervals, no true zero)
  - `r` = Ratio (equal intervals with true zero)
- **Row 3+:** Your data
- **Delimiter:** Semicolon (`;`) or comma (`,`) - automatically detected
- **Decimal separator:** Period (`.`) or comma (`,`) - automatically detected

### 2. Required libraries

You need these open-source JS libraries (place in `lib/` folder):

| Library       | Purpose              | Download                                              |
|---------------|---------------------|-------------------------------------------------------|
| PapaParse     | CSV parsing         | https://www.papaparse.com/                            |
| Chart.js      | Charts/graphics     | https://www.chartjs.org/                              |
| jStat         | Statistical tests   | https://jstat.github.io/                              |
| html2canvas   | Export charts       | https://html2canvas.hertzen.com/                      |

**Folder structure:**
```
your-folder/
├── index.html
└── lib/
    ├── papaparse.min.js
    ├── chart.umd.js
    ├── jstat.min.js
    └── html2canvas.min.js
```

### 3. Using SRA

#### **Option A: Online**

- Open [https://reisigrobert.github.io/sra](https://reisigrobert.github.io/sra) in your browser

#### **Option B: Offline**

- Download the repository
- Ensure the `lib/` folder contains all required libraries
- Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge)

---

## 📖 How to use SRA

### Basic Workflow

1. **Import Data**
   - Drag & drop or select your CSV file
   - Review the data preview and validation warnings

2. **Define Parameter Constellations** (optional)
   - Create reusable combinations of conditions
   - Name them for easy reference across multiple groups

3. **Create Subgroups**
   - Add individual conditions and/or constellations
   - Use NOT operators for exclusion criteria
   - Name groups descriptively and assign colors
   - Enable "Exclude records in previous groups" for mutually exclusive groups

4. **Analyze Results**
   - **Overview:** Group distributions and summary statistics
   - **Detailed Analysis:** Deep dive into specific parameters
   - **Significance Tests:** Automatic test selection with prerequisite checking
   - **Visualization:** Interactive charts with regression analysis
   - **Fourfold Tables:** Diagnostic test evaluation
   - **Export:** Comprehensive reports and raw data

### Advanced Features

#### Parameter Constellations
- Define once, use multiple times
- Support for NOT operations
- Combine with individual conditions in groups

#### Statistical Tests
- **Parametric:** t-test, Welch's t-test, ANOVA
- **Non-parametric:** Mann-Whitney U, Kruskal-Wallis
- **Categorical:** Chi-square, Fisher's exact
- **Correlation:** Pearson, Spearman
- Prerequisite checking (normality, variance homogeneity)

#### Regression Analysis
- Linear, polynomial (2nd/3rd order), logarithmic, exponential
- Significance testing for regression models
- Visual regression lines on scatter plots

#### Diagnostic Test Analysis
- Sensitivity, specificity, PPV, NPV
- Likelihood ratios and diagnostic odds ratio
- Youden's index, MCC, F1 score
- Comprehensive validation warnings

---

## ❓ Troubleshooting

### Import Issues
- **Wrong delimiter?** SRA auto-detects, but check for consistency
- **Scale types incorrect?** Ensure row 2 has valid codes (k, o, i, r)
- **Special characters?** Use UTF-8 encoding

### Statistical Tests
- **Test unavailable?** Check scale type requirements
- **Prerequisites failed?** Enable "Force execution" with caution
- **No results?** Ensure groups have sufficient data

### Performance
- **Large datasets slow?** Use pagination controls
- **Charts not rendering?** Check browser console for errors
- **Export failing?** Try smaller datasets or different formats

---

## 🔐 Privacy & Security

- **100% client-side:** No server communication
- **No tracking:** No analytics or telemetry
- **No dependencies:** Works offline after initial load
- **Open source:** Inspect the code yourself

---

## 📄 License

**Public Domain** — Free for any use. No attribution required.

---

**SRA: Professional-grade statistical analysis, right in your browser.**  
**[Try it online now](https://reisigrobert.github.io/sra)**
