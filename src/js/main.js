const proto = Object.create(HTMLFormElement.prototype);

const importDoc = document.currentScript.ownerDocument;

proto.createdCallback = function() {
  const template = importDoc.querySelector('template');
  const templateContent = document.importNode(template.content, true);

  this.createShadowRoot().appendChild(templateContent);

  this.model      = this.getAttribute('model');
  this.validation = this.getAttribute('validation');
  this.view       = this.getAttribute('view');

  // TODO JSON.parse model, validation and view

  this.form = new formsjs.Form(this.model, this.validation, this.view);
};

proto.attachedCallback = function() {
  // TODO;
};

proto.detachedCallback = function() {
  // TODO
};

proto.attributeChangedCallback = function(attrName, oldValue, newValue) {
  //  TODO
};

proto.getFormData = function(){
  const data = new FormData();

  if (this.form.formData && typeof this.form.formData === 'object') {
    Object.keys(this.form.fromData).forEach( (key) => {
      data.append(key, this.form.formData[key]);
    });
  }

  return data;
}

// Register element and expose DOM API globally
window.FormsJS = document.registerElement('forms-js', {
  prototype: proto,
  'extends': 'form'
});
