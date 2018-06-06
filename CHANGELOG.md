# 1.0.5 (2018-06-06)

*   Remove `engines` from `package.json`


# 1.0.4 (2018-06-06)

*   Please add a description of your change here, it will be automatically prepended to the `CHANGELOG.md` file.


# 1.0.3 (2018-06-02)

*   The previous release was attempting to fix issues with ES2015 by targeting Node 4 instead of Node 6 but that didn't actually fully generate ES5 code. This change should fix that.


# 1.0.2 (2018-06-02)

*   Switched build from targeting Node 6 to Node 5 in order to not have classes in final output. There was an issue consuming this project in a project using [create-react-app](https://github.com/facebook/create-react-app) because it isn't outputting ES5.


# 1.0.1 (2018-05-28)

*   Fix README to use named import instead of default import.

# 1.0.0 (2018-05-28)

*   Add generate Flow types to `lib` directory for consumers using Flow types.
*   Switch from default export to named export, `DOMListener`.
*   Handle adding/removing event listeners when properties change to help ensure no memory leaks occur.
*   Upgrade development dependencies to latest versions.

# 0.1.0 (2018-05-21)

*   Initial release.


