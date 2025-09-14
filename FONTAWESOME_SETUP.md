# Font Awesome Pro Setup

To use Font Awesome Pro duotone icons, you need to configure npm with your Font Awesome Pro token.

## Steps to Enable Pro Icons:

1. **Get your Font Awesome Pro token:**
   - Log in to your Font Awesome account at https://fontawesome.com
   - Go to your account page
   - Find your npm token

2. **Configure npm globally:**
   ```bash
   npm config set "@fortawesome:registry" https://npm.fontawesome.com/
   npm config set "//npm.fontawesome.com/:_authToken" YOUR_TOKEN_HERE
   ```

3. **Install Pro packages:**
   ```bash
   npm install @fortawesome/pro-duotone-svg-icons
   npm install @fortawesome/pro-solid-svg-icons
   npm install @fortawesome/pro-regular-svg-icons
   npm install @fortawesome/pro-light-svg-icons
   ```

4. **Alternative: Using .npmrc file**
   Create a `.npmrc` file in your project root:
   ```
   @fortawesome:registry=https://npm.fontawesome.com/
   //npm.fontawesome.com/:_authToken=YOUR_TOKEN_HERE
   ```

## Current Setup

The project currently uses free Font Awesome icons. Once you configure Pro access, the components are ready to use duotone icons.