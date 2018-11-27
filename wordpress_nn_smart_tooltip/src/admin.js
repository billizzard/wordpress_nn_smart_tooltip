import './images/comment.svg';
import './admin/css/admin.scss';
import './admin/tinymceCss/tinymce.scss';
import './admin/js/admin.js';
import MainEditor from './admin/js/MainEditor.js';
import TooltipPopup from './admin/js/TooltipPopup.js';
import PopupEditor from './admin/js/PopupEditor.js';

let popupEditor = new PopupEditor();
let tooltipPopup = new TooltipPopup(popupEditor);

let mainEditor = new MainEditor(tooltipPopup);
tooltipPopup.setMainEditor(mainEditor);
