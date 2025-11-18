# Setup Instructions

## Installing Node.js and npm (macOS)

Since you don't have Homebrew, here's the easiest way to install Node.js:

### Step 1: Download Node.js

1. **Visit [nodejs.org](https://nodejs.org/)**
2. Click on the **"LTS" (Long Term Support)** button to download the macOS installer
   - This will download a `.pkg` file (e.g., `node-v20.x.x.pkg`)
3. **Double-click the downloaded file** to open the installer
4. **Follow the installation wizard:**
   - Click "Continue" through the introduction
   - Accept the license agreement
   - Choose the installation location (default is fine)
   - Click "Install" (you may need to enter your password)
   - Wait for installation to complete
   - Click "Close" when done

### Step 2: Verify Installation

Open a **new Terminal window** (important - close and reopen Terminal so it picks up the new PATH) and run:

```bash
node --version
npm --version
```

You should see version numbers like:
```
v20.x.x
10.x.x
```

### Step 3: Install Project Dependencies

Once Node.js is installed, navigate to your project and install dependencies:

```bash
cd "/Users/anmolrathi/Anmol Website"
npm install
```

This may take a few minutes as it downloads all required packages.

### Step 4: Start the Development Server

```bash
npm run dev
```

You should see output like:
```
✓ Ready in 2.3s
○ Local:        http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your website!

## Troubleshooting

### "command not found" after installation
- **Close and reopen your Terminal** - This is the most common issue! Terminal needs to reload the PATH.
- If that doesn't work, restart your Mac

### Permission errors
- Make sure you're using your user account (not root)
- If npm asks for permissions, you can run: `sudo chown -R $(whoami) ~/.npm`

### Port 3000 already in use
- Another application is using port 3000
- Use a different port: `npm run dev -- -p 3001`
- Or find and stop the process using port 3000

### Installation takes a long time
- This is normal! npm needs to download many packages
- First install can take 2-5 minutes depending on your internet speed

## Quick Commands Reference

After Node.js is installed:

```bash
npm install          # Install all dependencies (run this first)
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check for code issues
```

## Alternative: Using nvm (Node Version Manager)

If you want more control over Node.js versions later, you can use nvm:

1. Install nvm:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2. Close and reopen Terminal, then:
```bash
nvm install --lts
nvm use --lts
```

But for now, the direct download from nodejs.org is the simplest option!
