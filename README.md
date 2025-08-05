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
- **Define complex subgroups** using individual conditions or reusable parameter constellations
- **Perform comprehensive statistical analysis** across multiple scale types
- **Run appropriate statistical tests** with intelligent test selection and prerequisite checking
- **Create visualizations** with multiple regression analysis types
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

### 2. Using SRA

#### **Option A: Quick Start (Recommended)**

Simply visit [https://reisigrobert.github.io/sra](https://reisigrobert.github.io/sra) in your browser. 

**Important:** Even though you access it via a URL, **all processing happens locally in your browser**. No data is sent to any server. The website merely serves the application files to your browser, where everything runs offline.

#### **Option B: Maximum Security (Download Everything)**

For absolute certainty that no external connections are made, download all files locally:

1. **Download the SRA application:**  
   Download the index.html file to your device

2. **Download required libraries:**

| Library | Direct Download Link |
|---------|---------------------|
| PapaParse 5.4.1 | [papaparse.min.js](https://unpkg.com/papaparse@5.4.1/papaparse.min.js) |
| Chart.js 4.4.1 | [chart.umd.js](https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js) |
| jStat 1.9.6 | [jstat.min.js](https://cdn.jsdelivr.net/npm/jstat@1.9.6/dist/jstat.min.js) |
| html2canvas 1.4.1 | [html2canvas.min.js](https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js) |
| Simple Statistics 7.8.3 | [simple-statistics.min.js](https://unpkg.com/simple-statistics@7.8.3/dist/simple-statistics.min.js) |

3. **Set up folder structure:**
```
sra/
├── index.html
└── lib/
    ├── papaparse.min.js
    ├── chart.umd.js
    ├── jstat.min.js
    ├── html2canvas.min.js
    └── simple-statistics.min.js
```

4. **Open `index.html` in any modern browser**

---

## 📖 How to use SRA

### Basic Workflow

1. **Import Data**
   - Drag & drop or select your CSV file
   - Review the data preview and validation warnings
   - Supports both comma and period as decimal separators

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
   - **Detailed Analysis:** Deep dive into specific parameters with histograms
   - **Significance Tests:** Intelligent test selection with prerequisite checking
   - **Visualization:** Interactive charts with regression analysis
   - **Fourfold Tables:** Diagnostic test evaluation
   - **Export:** Comprehensive reports and raw data

### Advanced Features

#### Parameter Constellations
- Define once, use multiple times
- Support for NOT operations
- Combine with individual conditions in groups
- Export/import group definitions for reproducibility

#### Statistical Tests
- **Parametric:** t-test, Welch's t-test, ANOVA (with Tukey HSD post-hoc)
- **Non-parametric:** Mann-Whitney U, Kruskal-Wallis (with Dunn's test post-hoc)
- **Categorical:** Chi-square (with pairwise post-hoc), Fisher's exact
- **Intelligent test recommendation** based on data characteristics
- Prerequisite checking with override options
- Power analysis for all tests

#### Regression Analysis
- Linear, polynomial (2nd/3rd order), logarithmic, exponential
- Significance testing for regression models
- Visual regression lines on scatter plots
- R² and equation display

#### Diagnostic Test Analysis
- Sensitivity, specificity, PPV, NPV with confidence intervals
- Likelihood ratios and diagnostic odds ratio
- Youden's index, MCC, F1 score
- Comprehensive validation warnings
- Number needed to treat (NNT)

---

## ❓ Troubleshooting

### Import Issues
- **Wrong delimiter?** SRA auto-detects, but check for consistency
- **Scale types incorrect?** Ensure row 2 has valid codes (k, o, i, r)
- **Decimal numbers?** Both period (.) and comma (,) work as decimal separators

### Statistical Tests
- **Test unavailable?** Check scale type requirements
- **Prerequisites failed?** Use override checkboxes with caution
- **No results?** Ensure groups have sufficient data (≥2 observations)

### Performance
- **Large datasets slow?** Use pagination controls in data preview
- **Charts not rendering?** Check browser console for errors
- **Export failing?** Try smaller datasets or different formats

---

## 🔐 Privacy & Security

- **100% client-side:** All calculations happen in your browser
- **No server communication:** Data never leaves your computer
- **No tracking:** No analytics, cookies, or telemetry
- **No external dependencies:** Works completely offline after initial load
- **Open source:** Inspect the code yourself on GitHub

---

## 📄 License

**Public Domain** — Free for any use. No attribution required.

---

**SRA: Professional-grade statistical analysis, right in your browser.**  
**[Try it now](https://reisigrobert.github.io/sra)**
