export default class TinymceHelper {
    static getActiveEditor() {
        return tinymce.activeEditor;
    }

    static getEditorByName(name) {
        let desiredEditor = null;
        tinymce.editors.forEach(editor => {
            if (editor.id === name) {
                desiredEditor = editor;
            }
        });

        return desiredEditor;
    }
}
