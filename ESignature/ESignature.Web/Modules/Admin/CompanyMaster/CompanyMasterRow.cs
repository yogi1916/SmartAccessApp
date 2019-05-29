
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

    [ConnectionKey("Default"), Module("Admin"), TableName("[dbo].[CompanyMaster]")]
    [DisplayName("Company Master"), InstanceName("Company Master")]
    [ReadPermission(PermissionKeys.CompanyMaster.View)]
    [ModifyPermission(PermissionKeys.CompanyMaster.Modify)]
    [DeletePermission(PermissionKeys.CompanyMaster.Delete)]
    [LookupScript]
    public sealed class CompanyMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Master Id"), Column("CompanyMasterID"), Identity]
        public Int32? CompanyMasterId
        {
            get { return Fields.CompanyMasterId[this]; }
            set { Fields.CompanyMasterId[this] = value; }
        }

        [DisplayName("Company Name"), Size(100), NotNull, QuickSearch,LookupInclude]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Company Group"), Column("CompanyGroupID"), ForeignKey("[dbo].[CompanyGroup]", "CompanyGroupID"), LeftJoin("jCompanyGroup"), TextualField("CompanyGroupGroupName")]
        public Int32? CompanyGroupId
        {
            get { return Fields.CompanyGroupId[this]; }
            set { Fields.CompanyGroupId[this] = value; }
        }

        [DisplayName("Company Details"), NotNull]
        public String CompanyDetails
        {
            get { return Fields.CompanyDetails[this]; }
            set { Fields.CompanyDetails[this] = value; }
        }

        [DisplayName("Locations")]
        public String Locations
        {
            get { return Fields.Locations[this]; }
            set { Fields.Locations[this] = value; }
        }
       [DisplayName("Email Id"), Column("EmailID"), Size(100), NotNull]
        public String EmailId
        {
            get { return Fields.EmailId[this]; }
            set { Fields.EmailId[this] = value; }
        }

        [DisplayName("Off No"), Size(25)]
        public String OffNo
        {
            get { return Fields.OffNo[this]; }
            set { Fields.OffNo[this] = value; }
        }

        [DisplayName("Financial Year Master"), Column("FinancialYearMasterID"), ForeignKey("[dbo].[FinancialYearMaster]", "FinancialYearMasterID"), LeftJoin("jFinancialYearMaster")]
        public Int32? FinancialYearMasterId
        {
            get { return Fields.FinancialYearMasterId[this]; }
            set { Fields.FinancialYearMasterId[this] = value; }
        }

        [DisplayName("Created Date Time")]
        public DateTime? CreatedDateTime
        {
            get { return Fields.CreatedDateTime[this]; }
            set { Fields.CreatedDateTime[this] = value; }
        }

        [DisplayName("Mark Deleted")]
        public Boolean? MarkDeleted
        {
            get { return Fields.MarkDeleted[this]; }
            set { Fields.MarkDeleted[this] = value; }
        }

        [DisplayName("Smtp Server Name"), Size(100)]
        public String SmtpServerName
        {
            get { return Fields.SmtpServerName[this]; }
            set { Fields.SmtpServerName[this] = value; }
        }

        [DisplayName("Smtp Port No"), Size(100)]
        public String SmtpPortNo
        {
            get { return Fields.SmtpPortNo[this]; }
            set { Fields.SmtpPortNo[this] = value; }
        }

        [DisplayName("Smtp User Name"), Size(100)]
        public String SmtpUserName
        {
            get { return Fields.SmtpUserName[this]; }
            set { Fields.SmtpUserName[this] = value; }
        }

        [DisplayName("Smtp Password"), Size(100)]
        public String SmtpPassword
        {
            get { return Fields.SmtpPassword[this]; }
            set { Fields.SmtpPassword[this] = value; }
        }

        [DisplayName("Is Audit Trail")]
        public Boolean? IsAuditTrail
        {
            get { return Fields.IsAuditTrail[this]; }
            set { Fields.IsAuditTrail[this] = value; }
        }

        [DisplayName("Isenablessl")]
        public Boolean? Isenablessl
        {
            get { return Fields.Isenablessl[this]; }
            set { Fields.Isenablessl[this] = value; }
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

        [DisplayName("Financial Year Master Start Date"), Expression("jFinancialYearMaster.[StartDate]")]
        public DateTime? FinancialYearMasterStartDate
        {
            get { return Fields.FinancialYearMasterStartDate[this]; }
            set { Fields.FinancialYearMasterStartDate[this] = value; }
        }

        [DisplayName("Financial Year Master End Date"), Expression("jFinancialYearMaster.[EndDate]")]
        public DateTime? FinancialYearMasterEndDate
        {
            get { return Fields.FinancialYearMasterEndDate[this]; }
            set { Fields.FinancialYearMasterEndDate[this] = value; }
        }

        [DisplayName("Financial Year Master Created Dete Time"), Expression("jFinancialYearMaster.[CreatedDeteTime]")]
        public DateTime? FinancialYearMasterCreatedDeteTime
        {
            get { return Fields.FinancialYearMasterCreatedDeteTime[this]; }
            set { Fields.FinancialYearMasterCreatedDeteTime[this] = value; }
        }

        [DisplayName("Financial Year Master Mark Deleted"), Expression("jFinancialYearMaster.[MarkDeleted]")]
        public Boolean? FinancialYearMasterMarkDeleted
        {
            get { return Fields.FinancialYearMasterMarkDeleted[this]; }
            set { Fields.FinancialYearMasterMarkDeleted[this] = value; }
        }

        [DisplayName("Financial Year Master Company Group Id"), Expression("jFinancialYearMaster.[CompanyGroupID]")]
        public Int32? FinancialYearMasterCompanyGroupId
        {
            get { return Fields.FinancialYearMasterCompanyGroupId[this]; }
            set { Fields.FinancialYearMasterCompanyGroupId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CompanyMasterId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompanyMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CompanyMasterId;
            public StringField CompanyName;
            public Int32Field CompanyGroupId;
            public StringField CompanyDetails;
            public StringField Locations;
            public StringField EmailId;
            public StringField OffNo;
            public Int32Field FinancialYearMasterId;
            public DateTimeField CreatedDateTime;
            public BooleanField MarkDeleted;
            public StringField SmtpServerName;
            public StringField SmtpPortNo;
            public StringField SmtpUserName;
            public StringField SmtpPassword;
            public BooleanField IsAuditTrail;
            public BooleanField Isenablessl;

            public StringField CompanyGroupGroupName;
            public DateTimeField CompanyGroupCreatedDeteTime;
            public BooleanField CompanyGroupMarkDeleted;

            public DateTimeField FinancialYearMasterStartDate;
            public DateTimeField FinancialYearMasterEndDate;
            public DateTimeField FinancialYearMasterCreatedDeteTime;
            public BooleanField FinancialYearMasterMarkDeleted;
            public Int32Field FinancialYearMasterCompanyGroupId;
        }
    }
}
