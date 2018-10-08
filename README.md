avatar-icon-component
==============================================================================

A component for displaying user's avatar image or inicials;

Installation
------------------------------------------------------------------------------

```
ember install avatar-icon-component
```


Usage
------------------------------------------------------------------------------

`{{avatar-icon data=userData image=imageModel _size=100}}`

userData = {
    username: String,
}

imageModel = {
    url: String
}

_size: Number - Avatar size


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd avatar-icon-component`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
