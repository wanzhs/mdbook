/**
 * 表单验证
 */
export class FormVerification {
    public static defaultString = () => {
        return [{type: 'string', required: true, message: '该选项不能为空', trigger: 'blur'}];
    };
    public static defaultPassword = () => {
        return [
            {required: true, type: 'string', min: 6, message: '该选项长度不正确,至少6位', trigger: 'blur'}
        ]
    };
    public static defaultEmail = () => {
        return [
            {required: true, type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
        ]
    };
    public static defaultCheckBox = () => {
        return [
            {
                required: true, type: 'array', min: 1, trigger: 'change', message: '该选项必选'
            }
        ]
    };
    public static defaultDate = () => {
        return [
            {
                required: true, type: 'date', message: '日期不能为空', trigger: 'blur'
            }
        ]
    };
    public static defaultNumber = () => {
        return [{
            required: true, trigger: 'blur', validator: (rule: any, value: any, callback: Function) => {
                if (!Number.isInteger(value)) {
                    callback('请输入正确的整数格式');
                }
            }
        }]
    };
    /**
     * 自定义验证器
     * @param validFun 验证函数  传入值，然后进行本地验证
     */
    public static customValidator = (validFun: (value: any) => any) => {
        return [{
            trigger: 'blur', validator: (rule: any, value: any, callback: Function) => {
                const rs: any = validFun(value);
                if (rs) {
                    //验证失败
                    callback(rs);
                } else {
                    //验证成功
                    callback();
                }
            }
        }];
    };
}