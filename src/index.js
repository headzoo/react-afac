'use strict';

import React from 'react';

export default class Icon extends React.Component {
    
    render() {
        let {
            name,
            size,
            rotate,
            flip,
            pull,
            className,
            linkClassName,
            href,
            spin,
            pulse,
            list,
            inverse,
            border,
            fixedWidth,
            ...other,
            } = this.props;
        
        let classes = [
            `fa fa-${name}`
        ];
        if (className) {
            classes.push(className);
        }
        if (size) {
            classes.push(`fa-${size}`);
        }
        if (rotate) {
            classes.push(`fa-rotate-${rotate}`);
        }
        if (flip) {
            classes.push(`fa-flip-${flip}`);
        }
        if (pull) {
            classes.push(`fa-pull-${pull}`);
        }
        if (inverse) {
            classes.push('fa-inverse');
        }
        if (spin) {
            classes.push('fa-spin');
        }
        if (pulse) {
            classes.push('fa-pulse');
        }
        if (list) {
            classes.push('fa-li');
        }
        if (border) {
            classes.push('fa-border');
        }
        if (fixedWidth) {
            classes.push('fa-fw');
        }
        
        var icon = (
            <span className={classes.join(' ')} {...other}>{this.props.children}</span>
        );
        if (href) {
            return (
                <a className={linkClassName || null} href={href}>
                    {icon}
                </a>
            );
        } else {
            return icon;
        }
    }
}

Icon.propTypes = {
    name:           React.PropTypes.string.isRequired,
    size:           React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    flip:           React.PropTypes.oneOf(['horizontal', 'vertical']),
    pull:           React.PropTypes.oneOf(['left', 'right']),
    rotate:         React.PropTypes.oneOf([90, 180, 270, '90', '180', '270']),
    className:      React.PropTypes.string,
    linkClassName:  React.PropTypes.string,
    href:           React.PropTypes.string,
    spin:           React.PropTypes.bool,
    pulse:          React.PropTypes.bool,
    list:           React.PropTypes.bool,
    inverse:        React.PropTypes.bool,
    border:         React.PropTypes.bool,
    fixedWidth:     React.PropTypes.bool
};
