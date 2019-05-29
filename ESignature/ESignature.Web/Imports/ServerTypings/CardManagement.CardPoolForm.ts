
namespace ESignature.CardManagement {
    export class CardPoolForm extends Serenity.PrefixedContext {
        static formKey = 'CardManagement.CardPool';
    }

    export interface CardPoolForm {
        CardNo: Serenity.StringEditor;
        CardTechId: Serenity.IntegerEditor;
        CardCsnNo: Serenity.StringEditor;
        CardUseType: Serenity.IntegerEditor;
        CardType: Serenity.IntegerEditor;
        CardStatus: Serenity.IntegerEditor;
        CardUsageStatus: Serenity.IntegerEditor;
        CurrentlyAssignedTo: Serenity.StringEditor;
        CardExpiryDate: Serenity.DateEditor;
        CardAuthType: Serenity.StringEditor;
        NoOfDaysAllowedFromToday: Serenity.IntegerEditor;
        Remark: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        LastModified: Serenity.DateEditor;
        CreatedDateTime: Serenity.DateEditor;
        AddedBy: Serenity.IntegerEditor;
        CompanyLocationId: Serenity.IntegerEditor;
    }

    [,
        ['CardNo', () => Serenity.StringEditor],
        ['CardTechId', () => Serenity.IntegerEditor],
        ['CardCsnNo', () => Serenity.StringEditor],
        ['CardUseType', () => Serenity.IntegerEditor],
        ['CardType', () => Serenity.IntegerEditor],
        ['CardStatus', () => Serenity.IntegerEditor],
        ['CardUsageStatus', () => Serenity.IntegerEditor],
        ['CurrentlyAssignedTo', () => Serenity.StringEditor],
        ['CardExpiryDate', () => Serenity.DateEditor],
        ['CardAuthType', () => Serenity.StringEditor],
        ['NoOfDaysAllowedFromToday', () => Serenity.IntegerEditor],
        ['Remark', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['LastModified', () => Serenity.DateEditor],
        ['CreatedDateTime', () => Serenity.DateEditor],
        ['AddedBy', () => Serenity.IntegerEditor],
        ['CompanyLocationId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(CardPoolForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}