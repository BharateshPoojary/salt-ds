module.exports = {
  "must-inject-css": {
    meta: {
      docs: {
        description: "must inject css",
      },
    },
    create: (context) => ({
      ImportDeclaration: (node) => {
        //import styles from "./style.css"
        const importPath = node.source.value;//Import path is the node value "./style.css"
        const importSpecifiers = node.specifiers;//get the variable used for naming import [styles]

        if (importPath.endsWith(".css") && importSpecifiers.length === 0) {
          context.report({
            node: node,
            message:
              "CSS imports must be assigned to a variable and then injected",
          });
        }
      },
    }),
  },
};
