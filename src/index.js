const fnName = `nameof`;
const example = `Example: ${fnName}(myVar.myProp); // returns "myProp"`;

export default function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        if (path.node.callee.name === fnName) {
          if (path.node.arguments.length === 1) {
            const arg = path.node.arguments[0];

            if (arg.type === "Identifier") {
              path.node.type = "StringLiteral";
              path.node.value = arg.name;
            } else if (arg.type === "MemberExpression") {
              path.node.type = "StringLiteral";
              path.node.value = arg.property.name;
            } else {
              throw new Error(`Expected type 'Identifier|MemberExpression', but got '${arg.type}'. ${example}`);
            }
          } else {
            throw new Error(`Invalid signature. ${fnName} expects a single argument. ${example}`);
          }
        }

        return undefined;
      }
    }
  };
}
