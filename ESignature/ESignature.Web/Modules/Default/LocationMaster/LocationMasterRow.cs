
namespace ESignature.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[LocationMaster]")]
    [DisplayName("Location Master"), InstanceName("Location Master")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class LocationMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Location Master Id"), Column("LocationMasterID"), Identity]
        public Int32? LocationMasterId
        {
            get { return Fields.LocationMasterId[this]; }
            set { Fields.LocationMasterId[this] = value; }
        }

        [DisplayName("Location Name"), Size(100), NotNull, QuickSearch]
        public String LocationName
        {
            get { return Fields.LocationName[this]; }
            set { Fields.LocationName[this] = value; }
        }

        [DisplayName("Location Code"), Size(25), NotNull]
        public String LocationCode
        {
            get { return Fields.LocationCode[this]; }
            set { Fields.LocationCode[this] = value; }
        }

        [DisplayName("Created Date Time"), NotNull]
        public DateTime? CreatedDateTime
        {
            get { return Fields.CreatedDateTime[this]; }
            set { Fields.CreatedDateTime[this] = value; }
        }

        [DisplayName("Mark Deleted"), NotNull]
        public Boolean? MarkDeleted
        {
            get { return Fields.MarkDeleted[this]; }
            set { Fields.MarkDeleted[this] = value; }
        }

        [DisplayName("Company Group"), Column("CompanyGroupID"), NotNull, ForeignKey("[dbo].[CompanyGroup]", "CompanyGroupID"), LeftJoin("jCompanyGroup"), TextualField("CompanyGroupGroupName")]
        public Int32? CompanyGroupId
        {
            get { return Fields.CompanyGroupId[this]; }
            set { Fields.CompanyGroupId[this] = value; }
        }

        [DisplayName("Company Group Group Name"), Expression("jCompanyGroup.[GroupName]")]
        public String CompanyGroupGroupName
        {
            get { return Fields.CompanyGroupGroupName[this]; }
            set { Fields.CompanyGroupGroupName[this] = value; }
        }

        [DisplayName("Company Group Created Dete Time"), Expression("jCompanyGroup.[CreatedDeteTime]")]
        public DateTime? CompanyGroupCreatedDeteTime
        {
            get { return Fields.CompanyGroupCreatedDeteTime[this]; }
            set { Fields.CompanyGroupCreatedDeteTime[this] = value; }
        }

        [DisplayName("Company Group Mark Deleted"), Expression("jCompanyGroup.[MarkDeleted]")]
        public Boolean? CompanyGroupMarkDeleted
        {
            get { return Fields.CompanyGroupMarkDeleted[this]; }
            set { Fields.CompanyGroupMarkDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LocationMasterId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.LocationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LocationMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LocationMasterId;
            public StringField LocationName;
            public StringField LocationCode;
            public DateTimeField CreatedDateTime;
            public BooleanField MarkDeleted;
            public Int32Field CompanyGroupId;

            public StringField CompanyGroupGroupName;
            public DateTimeField CompanyGroupCreatedDeteTime;
            public BooleanField CompanyGroupMarkDeleted;
        }
    }
}
