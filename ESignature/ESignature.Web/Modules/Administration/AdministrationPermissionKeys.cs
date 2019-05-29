
using Serenity.Extensibility;
using System.ComponentModel;

namespace ESignature.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("[General]")]
        public const string General = "Northwind:General";

        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [DisplayName("Company Group ")]
        public class CompanyGroup
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Admin:CompanyGroup:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Admin:CompanyGroup:Modify";
            public const string View = "Admin:CompanyGroup:View";
        }

        [DisplayName("Company Master ")]
        public class CompanyMaster
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Admin:CompanyMaster:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Admin:CompanyMaster:Modify";
            public const string View = "Admin:CompanyMaster:View";
        }
    }
}
