
namespace ESignature.Master {
    export class BloodGroupsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.BloodGroups';
    }

    export interface BloodGroupsForm {
        BloodGroup: Serenity.StringEditor;
    }

    [,
        ['BloodGroup', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(BloodGroupsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}