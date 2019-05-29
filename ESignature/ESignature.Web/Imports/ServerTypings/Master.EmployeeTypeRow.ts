
namespace ESignature.Master {
    export interface EmployeeTypeRow {
        EmployeeTypeId?: number;
        EmployeeTypeName?: string;
    }

    export namespace EmployeeTypeRow {
        export const idProperty = 'EmployeeTypeId';
        export const nameProperty = 'EmployeeTypeName';
        export const localTextPrefix = 'Master.EmployeeType';

        export namespace Fields {
            export declare const EmployeeTypeId;
            export declare const EmployeeTypeName;
        }

        [
            'EmployeeTypeId',
            'EmployeeTypeName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}