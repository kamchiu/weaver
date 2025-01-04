module.exports = function transformer(file, api) {
  const j = api.jscodeshift
  const root = j(file.source)
  console.log('🚀 ~ transformer ~ root:', root)

  // 查找<template>标签
  // root.find(j.JSXElement, { openingElement: { name: { name: 'template' } } })
  //   .forEach((path) => {
  //     // 在<template>标签下添加一个新的<button>元素
  //     path.node.children.push(
  //       j.jsxElement(
  //         j.jsxOpeningElement(j.jsxIdentifier('button'), []),
  //         j.jsxClosingElement(j.jsxIdentifier('button')),
  //         [],
  //       ),
  //     )
  //   })

  return root.toSource()
}
