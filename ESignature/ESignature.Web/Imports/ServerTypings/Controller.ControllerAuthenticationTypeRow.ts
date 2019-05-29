
namespace ESignature.Controller {
    export interface ControllerAuthenticationTypeRow {
        ControllerAuthenticationTypeId?: number;
        ControllerAuthenticationTypeName?: string;
    }

    export namespace ControllerAuthenticationTypeRow {
        export const idProperty = 'ControllerAuthenticationTypeId';
        export const nameProperty = 'ControllerAuthenticationTypeName';
        export const localTextPrefix = 'Controller.ControllerAuthenticationType';

        export namespace Fields {
            export declare const ControllerAuthenticationTypeId;
            export declare const ControllerAuthenticationTypeName;
        }

        [
            'ControllerAuthenticationTypeId',
            'ControllerAuthenticationTypeName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}