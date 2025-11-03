# Minecraft Bedrock Add-on Development Setup

## Initial Setup

Before following the installation steps, you need to configure your add-on structure:

1. **Rename add-on folders**

- Navigate to `resource_packs\addon` and rename the `addon` folder to your add-on name
- Navigate to `behavior_packs\addon` and rename the `addon` folder to your add-on name

2. **Replace placeholder variables**
   In various files throughout your add-on, replace the following placeholders with your actual values:

- `[ADDON-NAME]` - Your add-on's display name
- `[ADDON-DESCRIPTION]` - Brief description of your add-on
- `[ADDON-AUTHOR]` - Your name or organization
- `[ADDON-RESOURCE-UUID]` - Unique identifier for resource pack
- `[ADDON-BEHAVIOR-UUID]` - Unique identifier for behavior pack
- `[ADDON-RANDOM-UUID]` - Additional unique identifier if needed

You can generate UUIDs using online tools or VS Code extensions.

## Prerequisites

Before you start developing your Minecraft Bedrock add-on, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Visual Studio Code](https://code.visualstudio.com/) or your preferred code editor
- Minecraft Bedrock Edition

## Installation

Follow these steps to set up your development environment:

1. **Install TypeScript globally**

```powershell
npm install -g typescript
```

2. **Install Minecraft Script API packages**

```powershell
npm i @minecraft/server
npm i @minecraft/server-ui
npm i @minecraft/vanilla-data
npm i @minecraft/math
```

3. **Initialize your project**

- Create a new folder for your add-on
- Navigate to the folder in your terminal
- Run `npm init -y` to create a package.json file

You're now ready to start developing your Minecraft Bedrock add-on!

## Resources

For comprehensive information and assistance with Minecraft Bedrock add-on development, explore these valuable resources. The [Microsoft Learn documentation](https://learn.microsoft.com/en-us/minecraft/creator/?view=minecraft-bedrock-stable) provides official guidance and tutorials. Stay updated with the [latest NPM packages](https://waveplayz.github.io/ScriptApi-NPMs/) and reference detailed API documentation at [Bedrock Wiki](https://wiki.bedrock.dev/), [Script API Docs](https://jaylydev.github.io/scriptapi-docs/), [Vanilla Data](https://stirante.com/script/vanilla-data/), and [Math API](https://projectxero.top/sapi/original/modules/math.html). Community tools like [MC Utils](https://github.com/lpsmods/mc-utils) and official samples from [Microsoft](https://github.com/microsoft/minecraft-samples/blob/main/addon_starter/README.md) and [Mojang](https://github.com/Mojang/bedrock-samples) offer practical examples. Additionally, access vanilla game assets including [translation files](https://github.com/Mojang/bedrock-samples/blob/main/resource_pack/texts/en_US.lang) and [textures](https://github.com/Mojang/bedrock-samples/tree/main/resource_pack/textures) for reference and customization.
