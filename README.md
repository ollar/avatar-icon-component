avatar-icon-component
==============================================================================

A component for displaying user's avatar image or inicials;


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


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

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
