
namespace ESignature.Admin {
    export interface CompanyGroupRow {
        CompanyGroupId?: number;
        GroupName?: string;
        CreatedDeteTime?: string;
        MarkDeleted?: boolean;
    }

    export namespace CompanyGroupRow {
        export const idProperty = 'CompanyGroupId';
        export const nameProperty = 'GroupName';
        export const localTextPrefix = 'Admin.CompanyGroup';

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