# README.md

```markdown
# Statistical Research Analyzer (SRA)

## What is this for?

This tool is designed for **offline statistical analysis of sensitive data** - perfect when you can't upload your data to online tools due to privacy concerns.

**Ideal for:**
- 🏥 **Medical researchers** working with patient data
- 🏢 **Corporate analysts** handling confidential business data  
- 🎓 **Academic researchers** with sensitive study data
- 📊 **Anyone** who needs to keep their data completely private

## Why use this tool?

✅ **100% Offline** - Your data never leaves your computer  
✅ **No coding required** - Simple point-and-click interface  
✅ **Quick analysis** - Test ideas and explore data fast  
✅ **No installation** - Just open in your web browser  
✅ **Free forever** - No subscriptions or licenses needed  

## What can it do?

- Import CSV data with automatic type detection
- Create custom groups based on your criteria
- Calculate comprehensive statistics (mean, median, etc.)
- Run significance tests (t-tests, ANOVA, chi-square)
- Create charts and visualizations
- Export results and charts

## Important Note

This tool is designed for **quick exploration and hypothesis testing**. For final research publications or critical business decisions, always validate your results with dedicated statistical software like R, SPSS, or similar professional tools.

## Getting Started

### Step 1: Download Required Files

Download these JavaScript libraries and place them in a `lib/` folder:

1. **PapaParse** (CSV parsing): [Download here](https://www.papaparse.com/)
2. **Chart.js** (charts): [Download here](https://www.chartjs.org/)
3. **jStat** (statistics): [Download here](https://jstat.github.io/)
4. **html2canvas** (image export): [Download here](https://html2canvas.hertzen.com/)

### Step 2: Set Up Your Files

Create this folder structure:
```
your-project-folder/
├── index.html (the main SRA file)
├── lib/
│   ├── papaparse.min.js
│   ├── chart.umd.js
│   ├── jstat.min.js
│   └── html2canvas.min.js
```

### Step 3: Prepare Your Data

Create a CSV file with this format:
- **Row 1**: Column names (e.g., Age, Gender, Treatment)
- **Row 2**: Data types (`f` for numbers, `k` for categories)
- **Row 3+**: Your actual data

Example:
```csv
Age;Gender;Treatment;Outcome
f;k;k;f
25;Male;A;85.2
30;Female;B;92.1
```

### Step 4: Start Analyzing

1. Open `index.html` in your web browser
2. Upload your CSV file
3. Define your groups (e.g., "Treatment A vs Treatment B")
4. Click "Apply Groups & Analyze"
5. Explore your results in the different tabs

## Supported Statistical Tests

- **t-Test**: Compare means between two groups
- **ANOVA**: Compare means across multiple groups  
- **Chi-Square**: Test relationships between categorical variables

## Browser Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript must be enabled
- No internet connection required after setup

## Data Privacy

Your data is processed entirely within your browser. Nothing is sent to any server or external service. This makes it safe for:
- Medical data (HIPAA compliance)
- Financial data
- Proprietary business information
- Personal research data

## Limitations

- Maximum recommended dataset size: ~10,000 rows
- Basic statistical tests only
- Simple visualization options
- No advanced statistical modeling

For complex analyses, use professional statistical software like R, Python (pandas/scipy), SPSS, or SAS.

## Troubleshooting

**Problem**: Charts not displaying  
**Solution**: Make sure all library files are in the `lib/` folder

**Problem**: CSV import fails  
**Solution**: Check that your CSV uses semicolons (;) as separators and follows the required format

**Problem**: Significance tests not working  
**Solution**: Ensure you have enough data points and the right data types for your test

## Example Data

Check the `sample-data/` folder for an example CSV file that demonstrates the correct format.

## Contributing

This is open-source software. Feel free to modify, improve, or redistribute as needed. No attribution required.

## License

This software is released into the public domain under The Unlicense. Use for any purpose without restrictions.

## Version History

- **v1.0.0** (2024) - Initial release with core statistical analysis features

---

**Created for researchers who value data privacy and need quick, reliable statistical analysis tools.**
```
