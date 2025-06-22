# 📊 Statistical Research Analyzer (SRA)

> **A privacy-first, browser-based statistical tool focused on subgroup analysis**

---

## 👤 Who is this for?

SRA is designed for anyone who needs to explore and compare data subgroups—**entirely offline and with maximum data privacy**:

- 🏥 **Medical researchers** analyzing patient or study data without uploading it anywhere
- 🏢 **Corporate analysts** handling confidential business information
- 🎓 **Academic researchers** exploring survey or experimental results
- 🔒 **Anyone** who needs to quickly create and compare data subgroups with sensitive information

---

## 💡 What does it do?

SRA allows you to:

- **Import your own CSV data** (with explicit variable types)
- **Define custom subgroups** based on multiple parameters
- **Name your subgroups** for clarity in comparisons
- **Compare basic statistics across your groups**
- **Run basic statistical tests** (t-test, ANOVA, chi-square)
- **Visualize your results** and export charts/tables
- **Export your analysis** for further processing

All processing happens locally in your browser—**no data ever leaves your computer**.

---

## ❗ Important Notice

- **SRA is intended for exploratory analysis, not for publication or clinical/critical decisions.**
- Always verify your findings using professional statistical software (R, SPSS, etc.).
- This tool is designed for rapid subgroup exploration and hypothesis generation.

---

## 🚀 Quick Start

### 1. Prepare your data

Create a CSV file in this format:

```csv
Age;Gender;Group;Score
f;k;k;f
25;Male;A;85.2
30;Female;B;92.1
35;Male;A;78.5
```
- **Row 1:** Variable names
- **Row 2:** Data types (`f` = numeric, `k` = categorical) — must be specified manually
- **Row 3+:** Data
- **Delimiter:** Semicolon (`;`)
- **Decimal separator:** Comma or point (both accepted)

### 2. Required libraries

You need these open-source JS libraries (place in `lib/`):

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

- Just open [https://reisigrobert.github.io/sra](https://reisigrobert.github.io/sra) in your browser

#### **Option B: Offline**

- Download the repository
- Make sure you have the `lib/` folder with all required libraries (see above)
- Open `index.html` in any modern browser

---

## 📖 How to use SRA

1. **Open the app** in your browser (`index.html` or online link)
2. **Upload your CSV file**
3. **Define subgroups** using the visual builder (add conditions, assign names)
4. **Click "Apply Groups & Analyze"**
5. **Explore results** in the tabs:
    - **Overview:** See group sizes and summary statistics
    - **Detailed Analysis:** Compare a single variable across all groups
    - **Significance Tests:** t-test, ANOVA, chi-square (where applicable)
    - **Visualization:** Create and export charts
    - **Export:** Download analysis results and definitions

---

## 🛠 Features

- **CSV import/export** (with manual type specification)
- **Subgroup creation** with custom naming
- **Basic statistics:** mean, median, std.dev, quartiles, min, max
- **Significance testing:** t-test (2 groups), ANOVA (>2 groups), chi-square (categorical)
- **Regression analysis:** linear, polynomial (2nd/3rd), logarithmic, exponential
- **Interactive charts:** bar, scatter, distribution plots
- **Export:** CSV, PNG (charts), group definitions

---

## ⚠️ Limitations

- Exploratory use only: Not intended for final publication or critical decisions
- No advanced modeling, no multiple testing correction, etc.

---

## ❓ Troubleshooting

- **CSV import fails?**  
  - Check for correct delimiter (`;`) and that you specify data types on the second row

- **Statistical test not available?**  
  - Ensure you have enough groups and the right data type for the selected test

- **Charts not visible?**  
  - Double-check that your browser supports JavaScript and all libraries are present

---

## 📄 License

**Public Domain** — Free for any use. No attribution required.

---

**SRA: For anyone needing local, private, and immediate subgroup analysis.**  
**[Try it online now](https://reisigrobert.github.io/sra)**
