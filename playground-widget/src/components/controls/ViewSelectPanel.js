import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
import cn from 'classnames';
import './ViewSelectPanel.scss';
import viewSourceBtnIcon from './btn-source.svg';
import viewComposerBtnIcon from './btn-composer.svg';
import viewBinaryBtnIcon from './btn-binary.svg';

export const VIEWS = {
    SOURCE: 'SOURCE',
    COMPOSER: 'COMPOSER',
    BINARY: 'BINARY'
}

class ViewSelectPanel extends React.Component {
    render() {
        const { selectedView, onViewSwitch } = this.props;
        return (
            <div
                className="view-select-panel"
            >
                <div 
                    className={cn('widget-btn', 'source-view-btn', { 'active': selectedView === VIEWS.SOURCE })}
                    onClick={() => {
                        if (selectedView !== VIEWS.SOURCE) {
                            onViewSwitch(VIEWS.SOURCE);
                        }
                    }}
                >
                    <img src={viewSourceBtnIcon} />
                </div>
                <div 
                    className={cn('widget-btn', 'composer-view-btn', { 'active': selectedView === VIEWS.COMPOSER })}
                    onClick={() => {
                        if (selectedView !== VIEWS.COMPOSER) {
                            onViewSwitch(VIEWS.COMPOSER);
                        }
                    }}
                >
                    <img src={viewComposerBtnIcon} />
                </div>
                <div  
                    className={cn('widget-btn', 'binary-view-btn', { 'active': selectedView === VIEWS.BINARY })}
                    onClick={() => {
                        if (selectedView !== VIEWS.BINARY) {
                            onViewSwitch(VIEWS.BINARY);
                        }
                    }}
                >
                    <img src={viewBinaryBtnIcon} />
                </div>
            </div>
        );
    }
}

ViewSelectPanel.propTypes = {
    selectedView: PropTypes.oneOf([VIEWS.SOURCE, VIEWS.COMPOSER, VIEWS.BINARY]),
    onViewSwitch: PropTypes.func,
};

ViewSelectPanel.defaultProps = {
    selectedView: VIEWS.SOURCE,
    onViewSwitch: () => {
    },
};

export default ViewSelectPanel;