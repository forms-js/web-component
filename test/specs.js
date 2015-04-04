describe('dependencies', () => {
  it('should have formsjs global object', () => {
    expect(window.formsjs).to.be.a.object;
  });
});

describe('import', () => {
  it('should have imported formsjs component', () => {
    expect(window.formsjs.FormElement).to.be.a.function;
  });
});

describe('JavaScript API', () => {
  it('should create a formsjs form using document.createElement', () => {
    let form = document.createElement('form', 'forms-js');
    expect(form.getAttribute('is')).to.equal('forms-js');
    expect(form.getFormData).to.be.a.function;
  });

  it('should create a formsjs form using the formsjs.FormElement constructor', () => {

    let form = new formsjs.FormElement();
    expect(form.getAttribute('is')).to.equal('forms-js');
    expect(form.getFormData).to.be.a.function;
  });
});
