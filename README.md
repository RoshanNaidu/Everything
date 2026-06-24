# For Radhika - Proposal Website

A static, aesthetic pink-and-white proposal website. It works directly on GitHub Pages with no build step.

## 1. Replace the photos

Replace these files with her photos, keeping the exact same file names:

- `assets/images/photo1.jpg`
- `assets/images/photo2.jpg`
- `assets/images/photo3.jpg`
- `assets/images/photo4.jpg`
- `assets/images/photo5.jpg`
- `assets/images/photo6.jpg`
- `assets/images/photo7.jpg`
- `assets/images/photo8.jpg`

Recommended photo size: portrait photos around 1200 x 1500 px. JPG, JPEG, or PNG is fine, but if you use PNG, update the file extension in `index.html`.

## 2. Add background music

Put your music file here:

`assets/audio/bg-music.mp3`

Important: use a song or audio file you have permission to share publicly. Browsers do not allow background music to autoplay without user interaction, so the website starts with a tap-to-begin screen.

## 3. Optional WhatsApp/message link

Open `script.js` and edit this line:

```js
const YOUR_MESSAGE_LINK = "#";
```

Example:

```js
const YOUR_MESSAGE_LINK = "https://wa.me/15551234567?text=I%20read%20your%20story%20%F0%9F%92%97";
```

## 4. Deploy with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder into the repository root.
3. Go to **Settings** > **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch: `main`, folder: `/ (root)`, then click **Save**.
6. Your link will look like `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`.

If you name the repository `YOUR-USERNAME.github.io`, the site will be at `https://YOUR-USERNAME.github.io/`.
