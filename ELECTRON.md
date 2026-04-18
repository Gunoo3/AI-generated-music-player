# How to Run Aquarium as a Desktop Overlay

## First-time setup (run once)

1. **Open a terminal** in this folder  
   (e.g. right-click the folder → “Open in Terminal”, or `cd` to this folder in Command Prompt or PowerShell)

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the overlay:**
   ```
   npm start
   ```

A transparent, frameless aquarium window will appear on top of your desktop.

---

## Daily use

In this folder, run:

```
npm start
```

---

## Move the window

Drag the **top bar** (feeding/trash/spawn area) to move the window—it has no title bar.

## Tips

- **Close:** Use Alt+F4 or the system tray (if you add a quit button)
- **Resize:** Drag the window edges (it’s resizable)
- **Always on top:** The window stays above other apps; you can turn this off in `main.js` by setting `alwaysOnTop: false`
