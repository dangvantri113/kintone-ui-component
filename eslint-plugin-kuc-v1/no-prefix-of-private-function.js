module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;
        const sourceCode = context.getSourceCode().getText();
        const pattern = 'private [^_]'
        const regex = new RegExp(pattern, "i");
        if (!regex.test(sourceCode)) return;
        context.report({
          node: node,
          message: `Please put "_" onto the prefix of private variables or functions
          ex: private _handleClickButton() {
            
          }`
        });
      }
    };
  }
};
