# Albums

Display albums with Artist, Title and Link to album.


### Environment Set Up

Install `XCode` from `App Store`, remember to update to the latest version.

Install `HomeBrew` from `brew.sh`.

Install `Node`:
```sh
brew install node,
node -v
```

Install `Watchman`:
```sh
brew install watchman
```

Install `React Native Cli`:
```sh
npm install -g react-native-cli
```


### Eslint Set Up

Install dependencies in `Command Line`:
```sh
npm install -g eslint
npm install --save-dev eslint-config-rallycoding
```

Install dependencies in `VS Code`:

* extensions -> eslint

* create new file `.eslintrc` in root directory:
```sh
{
    "extends": "rallycoding",
    "parser": "babel-eslint"
}
```

### Running

Create new project in `Command Line`::
```sh
react-native init albums
```

Run project:
```sh
cd albums
npm install
react-native run-ios
```