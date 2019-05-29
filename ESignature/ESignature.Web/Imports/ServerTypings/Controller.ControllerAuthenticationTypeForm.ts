
namespace ESignature.Controller {
    export class ControllerAuthenticationTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Controller.ControllerAuthenticationType';
    }

    export interface ControllerAuthenticationTypeForm {
        ControllerAuthenticationTypeName: Serenity.StringEditor;
    }

    [,
        ['ControllerAuthenticationTypeName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ControllerAuthenticationTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}