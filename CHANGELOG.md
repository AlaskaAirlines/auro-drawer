# Semantic Release Automated Changelog

# [3.0.0](https://github.com/AlaskaAirlines/auro-drawer/compare/v2.2.3...v3.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([a68669d](https://github.com/AlaskaAirlines/auro-drawer/commit/a68669dda71f4a29708a0b5de8b60595bdb229a6))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [2.2.3](https://github.com/AlaskaAirlines/auro-drawer/compare/v2.2.2...v2.2.3) (2025-02-08)


### Performance Improvements

* update dependencies ([51f8944](https://github.com/AlaskaAirlines/auro-drawer/commit/51f89449d4e62e9ffd44a2e661d04538f19f5b57))
* update mixin per new WCSS spec ([f690d31](https://github.com/AlaskaAirlines/auro-drawer/commit/f690d31c91d1eb3d2067b9f2218841c1486e9f55))

## [2.2.2](https://github.com/AlaskaAirlines/auro-drawer/compare/v2.2.1...v2.2.2) (2025-01-24)


### Performance Improvements

* add auro-button to local demo [#35](https://github.com/AlaskaAirlines/auro-drawer/issues/35) ([e779b45](https://github.com/AlaskaAirlines/auro-drawer/commit/e779b45a8e1b22297eeb9e335ebd8605a595e579))
* add nodeResolve for demo .js files [#37](https://github.com/AlaskaAirlines/auro-drawer/issues/37) ([9e711fd](https://github.com/AlaskaAirlines/auro-drawer/commit/9e711fde99cc503fbf02cbf059fb34863dad2ece))
* update deps and doc structure [#36](https://github.com/AlaskaAirlines/auro-drawer/issues/36) ([2c33a92](https://github.com/AlaskaAirlines/auro-drawer/commit/2c33a92e96ff6ef0b0870ba7c8ab7e54f4b21e10))

## [2.2.1](https://github.com/AlaskaAirlines/auro-drawer/compare/v2.2.0...v2.2.1) (2024-12-20)


### Performance Improvements

* update node to version 22 ([91a1304](https://github.com/AlaskaAirlines/auro-drawer/commit/91a1304dc871a074e00cb1b9f451d8018b35fe7f))

# [2.2.0](https://github.com/AlaskaAirlines/auro-drawer/compare/v2.1.0...v2.2.0) (2024-11-01)


### Bug Fixes

* update auro-icon package [#30](https://github.com/AlaskaAirlines/auro-drawer/issues/30) ([faf925e](https://github.com/AlaskaAirlines/auro-drawer/commit/faf925e865d29191f4f57c73237c278dfdd4b996))


### Features

* apply latest token ds-auro-icon-size [#30](https://github.com/AlaskaAirlines/auro-drawer/issues/30) ([48546f0](https://github.com/AlaskaAirlines/auro-drawer/commit/48546f09e24664dacc1aa55f73c4a31fee046a10))


### Performance Improvements

* update dependencies ([c26bb7f](https://github.com/AlaskaAirlines/auro-drawer/commit/c26bb7f231d5e6296aa66c37bfcb8931e733e519))

# [2.1.0](https://github.com/AlaskaAirlines/auro-drawer/compare/v2.0.1...v2.1.0) (2024-10-25)


### Features

* **api:** add register static method [#28](https://github.com/AlaskaAirlines/auro-drawer/issues/28) ([10bbefe](https://github.com/AlaskaAirlines/auro-drawer/commit/10bbefecf7bf3d4413d57b534e4f2bdaf2303df4))

## [2.0.1](https://github.com/AlaskaAirlines/auro-drawer/compare/v2.0.0...v2.0.1) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#26](https://github.com/AlaskaAirlines/auro-drawer/issues/26) ([7f4e2d2](https://github.com/AlaskaAirlines/auro-drawer/commit/7f4e2d222612885b3c7468153f56582992445e30))

# [2.0.0](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.9...v2.0.0) (2024-10-04)


### Bug Fixes

* resolve minor color theming issues [#14](https://github.com/AlaskaAirlines/auro-drawer/issues/14) ([50471b1](https://github.com/AlaskaAirlines/auro-drawer/commit/50471b133856800a3ef422413de98fb580513602))


### Features

* add tag name as attribute when custom registered ([cea3dec](https://github.com/AlaskaAirlines/auro-drawer/commit/cea3dec3e5cf3c5d4881e8a4878d88c0fa40d083))
* refactor color token structure with tier 3 tokens [#14](https://github.com/AlaskaAirlines/auro-drawer/issues/14) ([c732088](https://github.com/AlaskaAirlines/auro-drawer/commit/c73208874da56dd5d19beebb086076b0aa4c882c))
* **version:** use custom versioned auro components ([da2886f](https://github.com/AlaskaAirlines/auro-drawer/commit/da2886fb13bf19bd030891cd08aae3eca5f6bc98))


### Performance Improvements

* **button:** use new beta version of flat variant button ([29223bc](https://github.com/AlaskaAirlines/auro-drawer/commit/29223bccf25bd5263c0f7476a93d890a095ae12f))
* refactor custom component registration config ([13a6ba1](https://github.com/AlaskaAirlines/auro-drawer/commit/13a6ba1cca255be607ccee2abe4624ddfa18fac9))
* update dependencies ([d0a8ab1](https://github.com/AlaskaAirlines/auro-drawer/commit/d0a8ab1e3d3d6553b1ffed6f033f99bf1fbbec68))


### BREAKING CHANGES

* trigger major release for color theme support

## [1.0.9](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.8...v1.0.9) (2024-06-21)


### Bug Fixes

* **#17:** adds scroll attribute to allow overflow content to be interactive ([78e36ba](https://github.com/AlaskaAirlines/auro-drawer/commit/78e36ba277320d8c59b61e0480fa28324a43b25f)), closes [#17](https://github.com/AlaskaAirlines/auro-drawer/issues/17)


### Performance Improvements

* **scroll:** prevent content behind drawer scrolling when user scrolls the drawer content ([d88aa59](https://github.com/AlaskaAirlines/auro-drawer/commit/d88aa59387fb78d34f7ba10a38563a76dbd3e7f2))

## [1.0.8](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.7...v1.0.8) (2024-02-23)


### Bug Fixes

* **unformatted:** fix error from unformatted drawer opening ([d19b693](https://github.com/AlaskaAirlines/auro-drawer/commit/d19b693f8b29efed828b0733994df34c2d27063e))


### Performance Improvements

* **deps:** update dependencies ([4b85d7b](https://github.com/AlaskaAirlines/auro-drawer/commit/4b85d7bf03267778b0046ccee3ada0c34fdcf585))
* **min:** update min js structure for docsite ([855a57c](https://github.com/AlaskaAirlines/auro-drawer/commit/855a57cf9be960f676ae5b36ea54c24363e78a23))

## [1.0.7](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.6...v1.0.7) (2024-02-20)


### Performance Improvements

* **examples:** refactor example js system ([e88ae29](https://github.com/AlaskaAirlines/auro-drawer/commit/e88ae293b760a5d585235878e370008a7f90da3e))

## [1.0.6](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.5...v1.0.6) (2024-02-13)


### Performance Improvements

* update auro dependencies ([5e074c7](https://github.com/AlaskaAirlines/auro-drawer/commit/5e074c7c18cae65a7c95bf948cc3dc65db65ace8))

## [1.0.5](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.4...v1.0.5) (2024-02-13)


### Performance Improvements

* **demo:** update demo file names ([b42a949](https://github.com/AlaskaAirlines/auro-drawer/commit/b42a949f9d1314887d6ed720ba2491f25cd73dc5))
* **fixed:** remove fixed support ([3b33598](https://github.com/AlaskaAirlines/auro-drawer/commit/3b33598bcdb34dc4d0e54e65a189503771f8a368))
* **imports:** update style imports [#9](https://github.com/AlaskaAirlines/auro-drawer/issues/9) ([2aa4bf8](https://github.com/AlaskaAirlines/auro-drawer/commit/2aa4bf8635ebe771cfd75c981db2360ac0e6f09b))

## [1.0.4](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.3...v1.0.4) (2024-02-11)


### Performance Improvements

* update to support ESM ([116e117](https://github.com/AlaskaAirlines/auro-drawer/commit/116e117717b56cb270fe090889c02412648fd9a7))

## [1.0.3](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.2...v1.0.3) (2024-02-05)


### Bug Fixes

* **dist:** add apiExample js file to dist [#7](https://github.com/AlaskaAirlines/auro-drawer/issues/7) ([4faf30a](https://github.com/AlaskaAirlines/auro-drawer/commit/4faf30a37b472564f6da6be4b170bac191616047))
* **name:** update labels to auro-drawer ([e605781](https://github.com/AlaskaAirlines/auro-drawer/commit/e60578104df80c90c7e153cb78015e3bd885b636))

## [1.0.2](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.1...v1.0.2) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([742ec70](https://github.com/AlaskaAirlines/auro-drawer/commit/742ec70e7fe3d10fa0e297914e15b37bf7545181))

## [1.0.1](https://github.com/AlaskaAirlines/auro-drawer/compare/v1.0.0...v1.0.1) (2024-01-27)


### Performance Improvements

* update index per SSR support ([cfe892b](https://github.com/AlaskaAirlines/auro-drawer/commit/cfe892be7c206f3a63fb7729e72846b97897db68))

# 1.0.0 (2024-01-25)


### Bug Fixes

* **dialog:** update dialog references to drawer ([ddc8c00](https://github.com/AlaskaAirlines/auro-drawer/commit/ddc8c0053de4cacd30b239f72f0d980cca6eb00f))
* **docs:** support attribute links in api examples ([d98d9b3](https://github.com/AlaskaAirlines/auro-drawer/commit/d98d9b353aefe42e1dfc05775a30c9e9b6033229))
* **eslint:** update eslint rule ([b352a01](https://github.com/AlaskaAirlines/auro-drawer/commit/b352a012bcd05048b5fb5d4e94bd8957c4b1787c))
* **styles:** refactor style code for component ([870b3ba](https://github.com/AlaskaAirlines/auro-drawer/commit/870b3ba50a1b8e950a38729debb7f2a8735b0749))
* **workflows:** update node version in github workflows ([d1c6201](https://github.com/AlaskaAirlines/auro-drawer/commit/d1c62019ac20df7bd436b39966dbc9e7d87588dc))


### Features

* **generator:** rebuild component using generator [#1](https://github.com/AlaskaAirlines/auro-drawer/issues/1) ([6dd4552](https://github.com/AlaskaAirlines/auro-drawer/commit/6dd4552e787ddc4178a30a5fda2e5c93c3fb8435))
* **tokens:** implement new design tokens [#2](https://github.com/AlaskaAirlines/auro-drawer/issues/2) ([101d487](https://github.com/AlaskaAirlines/auro-drawer/commit/101d4877dab450247b3af69fe0e365a59a5a45fd))


### Performance Improvements

* address multiple code issues, see body ([4d54e69](https://github.com/AlaskaAirlines/auro-drawer/commit/4d54e69e26b60ba41204b0e7e4a205753eb9cea5))
* **docs:** implement auro doc template ([8514a06](https://github.com/AlaskaAirlines/auro-drawer/commit/8514a067b24dcc9aefaf2f9b7c3dbe39c24a6ed9))
* **postcss:** update postcss to handle multiple css files ([080e8b9](https://github.com/AlaskaAirlines/auro-drawer/commit/080e8b9b04fc4df9daeb94f542d08a146ef6d15b))
* **src:** implement all component src code ([2c505b8](https://github.com/AlaskaAirlines/auro-drawer/commit/2c505b8500afa62885b1e59610b5b152449deb6e))
