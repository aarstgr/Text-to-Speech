const El =({element='div', children, ...rest }) =>{
    const el =document.createElement(element);
    for (const key in rest) {
        el [key]= rest[key]
    }
    if (children )(Array.isArray(children))? el.append(...children) : el.append(children)
    return el;
}
export default El;