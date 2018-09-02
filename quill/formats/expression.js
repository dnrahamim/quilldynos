import Embed from '../blots/embed';

const math = require('mathjs');

class Expression extends Embed {
  static create(value) {
    const node = super.create(value);
    const evaled = math.eval(value);
    let thisarg = this;
    node.innerHTML = `${evaled}`;
    node.setAttribute('data-value', value);
    node.setAttribute('style', 'color: blue;');
    node.addEventListener('click', function(e) {
      // e.target should always be node since it is attached to node
      let blot = Quill.find(node);
      window.quill.theme.tooltip.edit('expression', thisarg.value(node), blot);
      // window.quill.theme.tooltip.show(); //does all kinds of weird nonesense with css
      // TODO: tooltip.show actually changes what appears in the tooltip
      // by changing the data-mode. how terrible. we must change this
    });
    return node;
  }

  static value(domNode) {
    return domNode.getAttribute('data-value');
  }
  
  html() {
    alert('expression html() function is not really implemented');
    const { expression } = this.value();
    return `<span>${expression}</span>`;
  }
}
Expression.blotName = 'expression';
Expression.className = 'ql-expression';
Expression.tagName = 'SPAN';

export default Expression;
