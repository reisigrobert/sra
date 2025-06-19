# 📊 Statistical Research Analyzer (SRA)

> **100% Offline Statistical Analysis Tool for Sensitive Data**

A comprehensive web-based application designed for researchers who need to analyze sensitive data without uploading it to online services.

## 🎯 What is this for?

**Perfect for sensitive data analysis when privacy is essential:**

🏥 **Medical researchers** working with patient data  
🏢 **Corporate analysts** handling confidential business information  
🎓 **Academic researchers** with sensitive study data  
📊 **Anyone** who needs complete data privacy  

## ✨ Why use this tool?

✅ **100% Offline** - Your data never leaves your computer  
✅ **No coding required** - Simple point-and-click interface  
✅ **Quick analysis** - Test hypotheses and explore data fast  
✅ **No installation** - Just open in your web browser  
✅ **Free forever** - No subscriptions or licenses needed  
✅ **Professional results** - Comprehensive statistical output  

## 🚀 Features

- **CSV Data Import** with automatic type detection
- **Custom Group Creation** based on your criteria
- **Statistical Tests**: t-tests, ANOVA, chi-square
- **Data Visualization** with interactive charts
- **Export Functionality** for results and charts
- **Comprehensive Statistics** (mean, median, std dev, quartiles, etc.)

## ⚠️ Important Note

This tool is designed for **quick exploration and hypothesis testing**. For final research publications or critical business decisions, always validate your results with dedicated statistical software like R, SPSS, or similar professional tools.

## 🛠️ Setup Instructions

### Step 1: Download Required Libraries

Create a `lib/` folder and download these JavaScript libraries:

| Library | Purpose | Download Link |
|---------|---------|---------------|
| **PapaParse** | CSV parsing | [papaparse.com](https://www.papaparse.com/) |
| **Chart.js** | Data visualization | [chartjs.org](https://www.chartjs.org/) |
| **jStat** | Statistical functions | [jstat.github.io](https://jstat.github.io/) |
| **html2canvas** | Image export | [html2canvas.hertzen.com](https://html2canvas.hertzen.com/) |

### Step 2: File Structure

```
your-project-folder/
├── index.html          (main SRA file)
└── lib/
    ├── papaparse.min.js
    ├── chart.umd.js
    ├── jstat.min.js
    └── html2canvas.min.js
```

### Step 3: Prepare Your Data

Create a CSV file with this exact format:

```csv
Age;Gender;Treatment;Outcome
f;k;k;f
25;Male;A;85.2
30;Female;B;92.1
35;Male;A;78.5
```

**Format Rules:**
- **Row 1:** Column names
- **Row 2:** Data types (`f` = numeric, `k` = categorical)  
- **Row 3+:** Your data
- **Separator:** Semicolon (`;`)
- **Decimals:** Comma (`,`) or period (`.`)

## 📖 How to Use

1. **Open** `index.html` in your web browser
2. **Upload** your CSV file
3. **Define groups** (e.g., "Treatment A vs Treatment B")
4. **Click** "Apply Groups & Analyze"
5. **Explore** results in the different tabs

## 📊 Statistical Tests Available

| Test | Use Case | Requirements |
|------|----------|--------------|
| **t-Test** | Compare means between 2 groups | Numeric data, 2 groups |
| **ANOVA** | Compare means across multiple groups | Numeric data, 2+ groups |
| **Chi-Square** | Test relationships in categorical data | Categorical data |

## 💻 Browser Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No internet connection required after setup

## 🔒 Data Privacy

**Your data is 100% private:**
- ✅ Processed entirely within your browser
- ✅ Nothing sent to any server or external service
- ✅ Safe for HIPAA, financial, and proprietary data
- ✅ Works completely offline

## ⚡ Performance

- **Recommended:** Up to 10,000 rows
- **Supports:** Basic statistical tests and simple visualizations
- **For larger datasets:** Use R, Python, SPSS, or SAS

## 🔧 Troubleshooting

**Charts not displaying?**  
→ Check that all library files are in the `lib/` folder

**CSV import fails?**  
→ Verify semicolon (`;`) separators and correct format

**Tests not working?**  
→ Ensure sufficient data points and correct data types

## 📄 License

**Public Domain** - Use for any purpose without restrictions. No attribution required.

## 🤝 Contributing

This is open-source software. Feel free to modify, improve, or redistribute as needed.

---

**Made for researchers who value data privacy** 🔐
