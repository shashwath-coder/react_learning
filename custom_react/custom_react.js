function custom_render(reactElement,container)
{
   /*  const dom_element=document.createElement(reactElement.type)
    dom_element.innerHTML=reactElement.children
    dom_element.setAttribute('href',reactElement.props.href)
    dom_element.setAttribute('target',reactElement.props.target)

    container.appendChild(dom_element) */

    const dom_element=document.createElement(reactElement.type)
    dom_element.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop==='children') continue;

        dom_element.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(dom_element)
}


const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

custom_render(reactElement,mainContainer) // injecting tht react ele into main container ie the root