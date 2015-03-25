const importDoc = document.currentScript.ownerDocument;

class FormsJS extends HTMLFormElement {
  createdCallback() {
    const template = importDoc.querySelector('template');
    const templateContent = document.importNode(template.content, true);

    this.createShadowRoot().appendChild(templateContent);

    this.model      = this.getAttribute('model');
    this.validation = this.getAttribute('validation');
    this.view       = this.getAttribute('view');

    // TODO JSON.parse model, validation and view

    this.form = new formsjs.Form(this.model, this.validation, this.view);
  }

  attachedCallback() {
    // TODO;
  }

  detachedCallback() {
    // TODO
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    //  TODO
  };

  getFormData(){
    const data = new FormData();

    if (this.form.formData && typeof this.form.formData === 'object') {
      Object.keys(this.form.fromData).forEach( (key) => {
        data.append(key, this.form.formData[key]);
      });
    }

    return data;
  }
}

// Register element and expose DOM API globally
window.FormsJSElement = document.registerElement('forms-js', {
  prototype: FormsJS.prototype,
  'extends': 'form'
});
