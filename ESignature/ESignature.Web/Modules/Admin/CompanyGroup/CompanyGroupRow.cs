
namespace ESignature.Admin.Entities
{
    using ESignature.Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Admin"), TableName("[dbo].[CompanyGroup]")]
    [DisplayName("Company Group"), InstanceName("Company Group")]
    [ReadPermission(PermissionKeys.CompanyGroup.View)]
    [ModifyPermission(PermissionKeys.CompanyGroup.Modify)]
    [DeletePermission(PermissionKeys.CompanyGroup.Delete)]
    [LookupScript]
    public sealed class CompanyGroupRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Group Id"), Column("CompanyGroupID"), Identity]
        public Int32? CompanyGroupId
        {
            get { return Fields.CompanyGroupId[this]; }
            set { Fields.CompanyGroupId[this] = value; }
        }

        [DisplayName("Group Name"), Size(100), NotNull, QuickSearch]
        public String GroupName
        {
            get { return Fields.GroupName[this]; }
            set { Fields.GroupName[this] = value; }
        }

        [DisplayName("Created Dete Time"), NotNull]
        public DateTime? CreatedDeteTime
        {
            get { return Fields.CreatedDeteTime[this]; }
            set { Fields.CreatedDeteTime[this] = value; }
        }

        [DisplayName("Mark Deleted"), NotNull]
        public Boolean? MarkDeleted
        {
            get { return Fields.MarkDeleted[this]; }
            set { Fields.MarkDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CompanyGroupId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GroupName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompanyGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CompanyGroupId;
            public StringField GroupName;
            public DateTimeField CreatedDeteTime;
            public BooleanField MarkDeleted;
        }
    }
}
