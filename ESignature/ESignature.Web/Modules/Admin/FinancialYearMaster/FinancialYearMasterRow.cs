
namespace ESignature.Admin.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Admin"), TableName("[dbo].[FinancialYearMaster]")]
    [DisplayName("Financial Year Master"), InstanceName("Financial Year Master")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class FinancialYearMasterRow : Row, IIdRow
    {
        [DisplayName("Financial Year Master Id"), Column("FinancialYearMasterID"), Identity]
        public Int32? FinancialYearMasterId
        {
            get { return Fields.FinancialYearMasterId[this]; }
            set { Fields.FinancialYearMasterId[this] = value; }
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
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
            get { return Fields.FinancialYearMasterId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FinancialYearMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FinancialYearMasterId;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public DateTimeField CreatedDeteTime;
            public BooleanField MarkDeleted;
            public Int32Field CompanyGroupId;

            public StringField CompanyGroupGroupName;
            public DateTimeField CompanyGroupCreatedDeteTime;
            public BooleanField CompanyGroupMarkDeleted;
        }
    }
}
