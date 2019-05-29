
namespace ESignature.Master {
    export interface EmploymentTypesRow {
        EmploymentTypeId?: number;
        EmploymentTypeName?: string;
    }

    export namespace EmploymentTypesRow {
        export const idProperty = 'EmploymentTypeId';
        export const nameProperty = 'EmploymentTypeName';
        export const localTextPrefix = 'Master.EmploymentTypes';

        export namespace Fields {
            export declare const EmploymentTypeId;
            export declare const EmploymentTypeName;
        }

        [
            'EmploymentTypeId',
            'EmploymentTypeName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}