import xButton from '../packages/button';
import xMessage from '../packages/message';
import xToast from '../packages/toast/toast';
import xToastGroup from '../packages/toast/toastGroup';
import xDialogIndex from '../packages/dialog';
import xDialog from '../packages/dialoggroup/dialog.vue';
import xDialogGroup from '../packages/dialoggroup/dialoggroup.vue';
import xRow from '../packages/layout/row.vue';
import xCol from '../packages/layout/col.vue';
import xBadge from '../packages/badge';
import xRate from '../packages/rate';
import xCounter from '../packages/counter';
import xRadio from '../packages/radio/radio';
import xRadioGroup from '../packages/radio/radio-group';
import xLoading from '../packages/loading/loading';
import xProgress from '../packages/progress';
import xMenu from '../packages/menu/menu';
import xSubMenu from '../packages/menu/submenu';
import xMenuItem from '../packages/menu/menuitem';
import xMenuTitle from '../packages/menu/menutitle';
import xCollapse from '../packages/collapse/collapse';
import xCollapseItem from '../packages/collapse/collapse-item';
import xTabs from '../packages/tabs/tabs';
import xTabPane from '../packages/tabs/tabpane';
import xLazyImg from '../packages/lazyimg';

import './citnfont/citnfont.css';
import './css/reset.css';
import './css/animate.css';
import './css/media.css';

const xvue = {
    xButton,
    xDialog,
    xDialogIndex,
    xDialogGroup,
    xToast,
    xMessage,
    xToastGroup,
    xRow,
    xCol,
    xBadge,
    xRate,
    xCounter,
    xRadio,
    xRadioGroup,
    xLoading,
    xProgress,
    xMenu,
    xSubMenu,
    xMenuItem,
    xMenuTitle,
    xCollapse,
    xCollapseItem,
    xTabs,
    xTabPane,
    xLazyImg
};

const install = function (Vue, opts = {}) {
    Object.keys(xvue).forEach((key) => {
        Vue.component(key, xvue[key]);
    });
    
    Vue.prototype.$Message = xMessage;
    Vue.prototype.$Dialog = xDialogIndex;
    Vue.prototype.$Xvue = xLoading;
    
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

const API = {
    install, 
    ...xvue
};

// module.exports.default = module.exports = API;   // eslint-disable-line no-undef
export default API;