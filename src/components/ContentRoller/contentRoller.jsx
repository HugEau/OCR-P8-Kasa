import React from 'react';
import '../../styles/contentRoller.scss';
import Arrow from '../../assets/upArrow.svg'

function ContentRoller(props) {
    let contentRollerTitle = props.title;
    let contentRollerContent = props.content;

    return (
        <details>
            <summary>{contentRollerTitle} <img className='collapseIcon' src={Arrow} alt='summary arrow'/> </summary>
            {Array.isArray(contentRollerContent) ? (
                <p>
                    {contentRollerContent.map((item, index) => (
                        <React.Fragment key={index}>
                            {item}
                            {index < contentRollerContent.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            ) : (
                <p>{contentRollerContent}</p>
            )}
        </details>
    );
}

export default ContentRoller;