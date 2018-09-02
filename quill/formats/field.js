import Embed from '../blots/embed';

class Field extends Embed {

  constructor(scroll, domnode) {
    super(scroll, domnode);
    this.constructSelectBox(domnode);
  }

  static create(value) {
    const node = super.create(value);
    return node;
  }

  static value(domNode) {
    return domNode.getAttribute('data-value');
  }

  constructSelectBox(node) {
    console.log('bagel');
    let html = "<select>";
    let fields = { // TODO: get this from database
        "1" : "Name",
        "2": "Age",
        "3" : "Gender"
    }
    for(var key in fields) {
        html = html + "<option value=" + key  + ">" + fields[key] + "</option>"
    }
    html = html + "</select>";
    node.innerHTML = html;
    // node.setAttribute('data-value', JSON.stringify(fields));
    // node.setAttribute('style', 'color: red; font-weight: bold');
  }
  
  html() {
    alert('html() function is not really implemented in field.js');
  }
}
Field.blotName = 'field';
Field.className = 'ql-field';
Field.tagName = 'SPAN';

export default Field;
