
namespace ESignature.Default {
    export class LocationMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.LocationMaster';
    }

    export interface LocationMasterForm {
        LocationName: Serenity.StringEditor;
        LocationCode: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        CompanyGroupId: Serenity.IntegerEditor;
    }

    [,
        ['LocationName', () => Serenity.StringEditor],
        ['LocationCode', () => Serenity.StringEditor],
        ['CreatedDateTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor],
        ['CompanyGroupId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(LocationMasterForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}