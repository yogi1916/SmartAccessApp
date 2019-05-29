
namespace ESignature.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[SubDepartments]")]
    [DisplayName("Sub Departments"), InstanceName("Sub Departments")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class SubDepartmentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sub Department Id"), Column("SubDepartmentID"), Identity]
        public Int32? SubDepartmentId
        {
            get { return Fields.SubDepartmentId[this]; }
            set { Fields.SubDepartmentId[this] = value; }
        }

        [DisplayName("Sub Department Name"), Size(100), NotNull, QuickSearch]
        public String SubDepartmentName
        {
            get { return Fields.SubDepartmentName[this]; }
            set { Fields.SubDepartmentName[this] = value; }
        }

        [DisplayName("Sub Department Code"), Size(100), NotNull]
        public String SubDepartmentCode
        {
            get { return Fields.SubDepartmentCode[this]; }
            set { Fields.SubDepartmentCode[this] = value; }
        }

        [DisplayName("Department"), Column("DepartmentID"), ForeignKey("[dbo].[Departments]", "DepartmentID"), LeftJoin("jDepartment"), TextualField("DepartmentDepartmentName")]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
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

        [DisplayName("Department Department Name"), Expression("jDepartment.[DepartmentName]")]
        public String DepartmentDepartmentName
        {
            get { return Fields.DepartmentDepartmentName[this]; }
            set { Fields.DepartmentDepartmentName[this] = value; }
        }

        [DisplayName("Department Department Code"), Expression("jDepartment.[DepartmentCode]")]
        public String DepartmentDepartmentCode
        {
            get { return Fields.DepartmentDepartmentCode[this]; }
            set { Fields.DepartmentDepartmentCode[this] = value; }
        }

        [DisplayName("Department Company Location Id"), Expression("jDepartment.[CompanyLocationID]")]
        public Int32? DepartmentCompanyLocationId
        {
            get { return Fields.DepartmentCompanyLocationId[this]; }
            set { Fields.DepartmentCompanyLocationId[this] = value; }
        }

        [DisplayName("Department Division Id"), Expression("jDepartment.[DivisionID]")]
        public Int32? DepartmentDivisionId
        {
            get { return Fields.DepartmentDivisionId[this]; }
            set { Fields.DepartmentDivisionId[this] = value; }
        }

        [DisplayName("Department Details"), Expression("jDepartment.[Details]")]
        public String DepartmentDetails
        {
            get { return Fields.DepartmentDetails[this]; }
            set { Fields.DepartmentDetails[this] = value; }
        }

        [DisplayName("Department Created Date Time"), Expression("jDepartment.[CreatedDateTime]")]
        public DateTime? DepartmentCreatedDateTime
        {
            get { return Fields.DepartmentCreatedDateTime[this]; }
            set { Fields.DepartmentCreatedDateTime[this] = value; }
        }

        [DisplayName("Department Mark Deleted"), Expression("jDepartment.[MarkDeleted]")]
        public Boolean? DepartmentMarkDeleted
        {
            get { return Fields.DepartmentMarkDeleted[this]; }
            set { Fields.DepartmentMarkDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SubDepartmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SubDepartmentName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SubDepartmentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SubDepartmentId;
            public StringField SubDepartmentName;
            public StringField SubDepartmentCode;
            public Int32Field DepartmentId;
            public StringField Details;
            public DateTimeField CreatedDateTime;
            public BooleanField MarkDeleted;

            public StringField DepartmentDepartmentName;
            public StringField DepartmentDepartmentCode;
            public Int32Field DepartmentCompanyLocationId;
            public Int32Field DepartmentDivisionId;
            public StringField DepartmentDetails;
            public DateTimeField DepartmentCreatedDateTime;
            public BooleanField DepartmentMarkDeleted;
        }
    }
}
