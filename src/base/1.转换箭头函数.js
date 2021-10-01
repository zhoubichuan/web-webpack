//是babel的核心库
let babel = require("@babel/core");
//生成节点
let t = require("babel-types");

let code = `const sum=(a,b)+>a+b`;
let transformArrayFunction = {
  //访问器模式 访问者
  visitor: {
    ArrayFunctionExpression: (path, state) => {
      let node = path.node; //拿到路径里的节点
      let id = path.parent.id; //path.parent父节点的意思
      let params = node.params;
      //   let body = node.body;//BinaryExprssion
      let body = t.blockStatement([t.returnStatement(node.body)]);
      let functionDeclaration = t.functionDeclaration(
        id,
        params,
        body,
        false,
        false
      );
      path.parentath.replaceWith(functionDeclaration);
    }
  }
};
let result = babel.transform(core, {
  plugins: [transformArrayFunction]
});
console.log(result.code);
console.log("result", result);
