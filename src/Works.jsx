import React, { useState } from 'react'
import { Reactwork } from './Reactwork';
import { Wordpresswork } from './Wordpresswork';
import { Bootstrap } from './Bootstrap';
import { Javawork } from './Javawork';
import { Htmlwork } from './Htmlwork';
import { Figmawork } from './Figmawork';
import { Allwork } from './Allwork';
// import { useHref } from 'react-router-dom';

export const Works = () => {
    const [figma,setFigmawork] = useState(true);
    const [htmlwork,setHtmlwork] = useState(false);
    const [javawork,setJavawork] = useState(false);
    const [bootstrap,setBootstrapwork] = useState(false);
    const [wordpresswork,setWordpresswork] = useState(false);
    const [reactwork,setReactwork] = useState(false);
    const [allwork,setAllwork] = useState(false);
  
   const allworkf = ()=>{
      setFigmawork(false);
      setHtmlwork(false);
      setJavawork(false);
      setBootstrapwork(false);
      setWordpresswork(false);
      setReactwork(false);
      setAllwork(true);
   }
   const figmaf = ()=>{
    setFigmawork(true);
    setHtmlwork(false);
    setJavawork(false);
    setBootstrapwork(false);
    setWordpresswork(false);
    setReactwork(false);
    setAllwork(false);
 }
   const htmlworkf = ()=>{
      setFigmawork(false);
      setHtmlwork(true);
      setJavawork(false);
      setBootstrapwork(false);
      setWordpresswork(false);
      setReactwork(false);
      setAllwork(false);
   }
   const javaworkf = ()=>{
      setFigmawork(false);
      setHtmlwork(false);
      setJavawork(true);
      setBootstrapwork(false);
      setWordpresswork(false);
      setReactwork(false);
      setAllwork(false);
   }
   const bootstrapf = ()=>{
    setFigmawork(false);
    setHtmlwork(false);
    setJavawork(false);
    setBootstrapwork(true);
    setWordpresswork(false);
    setReactwork(false);
    setAllwork(false);
 }
   const wordpressworkf = ()=>{
      setFigmawork(false);
      setHtmlwork(false);
      setJavawork(false);
      setBootstrapwork(false);
      setWordpresswork(true);
      setReactwork(false);
      setAllwork(false);
   }
   const reactworkf = ()=>{
      setFigmawork(false);
      setHtmlwork(false);
      setJavawork(false);
      setBootstrapwork(false);
      setWordpresswork(false);
      setReactwork(true);
      setAllwork(false);
   } 
  return (
    <div>
        <div class="work">
            {allwork?<button class="workbtnclick" onClick={allworkf}>All</button>:<button class="workbtn" onClick={allworkf}>All</button>}
            {figma?<button class="workbtnclick" onClick={figmaf}>FIGMA</button>:<button class="workbtn" onClick={figmaf}>FIGMA</button>}
            {htmlwork?<button class="workbtnclick" onClick={htmlworkf}>HTML/CSS</button>:<button class="workbtn" onClick={htmlworkf}>HTML/CSS</button>}
            {javawork?<button class="workbtnclick" onClick={javaworkf}>JAVA SCRIPT</button>:<button class="workbtn" onClick={javaworkf}>JAVA SCRIPT</button>}
            {bootstrap?<button class="workbtnclick" onClick={bootstrapf}>BOOTSTRAP</button>:<button class="workbtn" onClick={bootstrapf}>BOOTSTRAP</button>}
            {wordpresswork?<button class="workbtnclick" onClick={wordpressworkf}>WORDPRESS</button>:<button class="workbtn" onClick={wordpressworkf}>WORDPRESS</button>}
            {reactwork?<button class="workbtnclick" onClick={reactworkf}>REACT</button>:<button class="workbtn" onClick={reactworkf}>REACT</button>}
        </div>
        {allwork && (<Allwork></Allwork>)}
        {figma && (<Figmawork></Figmawork>)}
        {htmlwork && (<Htmlwork></Htmlwork>)}
        {javawork && (<Javawork></Javawork>)}
        {bootstrap && (<Bootstrap></Bootstrap>)}
        {wordpresswork && (<Wordpresswork></Wordpresswork>)}
        {reactwork && (<Reactwork></Reactwork>)}
        </div>
  )
}
