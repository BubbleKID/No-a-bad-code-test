import './Card.sass';
import React from 'react';
import { ReactComponent as ArrowDownBtn } from '../../images/svg/arrow-down.svg';
import { ReactComponent as ArrowRightBtn } from '../../images/svg/arrow-right.svg';
import { ReactComponent as DocumentIcon } from '../../images/svg/document.svg';

interface Props {
    title?: string,
    featured?: string,
    backroundColor?: string,
    height: number,
    width: number,
    flexGrow?: string,
    link?: string
    description?: string,
    documentSize?: string
}

export default function Card(props: Props) {
    let width: number = props.width;
    props.featured === 'true' ? width = width * 2 + 82 : width;
        
    return (
      <div className={`card ${props.featured === 'true' ? 'featured' : ''}`} style={{width: width, height: props.height}} >
        <p className="card-title"><a>{props.title}</a></p>
        { (props.description && props.featured) && <p className="description">{props.description}</p> }
        { props.documentSize ? <ArrowDownBtn className="arrow"/> : <ArrowRightBtn className="arrow"/> }
        { props.documentSize && 
            <div className="document-btn">
              <DocumentIcon className="document-icon"/>
              <span>PDF({props.documentSize})</span>
            </div> 
        }
      </div>
    );
}