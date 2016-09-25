'use strict';

import React     from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Icon from '../src/index';

describe('react-afac', () => {
    
    beforeEach(() => {
        jasmine.addMatchers({
            toHaveClass: () => {
                return {
                    compare: function (actual, expected) {
                        let result  = {};
                        let icon    = TestUtils.renderIntoDocument(actual);
                        let classes = ReactDOM.findDOMNode(icon).getAttribute('class');
                        
                        result.pass = (
                            classes.indexOf(expected) !== -1
                        );
                        if (!result.pass) {
                            result.message = `Expected icon to have class '${expected}'. Found '${classes}'.`;
                        }
                        
                        return result;
                    }
                }
            },
            
            toNotHaveClass: () => {
                return {
                    compare: function (actual, expected) {
                        let result  = {};
                        let icon    = TestUtils.renderIntoDocument(actual);
                        let classes = ReactDOM.findDOMNode(icon).getAttribute('class');
            
                        result.pass = (
                            classes.indexOf(expected) === -1
                        );
                        if (!result.pass) {
                            result.message = `Expected icon to NOT have class '${expected}'. Found '${classes}'.`;
                        }
            
                        return result;
                    }
                }
            }
        });
    });
    
    it('default', () => {
        expect(<Icon name="check" />).toHaveClass('fa-check');
    });
    
    it('className', () => {
        expect(<Icon name="check" className="testing" />).toHaveClass('testing');
    });
    
    it('spin', () => {
        expect(<Icon name="check" spin={true} />).toHaveClass('fa-spin');
        expect(<Icon name="check" spin={false} />).toNotHaveClass('fa-spin');
    });
    
    it('pulse', () => {
        expect(<Icon name="check" pulse={true} />).toHaveClass('fa-pulse');
        expect(<Icon name="check" pulse={false} />).toNotHaveClass('fa-pulse');
    });
    
    it('list', () => {
        expect(<Icon name="check" list={true} />).toHaveClass('fa-li');
        expect(<Icon name="check" list={false} />).toNotHaveClass('fa-li');
    });
    
    it('inverse', () => {
        expect(<Icon name="check" inverse={true} />).toHaveClass('fa-inverse');
        expect(<Icon name="check" inverse={false} />).toNotHaveClass('fa-inverse');
    });
    
    it('border', () => {
        expect(<Icon name="check" border={true} />).toHaveClass('fa-border');
        expect(<Icon name="check" border={false} />).toNotHaveClass('fa-border');
    });
    
    it('fixedWidth', () => {
        expect(<Icon name="check" fixedWidth={true} />).toHaveClass('fa-fw');
        expect(<Icon name="check" fixedWidth={false} />).toNotHaveClass('fa-fw');
    });
    
    it('size', () => {
        let sizes = ['lg', '2x', '3x', '4x', '5x'];
        for(let i = 0; i < sizes.length; i++) {
            expect(<Icon name="check" size={sizes[i]} />).toHaveClass(`fa-${sizes[i]}`);
        }
    });
    
    it('flip', () => {
        let dirs = ['horizontal', 'vertical'];
        for(let i = 0; i < dirs.length; i++) {
            expect(<Icon name="check" flip={dirs[i]} />).toHaveClass(`fa-flip-${dirs[i]}`);
        }
    });
    
    it('pull', () => {
        let dirs = ['left', 'right'];
        for(let i = 0; i < dirs.length; i++) {
            expect(<Icon name="check" pull={dirs[i]} />).toHaveClass(`fa-pull-${dirs[i]}`);
        }
    });
    
    it('rotate', () => {
        let degrees = [90, 180, 270];
        for(let i = 0; i < degrees.length; i++) {
            expect(<Icon name="check" rotate={degrees[i]} />).toHaveClass(`fa-rotate-${degrees[i]}`);
        }
    });
    
    it('href', () => {
        let icon = TestUtils.renderIntoDocument(
            <Icon name="check" href="https://headzoo.io" linkClassName="testing" />
        );
        let node = ReactDOM.findDOMNode(icon);
        
        expect(node.tagName).toEqual('A');
        expect(node.getAttribute('href')).toEqual('https://headzoo.io');
        expect(node.getAttribute('class')).toEqual('testing');
    });
    
    it('other', () => {
        let icon = TestUtils.renderIntoDocument(
            <Icon name="check" style={{width: '12px'}} aria-hidden={true} />
        );
        let node = ReactDOM.findDOMNode(icon);
        
        expect(node.getAttribute('style')).toEqual('width: 12px;');
        expect(node.getAttribute('aria-hidden')).toEqual('true');
    });
    
    it('children', () => {
        let icon = TestUtils.renderIntoDocument(
            <Icon name="check">Testing</Icon>
        );
        let node = ReactDOM.findDOMNode(icon);
        
        expect(node.innerHTML).toEqual('Testing');
    });
});

