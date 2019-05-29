
namespace ESignature.Default.Entities
{
    using ESignature.DAL;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SmartCommandControl.Northwind.Lookups;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Departments]")]
    [DisplayName("Departments"), InstanceName("Departments")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class DepartmentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Department Id"), Column("DepartmentID"), Identity]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Department Name"), Size(100), NotNull, QuickSearch]
        public String DepartmentName
        {
            get { return Fields.DepartmentName[this]; }
            set { Fields.DepartmentName[this] = value; }
        }

        [DisplayName("Department Code"), Size(100), NotNull]
        public String DepartmentCode
        {
            get { return Fields.DepartmentCode[this]; }
            set { Fields.DepartmentCode[this] = value; }
        }

        [DisplayName("Company Location"), Column("CompanyLocationID"), NotNull, ForeignKey("[dbo].[CompanyLocations]", "CompanyLocationID"), LeftJoin("jCompanyLocation")]        
        public Int32? CompanyLocationId
        {
            get { return Fields.CompanyLocationId[this]; }
            set { Fields.CompanyLocationId[this] = value; }
        }

        [DisplayName("Division"), Column("DivisionID"), ForeignKey("[dbo].[DivisionMaster]", "DivisionID"), LeftJoin("jDivision"), TextualField("DivisionDivisionName")]
        public Int32? DivisionId
        {
            get { return Fields.DivisionId[this]; }
            set { Fields.DivisionId[this] = value; }
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

        [DisplayName("Company Location Company Master Id"), Expression("jCompanyLocation.[CompanyMasterID]")]
        public Int32? CompanyLocationCompanyMasterId
        {
            get { return Fields.CompanyLocationCompanyMasterId[this]; }
            set { Fields.CompanyLocationCompanyMasterId[this] = value; }
        }

        [DisplayName("Company Location Location Master Id"), Expression("jCompanyLocation.[LocationMasterID]")]
        public Int32? CompanyLocationLocationMasterId
        {
            get { return Fields.CompanyLocationLocationMasterId[this]; }
            set { Fields.CompanyLocationLocationMasterId[this] = value; }
        }

        [DisplayName("Company Location Created Date Time"), Expression("jCompanyLocation.[CreatedDateTime]")]
        public DateTime? CompanyLocationCreatedDateTime
        {
            get { return Fields.CompanyLocationCreatedDateTime[this]; }
            set { Fields.CompanyLocationCreatedDateTime[this] = value; }
        }

        [DisplayName("Company Location Mark Deleted"), Expression("jCompanyLocation.[MarkDeleted]")]
        public Boolean? CompanyLocationMarkDeleted
        {
            get { return Fields.CompanyLocationMarkDeleted[this]; }
            set { Fields.CompanyLocationMarkDeleted[this] = value; }
        }

        [DisplayName("Division Division Name"), Expression("jDivision.[DivisionName]")]
        public String DivisionDivisionName
        {
            get { return Fields.DivisionDivisionName[this]; }
            set { Fields.DivisionDivisionName[this] = value; }
        }

        [DisplayName("Division Division Code"), Expression("jDivision.[DivisionCode]")]
        public String DivisionDivisionCode
        {
            get { return Fields.DivisionDivisionCode[this]; }
            set { Fields.DivisionDivisionCode[this] = value; }
        }

        [DisplayName("Division Company Master Id"), Expression("jDivision.[CompanyMasterID]")]
        public Int32? DivisionCompanyMasterId
        {
            get { return Fields.DivisionCompanyMasterId[this]; }
            set { Fields.DivisionCompanyMasterId[this] = value; }
        }

        [DisplayName("Division Details"), Expression("jDivision.[Details]")]
        public String DivisionDetails
        {
            get { return Fields.DivisionDetails[this]; }
            set { Fields.DivisionDetails[this] = value; }
        }

        [DisplayName("Division Created Date Time"), Expression("jDivision.[CreatedDateTime]")]
        public DateTime? DivisionCreatedDateTime
        {
            get { return Fields.DivisionCreatedDateTime[this]; }
            set { Fields.DivisionCreatedDateTime[this] = value; }
        }

        [DisplayName("Division Mark Deleted"), Expression("jDivision.[MarkDeleted]")]
        public Boolean? DivisionMarkDeleted
        {
            get { return Fields.DivisionMarkDeleted[this]; }
            set { Fields.DivisionMarkDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DepartmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DepartmentName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DepartmentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DepartmentId;
            public StringField DepartmentName;
            public StringField DepartmentCode;
            public Int32Field CompanyLocationId;
            public Int32Field DivisionId;
            public StringField Details;
            public DateTimeField CreatedDateTime;
            public BooleanField MarkDeleted;

            public Int32Field CompanyLocationCompanyMasterId;
            public Int32Field CompanyLocationLocationMasterId;
            public DateTimeField CompanyLocationCreatedDateTime;
            public BooleanField CompanyLocationMarkDeleted;

            public StringField DivisionDivisionName;
            public StringField DivisionDivisionCode;
            public Int32Field DivisionCompanyMasterId;
            public StringField DivisionDetails;
            public DateTimeField DivisionCreatedDateTime;
            public BooleanField DivisionMarkDeleted;
        }
    }
}
