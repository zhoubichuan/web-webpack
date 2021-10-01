let transformArrowFunctions = {
  visitor: {
    ClassDeclaration: (path, state) => {
      let node = path.node;
      let id = node.id;
      let methods = node.body.body;
      let functions = [];
      methods.forEach(function(method) {
        if (method.kind == "constructor") {
          let func = t.functionDeclaration(
            id,
            method.params,
            method.body,
            false,
            false
          );
        } else {let memberExpression=t.memberExpression(t.memberExpression(id,t.identifier('protype'))
          let memberFunciton = t.functionDeclaration(
            null,
            method.params,
            method.body,
            false,
            false
          );
          t.assignmentExpression("=", memberExpression, memberFunciton);
          statment.push(assignmentExpression);
        }
      });
    }
  }
};
