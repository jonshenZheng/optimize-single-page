/**
 * Created by luoyiming on 2016/9/5.
 */
define([], function () {

    return {
        dialogConteol: function () {
                 $(".pull-black-btn").click(function () {
                    BootstrapDialog.show({
                        title: '拉黑',
                        message: '是否取消拉黑用户15915638958？',
                        buttons: [{
                            label: '确定',
                            action: function (dialog) {
                                dialog.setMessage('确定函数');
                            }
                        }, {
                            label: '取消',
                            action: function (dialog) {
                                dialog.setMessage('取消函数');
                            }
                        }]
                });

            });
        }

    }
});