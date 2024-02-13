import React from 'react';
import './contentRoller.scss';
import Arrow from '../../assets/upArrow.svg'

function ContentRoller(props) {
    const ContentRollerTitle = props.title;
    const ContentRollerContent = props.content;

    return (
        <details className='contentRoller' key={ContentRollerTitle}>
            <summary className='contentRoller__summary' key={"summary" + ContentRollerTitle}>{ContentRollerTitle} <img className='collapseIcon' src={Arrow} alt='summary arrow'/> </summary>
            {Array.isArray(ContentRollerContent) ? (
                <p className='contentRoller__text'>
                    {ContentRollerContent.map((item, index) => (
                        <React.Fragment key={`summaryP${index}`}>
                            {item}
                            {index < ContentRollerContent.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            ) : (
                <p className='contentRoller__text' key={`summaryP`}>{ContentRollerContent}</p>
            )}
        </details>
    );
}

export default ContentRoller;