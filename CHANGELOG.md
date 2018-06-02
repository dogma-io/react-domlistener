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


