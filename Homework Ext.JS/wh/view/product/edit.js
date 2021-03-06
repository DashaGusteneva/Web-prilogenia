Ext.define('wh.view.product.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.productedit',

    requires: ['Ext.form.Panel'],

    title : 'Редактирование Товара',
    layout: 'fit',
    autoShow: true,
    width: 280,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',

                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Название'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'price',
                        fieldLabel: 'Цена'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'amount',
                        fieldLabel: 'Количество'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'cost',
                        fieldLabel: 'Стоимость'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },
            {
                text: 'Отмена',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
