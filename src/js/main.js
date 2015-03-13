const proto = Object.create(HTMLElement.prototype);

const importDoc = document.currentScript.ownerDocument;


proto.createdCallback = function() {
  const template = importDoc.querySelector('template');
  const templateContent = document.importNode(template.content, true);

  this.createShadowRoot().appendChild(templateContent);
};

proto.attachedCallback = function() {
  // TODO;
};

document.registerElement('forms-js', {prototype: proto});
