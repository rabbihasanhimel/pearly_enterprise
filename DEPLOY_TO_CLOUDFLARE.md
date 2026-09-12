# How to Deploy Pearly Enterprise to Cloudflare Pages (100% Free)

This website is built as a pure, high-performance static website. It has **zero build steps, zero dependencies**, and takes less than 1 minute to go live on Cloudflare's global edge network.

---

## Method 1: Direct Drag & Drop (Fastest — 30 Seconds, No Git Needed!)

If you don't want to use Git or GitHub, you can upload the folder directly from your browser:

1. **Log in to Cloudflare**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com/) (Sign up for a free account if you haven't already).
2. **Navigate to Pages**:
   - In the left sidebar, click **Workers & Pages**.
   - Click **Create application** &rarr; select the **Pages** tab.
   - Click **Upload assets**.
3. **Upload Your Website**:
   - Give your project a name (e.g. `pearlyenterprise`).
   - Drag and drop the folder `d:\Pearly\Website` (or select `index.html`, `css/`, `js/`, and `images/`).
   - Click **Deploy site**.
4. **You're Live!**:
   - Cloudflare will instantly give you a free, secure live address like:
     `https://pearlyenterprise.pages.dev`

---

## Method 2: Git Repository (Automatic Updates on Push)

If you prefer keeping your website in GitHub:

1. **Push to GitHub**:
   - Create a GitHub repository (e.g. `pearly-enterprise-website`).
   - Push your code to the repository.
2. **Connect to Cloudflare Pages**:
   - In Cloudflare dashboard, go to **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
   - Select your GitHub repository.
3. **Build Settings**:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` *(root directory)*
4. **Click Save and Deploy**:
   - Every time you push an update or add new photos, Cloudflare automatically updates your live website in seconds.

---

## Adding a Free Custom Domain (Optional)

Whenever you decide to get a custom domain name (e.g. `pearlyenterprise.com` or `pearlywire.com`):
1. In your Cloudflare Pages project, go to the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your domain name and follow the 1-click verification.
4. Cloudflare provides **free automatic SSL/HTTPS certificates** and **DDoS protection** with zero ongoing hosting fees!

---

## Local Preview
To test and preview the website locally on your computer right now:
- Double click `index.html` in your file explorer to open it in any web browser (Chrome, Edge, Firefox).
