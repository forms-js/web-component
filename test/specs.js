describe('dependencies', () => {
  it('should have formsjs global object', () => {
    expect(window.formsjs).to.be.a.object;
  });
});

describe('import', () => {
  it('should import formsjs component', () => {
    let link = document.createElement('link');
    link.setAttribute('rel', 'import');
    link.setAttribute('href', 'base/dist/index.html');
    document.head.appendChild(link);

    expect(window.formsjs.FormElement).to.be.a.function;
  });
});

describe('JavaScript API', () => {
  it('should create a formsjs form using document.createElement', () => {
    let form = document.createElement('form', 'forms-js');
    expect(form.getAttribute('is')).to.equal('forms-js');
  });

  xit('should create a formsjs form using the formsjs.FormElement constructor', () => {

    // Failing because HTML Import is not working well...
    let form = new formsjs.FormElement();
    expect(form.getAttribute('is')).to.equal('forms-js');
  });
});
