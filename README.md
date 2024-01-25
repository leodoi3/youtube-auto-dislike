<img width="100" height="100" src="https://i.imgur.com/CwAIwN6.png" align="right" />

## Compilation
- npm install -g win-node-env
- npm install -g webpack
- npm install -g webpack-cli
- npm install -g clean-webpack-plugin
- npm install webpack-run-chrome-extension
- npm run build
- npx webpack

# YouTube Auto Like

Never forget to like a video again.

![](https://img.shields.io/github/downloads/austencm/youtube-auto-like/total?style=flat)
![](https://img.shields.io/github/downloads/austencm/youtube-auto-like/latest/total?style=flat)
![](https://img.shields.io/github/v/release/austencm/youtube-auto-like)
![](https://img.shields.io/github/release-date/austencm/youtube-auto-like)

This version is tested with Chrome, but it should work with any Chromium-based browser.

[Firefox version by @Taknok here](https://addons.mozilla.org/en-US/firefox/addon/youtube_auto_like/).

## Install

**Feb 2021: Sadly, Chrome removed this extension from the web store for violating [YouTube's terms of service](https://www.youtube.com/t/terms) (specifically the part about causing inaccurate measurements of user engagement). You can still load the extension locally by following these steps. Only do this for extensions you trust.**

1. Download the latest release: https://github.com/austencm/youtube-auto-like/releases/latest/download/release.zip
1. Unzip `release.zip` and put it somewhere it won't get deleted accidentally
1. Open your extensions page in Chrome (in the top right, click the <img width="18" height="18" src="https://lh3.googleusercontent.com/5nlvcUtFevZLAkSJALBl5Fa8thP_-mGFnUngJLuAFzt0jws-Lr09I9mIfawW4vKiT6k=w36-h36" alt="puzzle piece"> icon, then "Manage Extensions" (at the bottom of the popup)
1. Turn on Developer Mode (in the top right)
1. Click 'Load unpacked' and select the unzipped `release` folder

> ☝️ Extensions loaded this way are unable to update automatically. See below for instructions.

## Update

Keep an eye out for a badge on the extension icon when an update is available.

1. Click the icon for a download link, or download the latest release [here](https://github.com/austencm/youtube-auto-like/releases/latest/download/release.zip)
1. Unzip `release.zip` and replace your current extension files with the latest
1. Go to your extensions page, find YouTube Auto Like, and click the refresh icon (restarting Chrome also works)

> ☝️ Using the same folder ensures Chrome will consider this the same extension and save your settings. If you want to use a different folder, you'll need to follow the install instructions again and reconfigure your settings.

## Translations

Feel free to contribute with a [pull request](https://github.com/austencm/youtube-auto-like/pulls) or grab [the JSON file](https://raw.githubusercontent.com/austencm/youtube-auto-like/master/app/_locales/en/messages.json), translate it, and [send it back to me](mailto:heyausten@gmail.com).

## Acknowledgments

| Name                                           | Contribution                                                                                                                                                    |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@Taknok](https://github.com/Taknok)           | [Firefox edition](https://addons.mozilla.org/en-US/firefox/addon/youtube_auto_like/)<br />Language-independent button selection method<br />ES, FR translations |
| [@JKetelaar](https://github.com/JKetelaar)     | NL translation                                                                                                                                                  |
| [@Szmyk](https://github.com/Szmyk)             | PL translation                                                                                                                                                  |
| [@moweME](https://github.com/moweME)           | DE translation                                                                                                                                                  |
| [@mariovalney](https://github.com/mariovalney) | pt_BR translation                                                                                                                                               |
| [@Borian23](https://github.com/Borian23)       | PL translation                                                                                                                                                  |
| [@UtkuGARIP](https://github.com/UtkuGARIP)     | TR translation                                                                                                                                                  |
| [@Makishima](https://github.com/Makishima)     | RU translation                                                                                                                                                  |
| [@wthueb](https://github.com/wthueb)           | Selector fix                                                                                                                                                    |
| [@netravnen](https://github.com/netravnen)     | DK translation                                                                                                                                                  |
| [@adamoudad](https://github.com/adamoudad)     | FR translation help                                                                                                                                             |
| [@Fast0n](https://github.com/Fast0n)           | IT translation                                                                                                                                                  |
| [@msmafra](https://github.com/msmafra)         | pt_BR translation help                                                                                                                                          |
| [@Starmania](https://github.com/Starmania)     | FR translation help                                                                                                                                             |

## Donate

<a href="https://www.buymeacoffee.com/austen"><img src="https://img.buymeacoffee.com/button-api/?text=Donate a cat snack&emoji=🍣&slug=austen&button_colour=ff0000&font_colour=ffffff&font_family=Lato&outline_colour=ffffff&coffee_colour=FFDD00" alt="🍣 Donate a cat snack" /></a>
