// import './public/css/public/public.css';
// import './public/css/gsma/public_gsma.css';
// import './common/css/common.css';
// import ArticleWrapper from './public/js/version/ArticleWrapperUI.js';
// import OnlineEditForm from './public/js/version/OnlineEditFormUI.js';
// import OnlineEditPopup from './public/js/version/OnlineEditPopupUI.js';
// import CommentForm from './public/js/version/CommentFormUI.js';
// import CommentTooltip from './public/js/version/CommentTooltipUI.js';
// import OfflineForm from './public/js/version/OfflineFormUI.js';
// import OfflineEditPopup from './public/js/version/OfflineEditPopupUI.js';
// import AuthPopup from './public/js/version/AuthPopupUI.js';
// import Subheader from './public/js/version/SubheaderUI.js';
// import TinymceHighlightButton from './public/js/version/TinymceHighlightButtonUI.js';
// import EditMenu from './public/js/version/EditMenuUI.js';
// import PostPage from './public/js/version/PostPageUI.js';
// import TocSidebarUI from './public/js/version/TocSidebarUI.js';
// import TableOfContents from './public/js/gsma_wiki-table-of-contents.js';
//
// document.addEventListener('DOMContentLoaded', function () {
//     let articleWrapper = new ArticleWrapper();
//
//     let onlineEditForm = new OnlineEditForm(articleWrapper);
//     let onlineEditPopup = new OnlineEditPopup(onlineEditForm);
//     onlineEditForm.setPopup(onlineEditPopup);
//
//     let commentForm = new CommentForm(articleWrapper);
//     new CommentTooltip(articleWrapper, commentForm);
//
//     let offlineForm = new OfflineForm(articleWrapper);
//     let offlinePopup = new OfflineEditPopup();
//     offlineForm.setPopup(offlinePopup);
//
//     let authPopup = new AuthPopup();
//     let tocSidebar = new TocSidebarUI();
//     new Subheader(authPopup, tocSidebar);
//     new TinymceHighlightButton();
//
//     new PostPage(commentForm, onlineEditPopup, onlineEditForm);
//
//     new EditMenu(articleWrapper, onlineEditPopup, commentForm, offlinePopup);
// });
