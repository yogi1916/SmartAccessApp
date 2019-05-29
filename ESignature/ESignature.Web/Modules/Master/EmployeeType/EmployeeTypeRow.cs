
namespace ESignature.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[EmployeeType]")]
    [DisplayName("Employee Type"), InstanceName("Employee Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class EmployeeTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Type Id"), Column("EmployeeTypeID"), Identity]
        public Int32? EmployeeTypeId
        {
            get { return Fields.EmployeeTypeId[this]; }
            set { Fields.EmployeeTypeId[this] = value; }
        }

        [DisplayName("Employee Type Name"), Size(100), NotNull, QuickSearch]
        public String EmployeeTypeName
        {
            get { return Fields.EmployeeTypeName[this]; }
            set { Fields.EmployeeTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmployeeTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeTypeId;
            public StringField EmployeeTypeName;
        }
    }
}
