import React, { useEffect } from 'react';
import NavigationLink from './components/NavegationLink';
import { useCssHandles } from 'vtex.css-handles';

interface MultisiteProps {
  src1: string,
  alt1: string,
  title1: string,
  idValue1: number,
  src2: string,
  alt2: string,
  title2: string,
  idValue2: number,
  src3: string,
  alt3: string,
  title3: string,
  idValue3: number
}

const SetCssClass = (el: any, cssClass: string) => {
  el?.classList.add(cssClass);
}

const SetActiveClassOnReload = () =>{
  const activeBtn = localStorage.getItem("btnActiveElement") || "";
  const el = document.getElementById(activeBtn);
  const activeClass = localStorage.getItem("btnActiveClass") || "";
  SetCssClass(el, activeClass);
  localStorage.removeItem("btnActiveElement");
  localStorage.removeItem("btnActiveClass");
}
 
const Multisite: StorefrontFunctionComponent<MultisiteProps> = ({
    src1, 
    alt1,
    title1, 
    idValue1, 

    src2, 
    alt2,
    title2, 
    idValue2, 

    src3, 
    alt3,
    title3,
    idValue3, 
    
  }) => {
  
  useEffect(() => {
    SetActiveClassOnReload();
  }, []);

  const CSS_HANDLES = [
    'multisiteSegmentatitionResultsContainer',
  ]

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.multisiteSegmentatitionResultsContainer} flex ph7 pv2 items-center`}>

      <NavigationLink 
        src={src1}
        alt={alt1}
        title={title1}
        idValue={idValue1}
        >
      </NavigationLink>

      <NavigationLink 
        src={src2}
        alt={alt2}
        title={title2}
        idValue={idValue2}
        >
      </NavigationLink>

      <NavigationLink 
        src={src3}
        alt={alt3}
        title={title3}
        idValue={idValue3}
        >
      </NavigationLink>

    </div>
  )
}

Multisite.schema = {
  title: 'editor.multisite.title',
  description: 'editor.multisite.description'
}

export default Multisite
