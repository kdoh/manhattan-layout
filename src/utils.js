export const setHeight = (node, height = '100%') => {
  let elementWithHeight = document.querySelector(node).style.height = height
  return elementWithHeight
}
