
namespace ESignature.Default {
    export interface CompanyGroupRow {
        CompanyGroupId?: number;
        GroupName?: string;
        CreatedDeteTime?: string;
        MarkDeleted?: boolean;
    }

    export namespace CompanyGroupRow {
        export const idProperty = 'CompanyGroupId';
        export const nameProperty = 'GroupName';
        export const localTextPrefix = 'Default.CompanyGroup';

        export namespace Fields {
            export declare const CompanyGroupId;
            export declare const GroupName;
            export declare const CreatedDeteTime;
            export declare const MarkDeleted;
        }

        [
            'CompanyGroupId',
            'GroupName',
            'CreatedDeteTime',
            'MarkDeleted'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}