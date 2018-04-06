# Web App

## TOC

<!-- MarkdownTOC GFM -->

- [Dependencies](#dependencies)
- [Install](#install)
- [Usage](#usage)
- [Versioning](#versioning)
- [Copyright and License](#copyright-and-license)

<!-- /MarkdownTOC -->


## Dependencies

## Install

```sh
npm i -S a-web-app
```

## Usage

Create app instance and start it.

```js
import WebApp from 'a-web-app';
class App extends WebApp {

}

const app = new App();
app.start();
```

## Versioning

The versioning follows the rules of SemVer 2.0.0.

**Attentions**: anything may have **BREAKING CHANGES** at **ANY TIME** when major version is zero (0.y.z), which is for initial development and the public API should be considered unstable.

For more information on SemVer, please visit http://semver.org/.


## Copyright and License

Copyright (c) 2018 ADoyle. The project is licensed under the **Apache License Version 2.0**.

See the [LICENSE][] file for the specific language governing permissions and limitations under the License.

See the [NOTICE][] file distributed with this work for additional information regarding copyright ownership.


<!-- Links -->

[LICENSE]: ./LICENSE
[NOTICE]: ./NOTICE
