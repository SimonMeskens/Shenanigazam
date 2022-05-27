# Contributing to the pack

## Mods

Mod manifest is generated using the Curseforge app and its export feature. Fill in the correct version number when exporting and only export the mods folder and you'll get a zip file with just the manifest and modlist HTML.

## Configs

There are three types of configs: client, server and common. All three go into `/overrides/configs` for most mods, but some mods put their server configs in `/saves/worldname/serverconfigs`. To change these configs, you copy them out of there and into `/overrides/defaultconfig`.

I only add configs to this repo when they are changed and otherwise leave mods to generate defaults. There is a small potential for that to give inconsistent results, but we haven't run into any and if we do, we can put those mods' files in the repo as necessary.

## KubeJS

The `/overrides/kubejs` folder has pack scripts, assets and datapacks.

The `assets` folder contains the assets, you likely don't need this unless you're adding custom blocks/items.
The `data` folder is basically an always-on globally available datapack
The `server_scripts` folder is where most of the stuff you need will reside. It has JavaScript files that change recipes, change tags and many other things are possible.
