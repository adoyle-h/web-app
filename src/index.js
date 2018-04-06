import {AppCore} from 'miesian';
import ConfigMod from 'mies-mod-web-config';
import ReactMod from 'mies-mod-react';
import ReduxMod from 'mies-mod-redux';
import HTMLMod from 'mies-mod-html';
import DvaMod from 'mies-mod-dva';
import EventEmitterMod from 'mies-mod-web-event-emitter';
import LoggerMod from 'mies-mod-web-logger';
import AssertMod from 'mies-mod-web-assert';
import WebAppMod from 'mies-mod-web-app';
import ServiceMod from 'mies-mod-web-service';

// @load('logger', LoggerMod)
class WebApp extends AppCore {
    static get platform() {return 'web'};

    setup(props) {
        const app = this;
        const {mods: modsProps} = props;

        app.mods.eventEmitter('singleton', {});
        app.delegate('on', 'eventEmitter');
        app.delegate('once', 'eventEmitter');
        app.delegate('emit', 'eventEmitter');

        app.mods.logger('singleton', modsProps.logger);
        app.delegate('log', 'logger');

        app.mods.config('singleton', modsProps.config);
        app.delegate('getConfig', 'config', {
            modMethod: 'get',
        });
        app.delegate('setConfig', 'config', {
            modMethod: 'set'
        });

        app.mods.webApp('singleton', modsProps.webApp);
        app.delegate('injectToGlobal', 'webApp');

        app.mods.html('singleton', modsProps.html);
        app.delegate('appendScript', 'html');
        app.delegate('appendStyle', 'html');

        // app.mods.react('singleton', modsProps.redux);
        // app.delegate('dispatch', 'redux');
        // app.delegate('action', 'redux');

        app.mods.dva('singleton', modsProps.dva);
        app.delegate('model', 'dva');
        app.delegate('router', 'dva');
        app.delegate('page', 'dva');
    }
}

WebApp.load('logger', LoggerMod);
WebApp.load('eventEmitter', EventEmitterMod);
WebApp.load('config', ConfigMod);
WebApp.load('redux', ReduxMod);
WebApp.load('react', ReactMod);
WebApp.load('html', HTMLMod);
WebApp.load('dva', DvaMod);
WebApp.load('webApp', WebAppMod);
WebApp.load('service', ServiceMod);

export default WebApp;
