# Semantic Release Automated Changelog

# [4.2.0](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.1.5...v4.2.0) (2025-06-24)


### Features

* add `close` slot ([a9f3d7e](https://github.com/AlaskaAirlines/auro-drawer/commit/a9f3d7e350e9b1f19c32ba0a366de86bcb60d43a))
* add cssparts and example ([a262cb9](https://github.com/AlaskaAirlines/auro-drawer/commit/a262cb9b176cb9813f277366c3b28f48f0ec6957))

## [4.1.5](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.1.4...v4.1.5) (2025-05-29)


### Bug Fixes

* update focus trap logic to improve focus management by accounting for web components / shadow dom and slot structure ([fdac5bb](https://github.com/AlaskaAirlines/auro-drawer/commit/fdac5bb51bd91dc4375e69a52c5c5f20571369f2))

## [4.1.4](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.1.3...v4.1.4) (2025-05-23)


### Bug Fixes

* use robust method for focusing on open instead of relying on browser for focus functionality ([9783bbc](https://github.com/AlaskaAirlines/auro-drawer/commit/9783bbc07594db3cf27841e521e6849dd4c40b30))

## [4.1.3](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.1.2...v4.1.3) (2025-05-23)


### Bug Fixes

* update focus trap to always have a relevant list of focusable elements ([eee2a4f](https://github.com/AlaskaAirlines/auro-drawer/commit/eee2a4f5a10792b4acc88f461c25da6f0c076f91))

## [4.1.2](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.1.1...v4.1.2) (2025-05-06)


### Bug Fixes

* allow checkbox and radio as focusable elements ([a651d70](https://github.com/AlaskaAirlines/auro-drawer/commit/a651d709a9e65bc1ed7590894ac342851aaa683f))

## [4.1.1](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.1.0...v4.1.1) (2025-05-01)


### Bug Fixes

* update SCSS token formatting ([0b89f4a](https://github.com/AlaskaAirlines/auro-drawer/commit/0b89f4a7e2eccd9e2204d7c668b12474c2755054))

# [4.1.0](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.0.4...v4.1.0) (2025-04-28)


### Features

* update to use new color theme tokens [#62](https://github.com/AlaskaAirlines/auro-drawer/issues/62) ([695c9eb](https://github.com/AlaskaAirlines/auro-drawer/commit/695c9eb6cc24eaaf8bcb5edadc15dc52a92389de))

## [4.0.4](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.0.3...v4.0.4) (2025-04-16)


### Bug Fixes

* remove bib on disconnect in auro-floater ([7f7b5b2](https://github.com/AlaskaAirlines/auro-drawer/commit/7f7b5b2f951f126915548e77daa3dbcb3b63ea03))

## [4.0.3](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.0.2...v4.0.3) (2025-04-10)


### Bug Fixes

* fix typo and add JSDoc comments ([b44e8a2](https://github.com/AlaskaAirlines/auro-drawer/commit/b44e8a2d6903bd868d091c8914cf1aba77b7ca14))

## [4.0.2](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.0.1...v4.0.2) (2025-04-01)


### Bug Fixes

* properly hide backdrop after hiding ([0b9dea4](https://github.com/AlaskaAirlines/auro-drawer/commit/0b9dea4ee26cce95ee5d898b2b2f182703c257fa))

## [4.0.1](https://github.com/AlaskaAirlines/auro-drawer/compare/v4.0.0...v4.0.1) (2025-03-21)


### Bug Fixes

* fix to run on svelte, not to close when clicking datepicker ([727d226](https://github.com/AlaskaAirlines/auro-drawer/commit/727d2260b9c8c8cdf9d6f5d34bf67911eb706ae5))
* put correct value on `aria-expanded` ([973e455](https://github.com/AlaskaAirlines/auro-drawer/commit/973e45591efffdbeb4976304e06c53ff4ee60eed))

# [4.0.0](https://github.com/AlaskaAirlines/auro-drawer/compare/v3.0.0...v4.0.0) (2025-03-20)


### Bug Fixes

* `open` attribute change to properly show and hide drawer ([079f64f](https://github.com/AlaskaAirlines/auro-drawer/commit/079f64f701d185eaf66e73eb9a35cbb74d05057b))
* close drawer with `escape` only when there is no other dropdown-like component is open ([597ee0f](https://github.com/AlaskaAirlines/auro-drawer/commit/597ee0f2a65461a91c73571fa99e4ea32908abce))
* import correct tokenscss path ([442c462](https://github.com/AlaskaAirlines/auro-drawer/commit/442c462e7cdf3481bee82435308acb38087fb25f))
* make backdrop not to be event-thru ([6d52aa3](https://github.com/AlaskaAirlines/auro-drawer/commit/6d52aa38ef7d6d7e0d679ba160c47d116cc1a063))
* make the drawer to have sliding effect on closing [#51](https://github.com/AlaskaAirlines/auro-drawer/issues/51) ([4039bf8](https://github.com/AlaskaAirlines/auro-drawer/commit/4039bf86ead0af8c9f1f276ca05a287eab77de7f))
* not to close drawer on backdrop click when any dropdown components is open inside [#50](https://github.com/AlaskaAirlines/auro-drawer/issues/50) ([d8538b6](https://github.com/AlaskaAirlines/auro-drawer/commit/d8538b6cc6650ff805f69daf23213e5bc94f4e7a))
* properly carrydown the property value to drawerBib ([90136a1](https://github.com/AlaskaAirlines/auro-drawer/commit/90136a10226a9b0cf862b8224dcc7c6933e48a59))


### Features

* add `fullscreenBreakpoint` to expand bib on smaller screen ([d565474](https://github.com/AlaskaAirlines/auro-drawer/commit/d5654748f66a9f70392cdb8a4d71bcf9817fbfb7))
* deprecate `sm`, `md`, `left` ([c9dedc3](https://github.com/AlaskaAirlines/auro-drawer/commit/c9dedc3ea5955e8ba6c5c47a498c9b747ff1bb9c))


### Performance Improvements

* isolate `Tab` keydown to loop through focusable elements in drawer ([3eced16](https://github.com/AlaskaAirlines/auro-drawer/commit/3eced16132395fe28925dc529dd40e497a9946bb))


### BREAKING CHANGES

* replace `sm` and `md` to `size` and `left` to `placement` and remove `css-parts`

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
