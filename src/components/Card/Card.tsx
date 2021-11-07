import './Card.sass';
import React from 'react';
import { ReactComponent as ArrowDownBtn } from '../../images/svg/arrow-down.svg';
import { ReactComponent as ArrowRightBtn } from '../../images/svg/arrow-right.svg';
import { ReactComponent as DocumentIcon } from '../../images/svg/document.svg';

interface Props {
    title: string,
    featured?: string,
    height: number,
    width: number,
    link: string
    description?: string,
    documentSize?: string
}

export default function Card(props: Props) {
    let width: number = props.width;
    props.featured === 'true' ? width = width * 2 + 82 : width;
        
    return (
      <div className={`card ${props.featured === 'true' ? 'card--featured' : ''}`} style={{width: width, height: props.height}} >
        <p className="card__title"><a>{props.title}</a></p>
        { props.description && props.featured && <p className="card__description">{props.description}</p> }
        { props.documentSize ? 
          <div className="card__arrow-container"><ArrowDownBtn className="card__arrow" onClick={() => window.open(props.link, "_blank")}/></div> : 
          <div className="card__arrow-container"><ArrowRightBtn className="card__arrow" onClick={() => window.open(props.link, "_blank")}/></div>
        }
        { 
          props.documentSize && 
            <div className="card__document-btn">
              <DocumentIcon className="card__document-icon"/>
              <span>PDF({props.documentSize})</span>
            </div> 
        }
      </div>
    );
}