# [forms-js](https://github.com/forms-js/forms-js) web component

> [forms-js](https://github.com/forms-js/forms-js) web component adapter 

## Warning: under development

This project is under development and is not ready for use. Please checkout the code and look at the issue tracker if you want to contribute

## Installation

1. Install froms-js web component using npm or Bower

    ```shell
    npm install forms-js-web-component
    ```

    ```shell
    bower install forms-js-webcomponent
    ```

2. Use HTML Import 
    
    In your `<head>`:

    ```html
    <link rel="import" href="forms-js-webcomponent/dist/index.html">
    ```
3. Use FormsJS element in HTML or programmability 
    
    **HTML**
    ```html
    <forms-js model="{/*..*/}" view="{/*..*/}" validation="{/*..*/}"></forms-js>
    ```

    **JavaScript**
    ```js
        var aForm = new FormsJS(model, view, validation);
        document.body.appendChild(aForm);
    ```

### API

FormsJS inherits from `HTMLFormElement`. 

#### Constructor Arguments
FormsJS accepts three arguments:

##### `model` (required)

TODO

##### `view`

TODO

##### `validation`

TODO

#### Getter/Setter and Hooks

##### `getFormData`
Returns a `FormData` object from data inputed into the form


## License
MIT

