
namespace ESignature.Master {
    export class MaretialStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MaretialStatus';
    }

    export interface MaretialStatusForm {
        MaretialStatusName: Serenity.StringEditor;
    }

    [,
        ['MaretialStatusName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MaretialStatusForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}