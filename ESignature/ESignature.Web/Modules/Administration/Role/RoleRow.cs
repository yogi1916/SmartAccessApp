
namespace ESignature.Administration.Entities
{
    using ESignature.Admin.Entities;
    using ESignature.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartCommandControl.Northwind.Lookups;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Administration"), TableName("Roles")]
    [DisplayName("Roles"), InstanceName("Role")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    [LookupScript]
    public sealed class RoleRow : Row, IIdRow, INameRow
    {
        [DisplayName("Role Id"), Identity, ForeignKey("Roles", "RoleId"), LeftJoin("jRole")]
        public Int32? RoleId
        {
            get { return Fields.RoleId[this]; }
            set { Fields.RoleId[this] = value; }
        }

        [DisplayName("Role Name"), Size(100), NotNull, QuickSearch]
        public String RoleName
        {
            get { return Fields.RoleName[this]; }
            set { Fields.RoleName[this] = value; }
        }
        [DisplayName("Company"), Size(15), LookupEditor(typeof(CompanyMasterRow), AutoComplete = true)]
        public Int32? CompnayMasterID
        {
            get { return Fields.CompnayMasterID[this]; }
            set { Fields.CompnayMasterID[this] = value; }
        }
        [DisplayName("Locations"), LookupEditor(typeof(CompanyLocationsRow), Multiple = true, Delimited = true, OpenDialogAsPanel = true)]
        public String Locations
        {
            get { return Fields.Locations[this]; }
            set { Fields.Locations[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RoleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RoleName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RoleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RoleId;
            public StringField RoleName;

            public Int32Field CompnayMasterID;
            public StringField Locations;
        }
    }
}