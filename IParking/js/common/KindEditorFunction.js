/**
 * Created by luoyiming on 2016/9/9.
 */
define([], function () {
    return {
        myEditorFunction: function () {
            var editor1 = KindEditor.create('textarea[name="article.content1"]', {
                width: '100%',
                cssPath: 'js/libs/kindeditor-master/plugins/code/prettify.css',
                uploadJson: 'kindeditor-master/jsp/upload_json.jsp',
                fileManagerJson: 'kindeditor-master/jsp/file_manager_json.jsp',
                allowFileManager: true,
                afterCreate: function () {
                    var self = this;
                    KindEditor.ctrl(document, 13, function () {
                        self.sync();
                        document.forms['example'].submit();
                    });
                    KindEditor.ctrl(self.edit.doc, 13, function () {
                        self.sync();
                        document.forms['example'].submit();
                    });
                }
            });
        }
    }

});
//prettyPrint();
