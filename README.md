# react-domlistener [![NPM][npm-img]][npm-url] [![Coverage][cov-img]][cov-url]

React component for auto binding/unbinding event listeners during component life cycle.

## Table of Contents

*   [Installation](#installation)
*   [Documentation](#documentation)
*   [Code of Conduct](#code-of-conduct)
*   [Contributing](#contributing)
*   [License](#license)

## Installation

**npm**

```bash
npm install react-domlistener
```

**yarn**

```bash
yarn add react-domlistener
```

## Documentation

This project exports a single component, `DOMListener`, which serves the purpose of auto binding/unbinding an event listener during the life cycle of a React component. One of the advantages to using this component over manually adding `addEventListener`/`removeEventListener` bindings yourself is that you don't have to worry about cases where you forget to unbind. When forgetting to unbind event listeners you create memory leaks, which can be difficult to track down.

Below is an example of how to use **react-domlistener**.

```js
import DOMListener from 'react-domlistener'

export default class FooBar extends React.Component {
  _handleWindowResize = (e) => {
    // TODO: do something clever on window resize
  }

  render() {
    return (
      <div className="foo-bar">
        <DOMListener
          listener={this._handleWindowResize}
          target={window}
          type="resize"
        />
      </div>
    )
  }
}
```

> NOTE: This project requires at a minimum React version 16.3.0 as it depends on newer API methods introduced in this version.

## Code of Conduct

Please see the [code of conduct](CODE_OF_CONDUCT.md).

## Contributing

Please see the [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE.md)

[cov-img]: https://img.shields.io/codecov/c/github/dogma-io/react-domlistener.svg "Code Coverage"
[cov-url]: https://codecov.io/gh/dogma-io/react-domlistener

[npm-img]: https://img.shields.io/npm/v/react-domlistener.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/react-domlistener
