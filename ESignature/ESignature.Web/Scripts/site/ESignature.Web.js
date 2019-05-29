var ESignature;
(function (ESignature) {
    var Access;
    (function (Access) {
        var EmployeeFunctionCardsForm = /** @class */ (function (_super) {
            __extends(EmployeeFunctionCardsForm, _super);
            function EmployeeFunctionCardsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeeFunctionCardsForm.formKey = 'Access.EmployeeFunctionCards';
            return EmployeeFunctionCardsForm;
        }(Serenity.PrefixedContext));
        Access.EmployeeFunctionCardsForm = EmployeeFunctionCardsForm;
        [,
            ['CardType', function () { return Serenity.IntegerEditor; }],
            ['CardNo', function () { return Serenity.StringEditor; }],
            ['CsnNo', function () { return Serenity.StringEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }],
            ['FacilityCode', function () { return Serenity.StringEditor; }],
            ['TempFuncId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmployeeFunctionCardsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Access = ESignature.Access || (ESignature.Access = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Access;
    (function (Access) {
        var EmployeeFunctionCardsRow;
        (function (EmployeeFunctionCardsRow) {
            EmployeeFunctionCardsRow.idProperty = 'EmployeeFunctionCardId';
            EmployeeFunctionCardsRow.nameProperty = 'CardNo';
            EmployeeFunctionCardsRow.localTextPrefix = 'Access.EmployeeFunctionCards';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeFunctionCardsRow.Fields || (EmployeeFunctionCardsRow.Fields = {}));
            [
                'EmployeeFunctionCardId',
                'CardType',
                'CardNo',
                'CsnNo',
                'CreatedDateTime',
                'MarkDeleted',
                'FacilityCode',
                'TempFuncId',
                'CardTypeCardTypeName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeFunctionCardsRow = Access.EmployeeFunctionCardsRow || (Access.EmployeeFunctionCardsRow = {}));
    })(Access = ESignature.Access || (ESignature.Access = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Access;
    (function (Access) {
        var EmployeeFunctionCardsService;
        (function (EmployeeFunctionCardsService) {
            EmployeeFunctionCardsService.baseUrl = 'Access/EmployeeFunctionCards';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeFunctionCardsService.Methods || (EmployeeFunctionCardsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeFunctionCardsService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeFunctionCardsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmployeeFunctionCardsService.baseUrl + '/' + x;
            });
        })(EmployeeFunctionCardsService = Access.EmployeeFunctionCardsService || (Access.EmployeeFunctionCardsService = {}));
    })(Access = ESignature.Access || (ESignature.Access = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var AccessEmployee;
    (function (AccessEmployee) {
        var EmployeeFunctionCardsForm = /** @class */ (function (_super) {
            __extends(EmployeeFunctionCardsForm, _super);
            function EmployeeFunctionCardsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeeFunctionCardsForm.formKey = 'AccessEmployee.EmployeeFunctionCards';
            return EmployeeFunctionCardsForm;
        }(Serenity.PrefixedContext));
        AccessEmployee.EmployeeFunctionCardsForm = EmployeeFunctionCardsForm;
        [,
            ['CardType', function () { return Serenity.IntegerEditor; }],
            ['EmployeeMasterId', function () { return Serenity.IntegerEditor; }],
            ['CardNo', function () { return Serenity.StringEditor; }],
            ['CsnNo', function () { return Serenity.StringEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }],
            ['FacilityCode', function () { return Serenity.StringEditor; }],
            ['TempFuncId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmployeeFunctionCardsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(AccessEmployee = ESignature.AccessEmployee || (ESignature.AccessEmployee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var AccessEmployee;
    (function (AccessEmployee) {
        var EmployeeFunctionCardsRow;
        (function (EmployeeFunctionCardsRow) {
            EmployeeFunctionCardsRow.idProperty = 'EmployeeFunctionCardId';
            EmployeeFunctionCardsRow.nameProperty = 'CardNo';
            EmployeeFunctionCardsRow.localTextPrefix = 'AccessEmployee.EmployeeFunctionCards';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeFunctionCardsRow.Fields || (EmployeeFunctionCardsRow.Fields = {}));
            [
                'EmployeeFunctionCardId',
                'CardType',
                'EmployeeMasterId',
                'CardNo',
                'CsnNo',
                'CreatedDateTime',
                'MarkDeleted',
                'FacilityCode',
                'TempFuncId',
                'CardTypeCardTypeName',
                'EmployeeMasterEmployeeCode',
                'EmployeeMasterSalutationId',
                'EmployeeMasterDepartmentId',
                'EmployeeMasterCompanyLocationId',
                'EmployeeMasterDesignationId',
                'EmployeeMasterGenderId',
                'EmployeeMasterDivisionId',
                'EmployeeMasterSubDepartmentId',
                'EmployeeMasterMaretialStatusId',
                'EmployeeMasterEmployeeTypeId',
                'EmployeeMasterEmploymentTypeId',
                'EmployeeMasterBloodGroupId',
                'EmployeeMasterCompanyMasterId',
                'EmployeeMasterFirstName',
                'EmployeeMasterMiddleName',
                'EmployeeMasterLastName',
                'EmployeeMasterMobileNumber',
                'EmployeeMasterCity',
                'EmployeeMasterState',
                'EmployeeMasterCountry',
                'EmployeeMasterAddress',
                'EmployeeMasterDateofBirth',
                'EmployeeMasterDateOfJoining',
                'EmployeeMasterResignDate',
                'EmployeeMasterEmailAddress',
                'EmployeeMasterEmail',
                'EmployeeMasterManagerId',
                'EmployeeMasterAadharCardNo',
                'EmployeeMasterIsExpiryAllowed',
                'EmployeeMasterCardExpiry',
                'EmployeeMasterPhotoPath',
                'EmployeeMasterMarkDeleted',
                'EmployeeMasterExtra1',
                'EmployeeMasterExtra2',
                'EmployeeMasterExtra3',
                'EmployeeMasterExtra4',
                'EmployeeMasterExtra5',
                'EmployeeMasterIsEmployeeLogin'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeFunctionCardsRow = AccessEmployee.EmployeeFunctionCardsRow || (AccessEmployee.EmployeeFunctionCardsRow = {}));
    })(AccessEmployee = ESignature.AccessEmployee || (ESignature.AccessEmployee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var AccessEmployee;
    (function (AccessEmployee) {
        var EmployeeFunctionCardsService;
        (function (EmployeeFunctionCardsService) {
            EmployeeFunctionCardsService.baseUrl = 'AccessEmployee/EmployeeFunctionCards';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeFunctionCardsService.Methods || (EmployeeFunctionCardsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeFunctionCardsService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeFunctionCardsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmployeeFunctionCardsService.baseUrl + '/' + x;
            });
        })(EmployeeFunctionCardsService = AccessEmployee.EmployeeFunctionCardsService || (AccessEmployee.EmployeeFunctionCardsService = {}));
    })(AccessEmployee = ESignature.AccessEmployee || (ESignature.AccessEmployee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyGroupForm = /** @class */ (function (_super) {
            __extends(CompanyGroupForm, _super);
            function CompanyGroupForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CompanyGroupForm.formKey = 'Admin.CompanyGroup';
            return CompanyGroupForm;
        }(Serenity.PrefixedContext));
        Admin.CompanyGroupForm = CompanyGroupForm;
        [,
            ['GroupName', function () { return Serenity.StringEditor; }],
            ['CreatedDeteTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CompanyGroupForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyGroupRow;
        (function (CompanyGroupRow) {
            CompanyGroupRow.idProperty = 'CompanyGroupId';
            CompanyGroupRow.nameProperty = 'GroupName';
            CompanyGroupRow.localTextPrefix = 'Admin.CompanyGroup';
            var Fields;
            (function (Fields) {
            })(Fields = CompanyGroupRow.Fields || (CompanyGroupRow.Fields = {}));
            [
                'CompanyGroupId',
                'GroupName',
                'CreatedDeteTime',
                'MarkDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CompanyGroupRow = Admin.CompanyGroupRow || (Admin.CompanyGroupRow = {}));
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyGroupService;
        (function (CompanyGroupService) {
            CompanyGroupService.baseUrl = 'Admin/CompanyGroup';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyGroupService.Methods || (CompanyGroupService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CompanyGroupService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompanyGroupService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CompanyGroupService.baseUrl + '/' + x;
            });
        })(CompanyGroupService = Admin.CompanyGroupService || (Admin.CompanyGroupService = {}));
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyMasterForm = /** @class */ (function (_super) {
            __extends(CompanyMasterForm, _super);
            function CompanyMasterForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CompanyMasterForm.formKey = 'Admin.CompanyMaster';
            return CompanyMasterForm;
        }(Serenity.PrefixedContext));
        Admin.CompanyMasterForm = CompanyMasterForm;
        [,
            ['CompanyName', function () { return Serenity.StringEditor; }],
            ['CompanyGroupId', function () { return Serenity.IntegerEditor; }],
            ['CompanyDetails', function () { return Serenity.StringEditor; }],
            ['EmailId', function () { return Serenity.StringEditor; }],
            ['OffNo', function () { return Serenity.StringEditor; }],
            ['FinancialYearMasterId', function () { return Serenity.IntegerEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }],
            ['SmtpServerName', function () { return Serenity.StringEditor; }],
            ['SmtpPortNo', function () { return Serenity.StringEditor; }],
            ['SmtpUserName', function () { return Serenity.StringEditor; }],
            ['SmtpPassword', function () { return Serenity.StringEditor; }],
            ['IsAuditTrail', function () { return Serenity.BooleanEditor; }],
            ['Isenablessl', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CompanyMasterForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyMasterRow;
        (function (CompanyMasterRow) {
            CompanyMasterRow.idProperty = 'CompanyMasterId';
            CompanyMasterRow.nameProperty = 'CompanyName';
            CompanyMasterRow.localTextPrefix = 'Admin.CompanyMaster';
            var Fields;
            (function (Fields) {
            })(Fields = CompanyMasterRow.Fields || (CompanyMasterRow.Fields = {}));
            [
                'CompanyMasterId',
                'CompanyName',
                'CompanyGroupId',
                'CompanyDetails',
                'EmailId',
                'OffNo',
                'FinancialYearMasterId',
                'CreatedDateTime',
                'MarkDeleted',
                'SmtpServerName',
                'SmtpPortNo',
                'SmtpUserName',
                'SmtpPassword',
                'IsAuditTrail',
                'Isenablessl',
                'CompanyGroupGroupName',
                'CompanyGroupCreatedDeteTime',
                'CompanyGroupMarkDeleted',
                'FinancialYearMasterStartDate',
                'FinancialYearMasterEndDate',
                'FinancialYearMasterCreatedDeteTime',
                'FinancialYearMasterMarkDeleted',
                'FinancialYearMasterCompanyGroupId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CompanyMasterRow = Admin.CompanyMasterRow || (Admin.CompanyMasterRow = {}));
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyMasterService;
        (function (CompanyMasterService) {
            CompanyMasterService.baseUrl = 'Admin/CompanyMaster';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyMasterService.Methods || (CompanyMasterService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CompanyMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompanyMasterService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CompanyMasterService.baseUrl + '/' + x;
            });
        })(CompanyMasterService = Admin.CompanyMasterService || (Admin.CompanyMasterService = {}));
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var FinancialYearMasterForm = /** @class */ (function (_super) {
            __extends(FinancialYearMasterForm, _super);
            function FinancialYearMasterForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FinancialYearMasterForm.formKey = 'Admin.FinancialYearMaster';
            return FinancialYearMasterForm;
        }(Serenity.PrefixedContext));
        Admin.FinancialYearMasterForm = FinancialYearMasterForm;
        [,
            ['StartDate', function () { return Serenity.DateEditor; }],
            ['EndDate', function () { return Serenity.IntegerEditor; }],
            ['CreatedDeteTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }],
            ['CompanyGroupId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(FinancialYearMasterForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var FinancialYearMasterRow;
        (function (FinancialYearMasterRow) {
            FinancialYearMasterRow.idProperty = 'FinancialYearMasterId';
            FinancialYearMasterRow.localTextPrefix = 'Admin.FinancialYearMaster';
            var Fields;
            (function (Fields) {
            })(Fields = FinancialYearMasterRow.Fields || (FinancialYearMasterRow.Fields = {}));
            [
                'FinancialYearMasterId',
                'StartDate',
                'EndDate',
                'CreatedDeteTime',
                'MarkDeleted',
                'CompanyGroupId',
                'CompanyGroupGroupName',
                'CompanyGroupCreatedDeteTime',
                'CompanyGroupMarkDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(FinancialYearMasterRow = Admin.FinancialYearMasterRow || (Admin.FinancialYearMasterRow = {}));
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var FinancialYearMasterService;
        (function (FinancialYearMasterService) {
            FinancialYearMasterService.baseUrl = 'Admin/FinancialYearMaster';
            var Methods;
            (function (Methods) {
            })(Methods = FinancialYearMasterService.Methods || (FinancialYearMasterService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FinancialYearMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(FinancialYearMasterService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = FinancialYearMasterService.baseUrl + '/' + x;
            });
        })(FinancialYearMasterService = Admin.FinancialYearMasterService || (Admin.FinancialYearMasterService = {}));
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var CardPoolForm = /** @class */ (function (_super) {
            __extends(CardPoolForm, _super);
            function CardPoolForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CardPoolForm.formKey = 'CardManagement.CardPool';
            return CardPoolForm;
        }(Serenity.PrefixedContext));
        CardManagement.CardPoolForm = CardPoolForm;
        [,
            ['CardNo', function () { return Serenity.StringEditor; }],
            ['CardTechId', function () { return Serenity.IntegerEditor; }],
            ['CardCsnNo', function () { return Serenity.StringEditor; }],
            ['CardUseType', function () { return Serenity.IntegerEditor; }],
            ['CardType', function () { return Serenity.IntegerEditor; }],
            ['CardStatus', function () { return Serenity.IntegerEditor; }],
            ['CardUsageStatus', function () { return Serenity.IntegerEditor; }],
            ['CurrentlyAssignedTo', function () { return Serenity.StringEditor; }],
            ['CardExpiryDate', function () { return Serenity.DateEditor; }],
            ['CardAuthType', function () { return Serenity.StringEditor; }],
            ['NoOfDaysAllowedFromToday', function () { return Serenity.IntegerEditor; }],
            ['Remark', function () { return Serenity.StringEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['LastModified', function () { return Serenity.DateEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['AddedBy', function () { return Serenity.IntegerEditor; }],
            ['CompanyLocationId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CardPoolForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var CardPoolRow;
        (function (CardPoolRow) {
            CardPoolRow.idProperty = 'CardPoolId';
            CardPoolRow.nameProperty = 'CardNo';
            CardPoolRow.localTextPrefix = 'CardManagement.CardPool';
            var Fields;
            (function (Fields) {
            })(Fields = CardPoolRow.Fields || (CardPoolRow.Fields = {}));
            [
                'CardPoolId',
                'CardNo',
                'CardTechId',
                'CardCsnNo',
                'CardUseType',
                'CardType',
                'CardStatus',
                'CardUsageStatus',
                'CurrentlyAssignedTo',
                'CardExpiryDate',
                'CardAuthType',
                'NoOfDaysAllowedFromToday',
                'Remark',
                'Description',
                'LastModified',
                'CreatedDateTime',
                'AddedBy',
                'CompanyLocationId',
                'CardTechCardTechName',
                'CardUseTypeCardUseTypeName',
                'CardTypeCardTypeName',
                'CardStatus1',
                'CardUsageStatusActivity',
                'CompanyLocationCompanyMasterId',
                'CompanyLocationLocationMasterId',
                'CompanyLocationCreatedDateTime',
                'CompanyLocationMarkDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CardPoolRow = CardManagement.CardPoolRow || (CardManagement.CardPoolRow = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var CardPoolService;
        (function (CardPoolService) {
            CardPoolService.baseUrl = 'CardManagement/CardPool';
            var Methods;
            (function (Methods) {
            })(Methods = CardPoolService.Methods || (CardPoolService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CardPoolService[x] = function (r, s, o) {
                    return Q.serviceRequest(CardPoolService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CardPoolService.baseUrl + '/' + x;
            });
        })(CardPoolService = CardManagement.CardPoolService || (CardManagement.CardPoolService = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardActivityForm = /** @class */ (function (_super) {
            __extends(MasterCardActivityForm, _super);
            function MasterCardActivityForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MasterCardActivityForm.formKey = 'CardManagement.MasterCardActivity';
            return MasterCardActivityForm;
        }(Serenity.PrefixedContext));
        CardManagement.MasterCardActivityForm = MasterCardActivityForm;
        [,
            ['Activity', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(MasterCardActivityForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardActivityRow;
        (function (MasterCardActivityRow) {
            MasterCardActivityRow.idProperty = 'CardActivityiD';
            MasterCardActivityRow.nameProperty = 'Activity';
            MasterCardActivityRow.localTextPrefix = 'CardManagement.MasterCardActivity';
            var Fields;
            (function (Fields) {
            })(Fields = MasterCardActivityRow.Fields || (MasterCardActivityRow.Fields = {}));
            [
                'CardActivityiD',
                'Activity'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MasterCardActivityRow = CardManagement.MasterCardActivityRow || (CardManagement.MasterCardActivityRow = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardActivityService;
        (function (MasterCardActivityService) {
            MasterCardActivityService.baseUrl = 'CardManagement/MasterCardActivity';
            var Methods;
            (function (Methods) {
            })(Methods = MasterCardActivityService.Methods || (MasterCardActivityService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterCardActivityService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterCardActivityService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MasterCardActivityService.baseUrl + '/' + x;
            });
        })(MasterCardActivityService = CardManagement.MasterCardActivityService || (CardManagement.MasterCardActivityService = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardStatusForm = /** @class */ (function (_super) {
            __extends(MasterCardStatusForm, _super);
            function MasterCardStatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MasterCardStatusForm.formKey = 'CardManagement.MasterCardStatus';
            return MasterCardStatusForm;
        }(Serenity.PrefixedContext));
        CardManagement.MasterCardStatusForm = MasterCardStatusForm;
        [,
            ['CardStatus', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(MasterCardStatusForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardStatusRow;
        (function (MasterCardStatusRow) {
            MasterCardStatusRow.idProperty = 'CardStatusId';
            MasterCardStatusRow.nameProperty = 'CardStatus';
            MasterCardStatusRow.localTextPrefix = 'CardManagement.MasterCardStatus';
            var Fields;
            (function (Fields) {
            })(Fields = MasterCardStatusRow.Fields || (MasterCardStatusRow.Fields = {}));
            [
                'CardStatusId',
                'CardStatus'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MasterCardStatusRow = CardManagement.MasterCardStatusRow || (CardManagement.MasterCardStatusRow = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardStatusService;
        (function (MasterCardStatusService) {
            MasterCardStatusService.baseUrl = 'CardManagement/MasterCardStatus';
            var Methods;
            (function (Methods) {
            })(Methods = MasterCardStatusService.Methods || (MasterCardStatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterCardStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterCardStatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MasterCardStatusService.baseUrl + '/' + x;
            });
        })(MasterCardStatusService = CardManagement.MasterCardStatusService || (CardManagement.MasterCardStatusService = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTechnologyForm = /** @class */ (function (_super) {
            __extends(MasterCardTechnologyForm, _super);
            function MasterCardTechnologyForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MasterCardTechnologyForm.formKey = 'CardManagement.MasterCardTechnology';
            return MasterCardTechnologyForm;
        }(Serenity.PrefixedContext));
        CardManagement.MasterCardTechnologyForm = MasterCardTechnologyForm;
        [,
            ['CardTechName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(MasterCardTechnologyForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTechnologyRow;
        (function (MasterCardTechnologyRow) {
            MasterCardTechnologyRow.idProperty = 'CardTechId';
            MasterCardTechnologyRow.nameProperty = 'CardTechName';
            MasterCardTechnologyRow.localTextPrefix = 'CardManagement.MasterCardTechnology';
            var Fields;
            (function (Fields) {
            })(Fields = MasterCardTechnologyRow.Fields || (MasterCardTechnologyRow.Fields = {}));
            [
                'CardTechId',
                'CardTechName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MasterCardTechnologyRow = CardManagement.MasterCardTechnologyRow || (CardManagement.MasterCardTechnologyRow = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTechnologyService;
        (function (MasterCardTechnologyService) {
            MasterCardTechnologyService.baseUrl = 'CardManagement/MasterCardTechnology';
            var Methods;
            (function (Methods) {
            })(Methods = MasterCardTechnologyService.Methods || (MasterCardTechnologyService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterCardTechnologyService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterCardTechnologyService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MasterCardTechnologyService.baseUrl + '/' + x;
            });
        })(MasterCardTechnologyService = CardManagement.MasterCardTechnologyService || (CardManagement.MasterCardTechnologyService = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTypeForm = /** @class */ (function (_super) {
            __extends(MasterCardTypeForm, _super);
            function MasterCardTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MasterCardTypeForm.formKey = 'CardManagement.MasterCardType';
            return MasterCardTypeForm;
        }(Serenity.PrefixedContext));
        CardManagement.MasterCardTypeForm = MasterCardTypeForm;
        [,
            ['CardTypeName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(MasterCardTypeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTypeRow;
        (function (MasterCardTypeRow) {
            MasterCardTypeRow.idProperty = 'CardTypeId';
            MasterCardTypeRow.nameProperty = 'CardTypeName';
            MasterCardTypeRow.localTextPrefix = 'CardManagement.MasterCardType';
            var Fields;
            (function (Fields) {
            })(Fields = MasterCardTypeRow.Fields || (MasterCardTypeRow.Fields = {}));
            [
                'CardTypeId',
                'CardTypeName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MasterCardTypeRow = CardManagement.MasterCardTypeRow || (CardManagement.MasterCardTypeRow = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTypeService;
        (function (MasterCardTypeService) {
            MasterCardTypeService.baseUrl = 'CardManagement/MasterCardType';
            var Methods;
            (function (Methods) {
            })(Methods = MasterCardTypeService.Methods || (MasterCardTypeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterCardTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterCardTypeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MasterCardTypeService.baseUrl + '/' + x;
            });
        })(MasterCardTypeService = CardManagement.MasterCardTypeService || (CardManagement.MasterCardTypeService = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardUseTypeForm = /** @class */ (function (_super) {
            __extends(MasterCardUseTypeForm, _super);
            function MasterCardUseTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MasterCardUseTypeForm.formKey = 'CardManagement.MasterCardUseType';
            return MasterCardUseTypeForm;
        }(Serenity.PrefixedContext));
        CardManagement.MasterCardUseTypeForm = MasterCardUseTypeForm;
        [,
            ['CardUseTypeName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(MasterCardUseTypeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardUseTypeRow;
        (function (MasterCardUseTypeRow) {
            MasterCardUseTypeRow.idProperty = 'CardUseTypeId';
            MasterCardUseTypeRow.nameProperty = 'CardUseTypeName';
            MasterCardUseTypeRow.localTextPrefix = 'CardManagement.MasterCardUseType';
            var Fields;
            (function (Fields) {
            })(Fields = MasterCardUseTypeRow.Fields || (MasterCardUseTypeRow.Fields = {}));
            [
                'CardUseTypeId',
                'CardUseTypeName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MasterCardUseTypeRow = CardManagement.MasterCardUseTypeRow || (CardManagement.MasterCardUseTypeRow = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardUseTypeService;
        (function (MasterCardUseTypeService) {
            MasterCardUseTypeService.baseUrl = 'CardManagement/MasterCardUseType';
            var Methods;
            (function (Methods) {
            })(Methods = MasterCardUseTypeService.Methods || (MasterCardUseTypeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterCardUseTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterCardUseTypeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MasterCardUseTypeService.baseUrl + '/' + x;
            });
        })(MasterCardUseTypeService = CardManagement.MasterCardUseTypeService || (CardManagement.MasterCardUseTypeService = {}));
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Controller;
    (function (Controller) {
        var ControllerAuthenticationTypeForm = /** @class */ (function (_super) {
            __extends(ControllerAuthenticationTypeForm, _super);
            function ControllerAuthenticationTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ControllerAuthenticationTypeForm.formKey = 'Controller.ControllerAuthenticationType';
            return ControllerAuthenticationTypeForm;
        }(Serenity.PrefixedContext));
        Controller.ControllerAuthenticationTypeForm = ControllerAuthenticationTypeForm;
        [,
            ['ControllerAuthenticationTypeName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ControllerAuthenticationTypeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Controller = ESignature.Controller || (ESignature.Controller = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Controller;
    (function (Controller) {
        var ControllerAuthenticationTypeRow;
        (function (ControllerAuthenticationTypeRow) {
            ControllerAuthenticationTypeRow.idProperty = 'ControllerAuthenticationTypeId';
            ControllerAuthenticationTypeRow.nameProperty = 'ControllerAuthenticationTypeName';
            ControllerAuthenticationTypeRow.localTextPrefix = 'Controller.ControllerAuthenticationType';
            var Fields;
            (function (Fields) {
            })(Fields = ControllerAuthenticationTypeRow.Fields || (ControllerAuthenticationTypeRow.Fields = {}));
            [
                'ControllerAuthenticationTypeId',
                'ControllerAuthenticationTypeName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ControllerAuthenticationTypeRow = Controller.ControllerAuthenticationTypeRow || (Controller.ControllerAuthenticationTypeRow = {}));
    })(Controller = ESignature.Controller || (ESignature.Controller = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Controller;
    (function (Controller) {
        var ControllerAuthenticationTypeService;
        (function (ControllerAuthenticationTypeService) {
            ControllerAuthenticationTypeService.baseUrl = 'Controller/ControllerAuthenticationType';
            var Methods;
            (function (Methods) {
            })(Methods = ControllerAuthenticationTypeService.Methods || (ControllerAuthenticationTypeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ControllerAuthenticationTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(ControllerAuthenticationTypeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ControllerAuthenticationTypeService.baseUrl + '/' + x;
            });
        })(ControllerAuthenticationTypeService = Controller.ControllerAuthenticationTypeService || (Controller.ControllerAuthenticationTypeService = {}));
    })(Controller = ESignature.Controller || (ESignature.Controller = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var ActivityLogForm = /** @class */ (function (_super) {
            __extends(ActivityLogForm, _super);
            function ActivityLogForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActivityLogForm.formKey = 'Default.ActivityLog';
            return ActivityLogForm;
        }(Serenity.PrefixedContext));
        Default.ActivityLogForm = ActivityLogForm;
        [,
            ['EmployeeCode', function () { return Serenity.StringEditor; }],
            ['JsonDateTime', function () { return Serenity.StringEditor; }],
            ['GmtDateTime', function () { return Serenity.DateEditor; }],
            ['UtcDateTime', function () { return Serenity.DateEditor; }],
            ['ImeiNo', function () { return Serenity.StringEditor; }],
            ['MobileNo', function () { return Serenity.StringEditor; }],
            ['OrgId', function () { return Serenity.StringEditor; }],
            ['RawString', function () { return Serenity.StringEditor; }],
            ['CardNo', function () { return Serenity.StringEditor; }],
            ['AccessPointString', function () { return Serenity.StringEditor; }],
            ['Info', function () { return Serenity.StringEditor; }],
            ['Info2', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ActivityLogForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var ActivityLogRow;
        (function (ActivityLogRow) {
            ActivityLogRow.idProperty = 'Id';
            ActivityLogRow.nameProperty = 'EmployeeCode';
            ActivityLogRow.localTextPrefix = 'Default.ActivityLog';
            var Fields;
            (function (Fields) {
            })(Fields = ActivityLogRow.Fields || (ActivityLogRow.Fields = {}));
            [
                'Id',
                'EmployeeCode',
                'JsonDateTime',
                'GmtDateTime',
                'UtcDateTime',
                'ImeiNo',
                'MobileNo',
                'OrgId',
                'RawString',
                'CardNo',
                'AccessPointString',
                'Info',
                'Info2'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ActivityLogRow = Default.ActivityLogRow || (Default.ActivityLogRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var ActivityLogService;
        (function (ActivityLogService) {
            ActivityLogService.baseUrl = 'Default/ActivityLog';
            var Methods;
            (function (Methods) {
            })(Methods = ActivityLogService.Methods || (ActivityLogService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ActivityLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(ActivityLogService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ActivityLogService.baseUrl + '/' + x;
            });
        })(ActivityLogService = Default.ActivityLogService || (Default.ActivityLogService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var AuditForm = /** @class */ (function (_super) {
            __extends(AuditForm, _super);
            function AuditForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AuditForm.formKey = 'Default.Audit';
            return AuditForm;
        }(Serenity.PrefixedContext));
        Default.AuditForm = AuditForm;
        [,
            ['Module', function () { return Serenity.StringEditor; }],
            ['EmployeeCode', function () { return Serenity.StringEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['DateTime', function () { return Serenity.DateEditor; }],
            ['IpAddress', function () { return Serenity.StringEditor; }],
            ['ChangedBy', function () { return Serenity.IntegerEditor; }],
            ['Extra1', function () { return Serenity.StringEditor; }],
            ['Extra2', function () { return Serenity.StringEditor; }],
            ['Extra3', function () { return Serenity.StringEditor; }],
            ['Extra4', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AuditForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var AuditRow;
        (function (AuditRow) {
            AuditRow.idProperty = 'Id';
            AuditRow.nameProperty = 'Module';
            AuditRow.localTextPrefix = 'Default.Audit';
            var Fields;
            (function (Fields) {
            })(Fields = AuditRow.Fields || (AuditRow.Fields = {}));
            [
                'Id',
                'Module',
                'EmployeeCode',
                'Description',
                'DateTime',
                'IpAddress',
                'ChangedBy',
                'Extra1',
                'Extra2',
                'Extra3',
                'Extra4'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AuditRow = Default.AuditRow || (Default.AuditRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var AuditService;
        (function (AuditService) {
            AuditService.baseUrl = 'Default/Audit';
            var Methods;
            (function (Methods) {
            })(Methods = AuditService.Methods || (AuditService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AuditService[x] = function (r, s, o) {
                    return Q.serviceRequest(AuditService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AuditService.baseUrl + '/' + x;
            });
        })(AuditService = Default.AuditService || (Default.AuditService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyGroupForm = /** @class */ (function (_super) {
            __extends(CompanyGroupForm, _super);
            function CompanyGroupForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CompanyGroupForm.formKey = 'Default.CompanyGroup';
            return CompanyGroupForm;
        }(Serenity.PrefixedContext));
        Default.CompanyGroupForm = CompanyGroupForm;
        [,
            ['GroupName', function () { return Serenity.StringEditor; }],
            ['CreatedDeteTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CompanyGroupForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyGroupRow;
        (function (CompanyGroupRow) {
            CompanyGroupRow.idProperty = 'CompanyGroupId';
            CompanyGroupRow.nameProperty = 'GroupName';
            CompanyGroupRow.localTextPrefix = 'Default.CompanyGroup';
            var Fields;
            (function (Fields) {
            })(Fields = CompanyGroupRow.Fields || (CompanyGroupRow.Fields = {}));
            [
                'CompanyGroupId',
                'GroupName',
                'CreatedDeteTime',
                'MarkDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CompanyGroupRow = Default.CompanyGroupRow || (Default.CompanyGroupRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyGroupService;
        (function (CompanyGroupService) {
            CompanyGroupService.baseUrl = 'Default/CompanyGroup';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyGroupService.Methods || (CompanyGroupService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CompanyGroupService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompanyGroupService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CompanyGroupService.baseUrl + '/' + x;
            });
        })(CompanyGroupService = Default.CompanyGroupService || (Default.CompanyGroupService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyLocationsForm = /** @class */ (function (_super) {
            __extends(CompanyLocationsForm, _super);
            function CompanyLocationsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CompanyLocationsForm.formKey = 'Default.CompanyLocations';
            return CompanyLocationsForm;
        }(Serenity.PrefixedContext));
        Default.CompanyLocationsForm = CompanyLocationsForm;
        [,
            ['CompanyMasterId', function () { return Serenity.IntegerEditor; }],
            ['LocationMasterId', function () { return Serenity.IntegerEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CompanyLocationsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyLocationsRow;
        (function (CompanyLocationsRow) {
            CompanyLocationsRow.idProperty = 'CompanyLocationId';
            CompanyLocationsRow.localTextPrefix = 'Default.CompanyLocations';
            var Fields;
            (function (Fields) {
            })(Fields = CompanyLocationsRow.Fields || (CompanyLocationsRow.Fields = {}));
            [
                'CompanyLocationId',
                'CompanyMasterId',
                'LocationMasterId',
                'CreatedDateTime',
                'MarkDeleted',
                'CompanyMasterCompanyName',
                'CompanyMasterCompanyGroupId',
                'CompanyMasterCompanyDetails',
                'CompanyMasterLocations',
                'CompanyMasterEmailId',
                'CompanyMasterOffNo',
                'CompanyMasterFinancialYearMasterId',
                'CompanyMasterCreatedDateTime',
                'CompanyMasterMarkDeleted',
                'CompanyMasterSmtpServerName',
                'CompanyMasterSmtpPortNo',
                'CompanyMasterSmtpUserName',
                'CompanyMasterSmtpPassword',
                'CompanyMasterIsAuditTrail',
                'CompanyMasterIsenablessl',
                'LocationMasterLocationName',
                'LocationMasterLocationCode',
                'LocationMasterCreatedDateTime',
                'LocationMasterMarkDeleted',
                'LocationMasterCompanyGroupId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CompanyLocationsRow = Default.CompanyLocationsRow || (Default.CompanyLocationsRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyLocationsService;
        (function (CompanyLocationsService) {
            CompanyLocationsService.baseUrl = 'Default/CompanyLocations';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyLocationsService.Methods || (CompanyLocationsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CompanyLocationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompanyLocationsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CompanyLocationsService.baseUrl + '/' + x;
            });
        })(CompanyLocationsService = Default.CompanyLocationsService || (Default.CompanyLocationsService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyMasterForm = /** @class */ (function (_super) {
            __extends(CompanyMasterForm, _super);
            function CompanyMasterForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CompanyMasterForm.formKey = 'Default.CompanyMaster';
            return CompanyMasterForm;
        }(Serenity.PrefixedContext));
        Default.CompanyMasterForm = CompanyMasterForm;
        [,
            ['CompanyName', function () { return Serenity.StringEditor; }],
            ['CompanyGroupId', function () { return Serenity.IntegerEditor; }],
            ['CompanyDetails', function () { return Serenity.StringEditor; }],
            ['EmailId', function () { return Serenity.StringEditor; }],
            ['OffNo', function () { return Serenity.StringEditor; }],
            ['FinancialYearMasterId', function () { return Serenity.IntegerEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }],
            ['SmtpServerName', function () { return Serenity.StringEditor; }],
            ['SmtpPortNo', function () { return Serenity.StringEditor; }],
            ['SmtpUserName', function () { return Serenity.StringEditor; }],
            ['SmtpPassword', function () { return Serenity.StringEditor; }],
            ['IsAuditTrail', function () { return Serenity.BooleanEditor; }],
            ['Isenablessl', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CompanyMasterForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyMasterRow;
        (function (CompanyMasterRow) {
            CompanyMasterRow.idProperty = 'CompanyMasterId';
            CompanyMasterRow.nameProperty = 'CompanyName';
            CompanyMasterRow.localTextPrefix = 'Default.CompanyMaster';
            var Fields;
            (function (Fields) {
            })(Fields = CompanyMasterRow.Fields || (CompanyMasterRow.Fields = {}));
            [
                'CompanyMasterId',
                'CompanyName',
                'CompanyGroupId',
                'CompanyDetails',
                'EmailId',
                'OffNo',
                'FinancialYearMasterId',
                'CreatedDateTime',
                'MarkDeleted',
                'SmtpServerName',
                'SmtpPortNo',
                'SmtpUserName',
                'SmtpPassword',
                'IsAuditTrail',
                'Isenablessl',
                'CompanyGroupGroupName',
                'CompanyGroupCreatedDeteTime',
                'CompanyGroupMarkDeleted',
                'FinancialYearMasterStartDate',
                'FinancialYearMasterEndDate',
                'FinancialYearMasterCreatedDeteTime',
                'FinancialYearMasterMarkDeleted',
                'FinancialYearMasterCompanyGroupId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CompanyMasterRow = Default.CompanyMasterRow || (Default.CompanyMasterRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyMasterService;
        (function (CompanyMasterService) {
            CompanyMasterService.baseUrl = 'Default/CompanyMaster';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyMasterService.Methods || (CompanyMasterService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CompanyMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompanyMasterService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CompanyMasterService.baseUrl + '/' + x;
            });
        })(CompanyMasterService = Default.CompanyMasterService || (Default.CompanyMasterService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DepartmentsForm = /** @class */ (function (_super) {
            __extends(DepartmentsForm, _super);
            function DepartmentsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DepartmentsForm.formKey = 'Default.Departments';
            return DepartmentsForm;
        }(Serenity.PrefixedContext));
        Default.DepartmentsForm = DepartmentsForm;
        [,
            ['DepartmentName', function () { return Serenity.StringEditor; }],
            ['DepartmentCode', function () { return Serenity.StringEditor; }],
            ['CompanyLocationId', function () { return Serenity.IntegerEditor; }],
            ['DivisionId', function () { return Serenity.IntegerEditor; }],
            ['Details', function () { return Serenity.StringEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DepartmentsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DepartmentsRow;
        (function (DepartmentsRow) {
            DepartmentsRow.idProperty = 'DepartmentId';
            DepartmentsRow.nameProperty = 'DepartmentName';
            DepartmentsRow.localTextPrefix = 'Default.Departments';
            var Fields;
            (function (Fields) {
            })(Fields = DepartmentsRow.Fields || (DepartmentsRow.Fields = {}));
            [
                'DepartmentId',
                'DepartmentName',
                'DepartmentCode',
                'CompanyLocationId',
                'DivisionId',
                'Details',
                'CreatedDateTime',
                'MarkDeleted',
                'CompanyLocationCompanyMasterId',
                'CompanyLocationLocationMasterId',
                'CompanyLocationCreatedDateTime',
                'CompanyLocationMarkDeleted',
                'DivisionDivisionName',
                'DivisionDivisionCode',
                'DivisionCompanyMasterId',
                'DivisionDetails',
                'DivisionCreatedDateTime',
                'DivisionMarkDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DepartmentsRow = Default.DepartmentsRow || (Default.DepartmentsRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DepartmentsService;
        (function (DepartmentsService) {
            DepartmentsService.baseUrl = 'Default/Departments';
            var Methods;
            (function (Methods) {
            })(Methods = DepartmentsService.Methods || (DepartmentsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DepartmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartmentsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DepartmentsService.baseUrl + '/' + x;
            });
        })(DepartmentsService = Default.DepartmentsService || (Default.DepartmentsService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DesignationsForm = /** @class */ (function (_super) {
            __extends(DesignationsForm, _super);
            function DesignationsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DesignationsForm.formKey = 'Default.Designations';
            return DesignationsForm;
        }(Serenity.PrefixedContext));
        Default.DesignationsForm = DesignationsForm;
        [,
            ['DesignationName', function () { return Serenity.StringEditor; }],
            ['DesignationCode', function () { return Serenity.StringEditor; }],
            ['CompanyMasterId', function () { return Serenity.IntegerEditor; }],
            ['Details', function () { return Serenity.StringEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DesignationsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DesignationsRow;
        (function (DesignationsRow) {
            DesignationsRow.idProperty = 'DesignationId';
            DesignationsRow.nameProperty = 'DesignationName';
            DesignationsRow.localTextPrefix = 'Default.Designations';
            var Fields;
            (function (Fields) {
            })(Fields = DesignationsRow.Fields || (DesignationsRow.Fields = {}));
            [
                'DesignationId',
                'DesignationName',
                'DesignationCode',
                'CompanyMasterId',
                'Details',
                'CreatedDateTime',
                'MarkDeleted',
                'CompanyMasterCompanyName',
                'CompanyMasterCompanyGroupId',
                'CompanyMasterCompanyDetails',
                'CompanyMasterLocations',
                'CompanyMasterEmailId',
                'CompanyMasterOffNo',
                'CompanyMasterFinancialYearMasterId',
                'CompanyMasterCreatedDateTime',
                'CompanyMasterMarkDeleted',
                'CompanyMasterSmtpServerName',
                'CompanyMasterSmtpPortNo',
                'CompanyMasterSmtpUserName',
                'CompanyMasterSmtpPassword',
                'CompanyMasterIsAuditTrail',
                'CompanyMasterIsenablessl'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DesignationsRow = Default.DesignationsRow || (Default.DesignationsRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DesignationsService;
        (function (DesignationsService) {
            DesignationsService.baseUrl = 'Default/Designations';
            var Methods;
            (function (Methods) {
            })(Methods = DesignationsService.Methods || (DesignationsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DesignationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DesignationsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DesignationsService.baseUrl + '/' + x;
            });
        })(DesignationsService = Default.DesignationsService || (Default.DesignationsService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DivisionMasterForm = /** @class */ (function (_super) {
            __extends(DivisionMasterForm, _super);
            function DivisionMasterForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DivisionMasterForm.formKey = 'Default.DivisionMaster';
            return DivisionMasterForm;
        }(Serenity.PrefixedContext));
        Default.DivisionMasterForm = DivisionMasterForm;
        [,
            ['DivisionName', function () { return Serenity.StringEditor; }],
            ['DivisionCode', function () { return Serenity.StringEditor; }],
            ['CompanyMasterId', function () { return Serenity.IntegerEditor; }],
            ['Details', function () { return Serenity.StringEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DivisionMasterForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DivisionMasterRow;
        (function (DivisionMasterRow) {
            DivisionMasterRow.idProperty = 'DivisionId';
            DivisionMasterRow.nameProperty = 'DivisionName';
            DivisionMasterRow.localTextPrefix = 'Default.DivisionMaster';
            var Fields;
            (function (Fields) {
            })(Fields = DivisionMasterRow.Fields || (DivisionMasterRow.Fields = {}));
            [
                'DivisionId',
                'DivisionName',
                'DivisionCode',
                'CompanyMasterId',
                'Details',
                'CreatedDateTime',
                'MarkDeleted',
                'CompanyMasterCompanyName',
                'CompanyMasterCompanyGroupId',
                'CompanyMasterCompanyDetails',
                'CompanyMasterLocations',
                'CompanyMasterEmailId',
                'CompanyMasterOffNo',
                'CompanyMasterFinancialYearMasterId',
                'CompanyMasterCreatedDateTime',
                'CompanyMasterMarkDeleted',
                'CompanyMasterSmtpServerName',
                'CompanyMasterSmtpPortNo',
                'CompanyMasterSmtpUserName',
                'CompanyMasterSmtpPassword',
                'CompanyMasterIsAuditTrail',
                'CompanyMasterIsenablessl'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DivisionMasterRow = Default.DivisionMasterRow || (Default.DivisionMasterRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DivisionMasterService;
        (function (DivisionMasterService) {
            DivisionMasterService.baseUrl = 'Default/DivisionMaster';
            var Methods;
            (function (Methods) {
            })(Methods = DivisionMasterService.Methods || (DivisionMasterService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DivisionMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(DivisionMasterService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DivisionMasterService.baseUrl + '/' + x;
            });
        })(DivisionMasterService = Default.DivisionMasterService || (Default.DivisionMasterService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var FinancialYearMasterForm = /** @class */ (function (_super) {
            __extends(FinancialYearMasterForm, _super);
            function FinancialYearMasterForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FinancialYearMasterForm.formKey = 'Default.FinancialYearMaster';
            return FinancialYearMasterForm;
        }(Serenity.PrefixedContext));
        Default.FinancialYearMasterForm = FinancialYearMasterForm;
        [,
            ['StartDate', function () { return Serenity.DateEditor; }],
            ['EndDate', function () { return Serenity.IntegerEditor; }],
            ['CreatedDeteTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }],
            ['CompanyGroupId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(FinancialYearMasterForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var FinancialYearMasterRow;
        (function (FinancialYearMasterRow) {
            FinancialYearMasterRow.idProperty = 'FinancialYearMasterId';
            FinancialYearMasterRow.localTextPrefix = 'Default.FinancialYearMaster';
            var Fields;
            (function (Fields) {
            })(Fields = FinancialYearMasterRow.Fields || (FinancialYearMasterRow.Fields = {}));
            [
                'FinancialYearMasterId',
                'StartDate',
                'EndDate',
                'CreatedDeteTime',
                'MarkDeleted',
                'CompanyGroupId',
                'CompanyGroupGroupName',
                'CompanyGroupCreatedDeteTime',
                'CompanyGroupMarkDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(FinancialYearMasterRow = Default.FinancialYearMasterRow || (Default.FinancialYearMasterRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var FinancialYearMasterService;
        (function (FinancialYearMasterService) {
            FinancialYearMasterService.baseUrl = 'Default/FinancialYearMaster';
            var Methods;
            (function (Methods) {
            })(Methods = FinancialYearMasterService.Methods || (FinancialYearMasterService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FinancialYearMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(FinancialYearMasterService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = FinancialYearMasterService.baseUrl + '/' + x;
            });
        })(FinancialYearMasterService = Default.FinancialYearMasterService || (Default.FinancialYearMasterService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var GenderForm = /** @class */ (function (_super) {
            __extends(GenderForm, _super);
            function GenderForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GenderForm.formKey = 'Default.Gender';
            return GenderForm;
        }(Serenity.PrefixedContext));
        Default.GenderForm = GenderForm;
        [,
            ['Gender', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(GenderForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var GenderRow;
        (function (GenderRow) {
            GenderRow.idProperty = 'Id';
            GenderRow.nameProperty = 'Gender';
            GenderRow.localTextPrefix = 'Default.Gender';
            var Fields;
            (function (Fields) {
            })(Fields = GenderRow.Fields || (GenderRow.Fields = {}));
            [
                'Id',
                'Gender'
            ].forEach(function (x) { return Fields[x] = x; });
        })(GenderRow = Default.GenderRow || (Default.GenderRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var GenderService;
        (function (GenderService) {
            GenderService.baseUrl = 'Default/Gender';
            var Methods;
            (function (Methods) {
            })(Methods = GenderService.Methods || (GenderService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GenderService[x] = function (r, s, o) {
                    return Q.serviceRequest(GenderService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = GenderService.baseUrl + '/' + x;
            });
        })(GenderService = Default.GenderService || (Default.GenderService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var LocationMasterForm = /** @class */ (function (_super) {
            __extends(LocationMasterForm, _super);
            function LocationMasterForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LocationMasterForm.formKey = 'Default.LocationMaster';
            return LocationMasterForm;
        }(Serenity.PrefixedContext));
        Default.LocationMasterForm = LocationMasterForm;
        [,
            ['LocationName', function () { return Serenity.StringEditor; }],
            ['LocationCode', function () { return Serenity.StringEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }],
            ['CompanyGroupId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(LocationMasterForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var LocationMasterRow;
        (function (LocationMasterRow) {
            LocationMasterRow.idProperty = 'LocationMasterId';
            LocationMasterRow.nameProperty = 'LocationName';
            LocationMasterRow.localTextPrefix = 'Default.LocationMaster';
            var Fields;
            (function (Fields) {
            })(Fields = LocationMasterRow.Fields || (LocationMasterRow.Fields = {}));
            [
                'LocationMasterId',
                'LocationName',
                'LocationCode',
                'CreatedDateTime',
                'MarkDeleted',
                'CompanyGroupId',
                'CompanyGroupGroupName',
                'CompanyGroupCreatedDeteTime',
                'CompanyGroupMarkDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(LocationMasterRow = Default.LocationMasterRow || (Default.LocationMasterRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var LocationMasterService;
        (function (LocationMasterService) {
            LocationMasterService.baseUrl = 'Default/LocationMaster';
            var Methods;
            (function (Methods) {
            })(Methods = LocationMasterService.Methods || (LocationMasterService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LocationMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(LocationMasterService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = LocationMasterService.baseUrl + '/' + x;
            });
        })(LocationMasterService = Default.LocationMasterService || (Default.LocationMasterService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var MaretialStatusForm = /** @class */ (function (_super) {
            __extends(MaretialStatusForm, _super);
            function MaretialStatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MaretialStatusForm.formKey = 'Default.MaretialStatus';
            return MaretialStatusForm;
        }(Serenity.PrefixedContext));
        Default.MaretialStatusForm = MaretialStatusForm;
        [,
            ['MaretialStatus', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(MaretialStatusForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var MaretialStatusRow;
        (function (MaretialStatusRow) {
            MaretialStatusRow.idProperty = 'Id';
            MaretialStatusRow.nameProperty = 'MaretialStatus';
            MaretialStatusRow.localTextPrefix = 'Default.MaretialStatus';
            var Fields;
            (function (Fields) {
            })(Fields = MaretialStatusRow.Fields || (MaretialStatusRow.Fields = {}));
            [
                'Id',
                'MaretialStatus'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MaretialStatusRow = Default.MaretialStatusRow || (Default.MaretialStatusRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var MaretialStatusService;
        (function (MaretialStatusService) {
            MaretialStatusService.baseUrl = 'Default/MaretialStatus';
            var Methods;
            (function (Methods) {
            })(Methods = MaretialStatusService.Methods || (MaretialStatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaretialStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaretialStatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MaretialStatusService.baseUrl + '/' + x;
            });
        })(MaretialStatusService = Default.MaretialStatusService || (Default.MaretialStatusService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var OrganizationAccessPointsForm = /** @class */ (function (_super) {
            __extends(OrganizationAccessPointsForm, _super);
            function OrganizationAccessPointsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OrganizationAccessPointsForm.formKey = 'Default.OrganizationAccessPoints';
            return OrganizationAccessPointsForm;
        }(Serenity.PrefixedContext));
        Default.OrganizationAccessPointsForm = OrganizationAccessPointsForm;
        [,
            ['OrganizationId', function () { return Serenity.IntegerEditor; }],
            ['AccessPointName', function () { return Serenity.StringEditor; }],
            ['AccessPointCode', function () { return Serenity.StringEditor; }],
            ['Location', function () { return Serenity.StringEditor; }],
            ['LocationCoordinates', function () { return Serenity.StringEditor; }],
            ['Range', function () { return Serenity.StringEditor; }],
            ['DateTime', function () { return Serenity.DateEditor; }],
            ['IsDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(OrganizationAccessPointsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var OrganizationAccessPointsRow;
        (function (OrganizationAccessPointsRow) {
            OrganizationAccessPointsRow.idProperty = 'Id';
            OrganizationAccessPointsRow.nameProperty = 'AccessPointName';
            OrganizationAccessPointsRow.localTextPrefix = 'Default.OrganizationAccessPoints';
            var Fields;
            (function (Fields) {
            })(Fields = OrganizationAccessPointsRow.Fields || (OrganizationAccessPointsRow.Fields = {}));
            [
                'Id',
                'OrganizationId',
                'AccessPointName',
                'AccessPointCode',
                'Location',
                'LocationCoordinates',
                'Range',
                'DateTime',
                'IsDeleted',
                'OrganizationOrganizationName',
                'OrganizationEmail',
                'OrganizationCity',
                'OrganizationState',
                'OrganizationCountry',
                'OrganizationPin',
                'OrganizationAddress1',
                'OrganizationAddress2',
                'OrganizationPhoneNumber',
                'OrganizationFax',
                'OrganizationDescription',
                'OrganizationIsDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(OrganizationAccessPointsRow = Default.OrganizationAccessPointsRow || (Default.OrganizationAccessPointsRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var OrganizationAccessPointsService;
        (function (OrganizationAccessPointsService) {
            OrganizationAccessPointsService.baseUrl = 'Default/OrganizationAccessPoints';
            var Methods;
            (function (Methods) {
            })(Methods = OrganizationAccessPointsService.Methods || (OrganizationAccessPointsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrganizationAccessPointsService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrganizationAccessPointsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = OrganizationAccessPointsService.baseUrl + '/' + x;
            });
        })(OrganizationAccessPointsService = Default.OrganizationAccessPointsService || (Default.OrganizationAccessPointsService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var OrganizationForm = /** @class */ (function (_super) {
            __extends(OrganizationForm, _super);
            function OrganizationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OrganizationForm.formKey = 'Default.Organization';
            return OrganizationForm;
        }(Serenity.PrefixedContext));
        Default.OrganizationForm = OrganizationForm;
        [,
            ['OrganizationName', function () { return Serenity.StringEditor; }],
            ['Email', function () { return Serenity.StringEditor; }],
            ['City', function () { return Serenity.StringEditor; }],
            ['State', function () { return Serenity.StringEditor; }],
            ['Country', function () { return Serenity.StringEditor; }],
            ['Pin', function () { return Serenity.StringEditor; }],
            ['Address1', function () { return Serenity.StringEditor; }],
            ['Address2', function () { return Serenity.StringEditor; }],
            ['PhoneNumber', function () { return Serenity.StringEditor; }],
            ['Fax', function () { return Serenity.StringEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['IsDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(OrganizationForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var OrganizationRow;
        (function (OrganizationRow) {
            OrganizationRow.idProperty = 'Id';
            OrganizationRow.nameProperty = 'OrganizationName';
            OrganizationRow.localTextPrefix = 'Default.Organization';
            var Fields;
            (function (Fields) {
            })(Fields = OrganizationRow.Fields || (OrganizationRow.Fields = {}));
            [
                'Id',
                'OrganizationName',
                'Email',
                'City',
                'State',
                'Country',
                'Pin',
                'Address1',
                'Address2',
                'PhoneNumber',
                'Fax',
                'Description',
                'IsDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(OrganizationRow = Default.OrganizationRow || (Default.OrganizationRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var OrganizationService;
        (function (OrganizationService) {
            OrganizationService.baseUrl = 'Default/Organization';
            var Methods;
            (function (Methods) {
            })(Methods = OrganizationService.Methods || (OrganizationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrganizationService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrganizationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = OrganizationService.baseUrl + '/' + x;
            });
        })(OrganizationService = Default.OrganizationService || (Default.OrganizationService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var OrginizationEmployeeForm = /** @class */ (function (_super) {
            __extends(OrginizationEmployeeForm, _super);
            function OrginizationEmployeeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OrginizationEmployeeForm.formKey = 'Default.OrginizationEmployee';
            return OrginizationEmployeeForm;
        }(Serenity.PrefixedContext));
        Default.OrginizationEmployeeForm = OrginizationEmployeeForm;
        [,
            ['OrganizationId', function () { return Serenity.IntegerEditor; }],
            ['Salutation', function () { return Serenity.StringEditor; }],
            ['FirstName', function () { return Serenity.StringEditor; }],
            ['LastName', function () { return Serenity.StringEditor; }],
            ['Gender', function () { return Serenity.StringEditor; }],
            ['DateOfBirth', function () { return Serenity.StringEditor; }],
            ['StartDate', function () { return Serenity.DateEditor; }],
            ['EndDate', function () { return Serenity.DateEditor; }],
            ['CardNo', function () { return Serenity.StringEditor; }],
            ['AccessPointString', function () { return Serenity.StringEditor; }],
            ['MobileNumber', function () { return Serenity.StringEditor; }],
            ['ImeiNumber', function () { return Serenity.StringEditor; }],
            ['City', function () { return Serenity.StringEditor; }],
            ['State', function () { return Serenity.StringEditor; }],
            ['Fax', function () { return Serenity.StringEditor; }],
            ['Country', function () { return Serenity.StringEditor; }],
            ['Pin', function () { return Serenity.StringEditor; }],
            ['Address1', function () { return Serenity.StringEditor; }],
            ['Address2', function () { return Serenity.StringEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['IsDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(OrginizationEmployeeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var OrginizationEmployeeRow;
        (function (OrginizationEmployeeRow) {
            OrginizationEmployeeRow.idProperty = 'Id';
            OrginizationEmployeeRow.nameProperty = 'Salutation';
            OrginizationEmployeeRow.localTextPrefix = 'Default.OrginizationEmployee';
            var Fields;
            (function (Fields) {
            })(Fields = OrginizationEmployeeRow.Fields || (OrginizationEmployeeRow.Fields = {}));
            [
                'Id',
                'OrganizationId',
                'Salutation',
                'FirstName',
                'LastName',
                'Gender',
                'DateOfBirth',
                'StartDate',
                'EndDate',
                'CardNo',
                'AccessPointString',
                'MobileNumber',
                'ImeiNumber',
                'City',
                'State',
                'Fax',
                'Country',
                'Pin',
                'Address1',
                'Address2',
                'Description',
                'IsDeleted',
                'OrganizationOrganizationName',
                'OrganizationEmail',
                'OrganizationCity',
                'OrganizationState',
                'OrganizationCountry',
                'OrganizationPin',
                'OrganizationAddress1',
                'OrganizationAddress2',
                'OrganizationPhoneNumber',
                'OrganizationFax',
                'OrganizationDescription',
                'OrganizationIsDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(OrginizationEmployeeRow = Default.OrginizationEmployeeRow || (Default.OrginizationEmployeeRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var OrginizationEmployeeService;
        (function (OrginizationEmployeeService) {
            OrginizationEmployeeService.baseUrl = 'Default/OrginizationEmployee';
            var Methods;
            (function (Methods) {
            })(Methods = OrginizationEmployeeService.Methods || (OrginizationEmployeeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrginizationEmployeeService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrginizationEmployeeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = OrginizationEmployeeService.baseUrl + '/' + x;
            });
        })(OrginizationEmployeeService = Default.OrginizationEmployeeService || (Default.OrginizationEmployeeService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var SalutationForm = /** @class */ (function (_super) {
            __extends(SalutationForm, _super);
            function SalutationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SalutationForm.formKey = 'Default.Salutation';
            return SalutationForm;
        }(Serenity.PrefixedContext));
        Default.SalutationForm = SalutationForm;
        [,
            ['SalutationName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SalutationForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var SalutationRow;
        (function (SalutationRow) {
            SalutationRow.idProperty = 'Id';
            SalutationRow.nameProperty = 'SalutationName';
            SalutationRow.localTextPrefix = 'Default.Salutation';
            var Fields;
            (function (Fields) {
            })(Fields = SalutationRow.Fields || (SalutationRow.Fields = {}));
            [
                'Id',
                'SalutationName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SalutationRow = Default.SalutationRow || (Default.SalutationRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var SalutationService;
        (function (SalutationService) {
            SalutationService.baseUrl = 'Default/Salutation';
            var Methods;
            (function (Methods) {
            })(Methods = SalutationService.Methods || (SalutationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalutationService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalutationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SalutationService.baseUrl + '/' + x;
            });
        })(SalutationService = Default.SalutationService || (Default.SalutationService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var SubDepartmentsForm = /** @class */ (function (_super) {
            __extends(SubDepartmentsForm, _super);
            function SubDepartmentsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SubDepartmentsForm.formKey = 'Default.SubDepartments';
            return SubDepartmentsForm;
        }(Serenity.PrefixedContext));
        Default.SubDepartmentsForm = SubDepartmentsForm;
        [,
            ['SubDepartmentName', function () { return Serenity.StringEditor; }],
            ['SubDepartmentCode', function () { return Serenity.StringEditor; }],
            ['DepartmentId', function () { return Serenity.IntegerEditor; }],
            ['Details', function () { return Serenity.StringEditor; }],
            ['CreatedDateTime', function () { return Serenity.DateEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SubDepartmentsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var SubDepartmentsRow;
        (function (SubDepartmentsRow) {
            SubDepartmentsRow.idProperty = 'SubDepartmentId';
            SubDepartmentsRow.nameProperty = 'SubDepartmentName';
            SubDepartmentsRow.localTextPrefix = 'Default.SubDepartments';
            var Fields;
            (function (Fields) {
            })(Fields = SubDepartmentsRow.Fields || (SubDepartmentsRow.Fields = {}));
            [
                'SubDepartmentId',
                'SubDepartmentName',
                'SubDepartmentCode',
                'DepartmentId',
                'Details',
                'CreatedDateTime',
                'MarkDeleted',
                'DepartmentDepartmentName',
                'DepartmentDepartmentCode',
                'DepartmentCompanyLocationId',
                'DepartmentDivisionId',
                'DepartmentDetails',
                'DepartmentCreatedDateTime',
                'DepartmentMarkDeleted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SubDepartmentsRow = Default.SubDepartmentsRow || (Default.SubDepartmentsRow = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var SubDepartmentsService;
        (function (SubDepartmentsService) {
            SubDepartmentsService.baseUrl = 'Default/SubDepartments';
            var Methods;
            (function (Methods) {
            })(Methods = SubDepartmentsService.Methods || (SubDepartmentsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SubDepartmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SubDepartmentsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SubDepartmentsService.baseUrl + '/' + x;
            });
        })(SubDepartmentsService = Default.SubDepartmentsService || (Default.SubDepartmentsService = {}));
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Employee;
    (function (Employee) {
        var EmployeeMasterForm = /** @class */ (function (_super) {
            __extends(EmployeeMasterForm, _super);
            function EmployeeMasterForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeeMasterForm.formKey = 'Employee.EmployeeMaster';
            return EmployeeMasterForm;
        }(Serenity.PrefixedContext));
        Employee.EmployeeMasterForm = EmployeeMasterForm;
        [,
            ['EmployeeCode', function () { return Serenity.StringEditor; }],
            ['SalutationId', function () { return Serenity.IntegerEditor; }],
            ['DepartmentId', function () { return Serenity.IntegerEditor; }],
            ['CompanyLocationId', function () { return Serenity.IntegerEditor; }],
            ['DesignationId', function () { return Serenity.IntegerEditor; }],
            ['GenderId', function () { return Serenity.IntegerEditor; }],
            ['DivisionId', function () { return Serenity.IntegerEditor; }],
            ['SubDepartmentId', function () { return Serenity.IntegerEditor; }],
            ['MaretialStatusId', function () { return Serenity.IntegerEditor; }],
            ['EmployeeTypeId', function () { return Serenity.IntegerEditor; }],
            ['EmploymentTypeId', function () { return Serenity.IntegerEditor; }],
            ['BloodGroupId', function () { return Serenity.IntegerEditor; }],
            ['CompanyMasterId', function () { return Serenity.IntegerEditor; }],
            ['FirstName', function () { return Serenity.StringEditor; }],
            ['MiddleName', function () { return Serenity.StringEditor; }],
            ['LastName', function () { return Serenity.StringEditor; }],
            ['MobileNumber', function () { return Serenity.StringEditor; }],
            ['City', function () { return Serenity.StringEditor; }],
            ['State', function () { return Serenity.StringEditor; }],
            ['Country', function () { return Serenity.StringEditor; }],
            ['Address', function () { return Serenity.StringEditor; }],
            ['DateofBirth', function () { return Serenity.DateEditor; }],
            ['DateOfJoining', function () { return Serenity.DateEditor; }],
            ['ResignDate', function () { return Serenity.DateEditor; }],
            ['EmailAddress', function () { return Serenity.StringEditor; }],
            ['Email', function () { return Serenity.StringEditor; }],
            ['ManagerId', function () { return Serenity.IntegerEditor; }],
            ['AadharCardNo', function () { return Serenity.StringEditor; }],
            ['IsExpiryAllowed', function () { return Serenity.BooleanEditor; }],
            ['CardExpiry', function () { return Serenity.DateEditor; }],
            ['PhotoPath', function () { return Serenity.StringEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }],
            ['Extra1', function () { return Serenity.StringEditor; }],
            ['Extra2', function () { return Serenity.StringEditor; }],
            ['Extra3', function () { return Serenity.StringEditor; }],
            ['Extra4', function () { return Serenity.StringEditor; }],
            ['Extra5', function () { return Serenity.StringEditor; }],
            ['IsEmployeeLogin', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmployeeMasterForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Employee = ESignature.Employee || (ESignature.Employee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Employee;
    (function (Employee) {
        var EmployeeMasterRow;
        (function (EmployeeMasterRow) {
            EmployeeMasterRow.idProperty = 'EmployeeMasterId';
            EmployeeMasterRow.nameProperty = 'EmployeeCode';
            EmployeeMasterRow.localTextPrefix = 'Employee.EmployeeMaster';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeMasterRow.Fields || (EmployeeMasterRow.Fields = {}));
            [
                'EmployeeMasterId',
                'EmployeeCode',
                'SalutationId',
                'DepartmentId',
                'CompanyLocationId',
                'DesignationId',
                'GenderId',
                'DivisionId',
                'SubDepartmentId',
                'MaretialStatusId',
                'EmployeeTypeId',
                'EmploymentTypeId',
                'BloodGroupId',
                'CompanyMasterId',
                'FirstName',
                'MiddleName',
                'LastName',
                'MobileNumber',
                'City',
                'State',
                'Country',
                'Address',
                'DateofBirth',
                'DateOfJoining',
                'ResignDate',
                'EmailAddress',
                'Email',
                'ManagerId',
                'AadharCardNo',
                'IsExpiryAllowed',
                'CardExpiry',
                'PhotoPath',
                'MarkDeleted',
                'Extra1',
                'Extra2',
                'Extra3',
                'Extra4',
                'Extra5',
                'IsEmployeeLogin',
                'SalutationSalutationName',
                'DepartmentDepartmentName',
                'DepartmentDepartmentCode',
                'DepartmentCompanyLocationId',
                'DepartmentDivisionId',
                'DepartmentDetails',
                'DepartmentCreatedDateTime',
                'DepartmentMarkDeleted',
                'CompanyLocationCompanyMasterId',
                'CompanyLocationLocationMasterId',
                'CompanyLocationCreatedDateTime',
                'CompanyLocationMarkDeleted',
                'DesignationDesignationName',
                'DesignationDesignationCode',
                'DesignationCompanyMasterId',
                'DesignationDetails',
                'DesignationCreatedDateTime',
                'DesignationMarkDeleted',
                'GenderGenderName',
                'DivisionDivisionName',
                'DivisionDivisionCode',
                'DivisionCompanyMasterId',
                'DivisionDetails',
                'DivisionCreatedDateTime',
                'DivisionMarkDeleted',
                'SubDepartmentSubDepartmentName',
                'SubDepartmentSubDepartmentCode',
                'SubDepartmentDepartmentId',
                'SubDepartmentDetails',
                'SubDepartmentCreatedDateTime',
                'SubDepartmentMarkDeleted',
                'MaretialStatusMaretialStatusName',
                'EmployeeTypeEmployeeTypeName',
                'EmploymentTypeEmploymentTypeName',
                'BloodGroup',
                'CompanyMasterCompanyName',
                'CompanyMasterCompanyGroupId',
                'CompanyMasterCompanyDetails',
                'CompanyMasterLocations',
                'CompanyMasterEmailId',
                'CompanyMasterOffNo',
                'CompanyMasterFinancialYearMasterId',
                'CompanyMasterCreatedDateTime',
                'CompanyMasterMarkDeleted',
                'CompanyMasterSmtpServerName',
                'CompanyMasterSmtpPortNo',
                'CompanyMasterSmtpUserName',
                'CompanyMasterSmtpPassword',
                'CompanyMasterIsAuditTrail',
                'CompanyMasterIsenablessl'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeMasterRow = Employee.EmployeeMasterRow || (Employee.EmployeeMasterRow = {}));
    })(Employee = ESignature.Employee || (ESignature.Employee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Employee;
    (function (Employee) {
        var EmployeeMasterService;
        (function (EmployeeMasterService) {
            EmployeeMasterService.baseUrl = 'Employee/EmployeeMaster';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeMasterService.Methods || (EmployeeMasterService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeMasterService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmployeeMasterService.baseUrl + '/' + x;
            });
        })(EmployeeMasterService = Employee.EmployeeMasterService || (Employee.EmployeeMasterService = {}));
    })(Employee = ESignature.Employee || (ESignature.Employee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Employee;
    (function (Employee) {
        var EmployeesForm = /** @class */ (function (_super) {
            __extends(EmployeesForm, _super);
            function EmployeesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeesForm.formKey = 'Employee.Employees';
            return EmployeesForm;
        }(Serenity.PrefixedContext));
        Employee.EmployeesForm = EmployeesForm;
        [,
            ['LastName', function () { return Serenity.StringEditor; }],
            ['FirstName', function () { return Serenity.StringEditor; }],
            ['Title', function () { return Serenity.StringEditor; }],
            ['TitleOfCourtesy', function () { return Serenity.StringEditor; }],
            ['BirthDate', function () { return Serenity.DateEditor; }],
            ['HireDate', function () { return Serenity.DateEditor; }],
            ['Address', function () { return Serenity.StringEditor; }],
            ['City', function () { return Serenity.StringEditor; }],
            ['Region', function () { return Serenity.StringEditor; }],
            ['PostalCode', function () { return Serenity.StringEditor; }],
            ['Country', function () { return Serenity.StringEditor; }],
            ['HomePhone', function () { return Serenity.StringEditor; }],
            ['Extension', function () { return Serenity.StringEditor; }],
            ['Photo', function () { return Serenity.StringEditor; }],
            ['Notes', function () { return Serenity.StringEditor; }],
            ['ReportsTo', function () { return Serenity.IntegerEditor; }],
            ['PhotoPath', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmployeesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Employee = ESignature.Employee || (ESignature.Employee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Employee;
    (function (Employee) {
        var EmployeesRow;
        (function (EmployeesRow) {
            EmployeesRow.idProperty = 'EmployeeId';
            EmployeesRow.nameProperty = 'LastName';
            EmployeesRow.localTextPrefix = 'Employee.Employees';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeesRow.Fields || (EmployeesRow.Fields = {}));
            [
                'EmployeeId',
                'LastName',
                'FirstName',
                'Title',
                'TitleOfCourtesy',
                'BirthDate',
                'HireDate',
                'Address',
                'City',
                'Region',
                'PostalCode',
                'Country',
                'HomePhone',
                'Extension',
                'Photo',
                'Notes',
                'ReportsTo',
                'PhotoPath',
                'ReportsToLastName',
                'ReportsToFirstName',
                'ReportsToTitle',
                'ReportsToTitleOfCourtesy',
                'ReportsToBirthDate',
                'ReportsToHireDate',
                'ReportsToAddress',
                'ReportsToCity',
                'ReportsToRegion',
                'ReportsToPostalCode',
                'ReportsToCountry',
                'ReportsToHomePhone',
                'ReportsToExtension',
                'ReportsToPhoto',
                'ReportsToNotes',
                'ReportsTo1',
                'ReportsToPhotoPath'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmployeesRow = Employee.EmployeesRow || (Employee.EmployeesRow = {}));
    })(Employee = ESignature.Employee || (ESignature.Employee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Employee;
    (function (Employee) {
        var EmployeesService;
        (function (EmployeesService) {
            EmployeesService.baseUrl = 'Employee/Employees';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeesService.Methods || (EmployeesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmployeesService.baseUrl + '/' + x;
            });
        })(EmployeesService = Employee.EmployeesService || (Employee.EmployeesService = {}));
    })(Employee = ESignature.Employee || (ESignature.Employee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var BloodGroupsForm = /** @class */ (function (_super) {
            __extends(BloodGroupsForm, _super);
            function BloodGroupsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BloodGroupsForm.formKey = 'Master.BloodGroups';
            return BloodGroupsForm;
        }(Serenity.PrefixedContext));
        Master.BloodGroupsForm = BloodGroupsForm;
        [,
            ['BloodGroup', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(BloodGroupsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var BloodGroupsRow;
        (function (BloodGroupsRow) {
            BloodGroupsRow.idProperty = 'BloodGroupId';
            BloodGroupsRow.nameProperty = 'BloodGroup';
            BloodGroupsRow.localTextPrefix = 'Master.BloodGroups';
            var Fields;
            (function (Fields) {
            })(Fields = BloodGroupsRow.Fields || (BloodGroupsRow.Fields = {}));
            [
                'BloodGroupId',
                'BloodGroup'
            ].forEach(function (x) { return Fields[x] = x; });
        })(BloodGroupsRow = Master.BloodGroupsRow || (Master.BloodGroupsRow = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var BloodGroupsService;
        (function (BloodGroupsService) {
            BloodGroupsService.baseUrl = 'Master/BloodGroups';
            var Methods;
            (function (Methods) {
            })(Methods = BloodGroupsService.Methods || (BloodGroupsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BloodGroupsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BloodGroupsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = BloodGroupsService.baseUrl + '/' + x;
            });
        })(BloodGroupsService = Master.BloodGroupsService || (Master.BloodGroupsService = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmployeeTypeForm = /** @class */ (function (_super) {
            __extends(EmployeeTypeForm, _super);
            function EmployeeTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeeTypeForm.formKey = 'Master.EmployeeType';
            return EmployeeTypeForm;
        }(Serenity.PrefixedContext));
        Master.EmployeeTypeForm = EmployeeTypeForm;
        [,
            ['EmployeeTypeName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmployeeTypeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmployeeTypeRow;
        (function (EmployeeTypeRow) {
            EmployeeTypeRow.idProperty = 'EmployeeTypeId';
            EmployeeTypeRow.nameProperty = 'EmployeeTypeName';
            EmployeeTypeRow.localTextPrefix = 'Master.EmployeeType';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeTypeRow.Fields || (EmployeeTypeRow.Fields = {}));
            [
                'EmployeeTypeId',
                'EmployeeTypeName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeTypeRow = Master.EmployeeTypeRow || (Master.EmployeeTypeRow = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmployeeTypeService;
        (function (EmployeeTypeService) {
            EmployeeTypeService.baseUrl = 'Master/EmployeeType';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeTypeService.Methods || (EmployeeTypeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeTypeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmployeeTypeService.baseUrl + '/' + x;
            });
        })(EmployeeTypeService = Master.EmployeeTypeService || (Master.EmployeeTypeService = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmploymentTypesForm = /** @class */ (function (_super) {
            __extends(EmploymentTypesForm, _super);
            function EmploymentTypesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmploymentTypesForm.formKey = 'Master.EmploymentTypes';
            return EmploymentTypesForm;
        }(Serenity.PrefixedContext));
        Master.EmploymentTypesForm = EmploymentTypesForm;
        [,
            ['EmploymentTypeName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmploymentTypesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmploymentTypesRow;
        (function (EmploymentTypesRow) {
            EmploymentTypesRow.idProperty = 'EmploymentTypeId';
            EmploymentTypesRow.nameProperty = 'EmploymentTypeName';
            EmploymentTypesRow.localTextPrefix = 'Master.EmploymentTypes';
            var Fields;
            (function (Fields) {
            })(Fields = EmploymentTypesRow.Fields || (EmploymentTypesRow.Fields = {}));
            [
                'EmploymentTypeId',
                'EmploymentTypeName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmploymentTypesRow = Master.EmploymentTypesRow || (Master.EmploymentTypesRow = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmploymentTypesService;
        (function (EmploymentTypesService) {
            EmploymentTypesService.baseUrl = 'Master/EmploymentTypes';
            var Methods;
            (function (Methods) {
            })(Methods = EmploymentTypesService.Methods || (EmploymentTypesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmploymentTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmploymentTypesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmploymentTypesService.baseUrl + '/' + x;
            });
        })(EmploymentTypesService = Master.EmploymentTypesService || (Master.EmploymentTypesService = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var GenderForm = /** @class */ (function (_super) {
            __extends(GenderForm, _super);
            function GenderForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GenderForm.formKey = 'Master.Gender';
            return GenderForm;
        }(Serenity.PrefixedContext));
        Master.GenderForm = GenderForm;
        [,
            ['GenderName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(GenderForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var GenderRow;
        (function (GenderRow) {
            GenderRow.idProperty = 'GenderId';
            GenderRow.nameProperty = 'GenderName';
            GenderRow.localTextPrefix = 'Master.Gender';
            var Fields;
            (function (Fields) {
            })(Fields = GenderRow.Fields || (GenderRow.Fields = {}));
            [
                'GenderId',
                'GenderName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(GenderRow = Master.GenderRow || (Master.GenderRow = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var GenderService;
        (function (GenderService) {
            GenderService.baseUrl = 'Master/Gender';
            var Methods;
            (function (Methods) {
            })(Methods = GenderService.Methods || (GenderService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GenderService[x] = function (r, s, o) {
                    return Q.serviceRequest(GenderService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = GenderService.baseUrl + '/' + x;
            });
        })(GenderService = Master.GenderService || (Master.GenderService = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var MaretialStatusForm = /** @class */ (function (_super) {
            __extends(MaretialStatusForm, _super);
            function MaretialStatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MaretialStatusForm.formKey = 'Master.MaretialStatus';
            return MaretialStatusForm;
        }(Serenity.PrefixedContext));
        Master.MaretialStatusForm = MaretialStatusForm;
        [,
            ['MaretialStatusName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(MaretialStatusForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var MaretialStatusRow;
        (function (MaretialStatusRow) {
            MaretialStatusRow.idProperty = 'MaretialStatusId';
            MaretialStatusRow.nameProperty = 'MaretialStatusName';
            MaretialStatusRow.localTextPrefix = 'Master.MaretialStatus';
            var Fields;
            (function (Fields) {
            })(Fields = MaretialStatusRow.Fields || (MaretialStatusRow.Fields = {}));
            [
                'MaretialStatusId',
                'MaretialStatusName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MaretialStatusRow = Master.MaretialStatusRow || (Master.MaretialStatusRow = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var MaretialStatusService;
        (function (MaretialStatusService) {
            MaretialStatusService.baseUrl = 'Master/MaretialStatus';
            var Methods;
            (function (Methods) {
            })(Methods = MaretialStatusService.Methods || (MaretialStatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaretialStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaretialStatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MaretialStatusService.baseUrl + '/' + x;
            });
        })(MaretialStatusService = Master.MaretialStatusService || (Master.MaretialStatusService = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var SalutationForm = /** @class */ (function (_super) {
            __extends(SalutationForm, _super);
            function SalutationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SalutationForm.formKey = 'Master.Salutation';
            return SalutationForm;
        }(Serenity.PrefixedContext));
        Master.SalutationForm = SalutationForm;
        [,
            ['SalutationName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SalutationForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var SalutationRow;
        (function (SalutationRow) {
            SalutationRow.idProperty = 'SalutationId';
            SalutationRow.nameProperty = 'SalutationName';
            SalutationRow.localTextPrefix = 'Master.Salutation';
            var Fields;
            (function (Fields) {
            })(Fields = SalutationRow.Fields || (SalutationRow.Fields = {}));
            [
                'SalutationId',
                'SalutationName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SalutationRow = Master.SalutationRow || (Master.SalutationRow = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var SalutationService;
        (function (SalutationService) {
            SalutationService.baseUrl = 'Master/Salutation';
            var Methods;
            (function (Methods) {
            })(Methods = SalutationService.Methods || (SalutationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalutationService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalutationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SalutationService.baseUrl + '/' + x;
            });
        })(SalutationService = Master.SalutationService || (Master.SalutationService = {}));
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = ESignature.Membership || (ESignature.Membership = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = ESignature.Membership || (ESignature.Membership = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = ESignature.Membership || (ESignature.Membership = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = ESignature.Membership || (ESignature.Membership = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = ESignature.Membership || (ESignature.Membership = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Test;
    (function (Test) {
        var EmployeeMasterForm = /** @class */ (function (_super) {
            __extends(EmployeeMasterForm, _super);
            function EmployeeMasterForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeeMasterForm.formKey = 'Test.EmployeeMaster';
            return EmployeeMasterForm;
        }(Serenity.PrefixedContext));
        Test.EmployeeMasterForm = EmployeeMasterForm;
        [,
            ['EmployeeCode', function () { return Serenity.StringEditor; }],
            ['SalutationId', function () { return Serenity.IntegerEditor; }],
            ['DepartmentId', function () { return Serenity.IntegerEditor; }],
            ['CompanyLocationId', function () { return Serenity.IntegerEditor; }],
            ['DesignationId', function () { return Serenity.IntegerEditor; }],
            ['GenderId', function () { return Serenity.IntegerEditor; }],
            ['DivisionId', function () { return Serenity.IntegerEditor; }],
            ['SubDepartmentId', function () { return Serenity.IntegerEditor; }],
            ['MaretialStatusId', function () { return Serenity.IntegerEditor; }],
            ['EmployeeTypeId', function () { return Serenity.IntegerEditor; }],
            ['EmploymentTypeId', function () { return Serenity.IntegerEditor; }],
            ['BloodGroupId', function () { return Serenity.IntegerEditor; }],
            ['CompanyMasterId', function () { return Serenity.IntegerEditor; }],
            ['FirstName', function () { return Serenity.StringEditor; }],
            ['MiddleName', function () { return Serenity.StringEditor; }],
            ['LastName', function () { return Serenity.StringEditor; }],
            ['MobileNumber', function () { return Serenity.StringEditor; }],
            ['City', function () { return Serenity.StringEditor; }],
            ['State', function () { return Serenity.StringEditor; }],
            ['Country', function () { return Serenity.StringEditor; }],
            ['Address', function () { return Serenity.StringEditor; }],
            ['DateofBirth', function () { return Serenity.DateEditor; }],
            ['DateOfJoining', function () { return Serenity.DateEditor; }],
            ['ResignDate', function () { return Serenity.DateEditor; }],
            ['EmailAddress', function () { return Serenity.StringEditor; }],
            ['Email', function () { return Serenity.StringEditor; }],
            ['ManagerId', function () { return Serenity.IntegerEditor; }],
            ['AadharCardNo', function () { return Serenity.StringEditor; }],
            ['IsExpiryAllowed', function () { return Serenity.BooleanEditor; }],
            ['CardExpiry', function () { return Serenity.DateEditor; }],
            ['PhotoPath', function () { return Serenity.StringEditor; }],
            ['MarkDeleted', function () { return Serenity.BooleanEditor; }],
            ['Extra1', function () { return Serenity.StringEditor; }],
            ['Extra2', function () { return Serenity.StringEditor; }],
            ['Extra3', function () { return Serenity.StringEditor; }],
            ['Extra4', function () { return Serenity.StringEditor; }],
            ['Extra5', function () { return Serenity.StringEditor; }],
            ['IsEmployeeLogin', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmployeeMasterForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Test = ESignature.Test || (ESignature.Test = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Test;
    (function (Test) {
        var EmployeeMasterRow;
        (function (EmployeeMasterRow) {
            EmployeeMasterRow.idProperty = 'EmployeeMasterId';
            EmployeeMasterRow.nameProperty = 'EmployeeCode';
            EmployeeMasterRow.localTextPrefix = 'Test.EmployeeMaster';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeMasterRow.Fields || (EmployeeMasterRow.Fields = {}));
            [
                'EmployeeMasterId',
                'EmployeeCode',
                'SalutationId',
                'DepartmentId',
                'CompanyLocationId',
                'DesignationId',
                'GenderId',
                'DivisionId',
                'SubDepartmentId',
                'MaretialStatusId',
                'EmployeeTypeId',
                'EmploymentTypeId',
                'BloodGroupId',
                'CompanyMasterId',
                'FirstName',
                'MiddleName',
                'LastName',
                'MobileNumber',
                'City',
                'State',
                'Country',
                'Address',
                'DateofBirth',
                'DateOfJoining',
                'ResignDate',
                'EmailAddress',
                'Email',
                'ManagerId',
                'AadharCardNo',
                'IsExpiryAllowed',
                'CardExpiry',
                'PhotoPath',
                'MarkDeleted',
                'Extra1',
                'Extra2',
                'Extra3',
                'Extra4',
                'Extra5',
                'IsEmployeeLogin',
                'SalutationSalutationName',
                'DepartmentDepartmentName',
                'DepartmentDepartmentCode',
                'DepartmentCompanyLocationId',
                'DepartmentDivisionId',
                'DepartmentDetails',
                'DepartmentCreatedDateTime',
                'DepartmentMarkDeleted',
                'CompanyLocationCompanyMasterId',
                'CompanyLocationLocationMasterId',
                'CompanyLocationCreatedDateTime',
                'CompanyLocationMarkDeleted',
                'DesignationDesignationName',
                'DesignationDesignationCode',
                'DesignationCompanyMasterId',
                'DesignationDetails',
                'DesignationCreatedDateTime',
                'DesignationMarkDeleted',
                'GenderGenderName',
                'DivisionDivisionName',
                'DivisionDivisionCode',
                'DivisionCompanyMasterId',
                'DivisionDetails',
                'DivisionCreatedDateTime',
                'DivisionMarkDeleted',
                'SubDepartmentSubDepartmentName',
                'SubDepartmentSubDepartmentCode',
                'SubDepartmentDepartmentId',
                'SubDepartmentDetails',
                'SubDepartmentCreatedDateTime',
                'SubDepartmentMarkDeleted',
                'MaretialStatusMaretialStatusName',
                'EmployeeTypeEmployeeTypeName',
                'EmploymentType',
                'BloodGroup',
                'CompanyMasterCompanyName',
                'CompanyMasterCompanyGroupId',
                'CompanyMasterCompanyDetails',
                'CompanyMasterLocations',
                'CompanyMasterEmailId',
                'CompanyMasterOffNo',
                'CompanyMasterFinancialYearMasterId',
                'CompanyMasterCreatedDateTime',
                'CompanyMasterMarkDeleted',
                'CompanyMasterSmtpServerName',
                'CompanyMasterSmtpPortNo',
                'CompanyMasterSmtpUserName',
                'CompanyMasterSmtpPassword',
                'CompanyMasterIsAuditTrail',
                'CompanyMasterIsenablessl'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeMasterRow = Test.EmployeeMasterRow || (Test.EmployeeMasterRow = {}));
    })(Test = ESignature.Test || (ESignature.Test = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Test;
    (function (Test) {
        var EmployeeMasterService;
        (function (EmployeeMasterService) {
            EmployeeMasterService.baseUrl = 'Test/EmployeeMaster';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeMasterService.Methods || (EmployeeMasterService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeMasterService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmployeeMasterService.baseUrl + '/' + x;
            });
        })(EmployeeMasterService = Test.EmployeeMasterService || (Test.EmployeeMasterService = {}));
    })(Test = ESignature.Test || (ESignature.Test = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var VersionInfo;
    (function (VersionInfo) {
        var VersionInfoForm = /** @class */ (function (_super) {
            __extends(VersionInfoForm, _super);
            function VersionInfoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            VersionInfoForm.formKey = 'VersionInfo.VersionInfo';
            return VersionInfoForm;
        }(Serenity.PrefixedContext));
        VersionInfo.VersionInfoForm = VersionInfoForm;
        [,
            ['AppliedOn', function () { return Serenity.DateEditor; }],
            ['Description', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(VersionInfoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VersionInfo = ESignature.VersionInfo || (ESignature.VersionInfo = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var VersionInfo;
    (function (VersionInfo) {
        var VersionInfoRow;
        (function (VersionInfoRow) {
            VersionInfoRow.idProperty = 'Version';
            VersionInfoRow.nameProperty = 'Description';
            VersionInfoRow.localTextPrefix = 'VersionInfo.VersionInfo';
            var Fields;
            (function (Fields) {
            })(Fields = VersionInfoRow.Fields || (VersionInfoRow.Fields = {}));
            [
                'Version',
                'AppliedOn',
                'Description'
            ].forEach(function (x) { return Fields[x] = x; });
        })(VersionInfoRow = VersionInfo.VersionInfoRow || (VersionInfo.VersionInfoRow = {}));
    })(VersionInfo = ESignature.VersionInfo || (ESignature.VersionInfo = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var VersionInfo;
    (function (VersionInfo) {
        var VersionInfoService;
        (function (VersionInfoService) {
            VersionInfoService.baseUrl = 'VersionInfo/VersionInfo';
            var Methods;
            (function (Methods) {
            })(Methods = VersionInfoService.Methods || (VersionInfoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VersionInfoService[x] = function (r, s, o) {
                    return Q.serviceRequest(VersionInfoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = VersionInfoService.baseUrl + '/' + x;
            });
        })(VersionInfoService = VersionInfo.VersionInfoService || (VersionInfo.VersionInfoService = {}));
    })(VersionInfo = ESignature.VersionInfo || (ESignature.VersionInfo = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = ESignature.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = ESignature.LanguageList || (ESignature.LanguageList = {}));
})(ESignature || (ESignature = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var ESignature;
(function (ESignature) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('ESignature');
        Serenity.EntityDialog.defaultLanguageList = ESignature.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = ESignature.ScriptInitialization || (ESignature.ScriptInitialization = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var AccessEmployee;
    (function (AccessEmployee) {
        var EmployeeFunctionCardsDialog = /** @class */ (function (_super) {
            __extends(EmployeeFunctionCardsDialog, _super);
            function EmployeeFunctionCardsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AccessEmployee.EmployeeFunctionCardsForm(_this.idPrefix);
                return _this;
            }
            EmployeeFunctionCardsDialog.prototype.getFormKey = function () { return AccessEmployee.EmployeeFunctionCardsForm.formKey; };
            EmployeeFunctionCardsDialog.prototype.getIdProperty = function () { return AccessEmployee.EmployeeFunctionCardsRow.idProperty; };
            EmployeeFunctionCardsDialog.prototype.getLocalTextPrefix = function () { return AccessEmployee.EmployeeFunctionCardsRow.localTextPrefix; };
            EmployeeFunctionCardsDialog.prototype.getNameProperty = function () { return AccessEmployee.EmployeeFunctionCardsRow.nameProperty; };
            EmployeeFunctionCardsDialog.prototype.getService = function () { return AccessEmployee.EmployeeFunctionCardsService.baseUrl; };
            EmployeeFunctionCardsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeFunctionCardsDialog);
            return EmployeeFunctionCardsDialog;
        }(Serenity.EntityDialog));
        AccessEmployee.EmployeeFunctionCardsDialog = EmployeeFunctionCardsDialog;
    })(AccessEmployee = ESignature.AccessEmployee || (ESignature.AccessEmployee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var AccessEmployee;
    (function (AccessEmployee) {
        var EmployeeFunctionCardsGrid = /** @class */ (function (_super) {
            __extends(EmployeeFunctionCardsGrid, _super);
            function EmployeeFunctionCardsGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeFunctionCardsGrid.prototype.getColumnsKey = function () { return 'AccessEmployee.EmployeeFunctionCards'; };
            EmployeeFunctionCardsGrid.prototype.getDialogType = function () { return AccessEmployee.EmployeeFunctionCardsDialog; };
            EmployeeFunctionCardsGrid.prototype.getIdProperty = function () { return AccessEmployee.EmployeeFunctionCardsRow.idProperty; };
            EmployeeFunctionCardsGrid.prototype.getLocalTextPrefix = function () { return AccessEmployee.EmployeeFunctionCardsRow.localTextPrefix; };
            EmployeeFunctionCardsGrid.prototype.getService = function () { return AccessEmployee.EmployeeFunctionCardsService.baseUrl; };
            EmployeeFunctionCardsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeFunctionCardsGrid);
            return EmployeeFunctionCardsGrid;
        }(Serenity.EntityGrid));
        AccessEmployee.EmployeeFunctionCardsGrid = EmployeeFunctionCardsGrid;
    })(AccessEmployee = ESignature.AccessEmployee || (ESignature.AccessEmployee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyGroupDialog = /** @class */ (function (_super) {
            __extends(CompanyGroupDialog, _super);
            function CompanyGroupDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Admin.CompanyGroupForm(_this.idPrefix);
                return _this;
            }
            CompanyGroupDialog.prototype.getFormKey = function () { return Admin.CompanyGroupForm.formKey; };
            CompanyGroupDialog.prototype.getIdProperty = function () { return Admin.CompanyGroupRow.idProperty; };
            CompanyGroupDialog.prototype.getLocalTextPrefix = function () { return Admin.CompanyGroupRow.localTextPrefix; };
            CompanyGroupDialog.prototype.getNameProperty = function () { return Admin.CompanyGroupRow.nameProperty; };
            CompanyGroupDialog.prototype.getService = function () { return Admin.CompanyGroupService.baseUrl; };
            CompanyGroupDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyGroupDialog);
            return CompanyGroupDialog;
        }(Serenity.EntityDialog));
        Admin.CompanyGroupDialog = CompanyGroupDialog;
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyGroupGrid = /** @class */ (function (_super) {
            __extends(CompanyGroupGrid, _super);
            function CompanyGroupGrid(container) {
                return _super.call(this, container) || this;
            }
            CompanyGroupGrid.prototype.getColumnsKey = function () { return 'Admin.CompanyGroup'; };
            CompanyGroupGrid.prototype.getDialogType = function () { return Admin.CompanyGroupDialog; };
            CompanyGroupGrid.prototype.getIdProperty = function () { return Admin.CompanyGroupRow.idProperty; };
            CompanyGroupGrid.prototype.getLocalTextPrefix = function () { return Admin.CompanyGroupRow.localTextPrefix; };
            CompanyGroupGrid.prototype.getService = function () { return Admin.CompanyGroupService.baseUrl; };
            CompanyGroupGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyGroupGrid);
            return CompanyGroupGrid;
        }(Serenity.EntityGrid));
        Admin.CompanyGroupGrid = CompanyGroupGrid;
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyMasterDialog = /** @class */ (function (_super) {
            __extends(CompanyMasterDialog, _super);
            function CompanyMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Admin.CompanyMasterForm(_this.idPrefix);
                return _this;
            }
            CompanyMasterDialog.prototype.getFormKey = function () { return Admin.CompanyMasterForm.formKey; };
            CompanyMasterDialog.prototype.getIdProperty = function () { return Admin.CompanyMasterRow.idProperty; };
            CompanyMasterDialog.prototype.getLocalTextPrefix = function () { return Admin.CompanyMasterRow.localTextPrefix; };
            CompanyMasterDialog.prototype.getNameProperty = function () { return Admin.CompanyMasterRow.nameProperty; };
            CompanyMasterDialog.prototype.getService = function () { return Admin.CompanyMasterService.baseUrl; };
            CompanyMasterDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CompanyMasterDialog);
            return CompanyMasterDialog;
        }(Serenity.EntityDialog));
        Admin.CompanyMasterDialog = CompanyMasterDialog;
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var CompanyMasterGrid = /** @class */ (function (_super) {
            __extends(CompanyMasterGrid, _super);
            function CompanyMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            CompanyMasterGrid.prototype.getColumnsKey = function () { return 'Admin.CompanyMaster'; };
            CompanyMasterGrid.prototype.getDialogType = function () { return Admin.CompanyMasterDialog; };
            CompanyMasterGrid.prototype.getIdProperty = function () { return Admin.CompanyMasterRow.idProperty; };
            CompanyMasterGrid.prototype.getLocalTextPrefix = function () { return Admin.CompanyMasterRow.localTextPrefix; };
            CompanyMasterGrid.prototype.getService = function () { return Admin.CompanyMasterService.baseUrl; };
            CompanyMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyMasterGrid);
            return CompanyMasterGrid;
        }(Serenity.EntityGrid));
        Admin.CompanyMasterGrid = CompanyMasterGrid;
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var FinancialYearMasterDialog = /** @class */ (function (_super) {
            __extends(FinancialYearMasterDialog, _super);
            function FinancialYearMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Admin.FinancialYearMasterForm(_this.idPrefix);
                return _this;
            }
            FinancialYearMasterDialog.prototype.getFormKey = function () { return Admin.FinancialYearMasterForm.formKey; };
            FinancialYearMasterDialog.prototype.getIdProperty = function () { return Admin.FinancialYearMasterRow.idProperty; };
            FinancialYearMasterDialog.prototype.getLocalTextPrefix = function () { return Admin.FinancialYearMasterRow.localTextPrefix; };
            FinancialYearMasterDialog.prototype.getService = function () { return Admin.FinancialYearMasterService.baseUrl; };
            FinancialYearMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FinancialYearMasterDialog);
            return FinancialYearMasterDialog;
        }(Serenity.EntityDialog));
        Admin.FinancialYearMasterDialog = FinancialYearMasterDialog;
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Admin;
    (function (Admin) {
        var FinancialYearMasterGrid = /** @class */ (function (_super) {
            __extends(FinancialYearMasterGrid, _super);
            function FinancialYearMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            FinancialYearMasterGrid.prototype.getColumnsKey = function () { return 'Admin.FinancialYearMaster'; };
            FinancialYearMasterGrid.prototype.getDialogType = function () { return Admin.FinancialYearMasterDialog; };
            FinancialYearMasterGrid.prototype.getIdProperty = function () { return Admin.FinancialYearMasterRow.idProperty; };
            FinancialYearMasterGrid.prototype.getLocalTextPrefix = function () { return Admin.FinancialYearMasterRow.localTextPrefix; };
            FinancialYearMasterGrid.prototype.getService = function () { return Admin.FinancialYearMasterService.baseUrl; };
            FinancialYearMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FinancialYearMasterGrid);
            return FinancialYearMasterGrid;
        }(Serenity.EntityGrid));
        Admin.FinancialYearMasterGrid = FinancialYearMasterGrid;
    })(Admin = ESignature.Admin || (ESignature.Admin = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = ESignature.Administration || (ESignature.Administration = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var CardPoolDialog = /** @class */ (function (_super) {
            __extends(CardPoolDialog, _super);
            function CardPoolDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CardManagement.CardPoolForm(_this.idPrefix);
                return _this;
            }
            CardPoolDialog.prototype.getFormKey = function () { return CardManagement.CardPoolForm.formKey; };
            CardPoolDialog.prototype.getIdProperty = function () { return CardManagement.CardPoolRow.idProperty; };
            CardPoolDialog.prototype.getLocalTextPrefix = function () { return CardManagement.CardPoolRow.localTextPrefix; };
            CardPoolDialog.prototype.getNameProperty = function () { return CardManagement.CardPoolRow.nameProperty; };
            CardPoolDialog.prototype.getService = function () { return CardManagement.CardPoolService.baseUrl; };
            CardPoolDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CardPoolDialog);
            return CardPoolDialog;
        }(Serenity.EntityDialog));
        CardManagement.CardPoolDialog = CardPoolDialog;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var CardPoolGrid = /** @class */ (function (_super) {
            __extends(CardPoolGrid, _super);
            function CardPoolGrid(container) {
                return _super.call(this, container) || this;
            }
            CardPoolGrid.prototype.getColumnsKey = function () { return 'CardManagement.CardPool'; };
            CardPoolGrid.prototype.getDialogType = function () { return CardManagement.CardPoolDialog; };
            CardPoolGrid.prototype.getIdProperty = function () { return CardManagement.CardPoolRow.idProperty; };
            CardPoolGrid.prototype.getLocalTextPrefix = function () { return CardManagement.CardPoolRow.localTextPrefix; };
            CardPoolGrid.prototype.getService = function () { return CardManagement.CardPoolService.baseUrl; };
            CardPoolGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CardPoolGrid);
            return CardPoolGrid;
        }(Serenity.EntityGrid));
        CardManagement.CardPoolGrid = CardPoolGrid;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardActivityDialog = /** @class */ (function (_super) {
            __extends(MasterCardActivityDialog, _super);
            function MasterCardActivityDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CardManagement.MasterCardActivityForm(_this.idPrefix);
                return _this;
            }
            MasterCardActivityDialog.prototype.getFormKey = function () { return CardManagement.MasterCardActivityForm.formKey; };
            MasterCardActivityDialog.prototype.getIdProperty = function () { return CardManagement.MasterCardActivityRow.idProperty; };
            MasterCardActivityDialog.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardActivityRow.localTextPrefix; };
            MasterCardActivityDialog.prototype.getNameProperty = function () { return CardManagement.MasterCardActivityRow.nameProperty; };
            MasterCardActivityDialog.prototype.getService = function () { return CardManagement.MasterCardActivityService.baseUrl; };
            MasterCardActivityDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardActivityDialog);
            return MasterCardActivityDialog;
        }(Serenity.EntityDialog));
        CardManagement.MasterCardActivityDialog = MasterCardActivityDialog;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardActivityGrid = /** @class */ (function (_super) {
            __extends(MasterCardActivityGrid, _super);
            function MasterCardActivityGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterCardActivityGrid.prototype.getColumnsKey = function () { return 'CardManagement.MasterCardActivity'; };
            MasterCardActivityGrid.prototype.getDialogType = function () { return CardManagement.MasterCardActivityDialog; };
            MasterCardActivityGrid.prototype.getIdProperty = function () { return CardManagement.MasterCardActivityRow.idProperty; };
            MasterCardActivityGrid.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardActivityRow.localTextPrefix; };
            MasterCardActivityGrid.prototype.getService = function () { return CardManagement.MasterCardActivityService.baseUrl; };
            MasterCardActivityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardActivityGrid);
            return MasterCardActivityGrid;
        }(Serenity.EntityGrid));
        CardManagement.MasterCardActivityGrid = MasterCardActivityGrid;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardStatusDialog = /** @class */ (function (_super) {
            __extends(MasterCardStatusDialog, _super);
            function MasterCardStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CardManagement.MasterCardStatusForm(_this.idPrefix);
                return _this;
            }
            MasterCardStatusDialog.prototype.getFormKey = function () { return CardManagement.MasterCardStatusForm.formKey; };
            MasterCardStatusDialog.prototype.getIdProperty = function () { return CardManagement.MasterCardStatusRow.idProperty; };
            MasterCardStatusDialog.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardStatusRow.localTextPrefix; };
            MasterCardStatusDialog.prototype.getNameProperty = function () { return CardManagement.MasterCardStatusRow.nameProperty; };
            MasterCardStatusDialog.prototype.getService = function () { return CardManagement.MasterCardStatusService.baseUrl; };
            MasterCardStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardStatusDialog);
            return MasterCardStatusDialog;
        }(Serenity.EntityDialog));
        CardManagement.MasterCardStatusDialog = MasterCardStatusDialog;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardStatusGrid = /** @class */ (function (_super) {
            __extends(MasterCardStatusGrid, _super);
            function MasterCardStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterCardStatusGrid.prototype.getColumnsKey = function () { return 'CardManagement.MasterCardStatus'; };
            MasterCardStatusGrid.prototype.getDialogType = function () { return CardManagement.MasterCardStatusDialog; };
            MasterCardStatusGrid.prototype.getIdProperty = function () { return CardManagement.MasterCardStatusRow.idProperty; };
            MasterCardStatusGrid.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardStatusRow.localTextPrefix; };
            MasterCardStatusGrid.prototype.getService = function () { return CardManagement.MasterCardStatusService.baseUrl; };
            MasterCardStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardStatusGrid);
            return MasterCardStatusGrid;
        }(Serenity.EntityGrid));
        CardManagement.MasterCardStatusGrid = MasterCardStatusGrid;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTechnologyDialog = /** @class */ (function (_super) {
            __extends(MasterCardTechnologyDialog, _super);
            function MasterCardTechnologyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CardManagement.MasterCardTechnologyForm(_this.idPrefix);
                return _this;
            }
            MasterCardTechnologyDialog.prototype.getFormKey = function () { return CardManagement.MasterCardTechnologyForm.formKey; };
            MasterCardTechnologyDialog.prototype.getIdProperty = function () { return CardManagement.MasterCardTechnologyRow.idProperty; };
            MasterCardTechnologyDialog.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardTechnologyRow.localTextPrefix; };
            MasterCardTechnologyDialog.prototype.getNameProperty = function () { return CardManagement.MasterCardTechnologyRow.nameProperty; };
            MasterCardTechnologyDialog.prototype.getService = function () { return CardManagement.MasterCardTechnologyService.baseUrl; };
            MasterCardTechnologyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardTechnologyDialog);
            return MasterCardTechnologyDialog;
        }(Serenity.EntityDialog));
        CardManagement.MasterCardTechnologyDialog = MasterCardTechnologyDialog;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTechnologyGrid = /** @class */ (function (_super) {
            __extends(MasterCardTechnologyGrid, _super);
            function MasterCardTechnologyGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterCardTechnologyGrid.prototype.getColumnsKey = function () { return 'CardManagement.MasterCardTechnology'; };
            MasterCardTechnologyGrid.prototype.getDialogType = function () { return CardManagement.MasterCardTechnologyDialog; };
            MasterCardTechnologyGrid.prototype.getIdProperty = function () { return CardManagement.MasterCardTechnologyRow.idProperty; };
            MasterCardTechnologyGrid.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardTechnologyRow.localTextPrefix; };
            MasterCardTechnologyGrid.prototype.getService = function () { return CardManagement.MasterCardTechnologyService.baseUrl; };
            MasterCardTechnologyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardTechnologyGrid);
            return MasterCardTechnologyGrid;
        }(Serenity.EntityGrid));
        CardManagement.MasterCardTechnologyGrid = MasterCardTechnologyGrid;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTypeDialog = /** @class */ (function (_super) {
            __extends(MasterCardTypeDialog, _super);
            function MasterCardTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CardManagement.MasterCardTypeForm(_this.idPrefix);
                return _this;
            }
            MasterCardTypeDialog.prototype.getFormKey = function () { return CardManagement.MasterCardTypeForm.formKey; };
            MasterCardTypeDialog.prototype.getIdProperty = function () { return CardManagement.MasterCardTypeRow.idProperty; };
            MasterCardTypeDialog.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardTypeRow.localTextPrefix; };
            MasterCardTypeDialog.prototype.getNameProperty = function () { return CardManagement.MasterCardTypeRow.nameProperty; };
            MasterCardTypeDialog.prototype.getService = function () { return CardManagement.MasterCardTypeService.baseUrl; };
            MasterCardTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardTypeDialog);
            return MasterCardTypeDialog;
        }(Serenity.EntityDialog));
        CardManagement.MasterCardTypeDialog = MasterCardTypeDialog;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardTypeGrid = /** @class */ (function (_super) {
            __extends(MasterCardTypeGrid, _super);
            function MasterCardTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterCardTypeGrid.prototype.getColumnsKey = function () { return 'CardManagement.MasterCardType'; };
            MasterCardTypeGrid.prototype.getDialogType = function () { return CardManagement.MasterCardTypeDialog; };
            MasterCardTypeGrid.prototype.getIdProperty = function () { return CardManagement.MasterCardTypeRow.idProperty; };
            MasterCardTypeGrid.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardTypeRow.localTextPrefix; };
            MasterCardTypeGrid.prototype.getService = function () { return CardManagement.MasterCardTypeService.baseUrl; };
            MasterCardTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardTypeGrid);
            return MasterCardTypeGrid;
        }(Serenity.EntityGrid));
        CardManagement.MasterCardTypeGrid = MasterCardTypeGrid;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardUseTypeDialog = /** @class */ (function (_super) {
            __extends(MasterCardUseTypeDialog, _super);
            function MasterCardUseTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CardManagement.MasterCardUseTypeForm(_this.idPrefix);
                return _this;
            }
            MasterCardUseTypeDialog.prototype.getFormKey = function () { return CardManagement.MasterCardUseTypeForm.formKey; };
            MasterCardUseTypeDialog.prototype.getIdProperty = function () { return CardManagement.MasterCardUseTypeRow.idProperty; };
            MasterCardUseTypeDialog.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardUseTypeRow.localTextPrefix; };
            MasterCardUseTypeDialog.prototype.getNameProperty = function () { return CardManagement.MasterCardUseTypeRow.nameProperty; };
            MasterCardUseTypeDialog.prototype.getService = function () { return CardManagement.MasterCardUseTypeService.baseUrl; };
            MasterCardUseTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardUseTypeDialog);
            return MasterCardUseTypeDialog;
        }(Serenity.EntityDialog));
        CardManagement.MasterCardUseTypeDialog = MasterCardUseTypeDialog;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var CardManagement;
    (function (CardManagement) {
        var MasterCardUseTypeGrid = /** @class */ (function (_super) {
            __extends(MasterCardUseTypeGrid, _super);
            function MasterCardUseTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterCardUseTypeGrid.prototype.getColumnsKey = function () { return 'CardManagement.MasterCardUseType'; };
            MasterCardUseTypeGrid.prototype.getDialogType = function () { return CardManagement.MasterCardUseTypeDialog; };
            MasterCardUseTypeGrid.prototype.getIdProperty = function () { return CardManagement.MasterCardUseTypeRow.idProperty; };
            MasterCardUseTypeGrid.prototype.getLocalTextPrefix = function () { return CardManagement.MasterCardUseTypeRow.localTextPrefix; };
            MasterCardUseTypeGrid.prototype.getService = function () { return CardManagement.MasterCardUseTypeService.baseUrl; };
            MasterCardUseTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterCardUseTypeGrid);
            return MasterCardUseTypeGrid;
        }(Serenity.EntityGrid));
        CardManagement.MasterCardUseTypeGrid = MasterCardUseTypeGrid;
    })(CardManagement = ESignature.CardManagement || (ESignature.CardManagement = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    ESignature.BasicProgressDialog = BasicProgressDialog;
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new ESignature.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = ESignature.DialogUtils || (ESignature.DialogUtils = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    ESignature.StaticTextBlock = StaticTextBlock;
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = ESignature.Common || (ESignature.Common = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Controller;
    (function (Controller) {
        var ControllerAuthenticationTypeDialog = /** @class */ (function (_super) {
            __extends(ControllerAuthenticationTypeDialog, _super);
            function ControllerAuthenticationTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Controller.ControllerAuthenticationTypeForm(_this.idPrefix);
                return _this;
            }
            ControllerAuthenticationTypeDialog.prototype.getFormKey = function () { return Controller.ControllerAuthenticationTypeForm.formKey; };
            ControllerAuthenticationTypeDialog.prototype.getIdProperty = function () { return Controller.ControllerAuthenticationTypeRow.idProperty; };
            ControllerAuthenticationTypeDialog.prototype.getLocalTextPrefix = function () { return Controller.ControllerAuthenticationTypeRow.localTextPrefix; };
            ControllerAuthenticationTypeDialog.prototype.getNameProperty = function () { return Controller.ControllerAuthenticationTypeRow.nameProperty; };
            ControllerAuthenticationTypeDialog.prototype.getService = function () { return Controller.ControllerAuthenticationTypeService.baseUrl; };
            ControllerAuthenticationTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ControllerAuthenticationTypeDialog);
            return ControllerAuthenticationTypeDialog;
        }(Serenity.EntityDialog));
        Controller.ControllerAuthenticationTypeDialog = ControllerAuthenticationTypeDialog;
    })(Controller = ESignature.Controller || (ESignature.Controller = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Controller;
    (function (Controller) {
        var ControllerAuthenticationTypeGrid = /** @class */ (function (_super) {
            __extends(ControllerAuthenticationTypeGrid, _super);
            function ControllerAuthenticationTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            ControllerAuthenticationTypeGrid.prototype.getColumnsKey = function () { return 'Controller.ControllerAuthenticationType'; };
            ControllerAuthenticationTypeGrid.prototype.getDialogType = function () { return Controller.ControllerAuthenticationTypeDialog; };
            ControllerAuthenticationTypeGrid.prototype.getIdProperty = function () { return Controller.ControllerAuthenticationTypeRow.idProperty; };
            ControllerAuthenticationTypeGrid.prototype.getLocalTextPrefix = function () { return Controller.ControllerAuthenticationTypeRow.localTextPrefix; };
            ControllerAuthenticationTypeGrid.prototype.getService = function () { return Controller.ControllerAuthenticationTypeService.baseUrl; };
            ControllerAuthenticationTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ControllerAuthenticationTypeGrid);
            return ControllerAuthenticationTypeGrid;
        }(Serenity.EntityGrid));
        Controller.ControllerAuthenticationTypeGrid = ControllerAuthenticationTypeGrid;
    })(Controller = ESignature.Controller || (ESignature.Controller = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyLocationsDialog = /** @class */ (function (_super) {
            __extends(CompanyLocationsDialog, _super);
            function CompanyLocationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CompanyLocationsForm(_this.idPrefix);
                return _this;
            }
            CompanyLocationsDialog.prototype.getFormKey = function () { return Default.CompanyLocationsForm.formKey; };
            CompanyLocationsDialog.prototype.getIdProperty = function () { return Default.CompanyLocationsRow.idProperty; };
            CompanyLocationsDialog.prototype.getLocalTextPrefix = function () { return Default.CompanyLocationsRow.localTextPrefix; };
            CompanyLocationsDialog.prototype.getService = function () { return Default.CompanyLocationsService.baseUrl; };
            CompanyLocationsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyLocationsDialog);
            return CompanyLocationsDialog;
        }(Serenity.EntityDialog));
        Default.CompanyLocationsDialog = CompanyLocationsDialog;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var CompanyLocationsGrid = /** @class */ (function (_super) {
            __extends(CompanyLocationsGrid, _super);
            function CompanyLocationsGrid(container) {
                return _super.call(this, container) || this;
            }
            CompanyLocationsGrid.prototype.getColumnsKey = function () { return 'Default.CompanyLocations'; };
            CompanyLocationsGrid.prototype.getDialogType = function () { return Default.CompanyLocationsDialog; };
            CompanyLocationsGrid.prototype.getIdProperty = function () { return Default.CompanyLocationsRow.idProperty; };
            CompanyLocationsGrid.prototype.getLocalTextPrefix = function () { return Default.CompanyLocationsRow.localTextPrefix; };
            CompanyLocationsGrid.prototype.getService = function () { return Default.CompanyLocationsService.baseUrl; };
            CompanyLocationsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/CompanyLocations/ListExcel',
                    separator: true
                }));
                buttons.push(ESignature.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CompanyLocationsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyLocationsGrid);
            return CompanyLocationsGrid;
        }(Serenity.EntityGrid));
        Default.CompanyLocationsGrid = CompanyLocationsGrid;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DepartmentsDialog = /** @class */ (function (_super) {
            __extends(DepartmentsDialog, _super);
            function DepartmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DepartmentsForm(_this.idPrefix);
                return _this;
            }
            DepartmentsDialog.prototype.getFormKey = function () { return Default.DepartmentsForm.formKey; };
            DepartmentsDialog.prototype.getIdProperty = function () { return Default.DepartmentsRow.idProperty; };
            DepartmentsDialog.prototype.getLocalTextPrefix = function () { return Default.DepartmentsRow.localTextPrefix; };
            DepartmentsDialog.prototype.getNameProperty = function () { return Default.DepartmentsRow.nameProperty; };
            DepartmentsDialog.prototype.getService = function () { return Default.DepartmentsService.baseUrl; };
            DepartmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentsDialog);
            return DepartmentsDialog;
        }(Serenity.EntityDialog));
        Default.DepartmentsDialog = DepartmentsDialog;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DepartmentsGrid = /** @class */ (function (_super) {
            __extends(DepartmentsGrid, _super);
            function DepartmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            DepartmentsGrid.prototype.getColumnsKey = function () { return 'Default.Departments'; };
            DepartmentsGrid.prototype.getDialogType = function () { return Default.DepartmentsDialog; };
            DepartmentsGrid.prototype.getIdProperty = function () { return Default.DepartmentsRow.idProperty; };
            DepartmentsGrid.prototype.getLocalTextPrefix = function () { return Default.DepartmentsRow.localTextPrefix; };
            DepartmentsGrid.prototype.getService = function () { return Default.DepartmentsService.baseUrl; };
            DepartmentsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Departments/ListExcel',
                    separator: true
                }));
                buttons.push(ESignature.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            DepartmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentsGrid);
            return DepartmentsGrid;
        }(Serenity.EntityGrid));
        Default.DepartmentsGrid = DepartmentsGrid;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DesignationsDialog = /** @class */ (function (_super) {
            __extends(DesignationsDialog, _super);
            function DesignationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DesignationsForm(_this.idPrefix);
                return _this;
            }
            DesignationsDialog.prototype.getFormKey = function () { return Default.DesignationsForm.formKey; };
            DesignationsDialog.prototype.getIdProperty = function () { return Default.DesignationsRow.idProperty; };
            DesignationsDialog.prototype.getLocalTextPrefix = function () { return Default.DesignationsRow.localTextPrefix; };
            DesignationsDialog.prototype.getNameProperty = function () { return Default.DesignationsRow.nameProperty; };
            DesignationsDialog.prototype.getService = function () { return Default.DesignationsService.baseUrl; };
            DesignationsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DesignationsDialog);
            return DesignationsDialog;
        }(Serenity.EntityDialog));
        Default.DesignationsDialog = DesignationsDialog;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DesignationsGrid = /** @class */ (function (_super) {
            __extends(DesignationsGrid, _super);
            function DesignationsGrid(container) {
                return _super.call(this, container) || this;
            }
            DesignationsGrid.prototype.getColumnsKey = function () { return 'Default.Designations'; };
            DesignationsGrid.prototype.getDialogType = function () { return Default.DesignationsDialog; };
            DesignationsGrid.prototype.getIdProperty = function () { return Default.DesignationsRow.idProperty; };
            DesignationsGrid.prototype.getLocalTextPrefix = function () { return Default.DesignationsRow.localTextPrefix; };
            DesignationsGrid.prototype.getService = function () { return Default.DesignationsService.baseUrl; };
            DesignationsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Designations/ListExcel',
                    separator: true
                }));
                buttons.push(ESignature.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            DesignationsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DesignationsGrid);
            return DesignationsGrid;
        }(Serenity.EntityGrid));
        Default.DesignationsGrid = DesignationsGrid;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DivisionMasterDialog = /** @class */ (function (_super) {
            __extends(DivisionMasterDialog, _super);
            function DivisionMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DivisionMasterForm(_this.idPrefix);
                return _this;
            }
            DivisionMasterDialog.prototype.getFormKey = function () { return Default.DivisionMasterForm.formKey; };
            DivisionMasterDialog.prototype.getIdProperty = function () { return Default.DivisionMasterRow.idProperty; };
            DivisionMasterDialog.prototype.getLocalTextPrefix = function () { return Default.DivisionMasterRow.localTextPrefix; };
            DivisionMasterDialog.prototype.getNameProperty = function () { return Default.DivisionMasterRow.nameProperty; };
            DivisionMasterDialog.prototype.getService = function () { return Default.DivisionMasterService.baseUrl; };
            DivisionMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DivisionMasterDialog);
            return DivisionMasterDialog;
        }(Serenity.EntityDialog));
        Default.DivisionMasterDialog = DivisionMasterDialog;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var DivisionMasterGrid = /** @class */ (function (_super) {
            __extends(DivisionMasterGrid, _super);
            function DivisionMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            DivisionMasterGrid.prototype.getColumnsKey = function () { return 'Default.DivisionMaster'; };
            DivisionMasterGrid.prototype.getDialogType = function () { return Default.DivisionMasterDialog; };
            DivisionMasterGrid.prototype.getIdProperty = function () { return Default.DivisionMasterRow.idProperty; };
            DivisionMasterGrid.prototype.getLocalTextPrefix = function () { return Default.DivisionMasterRow.localTextPrefix; };
            DivisionMasterGrid.prototype.getService = function () { return Default.DivisionMasterService.baseUrl; };
            DivisionMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DivisionMasterGrid);
            return DivisionMasterGrid;
        }(Serenity.EntityGrid));
        Default.DivisionMasterGrid = DivisionMasterGrid;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var LocationMasterDialog = /** @class */ (function (_super) {
            __extends(LocationMasterDialog, _super);
            function LocationMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.LocationMasterForm(_this.idPrefix);
                return _this;
            }
            LocationMasterDialog.prototype.getFormKey = function () { return Default.LocationMasterForm.formKey; };
            LocationMasterDialog.prototype.getIdProperty = function () { return Default.LocationMasterRow.idProperty; };
            LocationMasterDialog.prototype.getLocalTextPrefix = function () { return Default.LocationMasterRow.localTextPrefix; };
            LocationMasterDialog.prototype.getNameProperty = function () { return Default.LocationMasterRow.nameProperty; };
            LocationMasterDialog.prototype.getService = function () { return Default.LocationMasterService.baseUrl; };
            LocationMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationMasterDialog);
            return LocationMasterDialog;
        }(Serenity.EntityDialog));
        Default.LocationMasterDialog = LocationMasterDialog;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var LocationMasterGrid = /** @class */ (function (_super) {
            __extends(LocationMasterGrid, _super);
            function LocationMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            LocationMasterGrid.prototype.getColumnsKey = function () { return 'Default.LocationMaster'; };
            LocationMasterGrid.prototype.getDialogType = function () { return Default.LocationMasterDialog; };
            LocationMasterGrid.prototype.getIdProperty = function () { return Default.LocationMasterRow.idProperty; };
            LocationMasterGrid.prototype.getLocalTextPrefix = function () { return Default.LocationMasterRow.localTextPrefix; };
            LocationMasterGrid.prototype.getService = function () { return Default.LocationMasterService.baseUrl; };
            LocationMasterGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/LocationMaster/ListExcel',
                    separator: true
                }));
                buttons.push(ESignature.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            LocationMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationMasterGrid);
            return LocationMasterGrid;
        }(Serenity.EntityGrid));
        Default.LocationMasterGrid = LocationMasterGrid;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var SubDepartmentsDialog = /** @class */ (function (_super) {
            __extends(SubDepartmentsDialog, _super);
            function SubDepartmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.SubDepartmentsForm(_this.idPrefix);
                return _this;
            }
            SubDepartmentsDialog.prototype.getFormKey = function () { return Default.SubDepartmentsForm.formKey; };
            SubDepartmentsDialog.prototype.getIdProperty = function () { return Default.SubDepartmentsRow.idProperty; };
            SubDepartmentsDialog.prototype.getLocalTextPrefix = function () { return Default.SubDepartmentsRow.localTextPrefix; };
            SubDepartmentsDialog.prototype.getNameProperty = function () { return Default.SubDepartmentsRow.nameProperty; };
            SubDepartmentsDialog.prototype.getService = function () { return Default.SubDepartmentsService.baseUrl; };
            SubDepartmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SubDepartmentsDialog);
            return SubDepartmentsDialog;
        }(Serenity.EntityDialog));
        Default.SubDepartmentsDialog = SubDepartmentsDialog;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Default;
    (function (Default) {
        var SubDepartmentsGrid = /** @class */ (function (_super) {
            __extends(SubDepartmentsGrid, _super);
            function SubDepartmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            SubDepartmentsGrid.prototype.getColumnsKey = function () { return 'Default.SubDepartments'; };
            SubDepartmentsGrid.prototype.getDialogType = function () { return Default.SubDepartmentsDialog; };
            SubDepartmentsGrid.prototype.getIdProperty = function () { return Default.SubDepartmentsRow.idProperty; };
            SubDepartmentsGrid.prototype.getLocalTextPrefix = function () { return Default.SubDepartmentsRow.localTextPrefix; };
            SubDepartmentsGrid.prototype.getService = function () { return Default.SubDepartmentsService.baseUrl; };
            SubDepartmentsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/SubDepartments/ListExcel',
                    separator: true
                }));
                buttons.push(ESignature.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            SubDepartmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SubDepartmentsGrid);
            return SubDepartmentsGrid;
        }(Serenity.EntityGrid));
        Default.SubDepartmentsGrid = SubDepartmentsGrid;
    })(Default = ESignature.Default || (ESignature.Default = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Employee;
    (function (Employee) {
        var EmployeeMasterDialog = /** @class */ (function (_super) {
            __extends(EmployeeMasterDialog, _super);
            function EmployeeMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Employee.EmployeeMasterForm(_this.idPrefix);
                return _this;
            }
            EmployeeMasterDialog.prototype.getFormKey = function () { return Employee.EmployeeMasterForm.formKey; };
            EmployeeMasterDialog.prototype.getIdProperty = function () { return Employee.EmployeeMasterRow.idProperty; };
            EmployeeMasterDialog.prototype.getLocalTextPrefix = function () { return Employee.EmployeeMasterRow.localTextPrefix; };
            EmployeeMasterDialog.prototype.getNameProperty = function () { return Employee.EmployeeMasterRow.nameProperty; };
            EmployeeMasterDialog.prototype.getService = function () { return Employee.EmployeeMasterService.baseUrl; };
            EmployeeMasterDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], EmployeeMasterDialog);
            return EmployeeMasterDialog;
        }(Serenity.EntityDialog));
        Employee.EmployeeMasterDialog = EmployeeMasterDialog;
    })(Employee = ESignature.Employee || (ESignature.Employee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Employee;
    (function (Employee) {
        var EmployeeMasterGrid = /** @class */ (function (_super) {
            __extends(EmployeeMasterGrid, _super);
            function EmployeeMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeMasterGrid.prototype.getColumnsKey = function () { return 'Employee.EmployeeMaster'; };
            EmployeeMasterGrid.prototype.getDialogType = function () { return Employee.EmployeeMasterDialog; };
            EmployeeMasterGrid.prototype.getIdProperty = function () { return Employee.EmployeeMasterRow.idProperty; };
            EmployeeMasterGrid.prototype.getLocalTextPrefix = function () { return Employee.EmployeeMasterRow.localTextPrefix; };
            EmployeeMasterGrid.prototype.getService = function () { return Employee.EmployeeMasterService.baseUrl; };
            EmployeeMasterGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Employee/EmployeeMaster/ListExcel',
                    separator: true
                }));
                buttons.push(ESignature.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            EmployeeMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeMasterGrid);
            return EmployeeMasterGrid;
        }(Serenity.EntityGrid));
        Employee.EmployeeMasterGrid = EmployeeMasterGrid;
    })(Employee = ESignature.Employee || (ESignature.Employee = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var BloodGroupsDialog = /** @class */ (function (_super) {
            __extends(BloodGroupsDialog, _super);
            function BloodGroupsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.BloodGroupsForm(_this.idPrefix);
                return _this;
            }
            BloodGroupsDialog.prototype.getFormKey = function () { return Master.BloodGroupsForm.formKey; };
            BloodGroupsDialog.prototype.getIdProperty = function () { return Master.BloodGroupsRow.idProperty; };
            BloodGroupsDialog.prototype.getLocalTextPrefix = function () { return Master.BloodGroupsRow.localTextPrefix; };
            BloodGroupsDialog.prototype.getNameProperty = function () { return Master.BloodGroupsRow.nameProperty; };
            BloodGroupsDialog.prototype.getService = function () { return Master.BloodGroupsService.baseUrl; };
            BloodGroupsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BloodGroupsDialog);
            return BloodGroupsDialog;
        }(Serenity.EntityDialog));
        Master.BloodGroupsDialog = BloodGroupsDialog;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var BloodGroupsGrid = /** @class */ (function (_super) {
            __extends(BloodGroupsGrid, _super);
            function BloodGroupsGrid(container) {
                return _super.call(this, container) || this;
            }
            BloodGroupsGrid.prototype.getColumnsKey = function () { return 'Master.BloodGroups'; };
            BloodGroupsGrid.prototype.getDialogType = function () { return Master.BloodGroupsDialog; };
            BloodGroupsGrid.prototype.getIdProperty = function () { return Master.BloodGroupsRow.idProperty; };
            BloodGroupsGrid.prototype.getLocalTextPrefix = function () { return Master.BloodGroupsRow.localTextPrefix; };
            BloodGroupsGrid.prototype.getService = function () { return Master.BloodGroupsService.baseUrl; };
            BloodGroupsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BloodGroupsGrid);
            return BloodGroupsGrid;
        }(Serenity.EntityGrid));
        Master.BloodGroupsGrid = BloodGroupsGrid;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmployeeTypeDialog = /** @class */ (function (_super) {
            __extends(EmployeeTypeDialog, _super);
            function EmployeeTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.EmployeeTypeForm(_this.idPrefix);
                return _this;
            }
            EmployeeTypeDialog.prototype.getFormKey = function () { return Master.EmployeeTypeForm.formKey; };
            EmployeeTypeDialog.prototype.getIdProperty = function () { return Master.EmployeeTypeRow.idProperty; };
            EmployeeTypeDialog.prototype.getLocalTextPrefix = function () { return Master.EmployeeTypeRow.localTextPrefix; };
            EmployeeTypeDialog.prototype.getNameProperty = function () { return Master.EmployeeTypeRow.nameProperty; };
            EmployeeTypeDialog.prototype.getService = function () { return Master.EmployeeTypeService.baseUrl; };
            EmployeeTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeTypeDialog);
            return EmployeeTypeDialog;
        }(Serenity.EntityDialog));
        Master.EmployeeTypeDialog = EmployeeTypeDialog;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmployeeTypeGrid = /** @class */ (function (_super) {
            __extends(EmployeeTypeGrid, _super);
            function EmployeeTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeTypeGrid.prototype.getColumnsKey = function () { return 'Master.EmployeeType'; };
            EmployeeTypeGrid.prototype.getDialogType = function () { return Master.EmployeeTypeDialog; };
            EmployeeTypeGrid.prototype.getIdProperty = function () { return Master.EmployeeTypeRow.idProperty; };
            EmployeeTypeGrid.prototype.getLocalTextPrefix = function () { return Master.EmployeeTypeRow.localTextPrefix; };
            EmployeeTypeGrid.prototype.getService = function () { return Master.EmployeeTypeService.baseUrl; };
            EmployeeTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeTypeGrid);
            return EmployeeTypeGrid;
        }(Serenity.EntityGrid));
        Master.EmployeeTypeGrid = EmployeeTypeGrid;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmploymentTypesDialog = /** @class */ (function (_super) {
            __extends(EmploymentTypesDialog, _super);
            function EmploymentTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.EmploymentTypesForm(_this.idPrefix);
                return _this;
            }
            EmploymentTypesDialog.prototype.getFormKey = function () { return Master.EmploymentTypesForm.formKey; };
            EmploymentTypesDialog.prototype.getIdProperty = function () { return Master.EmploymentTypesRow.idProperty; };
            EmploymentTypesDialog.prototype.getLocalTextPrefix = function () { return Master.EmploymentTypesRow.localTextPrefix; };
            EmploymentTypesDialog.prototype.getNameProperty = function () { return Master.EmploymentTypesRow.nameProperty; };
            EmploymentTypesDialog.prototype.getService = function () { return Master.EmploymentTypesService.baseUrl; };
            EmploymentTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmploymentTypesDialog);
            return EmploymentTypesDialog;
        }(Serenity.EntityDialog));
        Master.EmploymentTypesDialog = EmploymentTypesDialog;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var EmploymentTypesGrid = /** @class */ (function (_super) {
            __extends(EmploymentTypesGrid, _super);
            function EmploymentTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmploymentTypesGrid.prototype.getColumnsKey = function () { return 'Master.EmploymentTypes'; };
            EmploymentTypesGrid.prototype.getDialogType = function () { return Master.EmploymentTypesDialog; };
            EmploymentTypesGrid.prototype.getIdProperty = function () { return Master.EmploymentTypesRow.idProperty; };
            EmploymentTypesGrid.prototype.getLocalTextPrefix = function () { return Master.EmploymentTypesRow.localTextPrefix; };
            EmploymentTypesGrid.prototype.getService = function () { return Master.EmploymentTypesService.baseUrl; };
            EmploymentTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmploymentTypesGrid);
            return EmploymentTypesGrid;
        }(Serenity.EntityGrid));
        Master.EmploymentTypesGrid = EmploymentTypesGrid;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var GenderDialog = /** @class */ (function (_super) {
            __extends(GenderDialog, _super);
            function GenderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.GenderForm(_this.idPrefix);
                return _this;
            }
            GenderDialog.prototype.getFormKey = function () { return Master.GenderForm.formKey; };
            GenderDialog.prototype.getIdProperty = function () { return Master.GenderRow.idProperty; };
            GenderDialog.prototype.getLocalTextPrefix = function () { return Master.GenderRow.localTextPrefix; };
            GenderDialog.prototype.getNameProperty = function () { return Master.GenderRow.nameProperty; };
            GenderDialog.prototype.getService = function () { return Master.GenderService.baseUrl; };
            GenderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GenderDialog);
            return GenderDialog;
        }(Serenity.EntityDialog));
        Master.GenderDialog = GenderDialog;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var GenderGrid = /** @class */ (function (_super) {
            __extends(GenderGrid, _super);
            function GenderGrid(container) {
                return _super.call(this, container) || this;
            }
            GenderGrid.prototype.getColumnsKey = function () { return 'Master.Gender'; };
            GenderGrid.prototype.getDialogType = function () { return Master.GenderDialog; };
            GenderGrid.prototype.getIdProperty = function () { return Master.GenderRow.idProperty; };
            GenderGrid.prototype.getLocalTextPrefix = function () { return Master.GenderRow.localTextPrefix; };
            GenderGrid.prototype.getService = function () { return Master.GenderService.baseUrl; };
            GenderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GenderGrid);
            return GenderGrid;
        }(Serenity.EntityGrid));
        Master.GenderGrid = GenderGrid;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var MaretialStatusDialog = /** @class */ (function (_super) {
            __extends(MaretialStatusDialog, _super);
            function MaretialStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MaretialStatusForm(_this.idPrefix);
                return _this;
            }
            MaretialStatusDialog.prototype.getFormKey = function () { return Master.MaretialStatusForm.formKey; };
            MaretialStatusDialog.prototype.getIdProperty = function () { return Master.MaretialStatusRow.idProperty; };
            MaretialStatusDialog.prototype.getLocalTextPrefix = function () { return Master.MaretialStatusRow.localTextPrefix; };
            MaretialStatusDialog.prototype.getNameProperty = function () { return Master.MaretialStatusRow.nameProperty; };
            MaretialStatusDialog.prototype.getService = function () { return Master.MaretialStatusService.baseUrl; };
            MaretialStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaretialStatusDialog);
            return MaretialStatusDialog;
        }(Serenity.EntityDialog));
        Master.MaretialStatusDialog = MaretialStatusDialog;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var MaretialStatusGrid = /** @class */ (function (_super) {
            __extends(MaretialStatusGrid, _super);
            function MaretialStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            MaretialStatusGrid.prototype.getColumnsKey = function () { return 'Master.MaretialStatus'; };
            MaretialStatusGrid.prototype.getDialogType = function () { return Master.MaretialStatusDialog; };
            MaretialStatusGrid.prototype.getIdProperty = function () { return Master.MaretialStatusRow.idProperty; };
            MaretialStatusGrid.prototype.getLocalTextPrefix = function () { return Master.MaretialStatusRow.localTextPrefix; };
            MaretialStatusGrid.prototype.getService = function () { return Master.MaretialStatusService.baseUrl; };
            MaretialStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaretialStatusGrid);
            return MaretialStatusGrid;
        }(Serenity.EntityGrid));
        Master.MaretialStatusGrid = MaretialStatusGrid;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var SalutationDialog = /** @class */ (function (_super) {
            __extends(SalutationDialog, _super);
            function SalutationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.SalutationForm(_this.idPrefix);
                return _this;
            }
            SalutationDialog.prototype.getFormKey = function () { return Master.SalutationForm.formKey; };
            SalutationDialog.prototype.getIdProperty = function () { return Master.SalutationRow.idProperty; };
            SalutationDialog.prototype.getLocalTextPrefix = function () { return Master.SalutationRow.localTextPrefix; };
            SalutationDialog.prototype.getNameProperty = function () { return Master.SalutationRow.nameProperty; };
            SalutationDialog.prototype.getService = function () { return Master.SalutationService.baseUrl; };
            SalutationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalutationDialog);
            return SalutationDialog;
        }(Serenity.EntityDialog));
        Master.SalutationDialog = SalutationDialog;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Master;
    (function (Master) {
        var SalutationGrid = /** @class */ (function (_super) {
            __extends(SalutationGrid, _super);
            function SalutationGrid(container) {
                return _super.call(this, container) || this;
            }
            SalutationGrid.prototype.getColumnsKey = function () { return 'Master.Salutation'; };
            SalutationGrid.prototype.getDialogType = function () { return Master.SalutationDialog; };
            SalutationGrid.prototype.getIdProperty = function () { return Master.SalutationRow.idProperty; };
            SalutationGrid.prototype.getLocalTextPrefix = function () { return Master.SalutationRow.localTextPrefix; };
            SalutationGrid.prototype.getService = function () { return Master.SalutationService.baseUrl; };
            SalutationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalutationGrid);
            return SalutationGrid;
        }(Serenity.EntityGrid));
        Master.SalutationGrid = SalutationGrid;
    })(Master = ESignature.Master || (ESignature.Master = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = ESignature.Authorization || (ESignature.Authorization = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = ESignature.Membership || (ESignature.Membership = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = ESignature.Membership || (ESignature.Membership = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = ESignature.Membership || (ESignature.Membership = {}));
})(ESignature || (ESignature = {}));
var ESignature;
(function (ESignature) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = ESignature.Membership || (ESignature.Membership = {}));
})(ESignature || (ESignature = {}));
//# sourceMappingURL=ESignature.Web.js.map