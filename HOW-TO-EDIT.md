# How to Edit Your Portfolio Website

Hi Nitansh! This guide will show you how to update the content on your portfolio website. You don't need to know any coding — just follow these simple steps.

---

## What You'll Be Editing

There is **one file** that controls all the text on your website:

📄 **`portfolio-content.json`** — This file lives in the root of your project folder.

Everything on your site — your bio, company names, investment theses, financial metrics, ratings — comes from this single file.

---

## How to Edit (Step by Step)

### Step 1: Go to Your GitHub Repository

1. Open your web browser
2. Go to [github.com](https://github.com) and sign in
3. Find your portfolio repository (it will be named something like `nitansh-portfolio` or whatever you named it)

### Step 2: Open the File

1. In your repository, you'll see a list of files
2. Click on **`portfolio-content.json`** — it's right there at the top level
3. Click the **pencil icon** (✏️) in the top-right corner of the file to edit it

### Step 3: Make Your Changes

The file looks like this:

```
{
  "hero": {
    "name": "Nitansh Deep",
    "tagline": "Building data-driven investment views..."
  },
  ...
}
```

**Important rules:**
- ✅ Only change the text **inside the double quotes** `"like this"`
- ❌ Don't delete any commas, curly braces `{}`, or square brackets `[]`
- ❌ Don't remove the quote marks themselves
- ✅ If you want to use a quote mark inside your text, type `\"` instead

**Examples of what you can change:**

| What to change | Find this line | Change the text inside quotes |
|---|---|---|
| Your bio | `"bio": "Finance graduate and..."` | Replace with your updated bio |
| A company rating | `"rating": "BUY"` | Change to `"HOLD"` or `"SELL"` |
| Target price | `"targetPrice": "₹7,530"` | Update to new target price |
| Revenue | `"revenue": "₹22,377 Cr"` | Update to latest revenue |
| Investment thesis | `"thesis": "Polycab is the..."` | Write your updated thesis |

### Step 4: Save Your Changes

1. Scroll to the bottom of the page
2. You'll see a section called **"Commit changes"**
3. In the small text box, type a short note like: `Updated Polycab target price`
4. Make sure **"Commit directly to the main branch"** is selected
5. Click the green **"Commit changes"** button

### Step 5: Wait for Auto-Deploy

🎉 **That's it!** Your website will automatically update within 1-2 minutes.

Vercel (the service hosting your website) watches your GitHub repository. Every time you save a change, it automatically rebuilds and publishes your updated site.

---

## Common Edits

### Change a Company's Rating

Find the company in the `"companies"` section and change the `"rating"` value:

```
"rating": "BUY"     ← change this to "HOLD" or "SELL"
```

### Update Financial Metrics

Find the company and update its `"keyMetrics"`:

```
"keyMetrics": {
  "revenue": "₹22,377 Cr",    ← update this number
  "pat": "₹2,119 Cr",         ← update this number
  "peRatio": "47.5x"          ← update this number
}
```

### Update Your Bio

Find the `"about"` section and change the `"bio"` text:

```
"bio": "Your updated bio text goes here..."
```

### Update the Ticker Bar

Find `"tickerSymbols"` and change the company names:

```
"tickerSymbols": ["POLYCAB", "HAVELLS", "MARUTI SUZUKI", "HYUNDAI MOTOR INDIA"]
```

---

## Adding a New Company

This is a bit more advanced. Copy one of the existing company blocks and paste it below the last one (make sure to add a comma after the previous block's closing `}`).

Here's a template:

```json
{
  "id": "new-company",
  "name": "New Company Limited",
  "department": "Sector Name",
  "departmentIcon": "🏭",
  "rating": "BUY",
  "targetPrice": "₹X,XXX",
  "thesis": "Your investment thesis here...",
  "keyMetrics": {
    "revenue": "₹XX,XXX Cr",
    "pat": "₹X,XXX Cr",
    "peRatio": "XXx"
  },
  "previewImage": "/images/new-company-preview.png"
}
```

> ⚠️ **Note:** For a new company, you'll also need to generate a preview image. Reach out to the developer for help with this step.

---

## Updating Your Resume

To update your resume PDF:

1. Go to the `public` folder in your GitHub repository
2. Click **"Add file"** → **"Upload files"**
3. Upload your new resume as **`Nitansh_Deep_Resume.pdf`** (exact name!)
4. Commit the changes

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Website shows an error after editing | You probably accidentally deleted a comma or bracket. Go back and check your edit carefully. |
| Changes not showing up | Wait 2 minutes, then hard-refresh your browser (Ctrl + Shift + R). |
| Something looks broken | Compare your file with the original version using the "History" button on GitHub. |

---

## Need Help?

If something goes wrong or you need to make a bigger change, don't panic! GitHub keeps a history of every change. You can always click **"History"** on the file to see previous versions and revert if needed.
