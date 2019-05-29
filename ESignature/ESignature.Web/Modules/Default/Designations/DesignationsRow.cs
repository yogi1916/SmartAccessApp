
namespace ESignature.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Designations]")]
    [DisplayName("Designations"), InstanceName("Designations")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class DesignationsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Designation Id"), Column("DesignationID"), Identity]
        public Int32? DesignationId
        {
            get { return Fields.DesignationId[this]; }
            set { Fields.DesignationId[this] = value; }
        }

        [DisplayName("Designation Name"), Size(100), NotNull, QuickSearch]
        public String DesignationName
        {
            get { return Fields.DesignationName[this]; }
            set { Fields.DesignationName[this] = value; }
        }

        [DisplayName("Designation Code"), Size(100), NotNull]
        public String DesignationCode
        {
            get { return Fields.DesignationCode[this]; }
            set { Fields.DesignationCode[this] = value; }
        }

        [DisplayName("Company Master"), Column("CompanyMasterID"), NotNull, ForeignKey("[dbo].[CompanyMaster]", "CompanyMasterID"), LeftJoin("jCompanyMaster"), TextualField("CompanyMasterCompanyName")]
        public Int32? CompanyMasterId
        {
            get { return Fields.CompanyMasterId[this]; }
            set { Fields.CompanyMasterId[this] = value; }
        }

        [DisplayName("Details")]
        public String Details
        {
            get { return Fields.Details[this]; }
            set { Fields.Details[this] = value; }
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

        [DisplayName("Company Master Company Name"), Expression("jCompanyMaster.[CompanyName]")]
        public String CompanyMasterCompanyName
        {
            get { return Fields.CompanyMasterCompanyName[this]; }
            set { Fields.CompanyMasterCompanyName[this] = value; }
        }

        [DisplayName("Company Master Company Group Id"), Expression("jCompanyMaster.[CompanyGroupID]")]
        public Int32? CompanyMasterCompanyGroupId
        {
            get { return Fields.CompanyMasterCompanyGroupId[this]; }
            set { Fields.CompanyMasterCompanyGroupId[this] = value; }
        }

        [DisplayName("Company Master Company Details"), Expression("jCompanyMaster.[CompanyDetails]")]
        public String CompanyMasterCompanyDetails
        {
            get { return Fields.CompanyMasterCompanyDetails[this]; }
            set { Fields.CompanyMasterCompanyDetails[this] = value; }
        }

        [DisplayName("Company Master Locations"), Expression("jCompanyMaster.[Locations]")]
        public String CompanyMasterLocations
        {
            get { return Fields.CompanyMasterLocations[this]; }
            set { Fields.CompanyMasterLocations[this] = value; }
        }

        [DisplayName("Company Master Email Id"), Expression("jCompanyMaster.[EmailID]")]
        public String CompanyMasterEmailId
        {
            get { return Fields.CompanyMasterEmailId[this]; }
            set { Fields.CompanyMasterEmailId[this] = value; }
        }

        [DisplayName("Company Master Off No"), Expression("jCompanyMaster.[OffNo]")]
        public String CompanyMasterOffNo
        {
            get { return Fields.CompanyMasterOffNo[this]; }
            set { Fields.CompanyMasterOffNo[this] = value; }
        }

        [DisplayName("Company Master Financial Year Master Id"), Expression("jCompanyMaster.[FinancialYearMasterID]")]
        public Int32? CompanyMasterFinancialYearMasterId
        {
            get { return Fields.CompanyMasterFinancialYearMasterId[this]; }
            set { Fields.CompanyMasterFinancialYearMasterId[this] = value; }
        }

        [DisplayName("Company Master Created Date Time"), Expression("jCompanyMaster.[CreatedDateTime]")]
        public DateTime? CompanyMasterCreatedDateTime
        {
            get { return Fields.CompanyMasterCreatedDateTime[this]; }
            set { Fields.CompanyMasterCreatedDateTime[this] = value; }
        }

        [DisplayName("Company Master Mark Deleted"), Expression("jCompanyMaster.[MarkDeleted]")]
        public Boolean? CompanyMasterMarkDeleted
        {
            get { return Fields.CompanyMasterMarkDeleted[this]; }
            set { Fields.CompanyMasterMarkDeleted[this] = value; }
        }

        [DisplayName("Company Master Smtp Server Name"), Expression("jCompanyMaster.[SmtpServerName]")]
        public String CompanyMasterSmtpServerName
        {
            get { return Fields.CompanyMasterSmtpServerName[this]; }
            set { Fields.CompanyMasterSmtpServerName[this] = value; }
        }

        [DisplayName("Company Master Smtp Port No"), Expression("jCompanyMaster.[SmtpPortNo]")]
        public String CompanyMasterSmtpPortNo
        {
            get { return Fields.CompanyMasterSmtpPortNo[this]; }
            set { Fields.CompanyMasterSmtpPortNo[this] = value; }
        }

        [DisplayName("Company Master Smtp User Name"), Expression("jCompanyMaster.[SmtpUserName]")]
        public String CompanyMasterSmtpUserName
        {
            get { return Fields.CompanyMasterSmtpUserName[this]; }
            set { Fields.CompanyMasterSmtpUserName[this] = value; }
        }

        [DisplayName("Company Master Smtp Password"), Expression("jCompanyMaster.[SmtpPassword]")]
        public String CompanyMasterSmtpPassword
        {
            get { return Fields.CompanyMasterSmtpPassword[this]; }
            set { Fields.CompanyMasterSmtpPassword[this] = value; }
        }

        [DisplayName("Company Master Is Audit Trail"), Expression("jCompanyMaster.[IsAuditTrail]")]
        public Boolean? CompanyMasterIsAuditTrail
        {
            get { return Fields.CompanyMasterIsAuditTrail[this]; }
            set { Fields.CompanyMasterIsAuditTrail[this] = value; }
        }

        [DisplayName("Company Master Isenablessl"), Expression("jCompanyMaster.[Isenablessl]")]
        public Boolean? CompanyMasterIsenablessl
        {
            get { return Fields.CompanyMasterIsenablessl[this]; }
            set { Fields.CompanyMasterIsenablessl[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DesignationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DesignationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DesignationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DesignationId;
            public StringField DesignationName;
            public StringField DesignationCode;
            public Int32Field CompanyMasterId;
            public StringField Details;
            public DateTimeField CreatedDateTime;
            public BooleanField MarkDeleted;

            public StringField CompanyMasterCompanyName;
            public Int32Field CompanyMasterCompanyGroupId;
            public StringField CompanyMasterCompanyDetails;
            public StringField CompanyMasterLocations;
            public StringField CompanyMasterEmailId;
            public StringField CompanyMasterOffNo;
            public Int32Field CompanyMasterFinancialYearMasterId;
            public DateTimeField CompanyMasterCreatedDateTime;
            public BooleanField CompanyMasterMarkDeleted;
            public StringField CompanyMasterSmtpServerName;
            public StringField CompanyMasterSmtpPortNo;
            public StringField CompanyMasterSmtpUserName;
            public StringField CompanyMasterSmtpPassword;
            public BooleanField CompanyMasterIsAuditTrail;
            public BooleanField CompanyMasterIsenablessl;
        }
    }
}
