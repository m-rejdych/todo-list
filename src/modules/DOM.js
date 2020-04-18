function createElement(elementType, id, classList, parentNodeId) {
    const element = document.createElement(elementType);

    if (id) element.setAttribute(`id`, id);
    if (classList) element.classList.add(classList);
    if (parentNodeId) document.getElementById(parentNodeId).appendChild(element);

    return element;
}

export { createElement };